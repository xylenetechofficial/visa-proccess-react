import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { Table3, TableBody2, TableCell, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { TicketDashboardInterface, TicketInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
import { Checkbox } from "@mui/material";
import { GreenButton } from "../../../../componenets/CustomButton";
import { updateUnderProcess } from "../repository";

export default function Main(props: { onClose: any,
  openUnderProcess:TicketInterface[] ,
   onChange:(value:TicketInterface[])=>void,
   

   }) {
    const [selectedCheckbox, setSelectedCheckbox] = useState([{isChecked:""}]);
  const onClickAdd = () => {
    alert("Amit");
  };

  function onUpdateRow(index: number, rowData: TicketInterface) {
    const nextData = props.openUnderProcess.map((e, i) => {
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
  const update = await updateUnderProcess(props.openUnderProcess)
  if(update){
    props.onClose();
  }
}
  return (
    <FullScreenModal
      buttonName=""
      handleClick={onClickAdd}
      title="Under Process"
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
                <TableHeadCell3>unser process</TableHeadCell3>
                <TableHeadCell3>typing</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
           <TableBody2>
            {props.openUnderProcess.map((item :any, index:any) => (
              <TableRow3>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.setting_visa} </TableCell>
                <TableCell>{item.job_order_no} </TableCell>
                <TableCell>{item.company_name} </TableCell>
                <TableCell>{item.candidate_name} </TableCell>
                <TableCell>{item.passport_no} </TableCell>
                <TableCell>{item.actual_profession} </TableCell>
                <TableCell>{item.mofa_number} </TableCell>
                <TableCell>{item.agent_name} </TableCell>
                <TableCell>{item.rc_name} </TableCell>
                <TableCell>
                  {convertDateFormat(item.visa_received_date)}{" "}
                </TableCell>
                <TableCell>
                  {convertDateFormat(item.visa_expire_date)}{" "}
                </TableCell>
                <TableCell>{item.ticketing_sector_from} </TableCell>
                <TableCell>{item.ticketing_sector_to} </TableCell>
                <TableCell>{convertDateFormat(item.required_date)} </TableCell>
                <TableCell>{item.priority} </TableCell>
                <TableCell> {item.air_ticket} </TableCell>
                <TableCell> {item.visa_authorisation} </TableCell>
                <TableCell>{item.division} </TableCell>
                <TableCell>
                  <Checkbox
                  checked={selectedCheckbox[index]?.isChecked === `${item.id}under`}
                    onChange={(e) =>{
                      onUpdateRow(index, {
                        ...item,
                        ticketing_under_process: e.target.checked ? 1 : 0,
                      })
                      handleCheckboxChange(`${item.id}under`,index)
                    }
                    }
                  />{" "}
                </TableCell>
                <TableCell>
                  <Checkbox
                    onChange={(e) =>{
                      onUpdateRow(index, {
                        ...item,
                        ticketing_trying: e.target.checked ? 1 : 0,
                      })
                      handleCheckboxChange(`${item.id}typing`,index)
                    }

                    }
                    checked={selectedCheckbox[index]?.isChecked === `${item.id}typing`}
 
                  />
                </TableCell>
              </TableRow3>
            ))}
          </TableBody2> 
        </Table3>
      </div>
      <GreenButton text="Submit" onClick={()=>onClickSubmit()} />
    </FullScreenModal>
  );
}
