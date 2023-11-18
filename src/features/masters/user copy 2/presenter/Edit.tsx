import { useEffect, useState } from "react";
import { updateUser } from "../repository";
import { UserInterface, UserRole } from "../type";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import { PermissionGroupInterface } from "../../permissionGroup/type";



export default function Main(props: {
    user: UserInterface,
    onClose: any,
    permissionGroupList: PermissionGroupInterface[]
    userRoleList: UserRole[]
}) {


    const initValue: UserInterface = {
        id: 0,
        name: "",
        user_name: "",
        email: "",
        password: "",
        remember_token: "",
        permission_group_id: 0,
        permission_group_name: "",
        user_role_id: 0,
        user_role_name: "",
        active: 0,
    }
    const [user, setUser] = useState(initValue)

    useEffect(() => {
        setUser(props.user)
    }, [props.user])


    async function onClickSave() {
        const data = await updateUser(props.user.id ?? 0, user)

        if (!data) return

        props.onClose()
    }

    return (

        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update User"
            onClose={props.onClose}
        >


            <StandardInput
                label="Name"
                value={user.name}
                onChangeValue={(value: string) => {
                    setUser({ ...user, name: value })
                }}
            />


            <StandardInput
                label="User Name"
                value={user.user_name}
                onChangeValue={(value: string) => {
                    setUser({ ...user, user_name: value })
                }}
            />

            <StandardInput
                label="Email"
                value={user.email}
                onChangeValue={(value: string) => {
                    setUser({ ...user, email: value })
                }}
            />


            <StandardInput
                label="Password"
                value={user.password}
                onChangeValue={(value: string) => {
                    setUser({ ...user, password: value })
                }}
            />

            <CustomSelectComponent
                value={user.permission_group_id}
                label="Permission Group"
                options={
                    selectOptionConveter({ options: props.permissionGroupList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setUser({ ...user, permission_group_id: value })

                }} />

            <CustomSelectComponent
                value={user.user_role_id}
                label="User Role"
                options={
                    selectOptionConveter({ options: props.userRoleList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setUser({ ...user, user_role_id: value })

                }} />


            <CustomRadioButton
                label="Active: "
                value={user.active}
                inlined
                option={[{ value: 1, name: "yes" }, { value: 0, name: "No" }]}
                onChange={(value) => {
                    setUser({ ...user, active: value })
                }}
            />


        </ModalContent>
    )
}