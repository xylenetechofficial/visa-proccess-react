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
import { readBDEList, readGeneralManagerList, readOperationManagerist, readRecruitCoordinatorList, readRecruitManagerList, readRecruitSuperVisorList, updateUser } from "../repository";
import { readSectorList } from "../../sector/repository";
import { SectorInterface } from "../../sector/type";
import { Heading6 } from "../../../../componenets/CoustomHeader";
import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { DataByList } from "../../../db";


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

        country_id:0,
        gm_id: 0,
        om_id: 0,
        rm_id: 0,
        rs_id: 0,
        data_by: "",
        sector_id: 0,
        invoice_sector_id: 0,

        active: 0,
    }
    const [user, setUser] = useState(initValue_user)
    const [role, setRole] = useState({} as UserRole)


    const [BDEList, setBDEList] = useState<UserInterface[]>([])
    const fetchBDEList = async () => {
        const data = await readBDEList()
        setBDEList(data)
    }

    const [SectorList, setSectorList] = useState<SectorInterface[]>([])
    const fetchSectorList = async () => {
        const data = await readSectorList()
        console.log("readSectorList:", data);
        setSectorList(data)
    }

    const [GeneralManagerist, setGeneralManagerist] = useState<UserInterface[]>([])
    const fetchGeneralManagerist = async () => {
        const data = await readGeneralManagerList()
        console.log("readGeneralManagerist:", data);
        setGeneralManagerist(data)
    }

    const [OperationManagerist, setOperationManagerist] = useState<UserInterface[]>([])
    const fetchOperationManagerist = async () => {
        const data = await readOperationManagerist()
        console.log("readOperationManagerist:", data);
        setOperationManagerist(data)
    }

    const [RecruitManagerList, setRecruitManagerList] = useState<UserInterface[]>([])
    const fetchRecruitManagerList = async () => {
        const data = await readRecruitManagerList()
        setRecruitManagerList(data)
    }

    const [RecruitSuperVisorList, setRecruitSuperVisorList] = useState<UserInterface[]>([])
    const fetchRecruitSuperVisorList = async () => {
        const data = await readRecruitSuperVisorList()
        setRecruitSuperVisorList(data)
    }

    const [RecruitCoordinatorList, setRecruitCoordinatorList] = useState<UserInterface[]>([])
    const fetchRecruitCoordinatorList = async () => {
        const data = await readRecruitCoordinatorList()
        setRecruitCoordinatorList(data)
    }

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


    useEffect(() => {
        // fetchBDEList()
        fetchGeneralManagerist()
        fetchOperationManagerist()
        fetchRecruitManagerList()
        fetchRecruitSuperVisorList()
        // fetchRecruitCoordinatorList()
        fetchSectorList()
    }, []);


    return (
        <FullScreenModal
            title={`Edit User`}
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
                    for (let i = 0; i < props.userRoleList.length; i++) {
                        const element = props.userRoleList[i];
                        if (element.id == value) {
                            setRole(element)
                            break
                        }
                    }
                    setUser({ ...user, user_role_id: value })

                }} />


            {/* ########################################## */}
            {/* Genaral Manager */}
            {role.gm ?
                <CustomSelectComponent
                    required
                    value={user.gm_id}
                    options={selectOptionConveter({ options: GeneralManagerist, options_struct: { name: "name", value: "id" } })}
                    onChange={(value) => setUser({ ...user, gm_id: value })}
                    label="Genaral Manager"
                /> : ""}

            {/* OPs name */}
            {role.om ?
                <CustomSelectComponent
                    required
                    value={user.om_id}
                    options={selectOptionConveter({ options: OperationManagerist, options_struct: { name: "name", value: "id" } })}
                    onChange={(value) => setUser({ ...user, om_id: value })}
                    label="Operation Manager"
                /> : ""}

            {/* Recruit Manager */}
            {role.rm ?
                <CustomSelectComponent
                    required
                    value={user.rm_id}
                    options={selectOptionConveter({ options: RecruitManagerList, options_struct: { name: "name", value: "id" } })}
                    onChange={(value) => setUser({ ...user, rm_id: value })}
                    label="Recruit Manager"
                /> : ""}

            {/* Recruit SuperVisor */}
            {role.rs ?
                <CustomSelectComponent
                    required
                    value={user.rs_id}
                    options={selectOptionConveter({ options: RecruitSuperVisorList, options_struct: { name: "name", value: "id" } })}
                    onChange={(value) => setUser({ ...user, rs_id: value })}
                    label="Recruit SuperVisor"
                /> : ""}

            {/* Data by */}

            {role.data_by ?
                <>
                    <Heading6 text='View Data Of Countries' />

                    <CustomCheckBox
                        inlined
                        value={user.data_by}
                        option={selectOptionConveter({ options: DataByList, options_struct: { name: "name", value: "id" } })}
                        onChange={(value) => setUser({ ...user, data_by: value })}
                    />
                </> : ""}

            {/* Sector */}
            {role.sector ?
                <CustomSelectComponent
                    required
                    value={user.sector_id}
                    options={selectOptionConveter({ options: SectorList, options_struct: { name: "name", value: "id" } })}
                    onChange={(value) => setUser({ ...user, sector_id: value })}
                    label="Sector"
                /> : ""}

            {/* Invoice Sector */}
            {role.invoice_sector ?
                <CustomSelectComponent
                    required
                    value={user.invoice_sector_id}
                    options={selectOptionConveter({ options: SectorList, options_struct: { name: "name", value: "id" } })}
                    onChange={(value) => setUser({ ...user, invoice_sector_id: value })}
                    label="Invoice Sector"
                /> : ""}

            {/* ########################### */}

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

