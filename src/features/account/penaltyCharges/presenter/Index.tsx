import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import PenaltyChargesTable from "./Table";
import PenaltyChargesEdit from "./Edit";
import { PenaltyChargesInterface } from "../type";
import { readPenaltyChargesList, updatePenaltyChargesItem } from "../repository";

export default function Main() {
  const [penaltyChargesList, setPenaltyChargesList] = useState<
    PenaltyChargesInterface[]
  >([]);

  const [editPenaltyCharges, setEditPenaltyCharges] = useState<PenaltyChargesInterface>({} as PenaltyChargesInterface);

  const [searchQuery, setSearchQuery] = useState("");

  const [modalName, setModalName] = useState("");

  const onClickEdit = (item: PenaltyChargesInterface) => {
    // console.log("onClickEdit"); // Only Dev
    setModalName("Edit");
    setEditPenaltyCharges(item)
  };

  const fetchPenaltyChargesList = async (page?: number) => {
    const data = await readPenaltyChargesList(page);
    console.log(data);
    setPenaltyChargesList(data);
  };

  // const onClickUpdatPenaltyCharges = async (data_list: PenaltyChargesInterface[]) => {

  //   const new_list = []
  //   for (let index = 0; index < data_list.length; index++) {
  //       const element = data_list[index];
    
  //       new_list.push(element);
  //   }
  //   const res = await updatePenaltyChargesItem(new_list)
  //   fetchPenaltyChargesList()
  // }


  useEffect(() => {
    fetchPenaltyChargesList();
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Penalty Charges"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <PenaltyChargesTable 
      onClickEdit={(value) => onClickEdit(value)}
      penaltyChargesList={penaltyChargesList}
       />

      {modalName !== "Edit" ? (
        ""
      ) : (
        <PenaltyChargesEdit 
        onClose={() => setModalName("")} 
        editPenaltyCharges={editPenaltyCharges}
        setEditPenaltyCharges={setEditPenaltyCharges}
        />
      )}
    </div>
  );
}
