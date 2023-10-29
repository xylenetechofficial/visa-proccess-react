import { Checkbox } from "flowbite-react";
import { SubHeading1 } from "../../../../componenets/CoustomHeader";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { PermissionInterface } from "../type";

export function PermissionItem(props: { permission: PermissionInterface, index_department: number, index_page: number, index: number, onUpdate: (index_department: number, index_page: number, index: number, value: PermissionInterface) => void }) {

    return (
        <div className="">
            <div>
                {props.permission && (
                    <div key={props.permission.id}>
                        <SubHeading1 text={props.permission.name} />
                        <CustomSingleCheckBox
                            value={props.permission.check}
                            onChange={(e) => props.onUpdate(props.index_department, props.index_page, props.index, { ...e, check: e })}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}