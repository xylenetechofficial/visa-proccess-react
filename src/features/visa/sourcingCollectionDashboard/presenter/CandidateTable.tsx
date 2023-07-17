import { Src_Col_Dash_CandidateInterface } from '../type'
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { useState, useEffect } from "react";
// import { UnlabeledInput } from '../../../../componenets/Input';
import { CustomCheckBox, CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
import { convertDateFormat } from '../../../../utils/function';
// import { CustomRadioButton } from '../../../../componenets/RadioButton';
// import { rcList } from '../../../job-dpt/db/user';
const initValue: Src_Col_Dash_CandidateInterface = {
    ActualProfession: "",
    age: 0,
    agent: "",
    candidateCode: 0,
    contactNo: "",
    docsForwardedToRc: 0,
    InterviewSector: "",
    medicalStatus: "",
    name: "",
    passportNo: "",
    medical: 0,
    pp: 0,
    photo: 0,
    status: "",
    totalSalary: 0,
    passportIssueDate: "",
    rcName: "",
    id: 0,
    passportExpiryDate: ""
}

const CandidateTable = (props: {
    candidateList: Src_Col_Dash_CandidateInterface[],
    onChange: (ele: Src_Col_Dash_CandidateInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")


    function onUpdateRow(index: number, rowData: Src_Col_Dash_CandidateInterface) {
        const nextData: Src_Col_Dash_CandidateInterface[] = props.candidateList.map((e, i) => {
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
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3 > Sr No.</TableHeadCell3>
                        <TableHeadCell3 >CANDIDATE CODE</TableHeadCell3>
                        <TableHeadCell3 >NAME	</TableHeadCell3>
                        <TableHeadCell3 >PASSPORT NO</TableHeadCell3>
                        <TableHeadCell3 >PASSPORT ISSUED DATE</TableHeadCell3>
                        <TableHeadCell3 >PASSPORT EXPIRY DATE</TableHeadCell3>
                        <TableHeadCell3 >ACTUAL PROFESSION</TableHeadCell3>
                        <TableHeadCell3 >RC NAME</TableHeadCell3>
                        <TableHeadCell3 >TOTAL SALARY(SR)</TableHeadCell3>
                        <TableHeadCell3 >AGENT</TableHeadCell3>
                        <TableHeadCell3 >AGE</TableHeadCell3>
                        <TableHeadCell3 >INTERVIEW SECTOR</TableHeadCell3>
                        <TableHeadCell3 >CONTACT NO</TableHeadCell3>
                        <TableHeadCell3 >*Select</TableHeadCell3>
                        <TableHeadCell3 >*MEDICAL STATUS</TableHeadCell3>
                        <TableHeadCell3 >MEDICAL</TableHeadCell3>
                        <TableHeadCell3 >PP</TableHeadCell3>
                        <TableHeadCell3 >PHOTO</TableHeadCell3>
                        <TableHeadCell3 >STATUS</TableHeadCell3>
                        <TableHeadCell3 >DOCS FWDD TO RC</TableHeadCell3>


                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.candidateList && props.candidateList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onUpdate={onUpdateRow}
                        />

                    ))}


                    {/* <TableRow3>
                        <TableCell3>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell3>
                    </TableRow3> */}
                </TableBody3>
            </Table3>

        </div>
    )
}

export default CandidateTable

const TableData = (
    props: {
        index: number;
        data: Src_Col_Dash_CandidateInterface;
        onUpdate: (index: number, rowData: Src_Col_Dash_CandidateInterface) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<Src_Col_Dash_CandidateInterface>(initValue)
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])

    useEffect(() => {
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    // console.log(localRowData)
    return (
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 >
                {props.data.candidateCode}
            </TableCell3>

            <TableCell3 >
                {props.data.name}

            </TableCell3>
            <TableCell3 >
                {props.data.passportNo}

            </TableCell3>
            <TableCell3 >
                {convertDateFormat(props.data.passportIssueDate)}

            </TableCell3>
            <TableCell3 >
                {convertDateFormat(props.data.passportExpiryDate)}

            </TableCell3>
            <TableCell3 >
                {props.data.ActualProfession}

            </TableCell3>
            <TableCell3 >
                {props.data.rcName}

            </TableCell3>
            <TableCell3 >
                {props.data.totalSalary}

            </TableCell3>
            <TableCell3 >
                {props.data.agent_name}

            </TableCell3> <TableCell3 >
                {props.data.age}

            </TableCell3> <TableCell3 >
                {props.data.InterviewSector}

            </TableCell3> <TableCell3 >
                {props.data.contactNo}

            </TableCell3> 
            
            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, checked: value })}
                    value={localRowData.checked ? true : false}
                />

            </TableCell3>
            
            <TableCell3 >
                <CustomSelectComponentUnlabeled
                    onChange={(value) => setLocalRowData({ ...localRowData, medicalStatus: value })}
                    options={[
                        { name: "Fit", value: "Fit" },
                        { name: "Unfit", value: "Unfit" },
                        { name: "Repeat", value: "Repeat" },
                        { name: "Backed Out", value: "Backed Out" },
                    ]}
                    value={localRowData.medicalStatus}
                />

            </TableCell3>

            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, pp: value ? 1 : 0 })}
                    value={localRowData.pp ? true : false}
                />

            </TableCell3>

            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, photo: value ? 1 : 0 })}
                    value={localRowData.photo ? true : false}
                />

            </TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, medical: value ? 1 : 0 })}
                    value={localRowData.medical ? true : false}
                />

            </TableCell3>

            <TableCell3 >
                {props.data.status}

            </TableCell3>
            <TableCell3 >
                <CustomSingleCheckBox
                    onChange={(value) => setLocalRowData({ ...localRowData, docsForwardedToRc: value ? 1 : 0 })}
                    value={localRowData.docsForwardedToRc ? true : false}
                />

            </TableCell3>
          
            


        </TableRow3>
    )
}