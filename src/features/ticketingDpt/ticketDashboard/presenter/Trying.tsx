import { useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { convertDateFormat } from "../../../../utils/function";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { updateTryingList, updateTryingReverse } from "../repository";
import { TypingInterface } from "../tryingType";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { AgencyInterface } from "../../../masters/agency/type";
import {  CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";

export default function Main(props: {
  onClose: ()=>void,
  tryingList: TypingInterface[],
  onChange: (value: TypingInterface[]) => void,
  agencyList:AgencyInterface[]

}) {
  
  const [selectedCheckbox, setSelectedCheckbox] = useState([{ isChecked: "" }]);
  const onClickAdd = () => {
    alert("Amit");
  };

  function onUpdateRow(index: number, rowData: TypingInterface) {
    const nextData = props.tryingList.map((e, i) => {
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
  const handleCheckboxChange = (itemId: any, index: number) => {
    setSelectedCheckbox((prev) => {
      const newData: any = [...prev];
      newData[index] = {
        ...newData[index],
        isChecked: itemId,
      };
      return newData;
    })
  };


  const onClickReverse = async (item: TypingInterface) => {
    const update = await updateTryingReverse(item)
    if (update) {
      props.onClose();
    }
  }
  const onClickSubmit = async () => {
    const update = await updateTryingList(props.tryingList)
    if (update) {
      props.onClose();
    }
  }
  return (
    <FullScreenModal
      buttonName=""
      handleClick={onClickAdd}
      title="Trying"
      onClose={props.onClose}
    >
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3>sr.no</TableHeadCell3>
              <TableHeadCell3>job order no</TableHeadCell3>
              <TableHeadCell3>company name</TableHeadCell3>
              <TableHeadCell3>candidate name</TableHeadCell3>
              <TableHeadCell3>pp no.</TableHeadCell3>
              <TableHeadCell3>sector from</TableHeadCell3>
              <TableHeadCell3>sector to</TableHeadCell3>
              <TableHeadCell3>required date</TableHeadCell3>
              <TableHeadCell3>priority</TableHeadCell3>
              <TableHeadCell3>air line</TableHeadCell3>
              <TableHeadCell3>ticket issue date </TableHeadCell3>
              <TableHeadCell3>PNR No</TableHeadCell3>
              <TableHeadCell3>departure date</TableHeadCell3>
              <TableHeadCell3>agency</TableHeadCell3>
              <TableHeadCell3>amount</TableHeadCell3>
              <TableHeadCell3>actual profession</TableHeadCell3>
              <TableHeadCell3>mufa no.</TableHeadCell3>
              <TableHeadCell3>agent</TableHeadCell3>
              <TableHeadCell3>rc name</TableHeadCell3>
              <TableHeadCell3>visa received date</TableHeadCell3>
              <TableHeadCell3>visa expire date</TableHeadCell3>
              <TableHeadCell3>visa no</TableHeadCell3>
              <TableHeadCell3>visa date</TableHeadCell3>
              <TableHeadCell3>pp expire date</TableHeadCell3>
              <TableHeadCell3>visa issue date</TableHeadCell3>
              <TableHeadCell3>reverse</TableHeadCell3>

            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {props.tryingList.map((item, index) => (
              <TableRow3>
                <TableCell3>{index + 1}</TableCell3>
                <TableCell3>{item.job_order_no} </TableCell3>
                <TableCell3>{item.company_name} </TableCell3>
                <TableCell3>{item.candidate_name} </TableCell3>
                <TableCell3>{item.passport_no} </TableCell3>
                <TableCell3>{item.ticketing_sector_from} </TableCell3>
                <TableCell3>{item.ticketing_sector_to} </TableCell3>
                <TableCell3>{convertDateFormat(item.required_date)} </TableCell3>
                <TableCell3>{item.priority} </TableCell3>
                <TableCell3> <UnlabeledInput value={item.air_line} onchange={(value) => onUpdateRow(index, { ...item, air_line: value })} /> </TableCell3>
                <TableCell3> <DateInput id="cacas" value={item.ticket_issue_date} onChange={(value) => onUpdateRow(index, { ...item, ticket_issue_date: value })} /> </TableCell3>
                <TableCell3><UnlabeledInput value={item.passport_no} onchange={(value) => onUpdateRow(index, { ...item, passport_no: value })} /> </TableCell3>
                <TableCell3><DateInput value={item.ticketing_departure_date} id='tc' onChange={(value) => onUpdateRow(index, { ...item, ticketing_departure_date: value })} /> </TableCell3>
                <TableCell3><UnlabeledInput type="number" value={item.agency} onchange={(value) => onUpdateRow(index, { ...item, agency: parseInt(value) })} /> </TableCell3>
                <TableCell3><UnlabeledInput type="number" value={item.amount} onchange={(value) => onUpdateRow(index, { ...item, amount: parseInt(value) })} /> </TableCell3>
                <TableCell3>{item.actual_profession}</TableCell3>
                <TableCell3>{item.mofa_number}</TableCell3>
                <TableCell3><CustomSelectComponentUnlabeled value={item.agency} onChange={(value) => onUpdateRow(index, {...item, agency:value})} options={selectOptionConveter({options: props.agencyList , options_struct :{name:"name" , value:"id"}})}/></TableCell3>
                <TableCell3>{item.rc_name}</TableCell3>
                <TableCell3>{convertDateFormat(item.visa_received_date)}</TableCell3>
                <TableCell3>{convertDateFormat(item.visa_expire_date)}</TableCell3>
                <TableCell3>{item.visa_no}</TableCell3>
                <TableCell3>{convertDateFormat(item.visa_date)}</TableCell3>
                <TableCell3>{convertDateFormat(item.pp_expiry_date)}</TableCell3>
                <TableCell3>{convertDateFormat(item.visa_issued_date)}</TableCell3>
                <TableCell3><RedButton text="Reverse" onClick={() => onClickReverse(item)} /></TableCell3>
              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
      </div>
      <GreenButton text="Submit" onClick={() => onClickSubmit()} />
    </FullScreenModal>
  );
}
