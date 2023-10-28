import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import VisaTypeTable from "./VisaTypeTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { VisaTypeInterface } from "../type";
import { deleteVisaType, readVisaTypeList } from "../repository";
import Pagination from "../../../../componenets/Pagination";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [visaTypeList, setVisaTypeList] = useState<VisaTypeInterface[]>([]);
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

  const [editVisaType, setEditVisaType] = useState<VisaTypeInterface>(
    {} as VisaTypeInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: VisaTypeInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, visaTypeList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (visaType: VisaTypeInterface) => {
    setEditVisaType(visaType);
    console.log("onClickEdit"); // Only Dev
    console.log(visaType); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (visaType: VisaTypeInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && visaType.id) {
      await deleteVisaType(visaType.id);
      fetchVisaTypeList();
    }
  };

  // useEffect(() => {
  // }, [editVisaType, modalName])

  const fetchVisaTypeList = async (page?: number) => {
    const res = await readVisaTypeList(true, page ?? 1);
    setVisaTypeList(res);
    setAdditionalData(await PaginationManager.getData());

  };
  useEffect(() => {
    fetchVisaTypeList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Visa Type"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        />
        {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add VisaType +
                </Button> */}
        {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
      </CardHeader>

      {/*  visaType stable */}
      <VisaTypeTable
        snoBase={additionalData.pagination.sno_base}
        visaTypeList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          fetchVisaTypeList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchVisaTypeList={fetchVisaTypeList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          visaType={editVisaType}
          onClose={() => setModalName("")}
          fetchVisaTypeList={fetchVisaTypeList}
        />
      )}
    </div>
  );
}
