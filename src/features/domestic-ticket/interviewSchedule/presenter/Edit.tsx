import { createInterviewSchedule, updateInterviewSchedule } from "../repository";
import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";
import { InterviewScheduleInterface, convertinterviewSchedulePeriodOptions } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";







export default function Main(props: {
    onClose: any,
    fetchInterviewScheduleList: any,
    sectorList: SectorInterface[],
    InterviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
    companyList: CompanyInterface[]
    currentElement: InterviewScheduleInterface
}) {
    const initialValue: InterviewScheduleInterface = {
        date: "",
        interviewSchedulePeriodId: 0,
        noOfPerson: 0,
        sectorId: 0,
        staff: "",

    }
    const [interviewSchedule, setInterviewSchedule] = useState<InterviewScheduleInterface>(initialValue)


    async function onClickAdd() {

        // call create
        await updateInterviewSchedule(props.currentElement.id ?? 0, {
            date: interviewSchedule.date,
            interviewSchedulePeriodId: interviewSchedule.interviewSchedulePeriodId,
            noOfPerson: interviewSchedule.noOfPerson,
            sectorId: interviewSchedule.sectorId,
            staff: interviewSchedule.staff
        })


        setInterviewSchedule(initialValue)

        props.fetchInterviewScheduleList()
        props.onClose()
    }

    useEffect(() => {
        setInterviewSchedule(props.currentElement)
    }, [])
    return (

        <ModalContent
            title="Update Interview Schedule"
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickAdd}
        >


            {/* Comapany */}
            <CustomSelectComponent
                value={interviewSchedule.interviewSchedulePeriodId}
                label="Interview Sector Period"
                required
                options={convertinterviewSchedulePeriodOptions(props.InterviewSchedulePeriodList, props.companyList)}

                onChange={(value) => {
                    setInterviewSchedule({ ...interviewSchedule, interviewSchedulePeriodId: value })

                }} />

            {/* date */}
            <DateInput id="interviewScheduleFromdate"
                label="Date"
                required
                onChange={(value: string) => setInterviewSchedule({ ...interviewSchedule, date: value })}
                value={interviewSchedule.date}
            />

            {/* sector */}
            <CustomSelectComponent
                value={interviewSchedule.sectorId}
                label="Sector"
                required
                options={
                    selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setInterviewSchedule({ ...interviewSchedule, sectorId: value })

                }} />

            {/* staff */}
            <StandardInput
                label="Staff"
                required
                value={interviewSchedule.staff}
                onChangeValue={
                    (value: string) =>
                        setInterviewSchedule({ ...interviewSchedule, staff: value })}
            />

            {/* no of  person*/}
            <StandardInput
                label="No of person"
                required
                type="number"
                value={interviewSchedule.noOfPerson}
                onChangeValue={
                    (value: string) =>
                        setInterviewSchedule({ ...interviewSchedule, noOfPerson: parseInt(value) })}
            />

        </ModalContent>


    )
}