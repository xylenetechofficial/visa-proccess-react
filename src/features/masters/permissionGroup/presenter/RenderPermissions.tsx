import { Checkbox } from "flowbite-react";
import { SubHeading1 } from "../../../../componenets/CoustomHeader";
import { PermissionDataInterface, PageInterface, PermissionInterface } from "../type";
import { PermissionItem } from "./PermissionItem";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";

export function RenderPermissions(props: { departments: PermissionDataInterface[], onUpdate: (value: PermissionDataInterface[]) => void }) {

    function onUpdate(index_department: number, index_page: number, index: number, value: PermissionInterface) {

        const nextData = props.departments;

        nextData[index_department].page_list[index_page].permission_list[index].check = value.check

        props.onUpdate(nextData)
    }

    function onUpdate_page(index_department: number, index_page: number, value: PageInterface) {

        const nextData = props.departments;
        const is_checked = value.check
        const permission_list = nextData[index_department].page_list[index_page].permission_list ?? []

        // update all permissions
        const next_permission_list = permission_list.map((e, i) => {
            if (is_checked) {
                return { ...e, check: true }
            } else {
                return { ...e, check: false }
            }
        });
        nextData[index_department].page_list[index_page].permission_list = next_permission_list
        nextData[index_department].page_list[index_page].check = is_checked

        props.onUpdate(nextData)
    }


    function onUpdate_department(index_department: number, value: PermissionDataInterface) {

        const nextData = props.departments;

        const is_checked_department = value.check
        // update all permissions
        const next_page_list = nextData[index_department].page_list.map((page, i) => {
            const next_permission_list = page.permission_list.map((permission, j) => {
                if (is_checked_department) {
                    return { ...permission, check: true }
                } else {
                    return { ...permission, check: false }
                }
            });

            return { ...page, check: is_checked_department, permission_list: next_permission_list }
        });
        nextData[index_department].page_list = next_page_list
        nextData[index_department].check = is_checked_department

        props.onUpdate(nextData)
    }

    return (
        <div className=" min-w-[80%] m-5">
            {props.departments && props.departments.map((department: PermissionDataInterface, index_department: number) => (
                <div key={department.name} className="border">

                    <div className="flex">
                        <SubHeading1 text={department.name} />
                        <CustomSingleCheckBox
                            value={department.check}
                            onChange={(e) => onUpdate_department(index_department, { ...e, check: e })}
                        />
                    </div>

                    {department.page_list && department.page_list.map((page: PageInterface, index_page: number) => (
                        <div key={page.name} className="border m-5 w-full min-w-96">
                            <div className="flex m-2">
                                <SubHeading1 text={page.name} />
                                <CustomSingleCheckBox
                                    value={page.check}
                                    onChange={(e) => onUpdate_page(index_department, index_page, { ...e, check: e })}
                                />
                            </div>
                            <div className="flex justify-center m-3">
                                {page.permission_list.map((perm: PermissionInterface, index: number) => (
                                    <PermissionItem key={perm.id} permission={perm} index_department={index_department} index_page={index_page} index={index} onUpdate={onUpdate} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}