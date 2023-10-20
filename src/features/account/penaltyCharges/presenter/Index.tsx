import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import PenaltyChargesTable from "./Table";
import PenaltyChargesEdit from "./Edit";



export default function Main() {

    const [searchQuery, setSearchQuery] = useState("");

    const [modalName, setModalName] = useState("");

    const onClickEdit = () => {
        console.log("onClickEdit"); // Only Dev
        setModalName("Edit");
      };

    return(
        <>
        <CustomNavbarV3
        pageName="Penalty Charges"
        searchFunction={(query) => setSearchQuery(query)}  
      />


<PenaltyChargesTable 
onClickEdit={onClickEdit}
/>

{modalName !== "Edit" ? (
        ""
      ) : (
        <PenaltyChargesEdit onClose={() => setModalName("")}
         
          />
      )}

      
        </>
    )
}