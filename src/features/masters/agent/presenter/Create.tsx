import { useEffect, useState } from "react";
import { showMessage } from "../../../../utils/alert";
import { AgentInterface } from "../type";
import { SectorInterface } from "../../sector/type";
import { readSectorList } from "../../sector/repository";
import { createAgent } from "../repository";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";




export default function Main(props: { onClose: any, fetchAgentList: any }) {
    const initValue: AgentInterface = {
        name: "",
        isDocumentRegistration: 0,
        location: 0,
        number: "",
    }
    const [agent, setAgent] = useState(initValue)

    const [sectorList, setSectorList] = useState<SectorInterface[]>([])

    const fetchSectorList = async () => {
        setSectorList(await readSectorList())
        // let options=[];
        // sectorList.map
    }
    useEffect(() => {
        fetchSectorList()

    }, [])

    async function onClickAdd() {
        // let agentNumber = getNanoID()

        // call create
        const data = await createAgent(agent)
        // show alert
        showMessage(data.message)

        if (data.code !== 201)
            return

        setAgent(initValue)

        props.fetchAgentList()
        props.onClose()
    }





    return (

        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Agent"
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
                label="Document Registration"
                option={[{ value: 1, name: "yes" }, { value: 0, name: "No" }]}
                value={agent.isDocumentRegistration}
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

            


        </ModalContent>

    )
}