// import { createAgency } from "../repository";
import { useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";
import { PermissionGroupInterface } from "../type";
import { SubHeading1 } from "../../../../componenets/CoustomHeader";
import { Checkbox } from "flowbite-react";







export default function Main(props: {permission: PermissionGroupInterface, onClose: any, fetchAgencyList: any }) {
    const [name, setName] = useState('')




    async function onClickAdd() {

        // call create
        // await createAgency({
        //     name: name,
        // })


        setName('')

        props.fetchAgencyList()
        props.onClose()
    }

    return (

        // <ModalContent
        //     title="Add Agency"
        //     onClose={props.onClose}
        //     buttonName="Add"
        //     handleClick={onClickAdd}
        // >


        //     {/* name Input */}
        //     <StandardInput 
        //     value={name}
        //     onChangeValue={(e:string) => {
        //         setName(e)
        //     }}
        //     label="Name"
        //      />
           

        // </ModalContent>


        <FullScreenModal
            title={`Create Permission`}
            onClose={props.onClose}
            buttonName="Create"
            handleClick={onClickAdd}
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