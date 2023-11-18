import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { SubHeading1 } from "../../../../componenets/CoustomHeader";
// import { Checkbox } from "flowbite-react";
import { PermissionGroupInterface, PermissionDataInterface, PageInterface, PermissionInterface, UserInterface, UserRole } from "../type";
import { RenderPermissions } from "./RenderPermissions";
import { StandardInput } from "../../../../componenets/Input";
import { createPermissionGroup, readSinglePermissionGroup } from "../repository/PermissionGroup";
import { createUser } from "../repository";
import { CustomRadioButton } from "../../../../componenets/RadioButton";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { getNanoID } from "../../../../utils/function";


export default function Main(props: {
    user: UserInterface,
    userRoleList: UserRole[]
    onClose: any,
    actionType?: string
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
    async function onClickAdd() {

        console.log(permissionGroup);   // Only Dev
        const res = await createPermissionGroup({ ...permissionGroup, name: getNanoID() })

        if (!res) return


        const data = await createUser({ ...user, permission_group_id: res.id })

        if (!data) return

        setPermissionGroup(initValue)
        setUser(initValue_user)

        props.onClose()
    }

    const fetchPermissionList = async () => {
        const res: any = await readSinglePermissionGroup(user.user_role_id)
        setPermissionGroup(res);
    }

    useEffect(() => {
        fetchPermissionList();
    }, [user.user_role_id]);

    return (
        <FullScreenModal
            title={`Create Permission`}
            onClose={props.onClose}
            buttonName="Create"
            handleClick={onClickAdd}
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

