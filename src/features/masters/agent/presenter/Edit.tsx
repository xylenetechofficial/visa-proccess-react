import { useEffect, useState } from "react";
import { updateAgent } from "../repository";
import { AgentInterface } from "../type";
import { showMessage } from "../../../../utils/alert";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { SectorInterface } from "../../sector/type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import { readSectorList } from "../../sector/repository";








export default function Main(props: { agent: AgentInterface, onClose: any, fetchAgentList: any }) {


    const initValue: AgentInterface = {
        name: "",
        isDocumentRegistration: 0,
        location: 0,
        number: "",
    }
    const [agent, setAgent] = useState(initValue)

    const [sectorList, setSectorList] = useState<SectorInterface[]>([])

    const fetchSectorList = async () => {
        const res = await readSectorList()
        setSectorList(res)
    }
    useEffect(() => {
        fetchSectorList()
        setAgent(props.agent)
    }, [props.agent])


    async function onClickSave() {
        const data = await updateAgent(props.agent.id ?? 0, agent)
        showMessage(data.message)
        props.fetchAgentList()
        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Agent"
            onClose={props.onClose}
        >


            {/* name Input */}
            <StandardInput
                label="Name"
                value={agent.name}
                onChangeValue={(value: string) => {
                    setAgent({ ...agent, name: value })
                }}
            />


            {/* ducument registration */}
            <CustomRadioButton
                label="Documentation Registration"
                value={agent.isDocumentRegistration}
                option={[{ value: 1, name: "yes" }, { value: 0, name: "No" }]}
                onChange={(value) => {
                    setAgent({ ...agent, isDocumentRegistration: value })
                }}
            />



            {/* Location */}
            <CustomSelectComponent
                value={agent.location}
                label="Location"
                options={
                    selectOptionConveter({ options: sectorList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setAgent({ ...agent, location: value })

                }} />
            {/* Agent Number */}
            <StandardInput
                label="Agent Number"
                value={agent.number}
                onChangeValue={(value: string) => {
                    setAgent({ ...agent, number: value })
                }}
            />

            {/* Service Tax */}
            {/* <StandardInput
            label="Service Tax"
            type="number"
            value={agent.serviceTax}
            onChangeValue={(value: string) => {
                setAgent({ ...agent, serviceTax:parseInt(value)  })
            }}
        /> */}


        </ModalContent>
    )
}