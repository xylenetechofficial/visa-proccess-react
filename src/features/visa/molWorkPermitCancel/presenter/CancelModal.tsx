import { useState } from 'react';
import { Box, Modal, styled } from "@mui/material";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from '../../../../componenets/SelectBox';
import { CustomRadioButton } from '../../../../componenets/RadioButton';
import { MolForwardedTovisaDepartmentDataInterface, MolWorkPermitCancelInterface2 } from '../type';
import { updateMolWorkPermitCancelData } from '../repository';

export default function Main(props: {
    setModalName: (value: string) => void,
    currentData: any
}) {
    const [data, setData] = useState({})
    const [molWorkPermit, setmolWorkPermit] = useState<MolWorkPermitCancelInterface2>(
        {
            "candidate_id": props.currentData.id,
            "client_invoice": '',
            "penalty_amount": 0,
            "mistake_by": ''
        })
    const CardHeader = styled(Box)(() => ({
        display: "flex",
        flexWrap: "wrap",
        paddingRight: "24px",
        marginBottom: "18px",
        alignItems: "center",
        justifyContent: "space-between",
    }));
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #fff',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    };
    async function onClickAdd() {

        // call create
        // const newArray: any = { ...visaProfessionList, visaProfessionList: visaProfessionList }
        const newArray: any = { ...molWorkPermit }
        // newArray.candidate_id =props.currentElement.id
        console.log(newArray, "AAAAAAA")
        const flag = await updateMolWorkPermitCancelData(newArray)
        props.setModalName('')
    }
    return (
        <>
            <Modal open={true}
                onClose={() => props.setModalName('')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box sx={style}>
                    <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Mol/Work Permit Cancel</h3>
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        onClick={() => props.setModalName('')}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="grid grid-cols-1 py-3  gap-2 shadow justify-center">

                        <UpdateContentBox>
                            <SubHeading1 text="COMPANY NAME  :" />
                            <SubHeading1 text={props.currentData.company_name} />
                        </UpdateContentBox>


                        <UpdateContentBox>
                            <SubHeading1 text="CANDIDATE NAME   :" />
                            <SubHeading1 text={props.currentData.name} />
                        </UpdateContentBox>

                        <UpdateContentBox>
                            <SubHeading1 text="PASSPORT NO  :" />
                            <SubHeading1 text={props.currentData.passport_no} />
                        </UpdateContentBox>
                        <UpdateContentBox>
                            <SubHeading1 text="AGENT  :" />
                            <SubHeading1 text={props.currentData.agent} />
                        </UpdateContentBox>
                        <UpdateContentBox>
                            <SubHeading1 text="CLIENT INVOICE  :" />
                            <CustomRadioButton value={molWorkPermit.client_invoice}
                                onChange={(value) => {
                                    if (value == "yes")
                                        setmolWorkPermit({ ...molWorkPermit, client_invoice: value, mistake_by: "", penalty_amount: 0 })
                                    else
                                        setmolWorkPermit({ ...molWorkPermit, client_invoice: value })
                                }}
                                //    onChange={(value)=>setmolWorkPermit({ ...molWorkPermit, client_invoice: value })} 

                                option={[{ name: "No", value: "no" }, { name: "Yes", value: "yes" }]} />
                        </UpdateContentBox>
                        {molWorkPermit.client_invoice == "yes" ? <></> : <>

                            <UpdateContentBox>
                                <SubHeading1 text="PENALTY AMOUNT  :" />
                                <UnlabeledInput value={molWorkPermit.penalty_amount} onchange={(value) => setmolWorkPermit({ ...molWorkPermit, penalty_amount: parseInt(value) })} />
                            </UpdateContentBox>
                            <UpdateContentBox>
                                <SubHeading1 text="MISTAKE BY  :" />
                                <CustomSelectComponent value={molWorkPermit.mistake_by} options={[
                                    { name: "Agent/Candidate", value: "Agent/Candidate" },
                                    { name: "Soundlines", value: "Soundlines" },
                                    { name: "client", value: "client" },
                                ]} onChange={(value) => setmolWorkPermit({ ...molWorkPermit, mistake_by: value })} />
                            </UpdateContentBox>
                        </>}

                        <div className=" flex justify-center">

                            <GreenButton text="Submit" onClick={() => { console.log("agentPaymentReceivedList", "AAAA"), props.setModalName('') }} />
                            <GreenButton text="Back" onClick={() => { props.setModalName(''), onClickAdd() }} />

                        </div>
                    </div>
                </Box>


            </Modal>

        </>
    )
}