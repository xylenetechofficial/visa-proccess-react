import { Checkbox } from "@mui/material";
import { useState } from "react";
import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from "../../../../componenets/Table";
import { RedButton } from "../../../../componenets/CustomButton";
import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { UnlabeledInput } from "../../../../componenets/Input";
import { convertDateFormat } from "../../../../utils/function";
import { ImmigrationInterface } from "../type";


const RejectCancelApproveTable = (props: {
    onClickEdit: any;
    immigrationData: ImmigrationInterface[],
    onChange: (value: ImmigrationInterface[]) => void
}) => {
    const HEADERLIST = ["SR NO.", "COMPANY NAME", "CONDIDATE NAME", "PP NO.", "SELECT", "ARN", "IMMIGRATION REQUIRED", "SUBMISSION DATE", "RECEIVED DATE", "PARTY CODE", "DIVISION DATE", "PP ISSUED DATE",
        "PP EXPIRY DATE", "PLACE OF ISSUE", "DATE OF BIRTH", "ADDRESS", "NOMINEE NAME", "NOMINEE RELATION", "PLACE OF BIRTH", "VISA NUMBER", "ACTUAL PROFESSION", "VISA PROFESSION", "AGENT", "AGENT LOCATION", "VISA AUTHORISATION", "VISA ISSUED DATE", "VISA RECEIVED DATE", "VISA EXPIRE DATE", "MOL NUMBER", "REJECT"]
    function onUpdateRow(index: number, rowData: ImmigrationInterface) {
        const nextData = props.immigrationData.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData)
    }
    return (
        <div className="overflow-auto">

            <Table2>
                <TableHead2>
                    <TableHeadRow>
                        {HEADERLIST.map((item) => (<TableHeadCell2> {item}</TableHeadCell2>))}
                    </TableHeadRow>
                </TableHead2>
                <TableBody2>
                    {props.immigrationData?.map((item: any, index: any) => (

                        <TableRow key={index}>
                            <TableCell>{item?.id}</TableCell>
                            <TableCell>{item?.name}</TableCell>
                            <TableCell>{item?.company_name}</TableCell>
                            <TableCell>{item?.passport_no}</TableCell>
                            <TableCell><Checkbox 
                            value={item?.isChecked}
                            onChange={(value)=>{
                                if (value) {
                                    onUpdateRow(index, { ...item, isChecked: value ? 1: 0 })
                                        , console.log(value)
                                }
                                else {
                                    onUpdateRow(index, { ...item, isChecked: value  })
                                }
                            }}
                            /></TableCell>
                            <TableCell><UnlabeledInput value={item.arn} onchange={(value) => {
                                if (value) {
                                    onUpdateRow(index, { ...item, arn: value })
                                        , console.log(value)
                                }
                                else {
                                    onUpdateRow(index, { ...item, arn: value })
                                }
                            }}

                            /></TableCell>
                            <TableCell><CustomCheckBox 
                                value={item?.immigration_required}
                            onChange={(value) => {
                                if (value) { onUpdateRow(index, { ...item, immigration_required: value }) }
                                else {
                                    onUpdateRow(index, { ...item, immigration_required: '' })
                                }

                            }} option={[{ name: "Yes", value: "yes" }, { name: "No", value: "no" }]} /></TableCell>
                            <TableCell><UnlabeledInput type="date" onchange={(value) => {
                                if (value) {
                                    onUpdateRow(index, { ...item, submission_date: value })
                                        , console.log(value)
                                }
                                else {
                                    onUpdateRow(index, { ...item, submission_date: value })
                                }
                            }} value={item?.submission_date} /></TableCell>
                            <TableCell><UnlabeledInput type="date" onchange={(value) => {
                                if (value) {
                                    onUpdateRow(index, { ...item, received_date: value })
                                        , console.log(value)
                                }
                                else {
                                    onUpdateRow(index, { ...item, received_date: value })
                                }
                            }}
                                value={item?.received_date} /></TableCell>
                            <TableCell>{item?.party_code}</TableCell>
                            <TableCell>{item?.division}</TableCell>
                            <TableCell>{item?.passport_issued_date}</TableCell>
                            <TableCell>{item?.passport_expiry_date}</TableCell>
                            <TableCell>{item?.place_of_issue}</TableCell>
                            <TableCell>{item?.date_of_birth}</TableCell>
                            <TableCell>{item?.address}</TableCell>
                            <TableCell>{item?.nominee_name}</TableCell>
                            <TableCell>{item?.nominee_relation}</TableCell>
                            <TableCell>{item?.place_of_birth}</TableCell>
                            <TableCell>{item?.visa_number}</TableCell>
                            <TableCell>{item?.actual_profession}</TableCell>
                            <TableCell>{item?.visa_profession}</TableCell>
                            <TableCell>{item?.agent_name}</TableCell>
                            <TableCell>{item?.agent_location}</TableCell>
                            <TableCell>{item?.visa_authorization}</TableCell>
                            <TableCell>{item?.visa_issued_date}</TableCell>
                            <TableCell>{item?.visa_received_date}</TableCell>
                            <TableCell>{item?.visa_expire_date}</TableCell>
                            <TableCell>{item?.mol_number}</TableCell>
                            <TableCell><RedButton text={"Reject"} onClick={() => console.log("Reject", index)} /></TableCell>
                        </TableRow>
                    ))}



                </TableBody2>
            </Table2>
        </div>
    );
};

export default RejectCancelApproveTable;
