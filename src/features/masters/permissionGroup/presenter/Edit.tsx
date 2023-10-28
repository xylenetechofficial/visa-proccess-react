import { useEffect, useState } from "react";
import {  updatePermissionGroup } from "../repository";
import {  PermissionIndexInterface } from "../type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";




export default function Main(props: { permission: PermissionIndexInterface, onClose: ()=>void, fetchPermissionGroupList: any }) {
    const [name, setName] = useState('')
    async function onClickSave() {

        // call update
      await  updatePermissionGroup(props.permission.id ?? 0, {
            name: name,
        })
        props.fetchPermissionGroupList()
        props.onClose()
    }
    useEffect(() => {
        setName(props.permission.name)
    }, [])

    return (

        <ModalContent
            title="Update Permission"
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickSave}
        >


            {/* name Input */}
            <StandardInput
                value={name}
                onChangeValue={(e: string) => {
                    setName(e)
                }}
                label="Permission Name"
            />


        </ModalContent>
    )
}