
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table';
// import { SectorInterface } from '../../../masters/sector/type';
// import { CompanyInterface } from '../../../masters/company/type';
// import { CountryInterface } from '../../../masters/country/type';


import { useState, useEffect } from "react";
import { UnlabeledInput } from '../../../../componenets/Input';
// import { CustomCheckBox } from '../../../../componenets/Checkbox';
// import { CustomSelectComponent, selectOptionConveter } from '../../../../componenets/SelectBox';
// import { CustomRadioButton } from '../../../../componenets/RadioButton';
import { VisaProfesionInterface } from '../../blockVisa/type';



const VisaProfessionTable = (props: {
    visaProfessionList: VisaProfesionInterface[],
    onChange: (ele: VisaProfesionInterface[]) => void,

}) => {

    const [onChange, setonChange] = useState<string>("")

    const onClickAddNewRow = () => {
        const arr = [...props.visaProfessionList, {
            visa_profession: "",
            arabic_visa_category: "",
            block_visa_id: 0,
            quantity: 0
        }]
        props.onChange(arr)
    }

    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return
        const arr = props.visaProfessionList.filter((e, i) => i !== index)
        props.onChange(arr)
        setonChange(Date.now().toString())

    }

    function onUpdateRow(index: number, rowData: VisaProfesionInterface) {
        const nextData = props.visaProfessionList.map((e, i) => {
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

            <Table  >
                <TableHead >
                    <TableHeadRow  >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Visa Profession</TableHeadCell>
                        <TableHeadCell > Arabic Visa Category</TableHeadCell>
                        <TableHeadCell > Quantity</TableHeadCell>
                        <TableHeadCell >  Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.visaProfessionList && props.visaProfessionList.map((ele, index) => (
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                        />

                    ))}


                    <TableRow>
                        <TableCell>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default VisaProfessionTable

const TableData = (
    props: {
        index: number;
        data: VisaProfesionInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: VisaProfesionInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<VisaProfesionInterface>({
        visa_profession: "",
        arabic_visa_category: "",
        block_visa_id: 0,
        quantity: 0,

    })
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])
    useEffect(() => {
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    console.log(localRowData)
    return (
        <TableRow key={props.index}>
            <TableCell >{props.index + 1}</TableCell>
            <TableCell >
                <UnlabeledInput
                    value={localRowData.visa_profession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visa_profession: value })}
                />
            </TableCell>

            <TableCell >
                {/* {props.data.service_charges} */}
                <UnlabeledInput
                    value={localRowData.arabic_visa_category}
                    onchange={(value) => setLocalRowData({ ...localRowData, arabic_visa_category: value })}
                />
            </TableCell>
            <TableCell >
                {/* {props.data.quantity} */}
                <UnlabeledInput
                    
type="number"
                    
                    value={localRowData.quantity}
                    onchange={(value) => setLocalRowData({ ...localRowData, quantity: parseInt(value) })}
                />
            </TableCell>
            <TableCell >


                <RedButton text={" Remove"} onClick={() => {
                    props.onClickRemove(props.index)
                }} />



            </TableCell>
        </TableRow>
    )
}