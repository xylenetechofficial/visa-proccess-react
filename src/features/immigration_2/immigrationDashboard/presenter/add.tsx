import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import { readImmigrationList, createImmigrationList } from "../repository";
import ImmigrationTable from "./Table";
import { ImmigrationInterface } from "../type";
import Pagination from "../../../../componenets/Pagination";

export default function Main(props: {
    onClose: () => void,
}) {

    const [immigrationList, setImmigrationList] = useState<ImmigrationInterface[]>([]);
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
        const data: ImmigrationInterface[] = await readImmigrationList({
            page: page ?? 1,
            status: "no"
          });
        setImmigrationList(data);
        setAdditionalData(await PaginationManager.getData());
    };
    useEffect(() => {
        fetchImmigrationDoneList(additionalData.pagination.page);
    }, []);


    const onClickSubmit = async () => {
        const newArray = []

        for (let i = 0; i < immigrationList.length; i++) {
            if (immigrationList[i].checked) newArray.push(immigrationList[i])
        }
        const update = await createImmigrationList(newArray)
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
            <ImmigrationTable
                    snoBase={additionalData.pagination.sno_base}
                    list={immigrationList}
                    actionType="edit"
                    onChange={(list) => setImmigrationList(list)}
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
