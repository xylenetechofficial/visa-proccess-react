import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import DocumentChargesTable from "./Table";
import { DocumentChargesInterface } from "../type";
import { createDocumentCharges, readDocumentChargesList } from "../repository";
import { BlueButton } from "../../../../componenets/CustomButton";


export default function Main() {
  const [documentChargesList, setDocumentChargesList] = useState<DocumentChargesInterface[]>([])
    const [searchQuery, setSearchQuery] = useState("");

    const fetchDocumentChargesList = async () => {
      const data = await readDocumentChargesList();
      console.log(data);
      setDocumentChargesList(data);  
  }

  const createDocumentChargesList = async (data_list: DocumentChargesInterface[]) => {

    const new_list = []
    for (let index = 0; index < data_list.length; index++) {
        const element = data_list[index];
    
        new_list.push(element);
    }

    const data: any = await createDocumentCharges(new_list);
    console.log(data, "crete")
    fetchDocumentChargesList();
}

  useEffect(() => {
      fetchDocumentChargesList()
  }, [])

    return(
        <>
        <CustomNavbarV3
        pageName="Document Charges"
        searchFunction={(query) => setSearchQuery(query)}  
      />
        
        <DocumentChargesTable 
        documentChargesList={documentChargesList}
        onChange={(value) => setDocumentChargesList(value)}
        />

<BlueButton text='Submit' onClick={() => { createDocumentChargesList(documentChargesList) }} />
        </>
    )
}