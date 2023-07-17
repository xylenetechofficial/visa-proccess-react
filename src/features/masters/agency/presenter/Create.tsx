import { createAgency } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";







export default function Main(props: { onClose: any, fetchAgencyList: any }) {
    const [name, setName] = useState('')




    async function onClickAdd() {

        // call create
        await createAgency({
            name: name,
        })


        setName('')

        props.fetchAgencyList()
    }

    return (

        <ModalContent
            title="Add Agency"
            onClose={props.onClose}
            buttonName="Add"
            handleClick={onClickAdd}
        >


            {/* name Input */}
            <StandardInput 
            value={name}
            onChangeValue={(e:string) => {
                setName(e)
            }}
            label="Name"
             />
           

        </ModalContent>


    )
}