import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { readReissueList,updateRissueList } from "../repository";
import Table from "./Table";
import { TicketIssueInterface } from "../type";
import Pagination from "../../../../componenets/Pagination";

export default function Main(props: {
    onClose: any,
}) {

    const [RissueList, setRissueList] = useState<TicketIssueInterface[]>([]);
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

    const fetchReissueList = async (page?: number) => {
        const data: any = await readReissueList({
            page: page ?? additionalData.pagination.page,
            status: "yes"
          });
        setRissueList(data);
        setAdditionalData(await PaginationManager.getData());
    };
    useEffect(() => {
      fetchReissueList(additionalData.pagination.page);
    }, []);


    const onClickSubmit = async () => {
        const newArray = []

        for (let i = 0; i < RissueList.length; i++) {
            if (RissueList[i].checked) newArray.push(RissueList[i])
        }
        const update = await updateRissueList(newArray)
        if (update) {
            // props.onClose();
            fetchReissueList()
        }
    }

    return (
        <FullScreenModal
            buttonName="submit"
            handleClick={onClickSubmit}
            title="Edit"
            onClose={props.onClose}
        >
            <div className="overflow-auto">
                <Table
                    snoBase={additionalData.pagination.sno_base}
                    ticketIssueList={RissueList}
                    onChange={(list) => setRissueList(list)}
                    onClickAdd={()=>""}
                    actionType="edit"
                />
                <Pagination
                    data={additionalData}
                    onPageChange={(e) => {
                        fetchReissueList(e);
                    }}
                />
            </div>
        </FullScreenModal>
    );
}
