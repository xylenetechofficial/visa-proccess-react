import { useEffect, useState } from "react";
import { MolForwardedTovisaDepartmentDataInterface } from "../type";
import {
    readMolForwardedTovisaDept,
    updateMolForwardedToVisaDeptData,
} from "../repository";
import Table from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
    AdditionalDataInterface,
    PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { FullScreenModal } from "../../../../componenets/Modal";


export default function Main(props: {
    onClose: () => void,

}) {
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

    const [JobOrderList, setJobOrderList] = useState<
        MolForwardedTovisaDepartmentDataInterface[]
    >([]);

    const onClickUpdate = async () => {
        const res = await updateMolForwardedToVisaDeptData(JobOrderList);
    };

    const fetchMolForwardedToDepartment = async (page?: number) => {
        const data = await readMolForwardedTovisaDept(page ?? 1,"yes");
        console.log(data);
        setJobOrderList(data);
        setAdditionalData(await PaginationManager.getData());
    };
    useEffect(() => {
        fetchMolForwardedToDepartment(additionalData.pagination.page);
    }, []);

    return (
        <>
            <FullScreenModal
                // buttonName="submit"
                handleClick={onClickUpdate}
                title="Mol Forwarded To Visa Department"
                onClose={props.onClose}
            >

                {/*  indexVisa stable */}
                <Table
                    snoBase={additionalData.pagination.sno_base}
                    jobOrderList={JobOrderList}
                    onChange={(value) => setJobOrderList(value)}
                />
                <br />
                <GreenButton onClick={onClickUpdate} text="Update" />
                <br />
                <br />

                <Pagination
                    data={additionalData}
                    onPageChange={(e) => {
                        console.log(e); // Only Dev
                        fetchMolForwardedToDepartment(e);
                    }}
                />

            </FullScreenModal>
        </>
    );
}
