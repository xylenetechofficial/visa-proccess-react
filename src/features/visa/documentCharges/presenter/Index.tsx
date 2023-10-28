import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import DocumentChargesTable from "./Table";
import { DocumentChargesInterface } from "../type";
import { createDocumentCharges, readDocumentChargesList } from "../repository";
import { BlueButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

export default function Main() {
  const [documentChargesList, setDocumentChargesList] = useState<
    DocumentChargesInterface[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const fetchDocumentChargesList = async (page?: number) => {
    const data = await readDocumentChargesList(page ?? 1);
    console.log(data);
    setDocumentChargesList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  const createDocumentChargesList = async (
    data_list: DocumentChargesInterface[]
  ) => {
    const new_list = [];
    for (let index = 0; index < data_list.length; index++) {
      const element = data_list[index];

      new_list.push(element);
    }

    const data: any = await createDocumentCharges(new_list);
    console.log(data, "crete");
    fetchDocumentChargesList();
  };

  useEffect(() => {
    fetchDocumentChargesList(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Document Charges"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <DocumentChargesTable
       snoBase={additionalData.pagination.sno_base}
        documentChargesList={documentChargesList}
        onChange={(value) => setDocumentChargesList(value)}
      />
<br />
      <BlueButton
        text="Submit"
        onClick={() => {
          createDocumentChargesList(documentChargesList);
        }}
      />
      <br /><br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchDocumentChargesList(e);
        }}
      />
    </div>
  );
}
