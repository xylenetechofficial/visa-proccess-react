import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import PenaltyChargesTable from "./Table";
import PenaltyChargesEdit from "./Edit";
import { PenaltyChargesInterface } from "../type";
import {
  readPenaltyChargesList,
  updatePenaltyChargesItem,
} from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

export default function Main() {
  const [penaltyChargesList, setPenaltyChargesList] = useState<
    PenaltyChargesInterface[]
  >([]);

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

  const [editPenaltyCharges, setEditPenaltyCharges] =
    useState<PenaltyChargesInterface>({} as PenaltyChargesInterface);

  const [searchQuery, setSearchQuery] = useState("");

  const [modalName, setModalName] = useState("");

  const onClickEdit = (item: PenaltyChargesInterface) => {
    // console.log("onClickEdit"); // Only Dev
    setModalName("Edit");
    setEditPenaltyCharges(item);
  };

  const fetchPenaltyChargesList = async (page?: number) => {
    const data = await readPenaltyChargesList({
      page: page ?? additionalData.pagination.page,
      status: "no",
    });
    console.log(data);
    setPenaltyChargesList(data);

    setAdditionalData(await PaginationManager.getData());
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
    fetchPenaltyChargesList(additionalData.pagination.page);
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Penalty Charges"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <PenaltyChargesTable
      snoBase={additionalData.pagination.sno_base}
        onClickEdit={(value) => onClickEdit(value)}
        penaltyChargesList={penaltyChargesList}
      />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchPenaltyChargesList(e);
        }}
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
