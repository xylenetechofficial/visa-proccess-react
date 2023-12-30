import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { BlueButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { PartyCodeInterface, SendToActualMofaEntryInterface } from "../type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { createSendToActualMofaEntryList, readPartyCodeList, readSendToActualMofaEntryList } from "../repository";
import SendToActualMofaTable from "./CandidateTable";
import { useUserAuth } from "../../../context/UserAuthContext";

const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
// const {authPermissionList} = useUserAuth();
    const party_code_init: PartyCodeInterface = {
        company: 0,
        job_order_actual_profession_list: [],
        job_order_sector_list:[],
        visa_profession_list:[],
        job_order_id: 0,
        job_order_sector: '',
        name: '',
        party_code: 0
    }
    const [sendToActualMofaEntryList, setSendToActualMofaEntryList] = useState<SendToActualMofaEntryInterface[]>([])
    const [partyCodeList, setPartyCodeList] = useState<PartyCodeInterface[]>([])
    const [partyCodeData, setPartyCodeData] = useState<PartyCodeInterface>(party_code_init)

    // ##################
    const [partyCode, setPartyCode] = useState(0)

    const fetchPartyCodeList = async () => {
        const data = await readPartyCodeList();
        // console.log(data);
        setPartyCodeList(data)
    }


    useEffect(() => {
        fetchPartyCodeList();
    }, [])


    const getCodeCompanyByPartyCode = (codes: PartyCodeInterface[], partyCode: number) => {
        const matchingCode = codes.find((code) => code.party_code == partyCode);

        setPartyCodeData(matchingCode ?? party_code_init)

        return matchingCode ?? party_code_init;
    };

    const fetchSendToActualMofaEntryList = async () => {
        const info = getCodeCompanyByPartyCode(partyCodeList, partyCode)
        const data = await readSendToActualMofaEntryList(info.company);

        // await add_party_code(data, info)
        // console.log(data);
        setSendToActualMofaEntryList(data)
    }


 /*   async function add_party_code(data: SendToActualMofaEntryInterface[], info: PartyCodeInterface) {
        const newArray = data.map((ele, i) => {
            // ele.job_order_actual_profession=info.job_order_actual_profession_list
            ele.job_order_id = info.job_order_id
            ele.job_order_sector = info.job_order_sector
            ele.party_code = info.party_code
            return ele
        })



        // return newArray
        setSendToActualMofaEntryList(newArray)
    }
    */

    useEffect(() => {
        fetchSendToActualMofaEntryList();
    }, [partyCode])



    // #################### \\
    // editable table works \\
    // #################### \\

    const handleCheckBox = (index: number, value: boolean) => {
        const newArray = sendToActualMofaEntryList.map((ele, i) => {
            if (i == index) {
                ele.isChecked = value
                return ele
            } else {
                return ele
            }
        })

        setSendToActualMofaEntryList(newArray);


    }

    async function onClickAdd() {

        const newArray: SendToActualMofaEntryInterface[] = []
        // console.log(sendToActualMofaEntryList)
        for (let i = 0; i < sendToActualMofaEntryList.length; i++) {
            if (sendToActualMofaEntryList[i].isChecked) {
                newArray.push({
                    ...sendToActualMofaEntryList[i],
                    job_order_id: partyCodeData.job_order_id,
                    party_code:partyCodeData.party_code
                });
            }
        }

        // console.log(newArray)
        // call create
        const response = await createSendToActualMofaEntryList(newArray)

        if (!response) {
            return;
        }
        setSendToActualMofaEntryList([])
        fetchSendToActualMofaEntryList()
    }
    return (

        <div >
            <CustomNavbarV3 pageName="Send To Actual Mofa Entry" searchFunction={(query) => ""} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>



            {/*  select partyCode */}
            <div className=" grid grid-cols-1 py-3  gap-2 ">
                <UpdateContentBox>
                    <SubHeading1 text="Company & Party Code :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setPartyCode(value)}
                        options={selectOptionConveter({ options: partyCodeList, options_struct: { name: "name", value: "party_code" } })}
                        value={partyCode}
                    />
                </UpdateContentBox>
            </div>



            {/*  sendToActualMofaEntry stable */}
            <SendToActualMofaTable
                onChange={(ele) => setSendToActualMofaEntryList(ele)}
                company={0}
                handleCheckBox={handleCheckBox}
                sendToActualMofaEntryList={sendToActualMofaEntryList}
                partyCodeData={partyCodeData}
            />

            <BlueButton onClick={onClickAdd} text="Update"/>
        </div>
    )
}