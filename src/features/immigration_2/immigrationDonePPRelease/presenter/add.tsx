import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { readImmigrationDonePPReleaseList, createImmigrationDonePPRelease } from "../repository";
import ImmigrationDOnePPReleaseTable from "./Table";
import { ImmigrationDonePPReleaseInterface } from "../type";
import Pagination from "../../../../componenets/Pagination";

export default function Main(props: {
    onClose: any,
}) {

    const [immigrationDonePPReleaseList, setImmigrationDonePPReleaseList] = useState<ImmigrationDonePPReleaseInterface[]>([]);
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

    const fetchImmigrationDoneList = async (page?: number) => {
        const data: any = await readImmigrationDonePPReleaseList({
            page: page ?? 1,
            status: "no"
          });
        setImmigrationDonePPReleaseList(data);
        setAdditionalData(await PaginationManager.getData());
    };
    useEffect(() => {
        fetchImmigrationDoneList(additionalData.pagination.page);
    }, []);


    const onClickSubmit = async () => {
        const newArray = []

        for (let i = 0; i < immigrationDonePPReleaseList.length; i++) {
            if (immigrationDonePPReleaseList[i].checked) newArray.push(immigrationDonePPReleaseList[i])
        }
        const update = await createImmigrationDonePPRelease(newArray)
        if (update) {
            // props.onClose();
            fetchImmigrationDoneList()
        }
    }

    return (
        <FullScreenModal
            buttonName="submit"
            handleClick={onClickSubmit}
            title="Add"
            onClose={props.onClose}
        >
            <div className="overflow-auto">
                <ImmigrationDOnePPReleaseTable
                    snoBase={additionalData.pagination.sno_base}
                    RcPPRecieved_list={immigrationDonePPReleaseList}
                    onChange={(list) => setImmigrationDonePPReleaseList(list)}
                    actionType="add"
                />
                <Pagination
                    data={additionalData}
                    onPageChange={(e) => {
                        fetchImmigrationDoneList(e);
                    }}
                />
            </div>
        </FullScreenModal>
    );
}
