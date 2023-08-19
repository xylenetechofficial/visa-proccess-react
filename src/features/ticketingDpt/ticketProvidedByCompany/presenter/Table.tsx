import { Checkbox } from "@mui/material";
import { CustomCheckBox, CustomSingleCheckBox } from "../../../../componenets/Checkbox"
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox"
import { Table3, TableBody2, TableCell, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table"
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
                <TableBody2>
                    {props.TicketProvidedByCompanyList.map((item, index) => (

                        <TableRow3>
                            <TableCell> {index + 1} </TableCell>
                            <TableCell>{item.party_code} </TableCell>
                            <TableCell> {item.company_name}</TableCell>
                            <TableCell>{item.candidate_name} </TableCell>
                            <TableCell>{item.pp_no} </TableCell>
                            <TableCell>{item.actual_profession} </TableCell>
                            <TableCell>{item.visa_profession} </TableCell>
                            <TableCell> {item.agent} </TableCell>
                            <TableCell> {item.rc_name}</TableCell>
                            <TableCell>{convertDateFormat(item.visa_received_date)} </TableCell>
                            <TableCell>{convertDateFormat(item.visa_expiry_date)} </TableCell>
                            <TableCell>
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
                                }} /></TableCell>
                            <TableCell><CustomSelectComponentUnlabeled options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                             onChange={(value) =>{ onUpdateRow(index, { ...item, sector_from: value })
                             
                            //  props.setTicketProvidedByCompanyData((prev:any) => {
                            //     const newData = [...prev];
                            //     newData[index] = {
                            //       ...newData[index],
                            //       sector_from: value ,
                            //     };
                            //     return newData;
                            //   });
                             }} /></TableCell>
                            <TableCell><CustomSelectComponentUnlabeled options={selectOptionConveter({ options: props.sectorList, options_struct: { name: "name", value: "id" } })}
                             onChange={(value) =>{ onUpdateRow(index, { ...item, sector_to: value })
                            //  props.setTicketProvidedByCompanyData((prev:any) => {
                            //     const newData = [...prev];
                            //     newData[index] = {
                            //       ...newData[index],
                            //       sector_to: value ,
                            //     };
                            //     return newData;
                            //   });
                             
                             }} /></TableCell>
                            <TableCell> 
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
                             }} /></TableCell>
                            <TableCell> <DateInput id="date" value={item.departure_date} onChange={(value) =>
                                { onUpdateRow(index, { ...item, departure_date: value })
                                // props.setTicketProvidedByCompanyData((prev:any) => {
                                //     const newData = [...prev];
                                //     newData[index] = {
                                //       ...newData[index],
                                //       departure_date: value ,
                                //     };
                                //     return newData;
                                //   });
                                
                                }} /></TableCell>
                        </TableRow3>
                    ))}
                </TableBody2>
            </Table3>
            </div>
        </>
    )
}