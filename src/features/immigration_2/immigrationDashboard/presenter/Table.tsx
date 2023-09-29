import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { RedButton } from "../../../../componenets/CustomButton";
import { CustomCheckBox, CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { UnlabeledInput } from "../../../../componenets/Input";
import { convertDateFormat } from "../../../../utils/function";
import { ImmigrationInterface } from "../type";


const Main = (props: {
    // onClickEdit: any;
    onClickReject: (item: ImmigrationInterface) => void
    immigrationDataList: ImmigrationInterface[],
    onChange: (value: ImmigrationInterface[]) => void,
    fetchImmigrationList: any
}) => {

    const HEADERLIST = [
        "SR NO.",
        "COMPANY NAME",
        "CONDIDATE NAME",
        "PP NO.",
        "SELECT",
        "IMMIGRATION REQUIRED",
        "SUBMISSION DATE",
        "RECEIVED DATE",
        "PARTY CODE",
        "DIVISION",

        "PP ISSUED DATE",
        "PP EXPIRY DATE",
        "PLACE OF ISSUE",
        "DATE OF BIRTH",
        "ADDRESS",

        "NOMINEE NAME",
        "NOMINEE RELATION",
        "PLACE OF BIRTH",
        "VISA NUMBER",
        "ACTUAL PROFESSION",
        "VISA PROFESSION",

        // "AGENT",
        // "AGENT LOCATION",
        "VISA AUTHORISATION",
        "VISA ISSUED DATE",
        "VISA RECEIVED DATE",
        "VISA EXPIRE DATE",
        "MOL NUMBER",
        "REJECT"]
    function onUpdateRow(index: number, rowData: ImmigrationInterface) {
        const nextData = props.immigrationDataList.map((e, i) => {
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

            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.immigrationDataList.map((item, index) => (

                        <TableRow3 key={index}>
                            <TableCell3>{index + 1}</TableCell3>
                            <TableCell3>{item.company_name}</TableCell3>
                            <TableCell3>{item.name}</TableCell3>
                            <TableCell3>{item.passport_no}</TableCell3>
                            <TableCell3>
                                <CustomSingleCheckBox
                                    onChange={(value) => {
                                        onUpdateRow(index, { ...item, checked: value })
                                    }}
                                    value={item.checked ? true : false}
                                />
                            </TableCell3>
                            <TableCell3>
                                <CustomCheckBox
                                    value={item.immigration_required}
                                    onChange={(value) => {
                                        if (value == item.immigration_required)
                                            onUpdateRow(index, { ...item, immigration_required: "" })
                                        else
                                            onUpdateRow(index, { ...item, immigration_required: value })
                                    }}
                                    option={[{ name: "Yes", value: "yes" }, { name: "No", value: "no" }]} /></TableCell3>

                            <TableCell3>
                                <UnlabeledInput type="date" onchange={(value) => {
                                    onUpdateRow(index, { ...item, immigration_submission_date: value })
                                }}
                                    value={item.immigration_submission_date} />
                            </TableCell3>
                            <TableCell3>
                                <UnlabeledInput type="date" onchange={(value) => {
                                    onUpdateRow(index, { ...item, immigration_received_date: value })
                                }}
                                    value={item.immigration_received_date} />
                            </TableCell3>

                            <TableCell3>{item.party_code}</TableCell3>
                            <TableCell3>{item.division}</TableCell3>

                            <TableCell3>{convertDateFormat(item.pp_issued_date)}</TableCell3>
                            <TableCell3>{convertDateFormat(item.pp_expiry_date)}</TableCell3>
                            <TableCell3>{item.place_of_issue}</TableCell3>
                            <TableCell3>{convertDateFormat(item.date_of_birth)}</TableCell3>
                            <TableCell3>{item.address}</TableCell3>

                            <TableCell3>{item.nominee_name}</TableCell3>
                            <TableCell3>{item.nominee_relation}</TableCell3>
                            <TableCell3>{item.place_of_birth}</TableCell3>
                            <TableCell3>{item.visa_number}</TableCell3>
                            <TableCell3>{item.actual_profession}</TableCell3>
                            <TableCell3>{item.visa_profession}</TableCell3>

                            {/* <TableCell3>{item.agent_name}</TableCell3> */}
                            {/* <TableCell3>{item.agent_location_name}</TableCell3> */}
                            <TableCell3>{item.visa_authorization_name}</TableCell3>
                            <TableCell3>{convertDateFormat(item.visa_issued_date)}</TableCell3>
                            <TableCell3>{convertDateFormat(item.visa_received_date)}</TableCell3>
                            <TableCell3>{convertDateFormat(item.visa_expire_date)}</TableCell3>
                            <TableCell3>{item.mol_number}</TableCell3>
                            <TableCell3><RedButton text={"Reject"} onClick={() => props.onClickReject(item)} /></TableCell3>
                        </TableRow3>
                    ))}



                </TableBody3>
            </Table3>
        </div>
    );
};

export default Main;
