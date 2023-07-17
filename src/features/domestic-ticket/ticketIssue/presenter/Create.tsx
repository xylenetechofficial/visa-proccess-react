import { createTicketIssue } from "../repository";
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
    interviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
    companyList:CompanyInterface[]

}) {
    const initialValue: TicketIssueInterface = {
        date: "",
        interviewSchedulePeriodId: 0,
        

    }
    const [ticketIssue, setTicketIssue] = useState<TicketIssueInterface>(initialValue)
    

    async function onClickAdd() {

        // call create
        console.log({
            date: ticketIssue.date,
            ticketIssuePeriodId: ticketIssue.interviewSchedulePeriodId,
      
        })
        await createTicketIssue({
            date: ticketIssue.date,
            interviewSchedulePeriodId: ticketIssue.interviewSchedulePeriodId,
           
        })


        setTicketIssue(initialValue)

        props.fetchTicketIssueList()
    }

    // useEffect(() => {
    //     converFOROptions()
    // }, [])
    return (

        <ModalContent
            title="Add Ticket Issue"
            onClose={props.onClose}
            buttonName="Add"
            handleClick={onClickAdd}
        >


            {/* Interview schedule period */}
            <CustomSelectComponent
                value={ticketIssue.interviewSchedulePeriodId}
                label="Interview schedule Period"
                required
                options={convertinterviewSchedulePeriodOptions(props.interviewSchedulePeriodList,props.companyList)}

                onChange={(value) => {
                    setTicketIssue({ ...ticketIssue, interviewSchedulePeriodId: value })

                }} />

            {/* date */}
            <DateInput id="ticketIssueFromdate"
                label="Date"
                required
                onChange={(value: string) => setTicketIssue({ ...ticketIssue, date: value })}
                value={ticketIssue.date}
            />

          

        </ModalContent>


    )
}