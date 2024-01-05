import { useEffect, useState } from "react";
import InvoicedispatchTable from "./Table";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import {
  createInvoiceDispatch,
  readinvoiceDispatchedList,
} from "../repository";
import { AddInvoiceInterface, InvoiceDispatchInterface } from "../type";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";
import { useUserAuth } from "../../../context/UserAuthContext";
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

  /* const [editAgent, setEditAgent] = useState<AgentInterface>(
    {} as AgentInterface
  ); */

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

  const [invoiceDispatchList, setInvoiceDispatchList] = useState<
    InvoiceDispatchInterface[]
  >([]);
  const [invoiceDispatchData, setInvoiceDispatchData] = useState<
    AddInvoiceInterface[]
  >([]);
  const onCreate = async (item: AddInvoiceInterface[]) => {
    const data = await createInvoiceDispatch(item);
    if (data) {
      fetchInvoiceDispatched();
    }
  };
  const { authPermissionList } = useUserAuth();
  const fetchInvoiceDispatched = async (page?: number) => {
    const data = await readinvoiceDispatchedList({
      page: page ?? additionalData.pagination.page,
    });
    if (data) {
      setInvoiceDispatchList(data);
      filterData("", agentList);
      // setAgentList(data);

      setAdditionalData(await PaginationManager.getData());
    }
  };
  useEffect(() => {
    fetchInvoiceDispatched(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName=" Invoice Dispatch"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <InvoicedispatchTable
        snoBase={additionalData.pagination.sno_base}
        onChange={(value) => {
          setInvoiceDispatchList(value);
        }}
        invoiceDispatchList={invoiceDispatchList}
        setInvoiceDispatchData={setInvoiceDispatchData}
      />
      <br />
      {authPermissionList.url_has("create") ? (
        <GreenButton
          text="Submit"
          onClick={() => {
            onCreate(invoiceDispatchData);
          }}
        />
      ) : (
        ""
      )}
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          // console.log(e); // Only Dev
          fetchInvoiceDispatched(e);
        }}
      />
    </>
  );
}
