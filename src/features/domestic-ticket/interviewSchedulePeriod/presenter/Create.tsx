import { createInterviewSchedulePeriod } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput } from "../../../../componenets/Input";
import { InterviewSchedulePeriodInterface } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";







export default function Main(props: {
    onClose: any,
    fetchInterviewSchedulePeriodList: any,
    companyList: CompanyInterface[]
}) {
    const initialValue: InterviewSchedulePeriodInterface = {
        company: 0,
        fromDate: "",
        toDate: ""
    }
    const [interviewSchedulePeriod, setInterviewSchedulePeriod] = useState<InterviewSchedulePeriodInterface>(initialValue)




    async function onClickAdd() {

        // call create
        await createInterviewSchedulePeriod({
            company: interviewSchedulePeriod?.company,
            fromDate: interviewSchedulePeriod?.fromDate,
            toDate: interviewSchedulePeriod?.toDate
        })


        setInterviewSchedulePeriod(initialValue)

        props.fetchInterviewSchedulePeriodList()
        props.onClose()
    }

    return (

        <ModalContent
            title="Add Interview Schedule Period"
            onClose={props.onClose}
            buttonName="Add"
            handleClick={onClickAdd}
        >


            {/* Comapany */}
            <CustomSelectComponent
                required
                value={interviewSchedulePeriod.company}
                label="Company"
                options={
                    selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setInterviewSchedulePeriod({ ...interviewSchedulePeriod, company: value })

                }} />

            {/* from data */}
            <DateInput
                id="interviewScheduleperiodFromdate"
                label="From date"
                required
                onChange={(value: string) => setInterviewSchedulePeriod({ ...interviewSchedulePeriod, fromDate: value })}
                value={interviewSchedulePeriod.fromDate}
            />

            {/* to date */}
            <DateInput
                id="interviewScheduleperiodFromdate"
                label="To date"
                required
                onChange={(value: string) => setInterviewSchedulePeriod({ ...interviewSchedulePeriod, toDate: value })}
                value={interviewSchedulePeriod.toDate}
            />

        </ModalContent>


    )
}