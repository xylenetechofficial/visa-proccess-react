import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { Table3, TableBody2, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { TicketDashboardInterface, TicketInterface } from "../type";
import { Checkbox } from "@mui/material";
import { convertDateFormat } from "../../../../utils/function";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { GreenButton } from "../../../../componenets/CustomButton";
import { updateTicketToBeBookedList } from "../repository";

export default function Main(props: { onClose: any,
   TicketDashboardList:any ,
   onChange:(value:TicketInterface[])=>void,
   openTicketToBeBooked:TicketInterface[]}) {
  const onClickAdd = () => {
    alert("Amit");
  };
  
  const [selectedCheckbox, setSelectedCheckbox] = useState([{isChecked:""}]);
  function onUpdateRow(index: number, rowData: TicketInterface) {
    const nextData = props.openTicketToBeBooked.map((e, i) => {
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
const onClickSubmit =async()=>{
  const update = await updateTicketToBeBookedList(props.openTicketToBeBooked)
  if(update){
    props.onClose();
  }
}
  return (
    <FullScreenModal
      buttonName=""
      handleClick={onClickAdd}
      title="Ticket To Be Booked"
      onClose={props.onClose}
    >
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
                <TableHeadCell3>sr.no</TableHeadCell3>
                <TableHeadCell3>setting visa</TableHeadCell3>
                <TableHeadCell3>job order no</TableHeadCell3>
                <TableHeadCell3>company name</TableHeadCell3>
                <TableHeadCell3>candidate name</TableHeadCell3>
                <TableHeadCell3>pp no.</TableHeadCell3>
                <TableHeadCell3>agent profession</TableHeadCell3>
                <TableHeadCell3>mufa no.</TableHeadCell3>
                <TableHeadCell3>agent</TableHeadCell3>
                <TableHeadCell3>rc name</TableHeadCell3>
                <TableHeadCell3>visa received date</TableHeadCell3>
                <TableHeadCell3>visa expire date</TableHeadCell3>
                <TableHeadCell3>sector from</TableHeadCell3>
                <TableHeadCell3>sector to</TableHeadCell3>
                <TableHeadCell3>required date</TableHeadCell3>
                <TableHeadCell3>priority</TableHeadCell3>
                <TableHeadCell3>air ticket </TableHeadCell3>
                <TableHeadCell3>visa authorisation</TableHeadCell3>
                <TableHeadCell3>division</TableHeadCell3>
                <TableHeadCell3>under process</TableHeadCell3>
                <TableHeadCell3>Trying</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {props.openTicketToBeBooked.map((item, index) => (
              <TableRow3>
                <TableCell3>{index + 1}</TableCell3>
                <TableCell3>{item.setting_visa} </TableCell3>
                <TableCell3>{item.job_order_no} </TableCell3>
                <TableCell3>{item.company_name} </TableCell3>
                <TableCell3>{item.candidate_name} </TableCell3>
                <TableCell3>{item.passport_no} </TableCell3>
                <TableCell3>{item.actual_profession} </TableCell3>
                <TableCell3>{item.mofa_number} </TableCell3>
                <TableCell3>{item.agent_name} </TableCell3>
                <TableCell3>{item.rc_name} </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.visa_received_date)}{" "}
                </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.visa_expire_date)}{" "}
                </TableCell3>
                <TableCell3>{item.ticketing_sector_from} </TableCell3>
                <TableCell3>{item.ticketing_sector_to} </TableCell3>
                <TableCell3>{convertDateFormat(item.required_date)} </TableCell3>
                <TableCell3>{item.priority} </TableCell3>
                <TableCell3> {item.air_ticket} </TableCell3>
                <TableCell3> {item.visa_authorisation} </TableCell3>
                <TableCell3>{item.division} </TableCell3>
                <TableCell3>
                  <Checkbox
                  //  value={"under"}
                   checked={selectedCheckbox[index]?.isChecked === `${item.id}under`}
 
                    onChange={(e) =>{
                      onUpdateRow(index, {
                        ...item,
                        ticketing_under_process: e.target.checked ? 1 :0,
                      })
                      handleCheckboxChange(`${item.id}under`,index)
                    }
                      
                    }
                  />{" "}
                </TableCell3>
                <TableCell3>
                  <Checkbox
                  // value={"typing"}
                  checked={selectedCheckbox[index]?.isChecked === `${item.id}typing`}
 
                    onChange={(e) =>{
                      onUpdateRow(index, {...item , ticketing_trying:e.target.checked ? 1:0,})
                        handleCheckboxChange(`${item.id}typing`,index)
                    }
                    }
                  />
                </TableCell3>
              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
      </div>
        <GreenButton text="Submit" onClick={()=>onClickSubmit()} />
    </FullScreenModal>
  );
}
