import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import ConsulateChargesTable from "./Table";


export default function Main() {

    const [searchQuery, setSearchQuery] = useState("");

    return(
        <>
        <CustomNavbarV3
        pageName="Consulate Charges"
        searchFunction={(query) => setSearchQuery(query)}  
      />

<ConsulateChargesTable />
        
        </>
    )
}