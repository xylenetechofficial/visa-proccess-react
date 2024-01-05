import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import ClientAdditionalInvoiceTable from "./Table";
import ClientAdditionalInvoiceAdd from "./Create";
import ClientAdditionalInvoiceAddEdit from "./Edit";
import { ClientAdditionalInvoiceInterface } from "../type";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { RedButton } from "../../../../componenets/CustomButton";
import { readClientAdditionalInvoiceList } from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { AgentInterface } from "../../invoiceNumbers/type";
import Pagination from "../../../../componenets/Pagination";
import { readCompanyList } from "../../../masters/company/repository";
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
  // const dataFiltered = filterData(searchQuery, agentList);

  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const { authPermissionList } = useUserAuth();
  const [modalName, setModalName] = useState("");
  const [editinvoiceData, setEditInvoiceData] = useState({});
  const [clientAdditionalInvoiceList, setClientAdditionalInvoiceList] =
    useState<ClientAdditionalInvoiceInterface[]>([]);

  const fetchClientAdditionalInvoiceList = async (page?: number) => {
    console.log("called");
    const data = await readClientAdditionalInvoiceList({
      page: page ?? additionalData.pagination.page,
    });
    console.log(data, "dtata");
    if (data) {
      setClientAdditionalInvoiceList(data);
      filterData("", agentList);
      setAdditionalData(await PaginationManager.getData());
    }
  };
  // const createClientAdditionalInvoiceTemp = async (data: any) => {
  //   setClientAdditionalInvoiceList([...clientAdditionalInvoiceList, data]);
  // };

  const [companyList, setCompanyList] = useState<any>([]);
  const fetchCompanyList = async () => {
    setCompanyList(await readCompanyList(true));
  };
  useEffect(() => {
    fetchClientAdditionalInvoiceList();
    fetchCompanyList();
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="CLIENT ADDITIONAL INVOICE"
        searchFunction={(query) => setSearchQuery(query)}
      />
      <CardHeader>
        {authPermissionList.url_has("create") ? (
          <RedButton
            text="Add Client Additional Invoice"
            onClick={() => setModalName("create")}
          />
        ) : (
          ""
        )}
      </CardHeader>
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      <ClientAdditionalInvoiceTable
        snoBase={additionalData.pagination.sno_base}
        clientAdditionalInvoiceList={clientAdditionalInvoiceList}
        onClickEdit={(value) => setEditInvoiceData(value)}
        onChange={(value) => setClientAdditionalInvoiceList(value)}
        setModalName={setModalName}
      />
      {modalName === "create" ? (
        <ClientAdditionalInvoiceAdd
          onClose={() => setModalName("")}
          companyList={companyList}
          fetchClientAdditionalInvoiceList={fetchClientAdditionalInvoiceList}
        />
      ) : (
        ""
      )}
      {modalName === "edit" ? (
        <ClientAdditionalInvoiceAddEdit
          clientAdditionalInvoiceList={editinvoiceData}
          onClose={() => setModalName("")}
          companyList={companyList}
          fetchClientAdditionalInvoiceList={() =>
            fetchClientAdditionalInvoiceList()
          }
        />
      ) : (
        ""
      )}
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchClientAdditionalInvoiceList(e);
        }}
      />
    </div>
  );
}
