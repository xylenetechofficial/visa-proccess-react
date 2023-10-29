import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { SubHeading1 } from "../../../../componenets/CoustomHeader";
import { Checkbox } from "flowbite-react";
import { PermissionGroupInterface, PermissionDataInterface, PageInterface, PermissionInterface } from "../type";
import { RenderPermissions } from "./RenderPermissions";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: {
    fetchPermissionGroupList: any
    permission: PermissionGroupInterface,
    onClose: any,
}) {

    const [permissionGroup, setPermissionGroup] = useState<PermissionGroupInterface>({} as PermissionGroupInterface)
    async function onClickAdd() {

        console.log(permissionGroup);   // Only Dev

        props.fetchPermissionGroupList()
        props.onClose()
    }

    useEffect(() => {
        setPermissionGroup(props.permission);
    }, []);

    return (
        <FullScreenModal
            title={`Edit Permission`}
            onClose={props.onClose}
            buttonName="Edit"
            handleClick={onClickAdd}
        >
            <div className="flex  justify-center">

                <StandardInput
                    label="Name"
                    value={permissionGroup.name}
                    onChangeValue={(value: string) => {
                        setPermissionGroup({ ...permissionGroup, name: value })
                    }}
                />

                <SubHeading1 text={permissionGroup.name} />
                <RenderPermissions
                    departments={permissionGroup.dpt_list ?? []}
                    onUpdate={(value) => setPermissionGroup({ ...permissionGroup, dpt_list: value })}
                />
            </div>

        </FullScreenModal>
    )
}

