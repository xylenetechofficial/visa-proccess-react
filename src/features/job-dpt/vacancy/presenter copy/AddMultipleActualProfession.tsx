import { useState ,useEffect} from "react";
import { CustomSelectComponent } from "../../../../componenets/SelectBox";
import { StandardInput } from "../../../../componenets/Input";
import ModalContent from "../../../../componenets/Modal";
import ActualProfessionTable from "./ActualProfessionTable";
import SelectSectorSection from "./SelectSectorSection";
import { JobOrderInterface } from "../type";
import { readInterviewSectorList } from "../../../masters/interviewSector/repository";
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";
import { ActualProfessionInterface } from "../../Extra/type";
import { generate_final_actual_profession } from "../../Extra/function";


export default function AddMultipleActualProfession(props: {
    onClose: any,
    jobOrder: JobOrderInterface,
    changeJobOrder: (ele: JobOrderInterface) => void
}) {

    const [selectedMasterSector, setSelectedMasterSector] = useState<InterviewSectorInterface[]>([]);
    const [interviewSectionList, setInterviewSectorList] = useState<InterviewSectorInterface[]>([]);
    const [selectedDifferedSector, setSelectedDifferedSector] = useState<InterviewSectorInterface[]>([]);
    const [actualProfesionList, setActualProfesionList] = useState<ActualProfessionInterface[]>([]);
    const [isactualProfessionUpdated, setIsActualProfessionUpdated] = useState("")

    const fetchInterviewSectorList = async () => {
        const data = await readInterviewSectorList();
        setInterviewSectorList(data)
    }

    const handleOnClickGenerate =async () => {
        // console.log("actualProfesionList: ")
        // console.log(actualProfesionList)

        // console.log("selectedDifferedSector: ")
        // console.log(selectedDifferedSector)

        // console.log("selectedMasterSector: ")
        // console.log(selectedMasterSector)

        // const newarray: ActualProfessionInterface[] = [];

        // for (let i = 0; i < actualProfesionList.length; i++) {
        //     const actualProfesion = actualProfesionList[i];

        //     // Differed Sector
        //     for (let j = 0; j < selectedDifferedSector.length; j++) {
        //         const differedSector = selectedDifferedSector[j]
        //         newarray.push({
        //             jobOrder_id: actualProfesion.id ?? 0,
        //             actual_profession: actualProfesion.actual_profession,
        //             quantity: actualProfesion.quantity,
        //             seletion_target_quantity: actualProfesion.seletion_target_quantity,
        //             min_salary: actualProfesion.min_salary,
        //             max_salary: actualProfesion.max_salary,
        //             job_description: actualProfesion.job_description,
        //             master_service_charges: actualProfesion.master_service_charges,
        //             differed_service_charges: actualProfesion.differed_service_charges,
        //             sector: differedSector.id,
        //             agent_commission: 0,
        //             air_ticket: "",
        //             consodilate_charges: "0",
        //             grade: 0,
        //             invoice_service_charges: 0,
        //             invoice_service_charges_currency: 0,
        //             invoice_ticket_charges: 0,
        //             is_invoice: 0,
        //             partial_charges: 0,
        //             service_charges: 0
        //         })
        //     }

        //     // Master Sector
        //     for (let j = 0; j < selectedMasterSector.length; j++) {
        //         const masterSector = selectedMasterSector[j]
        //         newarray.push({
        //             jobOrder_id: actualProfesion.id ?? 0,
        //             actual_profession: actualProfesion.actual_profession,
        //             quantity: actualProfesion.quantity,
        //             seletion_target_quantity: actualProfesion.seletion_target_quantity,
        //             min_salary: actualProfesion.min_salary,
        //             max_salary: actualProfesion.max_salary,
        //             job_description: actualProfesion.job_description,
        //             master_service_charges: actualProfesion.master_service_charges,
        //             differed_service_charges: actualProfesion.differed_service_charges,
        //             sector: masterSector.id,
        //         })

        //     }

        // }

        const newarray =await generate_final_actual_profession(actualProfesionList, selectedDifferedSector, selectedMasterSector)


        console.log(newarray)
        const newJobOrder = props.jobOrder
        const oldActualProfesionList = newJobOrder.actualProfesionList ?? [];
        const newActualProfesionList = [...oldActualProfesionList, ...newarray];
        newJobOrder.actualProfesionList = newActualProfesionList

        // clean actual profesion, master and differed
        setActualProfesionList([])
        setSelectedDifferedSector([])
        setSelectedMasterSector([])

        props.changeJobOrder(newJobOrder)
        setIsActualProfessionUpdated(new Date().toTimeString())
    }
    async function onClickAdd() {

        // // call create
        // await createInterviewMode({
        //     name: name,
        //     selectionType: selectionType
        // })
        handleOnClickGenerate();
        


    }
    useEffect(() => {
        fetchInterviewSectorList()
    }, [])


    return (
        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add"
            onClose={props.onClose}
        >
            {/* select interview section */}
            <SelectSectorSection
                interviewSector={interviewSectionList}
                selectedDifferedSector={selectedDifferedSector}
                selectedMasterSector={selectedMasterSector}
                changeInterviewSector={(ele) => setInterviewSectorList(ele)}
                changeSelectedDifferedSector={(ele) => setSelectedDifferedSector(ele)}
                changeSelectedMasterSector={(ele) => setSelectedMasterSector(ele)}
            />

            <h1>Actual Profession Table</h1>
            <ActualProfessionTable
                actualProfessionList={actualProfesionList}
                jobOrder={props.jobOrder}
                onChange={(value) => setActualProfesionList(value)}
                isChanged={isactualProfessionUpdated}
            />
        </ModalContent>
    )
}