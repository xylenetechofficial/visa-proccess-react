import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import BankTable from "./BankTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { BankInterface } from "../type";
import { deleteBank, readBankList } from "../repository";
import { readVisaAuthorisationList } from "../../visaAuthorization/repository";
import { VisaAuthorisationInterface } from "../../visaAuthorization/type";
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
  const [bankList, setBankList] = useState<BankInterface[]>([]);
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
  const [editBank, setEditBank] = useState<BankInterface>({} as BankInterface);

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [visaAuthorisationList, setVisaAuthorisationList] = useState<
    VisaAuthorisationInterface[]
  >([]);

  const fetchVisaAuthorisationList = async () => {
    const res = await readVisaAuthorisationList();
    setVisaAuthorisationList(res);
  };

  useEffect(() => {
    fetchVisaAuthorisationList();
  }, []);

  const filterData = (query: string, data: BankInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, bankList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (bank: BankInterface) => {
    setEditBank(bank);
    console.log("onClickEdit"); // Only Dev
    console.log(bank); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (bank: BankInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && bank.id) {
      await deleteBank(bank.id);
      fetchBankList();
    }
  };

  // useEffect(() => {
  // }, [editBank, modalName])

  const fetchBankList = async (page?: number) => {
    const res = await readBankList(
      true,
      page ?? additionalData.pagination.page
    );
    setBankList(res);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchBankList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Bank"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
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

      {/*  bank stable */}
      <BankTable
        snoBase={additionalData.pagination.sno_base}
        bankList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        visaAuthorisationList={visaAuthorisationList}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchBankList(e);
        }}
      />
      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchBankList={fetchBankList}
          visaAuthorisationList={visaAuthorisationList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          bank={editBank}
          onClose={() => setModalName("")}
          fetchBankList={fetchBankList}
          visaAuthorisationList={visaAuthorisationList}
        />
      )}
    </div>
  );
}
