import { readInterviewSchedule, updateInterviewSchedule } from "../repository";
import { useEffect, useState } from "react";
import  { FullScreenModal } from "../../../../componenets/Modal";
import { DateInput, StandardInput } from "../../../../componenets/Input";
import { InterviewScheduleInterface, StaffAndClientInterface, convertinterviewSchedulePeriodOptions } from "../type";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";







export default function Main(props: {
    onClose: () => void,
    fetchInterviewScheduleList:()=> void,
    sectorList: InterviewSectorInterface[],
    InterviewSchedulePeriodList: InterviewSchedulePeriodInterface[],
    // companyList: CompanyInterface[]
    currentElement: InterviewScheduleInterface

}) {
    const initialValue: InterviewScheduleInterface = {
        date: "",
        interviewSchedulePeriodId: 0,
        noOfPerson: 0,
        sectorId: 0,
        staff: "",
        client: '',
        noOfClient: 0,
        client_list: [],
        staff_list: [],
    }
    const [interviewSchedule, setInterviewSchedule] = useState<InterviewScheduleInterface>(initialValue)
    // const [interviewSchedulePeriod, setInterviewSchedulePeriod] = useState({
    //     company_name: "",
    //     job_order_no: "",
    // } as InterviewSchedulePeriodInterface)


    async function onClickAdd() {

        // call create
        // console.log({
        //     date: interviewSchedule.date,
        //     interviewSchedulePeriodId: interviewSchedule.interviewSchedulePeriodId,
        //     sectorId: interviewSchedule.sectorId,

        //     client_list: interviewSchedule.client_list,
        //     staff_list: interviewSchedule.staff_list,
        // })
        await updateInterviewSchedule(props.currentElement.id ?? 0, interviewSchedule)
        // await createInterviewSchedule({
        //     date: interviewSchedule.date,
        //     interviewSchedulePeriodId: interviewSchedule.interviewSchedulePeriodId,
        //     no_person: interviewSchedule.noOfPerson,
        //     sectorId: interviewSchedule.sectorId,
        //     staff: interviewSchedule.staff
        // })


        setInterviewSchedule(initialValue)

        props.fetchInterviewScheduleList()
        props.onClose()
    }

    async function getInterViewShedule(id: number) {
        const data = await readInterviewSchedule(id)
        if (data) {
            // for (let i = 0; i < props.InterviewSchedulePeriodList.length; i++) {
            //     const element = props.InterviewSchedulePeriodList[i];
            //     if (element.id == data.interviewSchedulePeriodId) {
            //         setInterviewSchedulePeriod(element)
            //         break
            //     }
            // }
            setInterviewSchedule({
                ...data,
                noOfClient: data.client_list.length,
                noOfPerson: data.staff_list.length,
            })

        }
    }

    useEffect(() => {
        getInterViewShedule(props.currentElement.id ?? 0)
    }, [])

    // useEffect(() => {
    //     onAddClient()
    // }, [interviewSchedule.noOfClient])


    function onAddStaff() {
        const new_data:StaffAndClientInterface[] = interviewSchedule.staff_list
        new_data.push({
            name: '',
            ticket_amount: 0,
            travel_by: '',
            hotel_amount: 0,
            other_expenses: 0,
            total_amount: 0,
            remarks: '',
        })

    }






    function onAddClient() {
        const new_data:StaffAndClientInterface[] = interviewSchedule.client_list
        new_data.push({
            name: '',
            ticket_amount: 0,
            travel_by: '',
            hotel_amount: 0,
            other_expenses: 0,
            total_amount: 0,
            remarks: '',
        })

    }
    function onUpdateStaff(index: number, data: StaffAndClientInterface) {
        const new_data = []
        for (let i = 0; i < interviewSchedule.staff_list.length; i++) {
            const element = interviewSchedule.staff_list[i];

            if (index == i) new_data.push(data)
            else new_data.push(element)
        }

        setInterviewSchedule({ ...interviewSchedule, staff_list: new_data })
    }

    function onRemoveStaff(index: number) {
        const new_data = []
        for (let i = 0; i < interviewSchedule.staff_list.length; i++) {
            const element = interviewSchedule.staff_list[i];

            if (index == i) continue
            else new_data.push(element)
        }

        setInterviewSchedule({ ...interviewSchedule, noOfPerson: interviewSchedule.noOfPerson - 1, staff_list: new_data })
    }

    function onUpdateClient(index: number, data: StaffAndClientInterface) {
        const new_data = []
        for (let i = 0; i < interviewSchedule.client_list.length; i++) {
            const element = interviewSchedule.client_list[i];

            if (index == i) new_data.push(data)
            else new_data.push(element)
        }

        setInterviewSchedule({ ...interviewSchedule, client_list: new_data })
    }

    function onRemoveClient(index: number) {
        const new_data = []
        for (let i = 0; i < interviewSchedule.client_list.length; i++) {
            const element = interviewSchedule.client_list[i];

            if (index == i) continue
            else new_data.push(element)
        }

        setInterviewSchedule({ ...interviewSchedule, client_list: new_data })
    }
    return (

        <FullScreenModal
            title="Update Interview Schedule"
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickAdd}
        >


            {/* Interview schedule period */}
            <div className=" grid grid-cols-1 py-3  gap-2 shadow">
                <UpdateContentBox>
                    <CustomSelectComponent
                        value={interviewSchedule.interviewSchedulePeriodId}
                        label="Interview schedule Period"
                        required
                        options={convertinterviewSchedulePeriodOptions(props.InterviewSchedulePeriodList, [])}

                        onChange={(value) => {
                            // for (let i = 0; i < props.InterviewSchedulePeriodList.length; i++) {
                            //     const element = props.InterviewSchedulePeriodList[i];
                            //     if (element.id == value) {
                            //         setInterviewSchedulePeriod(element)
                            //         break
                            //     }
                            // }
                            setInterviewSchedule({ ...interviewSchedule, interviewSchedulePeriodId: value })

                        }} />
                </UpdateContentBox>
                {/* <UpdateContentBox> */}
                {/* <Heading6 text={`${interviewSchedulePeriod.company_name} - ${interviewSchedulePeriod.job_order_no}`} /> */}
                {/* </UpdateContentBox> */}
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
                {/* <UpdateContentBox>
                    <StandardInput
                        label="Staff"
                        required
                        value={interviewSchedule.staff}
                        onChangeValue={
                            (value: string) =>
                                setInterviewSchedule({ ...interviewSchedule, staff: value })}
                    />
                </UpdateContentBox> */}
                {/* no of  person*/}
                {/* <UpdateContentBox>
                    <StandardInput
                        label="No of Staff"
                        required

                        type="number"

                        value={interviewSchedule.noOfPerson}
                        onChangeValue={
                            (val: string) => {
                                const value = parseInt(val)
                                if (value > interviewSchedule.noOfPerson)
                                    onAddStaff()
                                else {
                                    for (let i = 0; i < interviewSchedule.noOfPerson - value; i++) {
                                        interviewSchedule.staff_list.pop()
                                    }
                                }

                                setInterviewSchedule({ ...interviewSchedule, noOfPerson: value })
                            }
                        }
                    />
                </UpdateContentBox> */}

                <UpdateContentBox>
                    <BlueButton text="Add Staff" onClick={() => { setInterviewSchedule({ ...interviewSchedule, noOfPerson: interviewSchedule.noOfPerson + 1 }), onAddStaff() }} />
                </UpdateContentBox>
                <div className="grid grid-cols-1 gap-4">
                    {
                        interviewSchedule.staff_list.map((ele, index) => {
                            return (<>
                                <div className=" flex justify-between max-w-lg gap-2 ">
                                    <StandardInput key={index} value={ele.name} onChangeValue={(value: string) => {
                                        console.log(value);   // Only Dev
                                        onUpdateStaff(index, { ...ele, name: value })
                                    }} />
                                    <RedButton text="Delete Staff" onClick={() => onRemoveStaff(index)} />
                                </div>
                            </>)
                        })
                    }
                    {/* {Array.from({ length: interviewSchedule.noOfPerson ?? 0 }, (_, index) => (
                        // <UpdateContentBox>
                        <>
                            <div>
                                <StandardInput key={index} value={""} onChangeValue={(value: string) => console.log(value)} />
                                <RedButton text="Delete Staff" onClick={() => setInterviewSchedule({ ...interviewSchedule, noOfPerson: interviewSchedule.noOfPerson - 1 })} /></div>
                        </>
                    ))} */}
                </div>
                {/* Client */}
                {/* <UpdateContentBox>
                    <StandardInput
                        label="Client"
                        required
                        value={interviewSchedule.client}
                        onChangeValue={
                            (value: string) =>
                                setInterviewSchedule({ ...interviewSchedule, client: value })}
                    />
                </UpdateContentBox> */}

                {/* no of  person*/}
                {/* <UpdateContentBox>
                    <StandardInput
                        label="No of Client"
                        required

                        type="number"

                        value={interviewSchedule.noOfClient}
                        onChangeValue={
                            (val: string) => {
                                const value = parseInt(val)
                                if (value > interviewSchedule.noOfClient)
                                    onAddClient()
                                else {
                                    for (let i = 0; i < interviewSchedule.noOfClient - value; i++) {
                                        interviewSchedule.client_list.pop()
                                    }
                                }
                                setInterviewSchedule({ ...interviewSchedule, noOfClient: value })
                            }
                        }
                    />
                </UpdateContentBox> */}
                <UpdateContentBox>
                    <BlueButton text="Add Client" onClick={() => { setInterviewSchedule({ ...interviewSchedule, noOfClient: interviewSchedule.noOfClient + 1 }), onAddClient() }} />
                </UpdateContentBox>
                <div className="grid grid-cols-1 gap-4">
                    {
                        interviewSchedule.client_list.map((ele, index) => {
                            return (<>
                                <div className=" flex justify-between max-w-lg gap-2 ">
                                    <StandardInput key={index} value={ele.name} onChangeValue={(value: string) => {
                                        console.log(value);   // Only Dev
                                        onUpdateClient(index, { ...ele, name: value })
                                    }} />
                                    <RedButton text="Delete Client" onClick={() => onRemoveClient(index)} />
                                </div>
                            </>)
                        })
                    }
                    {/* {Array.from({ length: interviewSchedule.noOfClient ?? 0 }, (_, index) => (
                        // <UpdateContentBox>
                        <>
                            <div>
                                <StandardInput key={index} value={""} onChangeValue={(value: string) => console.log(value)} />
                                <RedButton text="Delete Client" onClick={() => setInterviewSchedule({ ...interviewSchedule, noOfClient: interviewSchedule.noOfClient - 1 })} /></div>
                        </>
                    ))} */}
                </div>
            </div>
        </FullScreenModal>


    )
}