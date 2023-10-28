import { useEffect, useState } from "react";
import CreateModal from "./Create";
// import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { SendToMofa_JobOrderInterface } from "../type";
import { readSendToMofaJobOrder } from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));
const initValue: SendToMofa_JobOrderInterface = {
  id: 0,
  jobOrderId: 0,
  jobOrderNo: "",
  company: "",
  candidateName: "",
  passportNo: "",
  passortIssuwDate: "",
  passortExpiryDate: "",
  acctualProfession: "",
  agent: "",
  rs: "",
  rm: "",
  rc: "",
  approvalDate: "",
  medicalStatus: "",
  selectionStatus: "",
  currentStatus: "",
  partyCode: "",
  visaProfession: "",
  PartyCode_VisaProfession: "",
};
export default function Main() {
  const [JobOrderList, setJobOrderList] = useState<
    SendToMofa_JobOrderInterface[]
  >([]);
  const [currentElement, setCurrentElement] =
    useState<SendToMofa_JobOrderInterface>(initValue);

  const [modalName, setModalName] = useState("");

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

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: SendToMofa_JobOrderInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.jobOrderNo.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, JobOrderList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (ele: SendToMofa_JobOrderInterface) => {
    setCurrentElement(ele);
    setModalName("edit");
  };

  const onClickAdd = async (ele: SendToMofa_JobOrderInterface) => {
    setCurrentElement(ele);
    setModalName("add");
  };

  // useEffect(() => {
  // }, [editIndexVisa, modalName])

  const fetchSendToMofaJobOrder = async (page?: number) => {
    const data = await readSendToMofaJobOrder("yes", page ?? 1);
    console.log(data);
    setJobOrderList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchSendToMofaJobOrder(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Send to mofa"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <GreenButton onClick={() => setModalName("add")} text="Add" />
      </CardHeader>

      {/*  indexVisa stable */}
      <Table
       snoBase={additionalData.pagination.sno_base}
        jobOrderList={JobOrderList}
        onClickAdd={onClickAdd}
        onClickEdit={onClickEdit}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchSendToMofaJobOrder(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "add" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchSendToMofaJobOrder={fetchSendToMofaJobOrder}
        />
      )}

      {/* Edit */}
      {/* {modalName !== "edit" ? "" :
                <EditModal
                    currentElement={currentElement}
                    onClose={() => setModalName("")}

                />} */}
    </div>
  );
}
