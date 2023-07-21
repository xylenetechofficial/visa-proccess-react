import React, { useEffect, useState } from 'react'
import { ActualProfessionInterface, EdocInterface } from '../../Extra/type'
import { JobOrderInterface } from '../type'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableHeadRow, TableRow } from '../../../../componenets/Table'
import { GreenButton, RedButton } from '../../../../componenets/CustomButton'
import { UnlabeledInput } from '../../../../componenets/Input'



const th_style = { "padding": "14px", "border": "1px solid #4dbcd5", "width": "100px!important" }


function EdocTable(props: {
    EDOCList: EdocInterface[],
    onChange: (ele: EdocInterface[]) => void
    jobOrder: JobOrderInterface,
    isChanged: string
    actualProfessionList: ActualProfessionInterface[]
}) {

    // const [EDOCList, setEDOCList] = useState<EdocInterface[]>([])
    const [onChange, setOnchange] = useState<string>("")

    //temp string
    // const [companyList, setCompanyList] = useState<CompanyInterface[]>([])
    




    const onClickRemoveRow = (index: number) => {
        if (!confirm("Are You Sure?"))
            return

        props.onChange(props.EDOCList.filter((e, i) => i !== index))
        setOnchange(Date.now().toString())
    }


    function onUpdateRow(index: number, rowData: EdocInterface) {
        const nextData = props.EDOCList.map((e, i) => {
            if (i === index) {
                // Increment the clicked counter
                return rowData;
            } else {
                // The rest haven't changed
                return e;
            }
        });
        props.onChange(nextData);

    }


    useEffect(() => {
    props.onChange(props.EDOCList);
      
    }, [props.isChanged])

  

    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table>
                <TableHead >
                    <TableHeadRow >
                        <TableHeadCell  > Sr No.</TableHeadCell>
                        <TableHeadCell > Actual Profession</TableHeadCell>
                        <TableHeadCell > EDOC</TableHeadCell>
                        <TableHeadCell > COMMISSION</TableHeadCell>
                        <TableHeadCell > VISA COST</TableHeadCell>
                        <TableHeadCell >  Action</TableHeadCell>

                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    {props.EDOCList.map((ele, index) => {
                        return(
                        <TableData
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickRemove={onClickRemoveRow}
                            onUpdate={onUpdateRow}
                        />

                    )})}


                    {/* <TableRow>
                        <TableCell>
                            <div style={{ width: "111px", margin: "10px 0px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>

        </div>
    )
}

export default EdocTable



const TableData = (
    props: {
        index: number;
        data: EdocInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: EdocInterface) => void;
        onClickRemove: (index: number) => void;
        onChange: string
    }

) => {

    const [localRowData, setLocalRowData] = useState<EdocInterface>({
        jobOrder_id: 0,
        actualProfession: "",
        commission: 0,
        EDOC: 0,
        visaCost: 0,

    })
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])

    useEffect(() => {
        // console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])

    // console.log(localRowData)
    return (
        <TableRow key={props.index}>
            <TableCell >{props.index + 1}</TableCell>
            <TableCell >
                <UnlabeledInput
                    value={localRowData.actualProfession}
                    onchange={(value) => setLocalRowData({ ...localRowData, actualProfession: value })}
                />
            </TableCell>
            <TableCell >
                {/* {props.data.quantity} */}
                <UnlabeledInput
                    value={localRowData.EDOC}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, EDOC: parseInt(value) })}
                />
            </TableCell>
            <TableCell >
                {/* {props.data.service_charges} */}
                <UnlabeledInput
                    value={localRowData.commission}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, commission: parseInt(value) })}
                />
            </TableCell>
            <TableCell >
                {/* {props.data.partial_charges} */}
                <UnlabeledInput
                    value={localRowData.visaCost}
                    type='number'
                    onchange={(value) => setLocalRowData({ ...localRowData, visaCost: parseInt(value) })}
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