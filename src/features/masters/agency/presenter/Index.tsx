import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import AgencyTable from "./AgencyTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { AgencyInterface } from "../type";
import { deleteAgency, readAgencyList } from "../repository";
import Pagination from "../../../../componenets/Pagination";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { useUserAuth } from "../../../context/UserAuthContext";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [agencyList, setAgencyList] = useState<AgencyInterface[]>([]);
  const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
    {
      pagination: {
        page: 1,
        page_count: 1,
        item_count: 0,
        sno_base: 0,
      },
    }
  );
  const { authPermissionList } = useUserAuth();

  const [editAgency, setEditAgency] = useState<AgencyInterface>(
    {} as AgencyInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [dataFiltered, setDataFiltered] = useState<AgencyInterface[]>([]);
  const filterData = (query: string, data: AgencyInterface[]) => {
    if (!query) {
      setDataFiltered(data);
      return;
    } else {
      const d = data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
      setDataFiltered(d);
      return;
    }
  };

  const searchFunction = async (query: string) => {
    filterData(query, agencyList);
  };

  const onClickEdit = (agency: AgencyInterface) => {
    setEditAgency(agency);
    console.log("onClickEdit"); // Only Dev
    console.log(agency); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (agency: AgencyInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && agency.id) {
      await deleteAgency(agency.id);
      fetchAgencyList();
    }
  };

  // useEffect(() => {
  // }, [editAgency, modalName])

  const fetchAgencyList = async (page?: number) => {
    const res = await readAgencyList(
      true,
      page ?? additionalData.pagination.page
    );
    setAgencyList(res);
    setAdditionalData(await PaginationManager.getData());
    filterData("", res);
  };

  useEffect(() => {
    fetchAgencyList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3 pageName="Agency" searchFunction={searchFunction} />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* Add */}
        {authPermissionList.url_has("create") ? (
          <GreenButton
            text={"Add +"}
            onClick={() => {
              setModalName("create");
            }}
          />
        ) : (
          ""
        )}
      </CardHeader>

      {/*  agency stable */}
      <AgencyTable
        snoBase={additionalData.pagination.sno_base}
        agencyList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchAgencyList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchAgencyList={fetchAgencyList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          agency={editAgency}
          onClose={() => setModalName("")}
          fetchAgencyList={fetchAgencyList}
        />
      )}
    </div>
  );
}
