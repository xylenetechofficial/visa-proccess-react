import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import ConsulateChargesTable from "./Table";
<<<<<<< Updated upstream
=======
import { ConsulateChargesInterface } from "../type";
import { readConsulateChargesList } from "../repository";
>>>>>>> Stashed changes


export default function Main() {

<<<<<<< Updated upstream
    const [searchQuery, setSearchQuery] = useState("");

=======
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


>>>>>>> Stashed changes
    return(
        <>
        <CustomNavbarV3
        pageName="Consulate Charges"
        searchFunction={(query) => setSearchQuery(query)}  
      />

<<<<<<< Updated upstream
<ConsulateChargesTable />
=======
<ConsulateChargesTable
consulateChargesList={consulateChargesList}
/>
>>>>>>> Stashed changes
        
        </>
    )
}