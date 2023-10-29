import { useEffect, useState } from "react";
import { updatePermissionGroup } from "../repository";
import { PermissionGroupInterface, PermissionInterface } from "../type";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import MultiSelectCheckbox, { MultiSelectCheckbox2 } from "../../../../componenets/CustomComponents";
import { selectOptionConveter } from "../../../../componenets/SelectBox";
import { Checkbox } from "flowbite-react";




export default function Main(props: { permission: PermissionGroupInterface, onClose: () => void, fetchPermissionGroupList: any }) {
    const [name, setName] = useState('')
    async function onClickSave() {

        // call update
        await updatePermissionGroup(props.permission.id ?? 0, {
            name: name,
        })
        props.fetchPermissionGroupList()
        props.onClose()
    }
    useEffect(() => {
        setName(props.permission.name)
    }, [])
    const [values, setValues] = useState(false)
    console.log(props.permission)
    // Create a recursive component to render department, page, and permissions
   

    return (

        <FullScreenModal
            title={`Update Permission`}
            onClose={props.onClose}
            buttonName="Update"
            handleClick={onClickSave}
        >


            {/* name Input */}
            {/* <StandardInput
                value={name}
                onChangeValue={(e: string) => {
                    setName(e)
                }}
                label="Permission Name"
            /> */}
            {/* <div className="border p-2">
                <div className="flex justify-center m-3">
                    <UpdateContentBox>
                        <SubHeading1 text={props.permission.name} />
                        <Checkbox />
                    </UpdateContentBox>
                </div>
                {props.permission.dpt_list?.map((item: any, index: any) =>
                    <>
                        <div className="flex justify-center">
                            <UpdateContentBox>
                                <SubHeading1 text={item.name} />

                                <Checkbox />
                            </UpdateContentBox>
                        </div>
                        {item.page_list.map((ele: any, eleIndex: any) => {
                            
                            <UpdateContentBox>
                                <SubHeading1 text={ele.name} />

                            </UpdateContentBox>
                            {
                                ele.permission_list.map((list: any, listIndex: any) =>
                                    
                                    <>
                                        {console.log(list)}
                                    <div className="flex justify-center">

                                        <div>
                                            <Checkbox onChange={(e) => console.log(e)} /><span className="m-3">Craete</span>
                                        </div>
                                        <div>
                                            <Checkbox onChange={(e) => console.log(e)} /><span className="m-3"> Update</span>
                                        </div>
                                        <div>
                                            <Checkbox onChange={(e) => console.log(e)} /><span className="m-3">Delete</span>
                                        </div>
                                    </div>
                                    </>
                                )
                            }
                        })}
                    </>
                )}

            </div> */}
            {/* ))} */}
            <div className="flex  justify-center">

                <SubHeading1 text={props.permission.name} />

                <RenderPermissions departments={props.permission.dpt_list} />
            </div>

        </FullScreenModal>
    )
}
function RenderPermissions(props: { departments: any }) {
    return (
        <div className=" min-w-[80%] m-5">
            {props.departments.map((department: any) => (
                <div key={department.name} className="border">

                    <div className="flex">
                        <SubHeading1 text={department.name} />
                        <Checkbox />

                    </div>

                    {department.page_list.map((page: any) => (
                        <div key={page.name} className="border m-5 w-full min-w-96">
                            <div className="flex m-2">
                                <SubHeading1 text={page.name} />
                                <Checkbox />
                            </div>
                            <div className="flex justify-center m-3">
                                {page.permission_list.map((perm: any) => (
                                    <PermissionItem key={perm.id} permission={perm} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
function PermissionItem(props: { permission: any }) {

    return (
        <div className="">
            <div>
                {props.permission && (
                    <div key={props.permission.id}>
                        <SubHeading1 text={props.permission.name} />
                        <Checkbox onChange={(e) => console.log(e)} />

                    </div>
                )}
            </div>
        </div>
    );
}