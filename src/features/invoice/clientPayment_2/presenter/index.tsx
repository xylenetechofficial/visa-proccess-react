import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientPaymentListPaymentAddTable from "./Table";
import CreateModal from "./Create";
import EditModal from "./Edit";
import DeleteModal from "./Delete";
import AdjustModal from "./SuspenseAdjust";
import PaymentListModal from "./PaymentList";
import CandidateListModal from "./CandidateList";

import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { ClientPaymentInterface } from "../type";
import { readClientPaymentList } from "../repository";
import { AdditionalDataInterface } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";

export default function Main() {
  const [agentList, setAgentList] = useState<AgentInterface[]>([]);
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

  const [editAgent, setEditAgent] = useState<AgentInterface>(
    {} as AgentInterface
  );

  const [searchQuery, setSearchQuery] = useState("");
  const filterData = (query: string, data: AgentInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, agentList);

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const [modal, setModal] = useState("");
  const [ClientPaymentList, setClientPaymentList] = useState<
    ClientPaymentInterface[]
  >([]);
  const [ClientPayment, setClientPayment] = useState<ClientPaymentInterface>(
    {} as ClientPaymentInterface
  );

  const fetchClientPaymentList = async (page?: number) => {
    const data = await readClientPaymentList({
      page: page ?? additionalData.pagination.page,
    });
    setClientPaymentList(data);
    filterData("", agentList);
    // setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchClientPaymentList(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="CLIENT   PAYMENT"
        refresh={() => fetchClientPaymentList()}
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      <ClientPaymentListPaymentAddTable
        snoBase={additionalData.pagination.sno_base}
        ClientPaymentList={ClientPaymentList}
        onClickCandidateList={(value) => {
          setClientPayment(value);
          setModal("candidate_list");
        }}
        onClickPaymentList={(value) => {
          setClientPayment(value);
          setModal("payment_list");
        }}
        onClickAdjust={(value) => {
          setClientPayment(value);
          setModal("adjust");
        }}
        onClickAdd={(value) => {
          setClientPayment(value);
          setModal("add");
        }}
        onClickEdit={(value) => {
          setClientPayment(value);
          setModal("edit");
        }}
        onClickDelete={(value) => {
          setClientPayment(value);
          setModal("delete");
        }}
      />
      {modal === "candidate_list" ? (
        <CandidateListModal
          onClose={() => setModal("")}
          ClientPayment={ClientPayment}
          fetchClientPaymentList={fetchClientPaymentList}
        />
      ) : (
        ""
      )}
      {modal === "payment_list" ? (
        <PaymentListModal
          onClose={() => setModal("")}
          ClientPayment={ClientPayment}
          fetchClientPaymentList={fetchClientPaymentList}
        />
      ) : (
        ""
      )}
      {modal === "adjust" ? (
        <AdjustModal
          onClose={() => setModal("")}
          ClientPayment={ClientPayment}
          fetchClientPaymentList={fetchClientPaymentList}
        />
      ) : (
        ""
      )}
      {modal === "add" ? (
        <CreateModal
          onClose={() => setModal("")}
          ClientPayment={ClientPayment}
          fetchClientPaymentList={fetchClientPaymentList}
        />
      ) : (
        ""
      )}
      {modal === "edit" ? (
        <EditModal
          onClose={() => setModal("")}
          ClientPayment={ClientPayment}
          fetchClientPaymentList={fetchClientPaymentList}
        />
      ) : (
        ""
      )}
      {modal === "delete" ? (
        <DeleteModal
          onClose={() => setModal("")}
          ClientPayment={ClientPayment}
          fetchClientPaymentList={fetchClientPaymentList}
        />
      ) : (
        ""
      )}

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchClientPaymentList(e);
        }}
      />
    </div>
  );
}
