import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import AccountDashboardTable from "./Table";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import {
  AddSelectionPenaltyAfterDeploymentInterface,
  PenaltyAfterDeploymentDashboardInterface,
} from "../type";
import {
  readAccountDashboardList,
  updateAccountDashboard,
} from "../repository";
export default function Main(props: { onClose: () => void }) {
  const initialState: AddSelectionPenaltyAfterDeploymentInterface = {
    selection_list: [],
  };
  const [penaltyAfterDeployement, setPenaltyAfterDeployement] = useState<
    PenaltyAfterDeploymentDashboardInterface[]
  >([]);
  const [data, setData] =
    useState<AddSelectionPenaltyAfterDeploymentInterface>(initialState);
  const [status, setStatus] = useState("yes");
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
  const handleSubmit = async () => {
    const list: any = { selection_list: penaltyAfterDeployement };
    await updateAccountDashboard(list);
    console.log("data");
  };
  const fetchPenaltyAFterDeploymentList = async (page?: number) => {
    const data: PenaltyAfterDeploymentDashboardInterface[] =
      await readAccountDashboardList({
        page: page ?? additionalData.pagination.page,
        status: "yes",
      });

    if (data) {
      setPenaltyAfterDeployement(data);
    }
    setAdditionalData(await PaginationManager.getData());
  };

  useEffect(() => {
    fetchPenaltyAFterDeploymentList(additionalData.pagination.page);
  }, [status]);

  return (
    <>
      <FullScreenModal
        // buttonName="Update"
        handleClick={() => handleSubmit()}
        title="Edit Penalty"
        onClose={() => {
          props.onClose();
        }}
      >
        <AccountDashboardTable
          snoBase={1}
          accountDashboardList={penaltyAfterDeployement}
          setAccountDashboardList={setPenaltyAfterDeployement}
          onClickCreate={handleSubmit}
          data={data}
          setData={setData}
          setStatus={setStatus}
          fetchAccountDashboardList={fetchPenaltyAFterDeploymentList}
          onChange={(value) => {
            setPenaltyAfterDeployement(value);
          }}
        />
      </FullScreenModal>
    </>
  );
}
