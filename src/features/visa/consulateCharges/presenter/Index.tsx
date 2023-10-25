import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import ConsulateChargesTable from "./Table";
import { ConsulateChargesInterface } from "../type";
import { createConsulateCharges, readConsulateChargesList } from "../repository";

import { BlueButton } from "../../../../componenets/CustomButton";

export default function Main() {
  const [consulateChargesList, setConsulateChargesList] = useState<
    ConsulateChargesInterface[]
  >([]);




  const [searchQuery, setSearchQuery] = useState("");


  const fetchConsulateChargesList = async (page?: number) => {
    const data = await readConsulateChargesList(page);
    console.log(data);
    setConsulateChargesList(data);
  };

  const createConsulateChargesList = async (data_list: ConsulateChargesInterface[]) => {

    const new_list = []
    for (let index = 0; index < data_list.length; index++) {
        const element = data_list[index];
    
        new_list.push(element);
    }
    

    const data: any = await createConsulateCharges(new_list);
    console.log(data, "crete")
    fetchConsulateChargesList();
}

  useEffect(() => {
    fetchConsulateChargesList();
   
  }, []);

  return (
    <div className='h-screen'>
      <CustomNavbarV3
        pageName="Consulate Charges"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <ConsulateChargesTable 
      onChange={(value) => setConsulateChargesList(value)}
      consulateChargesList={consulateChargesList} />
      
      <br />
      
      <BlueButton text='Submit' onClick={() => { createConsulateChargesList(consulateChargesList) }} />

 
    </div>
  );
}
