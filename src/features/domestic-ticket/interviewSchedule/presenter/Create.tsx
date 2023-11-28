import { createInterviewSchedule } from "../repository";
import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";
import { InterviewScheduleInterface, convertinterviewSchedulePeriodOptions } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { RedButton } from "../../../../componenets/CustomButton";







export default function Main(props: {
    onClose: any,
    fetchInterviewScheduleList: any,
    sectorList: SectorInterface[],
    InterviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
    companyList: CompanyInterface[]

}) {
    const initialValue: InterviewScheduleInterface = {
        date: "",
        interviewSchedulePeriodId: 0,
        noOfPerson: 0,
        sectorId: 0,
        staff: "",
        client:'',
        noOfClient:0

    }
    const [interviewSchedule, setInterviewSchedule] = useState<InterviewScheduleInterface>(initialValue)


    async function onClickAdd() {

        // call create
        console.log({
            date: interviewSchedule.date,
            interviewSchedulePeriodId: interviewSchedule.interviewSchedulePeriodId,
            noOfPerson: interviewSchedule.noOfPerson,
            sectorId: interviewSchedule.sectorId,
            staff: interviewSchedule.staff
        })
        await createInterviewSchedule({
            date: interviewSchedule.date,
            interviewSchedulePeriodId: interviewSchedule.interviewSchedulePeriodId,
            no_person: interviewSchedule.noOfPerson,
            sectorId: interviewSchedule.sectorId,
            staff: interviewSchedule.staff
        })


        setInterviewSchedule(initialValue)

        props.fetchInterviewScheduleList()
    }

    // useEffect(() => {
    //     converFOROptions()
    // }, [])
    return (

        <FullScreenModal
            title="Add Interview Schedule"
            onClose={props.onClose}
            buttonName="Add"
            handleClick={onClickAdd}
        >


            {/* Interview schedule period */}
            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>
                    <CustomSelectComponent
                        value={interviewSchedule.interviewSchedulePeriodId}
                        label="Interview schedule Period"
                        required
                        options={convertinterviewSchedulePeriodOptions(props.InterviewSchedulePeriodList, props.companyList)}

                        onChange={(value) => {
                            setInterviewSchedule({ ...interviewSchedule, interviewSchedulePeriodId: value })

                        }} />
                </UpdateContentBox>
                {/* date */}
                <UpdateContentBox>
                    <DateInput id="interviewScheduleFromdate"
                        label="Date"
                        required
                        onChange={(value: string) => setInterviewSchedule({ ...interviewSchedule, date: value })}
                        value={interviewSchedule.date}
                    />
                </UpdateContentBox>

                {/* sector */}
                <UpdateContentBox>
                    <CustomSelectComponent
                        value={interviewSchedule.sectorId}
                        label="Sector"
                        required
                        options={
                            selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}

                        onChange={(value) => {
                            setInterviewSchedule({ ...interviewSchedule, sectorId: value })

                        }} />
                </UpdateContentBox>
                {/* staff */}
                <UpdateContentBox>
                    <StandardInput
                        label="Staff"
                        required
                        value={interviewSchedule.staff}
                        onChangeValue={
                            (value: string) =>
                                setInterviewSchedule({ ...interviewSchedule, staff: value })}
                    />
                </UpdateContentBox>
                {/* no of  person*/}
                <UpdateContentBox>
                    <StandardInput
                        label="No of person"
                        required

                        type="number"

                        value={interviewSchedule.noOfPerson}
                        onChangeValue={
                            (value: string) =>
                                setInterviewSchedule({ ...interviewSchedule, noOfPerson: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>
                    {Array.from({length: interviewSchedule.noOfPerson??0 }, (_, index) => (
                        // <UpdateContentBox>
                        <>
                        <div>
                    <StandardInput  key={index} value={""} onChangeValue={(value:string)=> console.log(value)} />
                    <RedButton text="Delete Staff" onClick={()=>setInterviewSchedule({...interviewSchedule, noOfPerson:interviewSchedule.noOfPerson - 1 })}/></div>
                    </>
                    ))}
                </UpdateContentBox>
                {/* Client */}
                <UpdateContentBox>
                    <StandardInput
                        label="Client"
                        required
                        value={interviewSchedule.client}
                        onChangeValue={
                            (value: string) =>
                                setInterviewSchedule({ ...interviewSchedule, client: value })}
                    />
                </UpdateContentBox>
               
                {/* no of  person*/}
                <UpdateContentBox>
                    <StandardInput
                        label="No of person"
                        required

                        type="number"

                        value={interviewSchedule.noOfClient}
                        onChangeValue={
                            (value: string) =>
                                setInterviewSchedule({ ...interviewSchedule, noOfClient: parseInt(value) })}
                    />
                </UpdateContentBox>
                <UpdateContentBox>
                    {Array.from({length: interviewSchedule.noOfClient??0 }, (_, index) => (
                        // <UpdateContentBox>
                        <>
                        <div>
                    <StandardInput  key={index} value={""} onChangeValue={(value:string)=> console.log(value)} />
                    <RedButton text="Delete Client" onClick={()=>setInterviewSchedule({...interviewSchedule, noOfClient:interviewSchedule.noOfClient - 1 })}/></div>
                    </>
                    ))}
                </UpdateContentBox>
            </div>
        </FullScreenModal>


    )
}