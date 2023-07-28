import { useEffect, useState } from 'react';
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { CustomButton2, CustomNavbarV3 } from '../../../../componenets/CustomComponents';
import { BlueButton, RedButton } from '../../../../componenets/CustomButton';
import ImmigrationTable from "./Table";
import { ImmigrationInterface } from '../type';
import { createImmigrationList, readImmigrationList } from '../repository';

import RejectModal from './RejectModal';
export default function Main() {

    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    const [searchQuery, setSearchQuery] = useState("")
    const [immigrationDataList, setImmigrationDataList] = useState<ImmigrationInterface[]>([])

    const [modalName, setModalName] = useState('')
    const [singleImmigration, setSingleImmigration] = useState<ImmigrationInterface>({} as ImmigrationInterface)


    const fetchImmigrationList = async () => {
        const data: any = await readImmigrationList();
        setImmigrationDataList(data)
    }

    function onClickReject(item: ImmigrationInterface) {
        setSingleImmigration(item)
        setModalName('reject')
    }
    const createImmigration = async (data_list: ImmigrationInterface[]) => {

        const new_list = []
        for (let index = 0; index < data_list.length; index++) {
            const element = data_list[index];
            if (!element.checked) continue

            // // if immigration_required 
            // if (element.immigration_required.toLowerCase() == 'yes')
            //     // then received_date and submission_date required
            //     if (element.immigration_received_date == '' || element.immigration_submission_date == '')
            //         continue

            new_list.push(element);
        }

        const data: any = await createImmigrationList(new_list);
        fetchImmigrationList();
    }
    useEffect(() => {
        fetchImmigrationList()
    }, [])
    return (
        <div className='h-screen'>

            <CustomNavbarV3 pageName="Immigration Dashboard" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            <ImmigrationTable
                immigrationDataList={immigrationDataList}
                // onClickEdit={() => console.log("first")}
                onClickReject={onClickReject}
                onChange={(value) => setImmigrationDataList(value)}
                fetchImmigrationList={fetchImmigrationList}
            />
            <BlueButton text='Submit' onClick={() => { createImmigration(immigrationDataList) }} />

            {/* Reject */}
            {modalName !== "reject" ? "" : <RejectModal immigration={singleImmigration} onClose={() => setModalName("")} fetchImmigrationList={fetchImmigrationList}
            />}
        </div>

    );


}
