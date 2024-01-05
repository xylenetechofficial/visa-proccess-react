import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import ClientInvoiceChargesListTable from "./Table";
import { Box, styled } from "@mui/material";
import { AddCandidateInvoiceChargesInterface } from "../type";
import {
  createCandidatesInvoiceCharges,
  readCandidateInvoiceChargessList,
} from "../repository";
import { BlueButton } from "../../../../componenets/CustomButton";
import Pagination from "../../../../componenets/Pagination";
import { AgentInterface } from "../../../masters/agent/type";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
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
  /*
  const [editAgent, setEditAgent] = useState<AgentInterface>(
    {} as AgentInterface
  );
  */

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
  const { authPermissionList } = useUserAuth();
  const [ClientInvoiceChargesList, setClientInvoiceChargesList] = useState<any>(
    []
  );
  const [data, setData] = useState<AddCandidateInvoiceChargesInterface[]>([]);

  const createCandidateCharges = async (item: any) => {
    console.log(item); // Only Dev
    await createCandidatesInvoiceCharges(item);
  };

  const fetchCandidateNumbersList = async (page?: number) => {
    const data = await readCandidateInvoiceChargessList({
      page: page ?? additionalData.pagination.page,
    });
    if (data) {
      setClientInvoiceChargesList(data);
      filterData("", agentList);
      setAdditionalData(await PaginationManager.getData());
    }
  };

  useEffect(() => {
    fetchCandidateNumbersList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName=" Invoice Charges"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchCandidateNumbersList()}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      <ClientInvoiceChargesListTable
        snoBase={additionalData.pagination.sno_base}
        ClientInvoiceChargesList={ClientInvoiceChargesList}
        onChange={(value) => setClientInvoiceChargesList(value)}
        setData={setData}
      />
      {authPermissionList.url_has("create") ? (
        <BlueButton
          text="Submit"
          onClick={() => {
            createCandidateCharges(ClientInvoiceChargesList);
          }}
        />
      ) : (
        ""
      )}
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          // console.log(e); // Only Dev
          fetchCandidateNumbersList(e);
        }}
      />
    </div>
  );
}
