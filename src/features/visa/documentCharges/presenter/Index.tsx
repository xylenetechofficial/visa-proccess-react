import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import DocumentChargesTable from "./Table";
import { DocumentChargesInterface } from "../type";
import { readDocumentChargesList } from "../repository";


export default function Main() {
  const [documentChargesList, setDocumentChargesList] = useState<DocumentChargesInterface[]>([])
    const [searchQuery, setSearchQuery] = useState("");

    const fetchDocumentChargesList = async () => {
      const data = await readDocumentChargesList();
      console.log(data);
      setDocumentChargesList(data);  
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
        />
        </>
    )
}