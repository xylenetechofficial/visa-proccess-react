import { createVendor } from "../repository";
import { useState } from "react";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";







export default function Main(props: { onClose: any, fetchVendorList: any }) {
    const [name, setName] = useState('')

    async function onClickAdd() {
        // call create
        await createVendor({name: name,})
        setName('')
        props.fetchVendorList()
    }

    return (

        <ModalContent
            title="Add Vendor"
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
            label="Vendor Name"
             />
           

        </ModalContent>


    )
}