import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
// import { SubHeading1 } from "../../../../componenets/CoustomHeader";
// import { Checkbox } from "flowbite-react";
import { PermissionGroupInterface, PermissionDataInterface, PageInterface, PermissionInterface, UserRole, UserInterface } from "../type";
import { RenderPermissions } from "./RenderPermissions";
import { StandardInput } from "../../../../componenets/Input";
import { readSinglePermissionGroup, updatePermissionGroup } from "../repository/PermissionGroup";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { updateUser } from "../repository";


export default function Main(props: {
    user: UserInterface,
    userRoleList: UserRole[]
    onClose: any,
}) {

    const initValue: PermissionGroupInterface = {
        id: 0,
        name: "",
        dpt_list: []
    }
    const [permissionGroup, setPermissionGroup] = useState(initValue)

    const initValue_user: UserInterface = {
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
    const [user, setUser] = useState(initValue_user)

    async function onClickEdit() {

        console.log(permissionGroup);   // Only Dev
        const res = await updatePermissionGroup(permissionGroup)

        if (!res) return

        setPermissionGroup(initValue)

        const data = await updateUser(props.user.id ?? 0, user)

        if (!data) return
        props.onClose()
    }

    const fetchPermissionList = async () => {
        const res: any = await readSinglePermissionGroup(props.user.permission_group_id ?? 0)
        setPermissionGroup(res);
    }

    useEffect(() => {
        setUser(props.user)
        fetchPermissionList();
    }, [props.user])

    return (
        <FullScreenModal
            title={`Edit Permission`}
            onClose={props.onClose}
            buttonName="Edit"
            handleClick={onClickEdit}
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

            {/* <div className="w-96">
                <StandardInput
                    label="Name"
                    value={permissionGroup.name}
                    onChangeValue={(value: string) => {
                        setPermissionGroup({ ...permissionGroup, name: value })
                    }}
                />
            </div> */}
            <div className="w-full">

                {/* <SubHeading1 text={permissionGroup.name} /> */}
                <RenderPermissions
                    departments={permissionGroup.dpt_list ?? []}
                    onUpdate={(value) => setPermissionGroup({ ...permissionGroup, dpt_list: value })}
                />
            </div>

        </FullScreenModal>
    )
}

