import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import IncentiveTable from './Table'
import { createIncentive, readIncentiveList, updateIncentiveList } from "../repository";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
export default function Main(props: { setModalName: any }) {
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
      const [status, setStatus] = useState("yes");
      const [data, setData] = useState<any>({ job_order_list: [] });
      const [updateIncentive, setUpdateIncentive] = useState<any>({
        job_order_list: [
          {
            id: 0,
            manager_incentive: 0,
            staff_incentive: 0,
          },
        ],
      });
    const [IncentiveList, setIncentiveList] = useState<any>()
    const handleClick =async () => {
      // console.log("fgvfh");   // Only Dev
      await updateIncentiveList(IncentiveList);
      // await fetchIncentiveList(status);
      props.setModalName('')
    };
    const fetchIncentiveList = async (value: string, page?: number) => {
        const data = await readIncentiveList(value, {
          page: page ?? additionalData.pagination.page,
          status: "yes",
        });
        if (data) {
            setIncentiveList(data);
        }
        setAdditionalData(await PaginationManager.getData());
      };
    useEffect(() => {
        fetchIncentiveList(status, additionalData.pagination.page);
      }, [status]);

      // const onClickUpdate =()=>{
      //   console.log("on click update")
      // }
    
    return (
        <>
            <FullScreenModal
                title="Edit Incentives"
                handleClick={() => handleClick()}
                onClose={() => props.setModalName('')}
            >
                <IncentiveTable
                    snoBase={1}
                    incentiveList={IncentiveList}
                    setIncentiveList={setIncentiveList}
                    updateIncentive={updateIncentive}
                    setUpdateIncentive={setUpdateIncentive}
                    data={data}
                    setData={setData}
                    onClick={handleClick}
                    onChange={(value) => setIncentiveList(value)}
                />


            </FullScreenModal>
        </>
    )
}