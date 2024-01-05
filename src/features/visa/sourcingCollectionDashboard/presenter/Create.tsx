import {
  createSourcingCollectionDashboardCandidate,
  readSourcingCollectionDashboardCandidate,
  updateSourcingCollectionDashboardCandidate,
} from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import {
  Src_Col_Dash_CandidateInterface,
  Src_Col_Dash_JobOrderInterface,
} from "../type";

import CandidateTable from "./CandidateTable";

export default function Main(props: {
  onClose: () => void;
  currentElement: Src_Col_Dash_JobOrderInterface;
}) {
  async function onClickAdd() {
    const newArray = [];
    for (let i = 0; i < candidateList.length; i++) {
      if (candidateList[i].checked) {
        newArray.push(candidateList[i]);
      }
    }
    // call create
    const res = await createSourcingCollectionDashboardCandidate(newArray);

    if (res.code != 201) {
      return;
    }
    fetchSourcingCollectionDashboardCandidate();
    props.onClose();
  }

  const [candidateList, setCandidateList] = useState<
    Src_Col_Dash_CandidateInterface[]
  >([]);
  const fetchSourcingCollectionDashboardCandidate = async () => {
    const data = await readSourcingCollectionDashboardCandidate(
      props.currentElement.id ?? 0,
      "no"
    );
    if (data) {
      setCandidateList(data);
    }
  };
  useEffect(() => {
    fetchSourcingCollectionDashboardCandidate();
  }, []);

  // unset function

  return (
    <FullScreenModal
      buttonName="Add"
      handleClick={onClickAdd}
      title="Add Sourcing Collection Dashboard"
      onClose={props.onClose}
    >
      <CandidateTable
        candidateList={candidateList}
        onChange={(ele) => setCandidateList(ele)}
      />
    </FullScreenModal>
  );
}
