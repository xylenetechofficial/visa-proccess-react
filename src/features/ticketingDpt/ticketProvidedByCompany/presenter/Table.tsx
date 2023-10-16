import { Checkbox } from "@mui/material";
import { CustomCheckBox, CustomSingleCheckBox } from "../../../../componenets/Checkbox"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
import { SectorInterface } from "../../../masters/sector/type";
import { TicketProvidedByCompanyInterface } from "../type";
import { useState } from "react";
import { convertDateFormat } from "../../../../utils/function";

export default function Main(props: {
    TicketProvidedByCompanyList: TicketProvidedByCompanyInterface[],
    sectorList:SectorInterface[],
    setTicketProvidedByCompanyData:any,
    onChange: (value: TicketProvidedByCompanyInterface[]) => void
}) {
    const [selectedCheckbox, setSelectedCheckbox] = useState([{isChecked:""}]);
    const HEADERLIST = [
        'SR NO.', 'PARTY CODE', 'COMPANY NAME', 'CANDIDATE NAME', 'PP NO', 'ACTUAL PROFESSION', 'VISA PROFESSION', 'AGENT', 'RC NAME', 'VISA RECEIVED DATE', 'VISA EXPIRE DATE', 'SELECT', 'SECTOR FROM', 'SECTOR TO', 'PNR NO ', 'DEPARTURE DATE'];
    function onUpdateRow(index: number, rowData: TicketProvidedByCompanyInterface) {
        const nextData = props.TicketProvidedByCompanyList.map((e, i) => {
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
    const handleCheckboxChange = (itemId: any,index:number) => {
        setSelectedCheckbox((prev)=>{
        const newData: any = [...prev];
        newData[index] = {
          ...newData[index],
          isChecked: itemId,
            };
        return newData;
      })
      };

    return (

        <>
<div className="overflow-auto">
            <Table3>
                <TableHead3>
                    <TableHeadRow3>
                        {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
                    </TableHeadRow3>
                </TableHead3>
                <TableBody3>
                    {props.TicketProvidedByCompanyList.map((item, index) => (

                        <TableRow3>
                            <TableCell3> {index + 1} </TableCell3>
                            <TableCell3>{item.party_code} </TableCell3>
                            <TableCell3> {item.company_name}</TableCell3>
                            <TableCell3>{item.candidate_name} </TableCell3>
                            <TableCell3>{item.passport_no} </TableCell3>
                            <TableCell3>{item.actual_profession} </TableCell3>
                            <TableCell3>{item.visa_profession} </TableCell3>
                            <TableCell3> {item.agent} </TableCell3>
                            <TableCell3> {item.rc_name}</TableCell3>
                            <TableCell3>{convertDateFormat(item.visa_received_date)} </TableCell3>
                            <TableCell3>{convertDateFormat(item.visa_expiry_date)} </TableCell3>
                            <TableCell3>
                                <Checkbox  checked={selectedCheckbox[index]?.isChecked === `${item.id}yes`} onChange={(e) => {
                                if(e.target.checked){
                                    // onUpdateRow(index, { ...item, id: item.id })
                                    handleCheckboxChange(`${item.id}yes`,index)  
                                }
                                else{
                                    handleCheckboxChange(`${item.id}no`,index)  
                                    // onUpdateRow(index, { ...item, id: item.id })
                                }
                                // props.setTicketProvidedByCompanyData((prev:any) => {
                                //     const newData = [...prev];
                                //     newData[index] = {
                                //       ...newData[index],
                                //       id: item.id ,
                                //     };
                                //     return newData;
                                //   });
                                }} /></TableCell3>
                            <TableCell3><CustomSelectComponentUnlabeled options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                             onChange={(value) =>{ onUpdateRow(index, { ...item, sector_from: value })
                             
                            //  props.setTicketProvidedByCompanyData((prev:any) => {
                            //     const newData = [...prev];
                            //     newData[index] = {
                            //       ...newData[index],
                            //       sector_from: value ,
                            //     };
                            //     return newData;
                            //   });
                             }} /></TableCell3>
                            <TableCell3><CustomSelectComponentUnlabeled options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                             onChange={(value) =>{ onUpdateRow(index, { ...item, sector_to: value })
                            //  props.setTicketProvidedByCompanyData((prev:any) => {
                            //     const newData = [...prev];
                            //     newData[index] = {
                            //       ...newData[index],
                            //       sector_to: value ,
                            //     };
                            //     return newData;
                            //   });
                             
                             }} /></TableCell3>
                            <TableCell3> 
                              <UnlabeledInput value={item.pnr_no}

                           onchange={(value) => 
                             {onUpdateRow(index, { ...item, pnr_no: value })
                             
                            //  props.setTicketProvidedByCompanyData((prev:any) => {
                            //     const newData = [...prev];
                            //     newData[index] = {
                            //       ...newData[index],
                            //       pnr_no: value ,
                            //     };
                            //     return newData;
                            //   });
                             }} /></TableCell3>
                            <TableCell3> <DateInput id="date" value={item.departure_date} onChange={(value) =>
                                { onUpdateRow(index, { ...item, departure_date: value })
                                // props.setTicketProvidedByCompanyData((prev:any) => {
                                //     const newData = [...prev];
                                //     newData[index] = {
                                //       ...newData[index],
                                //       departure_date: value ,
                                //     };
                                //     return newData;
                                //   });
                                
                                }} /></TableCell3>
                        </TableRow3>
                    ))}
                </TableBody3>
            </Table3>
            </div>
        </>
    )
}