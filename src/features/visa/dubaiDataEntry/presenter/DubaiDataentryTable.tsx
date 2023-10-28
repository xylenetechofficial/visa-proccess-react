import { DubaiDataEntryInterface } from '../type'
import { BlueButton, GreenButton, RedButton } from '../../../../componenets/CustomButton';
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';


import { useState, useEffect } from "react";
import { DateInput, UnlabeledInput } from '../../../../componenets/Input';
import { CustomCheckBox, CustomSingleCheckBox } from '../../../../componenets/Checkbox';
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
import { CustomRadioButton } from '../../../../componenets/RadioButton';
import EditModal from "./Edit"
import { updateDubaiDataEntryOne } from '../repository';
import { convertDateFormat } from '../../../../utils/function';


const DubaiDataEntryTable = (props: {
    snoBase:number,
    dubaiDataEntryList: DubaiDataEntryInterface[],
    onChange: (ele: DubaiDataEntryInterface[]) => void,
    fetchDubaiDataEntryList: () => void
}) => {

    const [onChange, setonChange] = useState<string>("")



    function onUpdateRow(index: number, rowData: DubaiDataEntryInterface) {
        const nextData = props.dubaiDataEntryList.map((e, i) => {
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

    const [currentData, setCurrentData] = useState<DubaiDataEntryInterface>({
        id: 0,
        companyName: "",
        candidateName: "",
        passportNo: "",
        ppIssueDate: "",
        ppExpiryDate: "",
        placeOfIssue: "",
        dateOfBirth: "",
        placeOfBirth: "",
        address: "",
        nomineeName: "",
        nomineeRelation: "",
        religion: "",
        actualProfession: "",
        visaProfession: "",
        agent: "",
        division: "",
        rm: "",
        rc: "",
        rs: "",
        molDate: "",
        workPermitDate: "",
        ppCopy: "",
        ppReceived: 0,
        ppReceivedDate: "",
        documentCharges: 0,
        reject: "",
        backedOut: "",

    });
    const [showModal, setShowMadal] = useState("")

    const onClickDocCharges = (value: DubaiDataEntryInterface) => {
        setCurrentData(value);
        setShowMadal("edit")
    }

    const onClickAdd = async (element: DubaiDataEntryInterface) => {
        const data = await updateDubaiDataEntryOne(element);
        setCurrentData({ ...currentData, documentCharges: element.documentCharges })
        props.fetchDubaiDataEntryList();
        setShowMadal("")
    }

    return (
        <div className='overflow-auto' style={{ justifyContent: "center" }}>

            <Table3  >
                <TableHead3 >
                    <TableHeadRow3  >
                        <TableHeadCell3  > Sr No.</TableHeadCell3>
                        <TableHeadCell3 > CANDIDATE NAME</TableHeadCell3>
                        <TableHeadCell3 > PASSPORT NO.</TableHeadCell3>
                        <TableHeadCell3 > PP ISSUED DATE</TableHeadCell3>
                        <TableHeadCell3 > PP EXPIRY DATE</TableHeadCell3>
                        <TableHeadCell3 >	PLACE OF ISSUE</TableHeadCell3>
                        <TableHeadCell3 >	DATE OF BIRTH</TableHeadCell3>
                        <TableHeadCell3 >	PLACE OF BIRTH</TableHeadCell3>
                        <TableHeadCell3 >	ADDRESS</TableHeadCell3>
                        <TableHeadCell3 >	NOMINEE NAME</TableHeadCell3>
                        <TableHeadCell3 >	NOMINEE RELATION</TableHeadCell3>
                        <TableHeadCell3 >    RELIGION</TableHeadCell3>
                        <TableHeadCell3 >	ACTUAL PROFESSION</TableHeadCell3>
                        <TableHeadCell3 >	VISA PROFESSION</TableHeadCell3>
                        <TableHeadCell3 >	AGENT</TableHeadCell3>
                        <TableHeadCell3 >	DIVISION</TableHeadCell3>
                        <TableHeadCell3 >	RM</TableHeadCell3>
                        <TableHeadCell3 >	RS</TableHeadCell3>
                        <TableHeadCell3 >	RC</TableHeadCell3>
                        <TableHeadCell3 >	MOL DATE</TableHeadCell3>
                        <TableHeadCell3 >	WORK PERMIT DATE</TableHeadCell3>
                        <TableHeadCell3 >	PP/COPY</TableHeadCell3>
                        <TableHeadCell3 >	*PP RECEIVED</TableHeadCell3>
                        <TableHeadCell3 >	PP RECEIVED DATE</TableHeadCell3>
                        <TableHeadCell3 >	DOCUMENT CHARGES</TableHeadCell3>
                        {/* <TableHeadCell3 >	REJECT</TableHeadCell3> */}
                        {/* <TableHeadCell3 >	BACKED OUT</TableHeadCell3> */}

                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.dubaiDataEntryList && props.dubaiDataEntryList.map((ele, index) => (
                        <TableData
                        snoBase={index}
                            data={ele}
                            index={index}
                            onChange={onChange}
                            onClickDocCharges={onClickDocCharges}
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
            {showModal == "edit" ?
                <EditModal
                    onClose={() => setShowMadal("")}
                    currentElement={currentData}
                    onClickSubmit={onClickAdd}
                    fetchDubaiDataEntryList={props.fetchDubaiDataEntryList}
                />
                : ""}
        </div>
    )
}

export default DubaiDataEntryTable

const TableData = (
    props: {
        snoBase:number
        index: number;
        data: DubaiDataEntryInterface;
        // onClickEdit: any;
        onUpdate: (index: number, rowData: DubaiDataEntryInterface) => void;
        onClickDocCharges: (ele: DubaiDataEntryInterface) => void
        onChange: string
    }

) => {


    const [localRowData, setLocalRowData] = useState<DubaiDataEntryInterface>({
        id: 0,
        companyName: "",
        candidateName: "",
        passportNo: "",
        ppIssueDate: "",
        ppExpiryDate: "",
        placeOfIssue: "",
        dateOfBirth: "",
        placeOfBirth: "",
        address: "",
        nomineeName: "",
        nomineeRelation: "",
        religion: "",
        actualProfession: "",
        visaProfession: "",
        agent: "",
        division: "",
        rm: "",
        rc: "",
        rs: "",
        molDate: "",
        workPermitDate: "",
        ppCopy: "",
        ppReceived: 0,
        ppReceivedDate: "",
        documentCharges: 0,
        reject: "",
        backedOut: "",

    })
    useEffect(() => {
        setLocalRowData(props.data)
    }, [props.onChange])
    useEffect(() => {
        console.log("rerender");   // Only Dev
        props.onUpdate(props.index, localRowData!)
    }, [localRowData])


    return (
        <TableRow3 key={props.index}>
            <TableCell3 >{props.index + 1}</TableCell3>
            <TableCell3 >
                <UnlabeledInput
                    value={localRowData.candidateName}
                    onchange={(value) => setLocalRowData({ ...localRowData, candidateName: value })}
                />
            </TableCell3>

            <TableCell3 >

                <UnlabeledInput
                    value={localRowData.passportNo}
                    onchange={(value) => setLocalRowData({ ...localRowData, passportNo: value })}
                />
            </TableCell3>
            <TableCell3 >

                <DateInput
                    id='sldkaflas'
                    value={localRowData.ppIssueDate}
                    onChange={(value) => setLocalRowData({ ...localRowData, ppIssueDate: value })}
                />
            </TableCell3>
            <TableCell3 >

                <DateInput
                    id='sldkaflas'
                    value={localRowData.ppExpiryDate}
                    onChange={(value) => setLocalRowData({ ...localRowData, ppExpiryDate: value })}
                />
            </TableCell3>

            <TableCell3 >

                <UnlabeledInput
                    value={localRowData.placeOfIssue}
                    onchange={(value) => setLocalRowData({ ...localRowData, placeOfIssue: value })}
                />
            </TableCell3>

            <TableCell3 >

                <DateInput
                    id='sldkaflas'
                    value={localRowData.dateOfBirth}
                    onChange={(value) => setLocalRowData({ ...localRowData, dateOfBirth: value })}
                />
            </TableCell3>
            <TableCell3 >

                <UnlabeledInput
                    value={localRowData.placeOfBirth}
                    onchange={(value) => setLocalRowData({ ...localRowData, placeOfBirth: value })}
                />
            </TableCell3>

            <TableCell3 >

                <UnlabeledInput
                    value={localRowData.address}
                    onchange={(value) => setLocalRowData({ ...localRowData, address: value })}
                />
            </TableCell3>
            <TableCell3 >

                <UnlabeledInput
                    value={localRowData.nomineeName}
                    onchange={(value) => setLocalRowData({ ...localRowData, nomineeName: value })}
                />
            </TableCell3>
            <TableCell3 >

                <CustomSelectComponentUnlabeled
                    options={[
                        { name: "Mother", value: "Mother" },
                        { name: "Spouse", value: "Spouse" }
                    ]}
                    value={localRowData.nomineeRelation}
                    onChange={(value) => setLocalRowData({ ...localRowData, nomineeRelation: value })}
                />
            </TableCell3>
            <TableCell3 >

                <CustomSelectComponentUnlabeled
                    options={[
                        { name: "Muslim", value: "Muslim" },
                        { name: "Non Muslim", value: "Non Muslim" }
                    ]}
                    value={localRowData.religion}
                    onChange={(value) => setLocalRowData({ ...localRowData, religion: value })}
                />
            </TableCell3>
            <TableCell3 >

                {localRowData.actualProfession}
            </TableCell3>
            <TableCell3 >

                <UnlabeledInput
                    value={localRowData.visaProfession}
                    onchange={(value) => setLocalRowData({ ...localRowData, visaProfession: value })}
                />
            </TableCell3>

            <TableCell3 >

                {localRowData.agent}
            </TableCell3>

            <TableCell3 >

                {localRowData.division}
            </TableCell3>

            <TableCell3 >

                {localRowData.rm}
            </TableCell3>

            <TableCell3 >

                {localRowData.rs}
            </TableCell3>

            <TableCell3 >

                {localRowData.rc}
            </TableCell3>

            <TableCell3 >

                {convertDateFormat(localRowData.molDate)}
            </TableCell3>

            <TableCell3 >

                {convertDateFormat(localRowData.workPermitDate)}
            </TableCell3>

            <TableCell3 >

                <CustomSelectComponentUnlabeled
                    options={[
                        { name: "PP", value: "PP" },
                        { name: "Copy", value: "Copy" }
                    ]}
                    value={localRowData.ppCopy}
                    onChange={(value) => setLocalRowData({ ...localRowData, ppCopy: value })}
                />
            </TableCell3>
            <TableCell3>
                <CustomSingleCheckBox
                    value={localRowData.ppReceived ? true : false}
                    onChange={(value) => {
                        const date = new Date();
                        const day = ("0" + date.getDate()).slice(-2);
                        const month = ("0" + (date.getMonth() + 1)).slice(-2);
                        const year = date.getFullYear();
                        if (value) {
                            setLocalRowData({ ...localRowData, ppReceived: value ? 1 : 0, ppReceivedDate: `${year}-${month}-${day}` })

                        }
                        else {
                            setLocalRowData({ ...localRowData, ppReceived: value ? 1 : 0, ppReceivedDate: ` ` })
                        }

                    }}

                />
            </TableCell3>

            <TableCell3 >

                <DateInput
                    id='sldkaflas'
                    value={localRowData.ppReceivedDate}
                    onChange={(value) => setLocalRowData({ ...localRowData, ppReceivedDate: value })}
                />
            </TableCell3>

            <TableCell3 >
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <UnlabeledInput
                        value={localRowData.documentCharges}
                        type='number'
                        onchange={(value) => setLocalRowData({ ...localRowData, documentCharges: parseInt(value) })}
                    />
                    <div>
                        <RedButton text='Doc Charges' onClick={() => {
                            props.onClickDocCharges(localRowData)
                        }} />
                    </div>
                </div>


            </TableCell3>
            {/* <TableCell3 >  <RedButton text='Reject' /> </TableCell3> */}
            {/* <TableCell3 >  <RedButton text='Backed Out' /> </TableCell3> */}

        </TableRow3>
    )
}