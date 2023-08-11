import { VisaAllocationInterface } from '../type'
// import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
// import { SectorInterface } from '../../../masters/sector/type';
// import { CompanyInterface } from '../../../masters/company/type';
// import { CountryInterface } from '../../../masters/country/type';


import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
// import { CustomCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
import { UserInterface } from '../../../context/Model';
// import { readOperationManagerist, readRecruitCoordinatorList, readRecruitManagerList, readRecruitSuperVisorList } from '../../../masters/user/repository';
// import { CustomRadioButton } from '../../../../componenets/RadioButton';
// import { rcList } from '../../../job-dpt/db/user';



const VisaAllocationTable = (props: {
    visaAllocationList: VisaAllocationInterface[],
    onChange: (ele: VisaAllocationInterface[]) => void,
    RecruitCoordinatorList:UserInterface[]
}) => {

    const [onChange, setonChange] = useState<string>("")

    const onClickAddNewRow = () => {
        const arr: VisaAllocationInterface[] = [...props.visaAllocationList, {
            allocated_quantity: 0,
            rc_name: 0
        }]
        props.onChange(arr)
    }


    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return
        const arr = props.visaAllocationList.filter((e, i) => i !== index)
        props.onChange(arr)
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: VisaAllocationInterface) {
        const nextData = props.visaAllocationList.map((e, i) => {
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


    const Create6row = () => {
        const arr = []
        for (let i = 0; i < 6; i++) {
            arr.push({ allocated_quantity: 0, rc_name: 0 })
        }

        props.onChange(arr)

    }

    useEffect(() => {
        Create6row()
    }, [])
    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell >RC Name
                        </TableHeadCell>
                        <TableHeadCell >Allocated Qty</TableHeadCell>


                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.visaAllocationList && props.visaAllocationList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                            RecruitCoordinatorList={props.RecruitCoordinatorList}
                        />

                    ))}


                    {/* <TableRow>
                        <TableCell>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>

        </div>
    )
}

export default VisaAllocationTable

const TableData = (
    props: {
        index: number;
        data: VisaAllocationInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: VisaAllocationInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
        RecruitCoordinatorList:UserInterface[]
    }

) => {

    const [localRowData, setLocalRowData] = useState<VisaAllocationInterface>({
        allocated_quantity: 0,
        rc_name: 0,
    })

    const [RecruitCoordinatorList, setRecruitCoordinatorList] = useState<UserInterface[]>([])
    // const fetchRecruitCoordinatorList = async () => {
    //     const data = await readRecruitCoordinatorList()
    //     setRecruitCoordinatorList(data)
    // }

    useEffect(() => {

        // fetchRecruitCoordinatorList()
        setRecruitCoordinatorList(props.RecruitCoordinatorList)
    }, [])
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])

    useEffect(() => {
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    // console.log(localRowData)
    return (
        <TableRow key={props.index}>
            <TableCell >{props.index + 1}</TableCell>
            <TableCell >
                <CustomSelectComponentUnlabeled
                    options={selectOptionConveter({ options: RecruitCoordinatorList, options_struct: { name: "name", value: "id" } })}
                    value={localRowData.rc_name}
                    onChange={(value) => setLocalRowData({ ...localRowData, rc_name: value })}
                />
            </TableCell>

            <TableCell >
                {/* {props.data.service_charges} */}
                <UnlabeledInput
                    type='number'
                    value={localRowData.allocated_quantity}
                    onchange={(value) => setLocalRowData({ ...localRowData, allocated_quantity: parseInt(value) })}
                />
            </TableCell>


        </TableRow>
    )
}