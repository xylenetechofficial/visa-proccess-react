import { createTicketIssue, updateTicketIssue } from "../repository";
import { useEffect, useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";
import { TicketIssueInterface, convertinterviewSchedulePeriodOptions } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";







export default function Main(props: {
    onClose: any,
    fetchTicketIssueList: any,
    sectorList: SectorInterface[],
    TicketIssuePeriodList: InterviewSchedulePeriodInterface[],
    companyList: CompanyInterface[]
    currentElement: TicketIssueInterface
}) {
    const initialValue: TicketIssueInterface = {
        date: "",
        interviewSchedulePeriodId: 0,


    }
    const [interviewSchedule, setTicketIssue] = useState<TicketIssueInterface>(initialValue)


    async function onClickAdd() {

        // call create
        await updateTicketIssue(props.currentElement.id ?? 0, {
            date: interviewSchedule.date,
            interviewSchedulePeriodId: interviewSchedule.interviewSchedulePeriodId,

        })


        setTicketIssue(initialValue)

        props.fetchTicketIssueList()
        props.onClose()
    }

    useEffect(() => {
        setTicketIssue(props.currentElement)
    }, [])
    return (

        <ModalContent
            title="Update Ticket Issue"
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickAdd}
        >


            {/* Comapany */}
            <CustomSelectComponent
                value={interviewSchedule.interviewSchedulePeriodId}
                label="Interview Sector Period"
                required
                options={convertinterviewSchedulePeriodOptions(props.TicketIssuePeriodList, props.companyList)}

                onChange={(value) => {
                    setTicketIssue({ ...interviewSchedule, interviewSchedulePeriodId: value })

                }} />

            {/* date */}
            <DateInput id="interviewScheduleFromdate"
                label="Date"
                required
                onChange={(value: string) => setTicketIssue({ ...interviewSchedule, date: value })}
                value={interviewSchedule.date}
            />



        </ModalContent>


    )
}