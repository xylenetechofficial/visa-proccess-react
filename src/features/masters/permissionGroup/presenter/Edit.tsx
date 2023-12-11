import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
// import { SubHeading1 } from "../../../../componenets/CoustomHeader";
// import { Checkbox } from "flowbite-react";
import { PermissionGroupInterface, PermissionDataInterface, PageInterface, PermissionInterface } from "../type";
import { RenderPermissions } from "./RenderPermissions";
import { StandardInput } from "../../../../componenets/Input";
import { readSinglePermissionGroup, updatePermissionGroup } from "../repository";
import { Heading1 } from "../../../../componenets/CoustomHeader";


export default function Main(props: {
    permission: PermissionGroupInterface,
    onClose: any,
}) {

    const initValue: PermissionGroupInterface = {
        id: 0,
        name: "",
        dpt_list: []
    }

    const [permissionGroup, setPermissionGroup] = useState(initValue)
    async function onClickAdd() {

        console.log(permissionGroup);   // Only Dev
        const res = await updatePermissionGroup(permissionGroup)

        if (!res) {
            setPermissionGroup(initValue)
            props.onClose()
        }
    }

    const fetchPermissionList = async () => {
        const res: any = await readSinglePermissionGroup(props.permission.id ?? 0)
        setPermissionGroup(res);
    }

    useEffect(() => {
        fetchPermissionList();
    }, []);

    return (
        <FullScreenModal
            title={`Edit Permission`}
            onClose={props.onClose}
            buttonName="Edit"
            handleClick={onClickAdd}
        >
             <div className="w-96">
                <Heading1
                text={permissionGroup.name}
                />
             {/* <StandardInput
                    label="Name"
                    value={permissionGroup.name}
                    onChangeValue={(value: string) => {
                        setPermissionGroup({ ...permissionGroup, name: value })
                    }}
                /> */}
             </div>
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

