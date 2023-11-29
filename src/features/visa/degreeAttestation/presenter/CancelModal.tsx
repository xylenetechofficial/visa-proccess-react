import { useEffect, useState } from 'react';
import { Box, Modal, styled } from "@mui/material";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { CustomSelectComponent, CustomSelectComponentUnlabeled } from '../../../../componenets/SelectBox';
import { CustomRadioButton } from '../../../../componenets/RadioButton';
import { DegreeAttestationInterface } from '../type/Index';
import { addDegreeAttestationCancel } from '../repository';
import { MistakeByList } from '../../../db';
// import { MolForwardedTovisaDepartmentDataInterface, DegreeAttestationCancelInterface2 } from '../type';
// import { addDegreeAttestationCancel, updateDegreeAttestationCancelData } from '../repository';

export default function Main(props: {
    setModalName: (value: string) => void,
    currentData: DegreeAttestationInterface
}) {
    const [data, setData] = useState({})
    const [degreeAttestation, setdegreeAttestation] = useState<DegreeAttestationInterface>({} as DegreeAttestationInterface)

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
        // console.log("id",degreeAttestation.id);   // Only Dev
        // console.log("client_invoice",degreeAttestation.client_invoice);   // Only Dev
        // console.log("penalty_amount",degreeAttestation.penalty_amount);   // Only Dev
        // console.log("mistake_by",degreeAttestation.mistake_by);   // Only Dev
        const flag = await addDegreeAttestationCancel(degreeAttestation)
        if (!flag) return
        props.setModalName('')
    }

    useEffect(() => {
        setdegreeAttestation({
            ...props.currentData,
            penalty_amount: degreeAttestation.amount_receivaled,
            client_invoice: "no"
        })
    }, [])
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
                            <SubHeading1 text={props.currentData.candidate_name} />
                        </UpdateContentBox>

                        <UpdateContentBox>
                            <SubHeading1 text="PASSPORT NO  :" />
                            <SubHeading1 text={props.currentData.passport_no} />
                        </UpdateContentBox>
                        <UpdateContentBox>
                            <SubHeading1 text="AGENT  :" />
                            <SubHeading1 text={props.currentData.agent_name} />
                        </UpdateContentBox>
                        {/* <UpdateContentBox>
                            <SubHeading1 text="CLIENT INVOICE  :" />
                            <CustomRadioButton
                                inlined
                                value={degreeAttestation.client_invoice}
                                onChange={(value) => {
                                    if (value == "yes")
                                        setdegreeAttestation({ ...degreeAttestation, client_invoice: value, mistake_by: "", penalty_amount: 0 })
                                    else
                                        setdegreeAttestation({ ...degreeAttestation, client_invoice: value })
                                }}
                                //    onChange={(value)=>setdegreeAttestation({ ...degreeAttestation, client_invoice: value })} 

                                option={[{ name: "No", value: "no" }, { name: "Yes", value: "yes" }]} />
                        </UpdateContentBox> */}
                        {degreeAttestation.client_invoice == "yes" ? <></> : <>

                            <UpdateContentBox>
                                <SubHeading1 text="PENALTY AMOUNT  :" />
                                <UnlabeledInput type='number' value={degreeAttestation.penalty_amount} onchange={(value) => setdegreeAttestation({ ...degreeAttestation, penalty_amount: parseInt(value) })} />
                            </UpdateContentBox>
                            {/* <UpdateContentBox>
                                <SubHeading1 text="MISTAKE BY  :" />
                                <CustomSelectComponent value={degreeAttestation.mistake_by} options={MistakeByList} onChange={(value) => setdegreeAttestation({ ...degreeAttestation, mistake_by: value })} />
                            </UpdateContentBox> */}
                        </>}

                        <div className=" flex justify-center">

                            <GreenButton text="Submit" onClick={() => { console.log("agentPaymentReceivedList", "AAAA"), props.setModalName(''), onClickAdd() }} />
                            <RedButton text="Back" onClick={() => { props.setModalName('') }} />

                        </div>
                    </div>
                </Box>


            </Modal>

        </>
    )
}