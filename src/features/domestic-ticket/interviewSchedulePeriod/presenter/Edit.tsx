import { updateInterviewSchedulePeriod } from "../repository";
import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";
import { InterviewSchedulePeriodInterface } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";








export default function Main(props: {
    onClose: any,
    fetchInterviewSchedulePeriodList: any,
    companyList: CompanyInterface[]
    currentElement: InterviewSchedulePeriodInterface
}) {
    const initialValue: InterviewSchedulePeriodInterface = {
        company: 0,
        fromDate: "",
        toDate: ""
    }
    const [interviewSchedulePeriod, setInterviewSchedulePeriod] = useState<InterviewSchedulePeriodInterface>(initialValue)




    async function onClickAdd() {

        // call create
        await updateInterviewSchedulePeriod(props.currentElement.id ?? 0, {
            company: interviewSchedulePeriod.company,
            fromDate: interviewSchedulePeriod.fromDate,
            toDate: interviewSchedulePeriod.toDate
        })


        setInterviewSchedulePeriod(initialValue)

        props.fetchInterviewSchedulePeriodList()
        props.onClose();
    }

    useEffect(() => {
        setInterviewSchedulePeriod(props.currentElement)
    }, [])
    return (

        <ModalContent
            title="Update Interview Schedule Period"
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickAdd}
        >


            {/* Comapany */}
            <CustomSelectComponent
                value={interviewSchedulePeriod.company}
                label="Company"
                required
                options={
                    selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setInterviewSchedulePeriod({ ...interviewSchedulePeriod, company: value })

                }} />

            {/* from data */}
            <DateInput id="interviewScheduleperiodFromdate"
                label="From Date"
                required
                onChange={(value: string) => setInterviewSchedulePeriod({ ...interviewSchedulePeriod, fromDate: value })}
                value={interviewSchedulePeriod.fromDate}
            />

            {/* to date */}
            <DateInput id="interviewScheduleperiodFromdate"
                label="To Date"
                required
                onChange={(value: string) => setInterviewSchedulePeriod({ ...interviewSchedulePeriod, toDate: value })}
                value={interviewSchedulePeriod.toDate}
            />

        </ModalContent>


    )
}