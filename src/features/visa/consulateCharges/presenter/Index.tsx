import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import ConsulateChargesTable from "./Table";
import { ConsulateChargesInterface } from "../type";
import { readConsulateChargesList } from "../repository";


export default function Main() {

    const [consulateChargesList, setConsulateChargesList] = useState<ConsulateChargesInterface[]>([])

    const [searchQuery, setSearchQuery] = useState("");

    const fetchConsulateChargesList = async () => {
        const data = await readConsulateChargesList();
        console.log(data);
            setConsulateChargesList(data);  
    }

    useEffect(() => {
        fetchConsulateChargesList()
    }, [])


    return(
        <>
        <CustomNavbarV3
        pageName="Consulate Charges"
        searchFunction={(query) => setSearchQuery(query)}  
      />

<ConsulateChargesTable
consulateChargesList={consulateChargesList}
/>
        
        </>
    )
}