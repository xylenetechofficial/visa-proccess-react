import { createTicketIssue } from "../repository";
import { useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { TicketIssueInterface, convertinterviewSchedulePeriodOptions } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { InterviewScheduleInterface } from "../../interviewSchedule/type";
import { readInterviewSchedule, readInterviewScheduleList } from "../../interviewSchedule/repository";
import ClientAndStaffTable from './ClientAndStaffTable';







export default function Main(props: {
    onClose: ()=> void,
    fetchTicketIssueList: () => void,
    sectorList: SectorInterface[],
    interviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
    companyList: CompanyInterface[]
    currentElement: TicketIssueInterface
}) {
    const initialValue: TicketIssueInterface = {
        interview_schedule_id: 0,
        staff_list: [],
        client_list: [],
    }
    const [ticketIssue, setTicketIssue] = useState<TicketIssueInterface>(initialValue)


    async function onClickAdd() {

        // call create
        // console.log(ticketIssue)
        await createTicketIssue(ticketIssue)
        // await createTicketIssue({
        //     date: ticketIssue.date,
        //     interviewSchedulePeriodId: ticketIssue.interviewSchedulePeriodId,

        // })


        setTicketIssue(initialValue)

        props.fetchTicketIssueList()
    }

    const [interviewscheduleList, setInterviewscheduleList] =
        useState<InterviewScheduleInterface[]>([]);
    const fetchInterviewscheduleList = async (period_id: number) => {
        const data = await readInterviewScheduleList(0, {
            interview_schedule_period: period_id
        });
        setInterviewscheduleList(data);
    };

    async function fetchInterviewschedule(id: number) {
        const data = await readInterviewSchedule(id)
        if (data)
            setTicketIssue({
                ...ticketIssue,
                interview_schedule_id: ticketIssue.interview_schedule_id,
                client_list: data.client_list,
                staff_list: data.staff_list,
            })
    }

    // useEffect(() => {
    //     converFOROptions()
    // }, [])
    return (

        <FullScreenModal
            title="Add Ticket Issue"
            onClose={props.onClose}
            buttonName="Add"
            handleClick={onClickAdd}
        >


            {/* Interview schedule period */}
            <CustomSelectComponent
                value={ticketIssue.interview_schedule_period_id}
                label="Interview schedule Period"
                required
                options={convertinterviewSchedulePeriodOptions(props.interviewSchedulePeriodList, props.companyList)}

                onChange={(value) => {
                    fetchInterviewscheduleList(value)
                    setTicketIssue({ ...ticketIssue, interview_schedule_period_id: value })

                }} />

            {/* date */}
            <CustomSelectComponent
                value={ticketIssue.interview_schedule_id}
                label="Interview schedule"
                required
                options={selectOptionConveter({
                    options: interviewscheduleList,
                    options_struct: { name: "date", value: "id" }
                })}

                onChange={(value) => {
                    setTicketIssue({ ...ticketIssue, interview_schedule_id: value })
                    fetchInterviewschedule(value)

                }} />

            <ClientAndStaffTable
                snoBase={0}
                staffAndClientDataList={ticketIssue.staff_list}
                onChange={(value:any) => {
                    setTicketIssue({ ...ticketIssue, staff_list: value })
                }}
            />

            <ClientAndStaffTable
                snoBase={0}
                staffAndClientDataList={ticketIssue.client_list}
                onChange={(value:any) => {
                    setTicketIssue({ ...ticketIssue, client_list: value })
                }}
            />


        </FullScreenModal>


    )
}