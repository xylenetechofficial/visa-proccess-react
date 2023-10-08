import { createMofaEntry, readMofaEntryCandiateList, readMofaEntryPartyCodeList } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { MofaPaymentAdapter, MofaPaymentInterface, Mofa_Entry_Candidate_Interface, PartyCodeInterface } from "../type";

import CandidateTable from "./CandidateTable";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";


export default function Main(props: {
    onClose: any,
    fetchMofaEntryCandiateList: any
}) {



    // const [JobOrderList, setJobOrderList] = useState<SendToMofa_JobOrderInterface[]>([])


    async function onClickAdd() {
        const newArray = []
        for (let i = 0; i < candidateList.length; i++) {
            if (candidateList[i].checked) {
                newArray.push(candidateList[i])
            }
        }
        // call create
        const res = await createMofaEntry(newArray)

        if (res.code != 201) {
            return;
        }
        // props.fetchMofaEntryCandiateList();
        fetchMofaEntryCandiateList(partyCode);
        props.onClose()
    }

    const [partyCodeList, setPartyCodeList] = useState<PartyCodeInterface[]>([])
    const [partyCode, setPartyCode] = useState(0)
    const [countryTypeID, setCountryTypeID] = useState(0)

    const fetchPartyCodeList = async () => {
        const data = await readMofaEntryPartyCodeList("no");
        console.log(data);
        setPartyCodeList(data)
    }
    useEffect(() => {
        fetchPartyCodeList()
    }, [])

    const [candidateList, setCandidateList] = useState<Mofa_Entry_Candidate_Interface[]>([])

    const fetchMofaEntryCandiateList = async (pc: any) => {
        const data = await readMofaEntryCandiateList("no", pc);
        console.log(data);
        setCandidateList(data)
    }
    // useEffect(() => {
    //     // fetchMofaEntryCandiateList(partyCode)
    // }, [partyCode])




    // unset function



    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add MOFA Entry"
            onClose={props.onClose}
        >
            <UpdateContentBox>
                <SubHeading1 text="PARTY CODE: " />
                <CustomSelectComponentUnlabeled
                    onChange={(value) => {
                        for (let i = 0; i < partyCodeList.length; i++) {
                            const element = partyCodeList[i];
                            if (parseInt(value) == element.id)
                                setCountryTypeID(element.type_id)

                        }
                        setPartyCode(parseInt(value))
                        fetchMofaEntryCandiateList(parseInt(value))
                    }}
                    options={selectOptionConveter({ options: partyCodeList, options_struct: { name: "name", value: "id" } })}
                    value={partyCode}
                />
            </UpdateContentBox>

            <CandidateTable
                countryTypeID={countryTypeID}
                candidateList={candidateList}
                onChange={(ele) => setCandidateList(ele)}
            />
        </FullScreenModal>
    )
}