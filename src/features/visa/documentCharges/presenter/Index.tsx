import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import DocumentChargesTable from "./Table";


export default function Main() {

    const [searchQuery, setSearchQuery] = useState("");
    return(
        <>
        <CustomNavbarV3
        pageName="Document Charges"
        searchFunction={(query) => setSearchQuery(query)}  
      />
        
        <DocumentChargesTable />
        </>
    )
}