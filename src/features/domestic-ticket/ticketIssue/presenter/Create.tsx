import { createTicketIssue } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { TicketIssueInterface, convertinterviewSchedulePeriodOptions } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { InterviewScheduleInterface } from "../../interviewSchedule/type";
import { readInterviewSchedule, readInterviewScheduleList } from "../../interviewSchedule/repository";
import { Heading2 } from "../../../../componenets/CoustomHeader";
import ClientAndStaffTable from './ClientAndStaffTable';







export default function Main(props: {
    onClose: () =>void,
    fetchTicketIssueList: () =>void,
    sectorList: SectorInterface[],
    interviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
    companyList: CompanyInterface[]

}) {
    const initialValue: TicketIssueInterface = {
        interview_schedule_id: 0,
        staff_list: [],
        client_list: [],
    }
    const [ticketIssue, setTicketIssue] = useState<TicketIssueInterface>(initialValue)


    async function onClickAdd() {

        // call create
        console.log(ticketIssue)
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

        return data
    }

    // useEffect(() => {
    //     converFOROptions()
    // }, [])
    console.log(ticketIssue, "ticketIssue")
    return (

        <FullScreenModal
            title="Add Ticket Issue"
            onClose={props.onClose}
            buttonName="Add"
            handleClick={onClickAdd}
        >


            {/* Interview schedule period */}
            <div className="justify-between max-w-lg gap-2">
                <CustomSelectComponent
                    value={ticketIssue.interview_schedule_period_id}
                    label="Interview schedule Period"
                    required
                    options={convertinterviewSchedulePeriodOptions(props.interviewSchedulePeriodList, props.companyList)}

                    onChange={(value) => {
                        fetchInterviewscheduleList(value)
                        setTicketIssue({ ...ticketIssue, interview_schedule_period_id: value })

                    }} />
            </div>

            {/* date */}
            <div className="justify-between max-w-lg gap-2">
                <CustomSelectComponent
                    value={ticketIssue.interview_schedule_id}
                    label="Interview schedule"
                    required
                    options={selectOptionConveter({
                        options: interviewscheduleList,
                        options_struct: { name: "date", value: "id" }
                    })}

                    onChange={async (value) => {
                        const data = await fetchInterviewschedule(value)

                        if (data)
                            setTicketIssue({
                                ...ticketIssue,
                                interview_schedule_id: value,
                                client_list: data.client_list,
                                staff_list: data.staff_list,
                            })
                    }} />
            </div>
            <Heading2 text="Staffs" />
            <ClientAndStaffTable
                snoBase={0}
                staffAndClientDataList={ticketIssue.staff_list}
                onChange={(value) => {
                    setTicketIssue({ ...ticketIssue, staff_list: value })
                }}
            />
            <Heading2 text="Client" />
            <ClientAndStaffTable
                snoBase={0}
                staffAndClientDataList={ticketIssue.client_list}
                onChange={(value) => {
                    setTicketIssue({ ...ticketIssue, client_list: value })
                }}
            />


        </FullScreenModal>


    )
}