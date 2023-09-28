import { useEffect, useState } from "react";
import ModalContent, { FullScreenModal } from "../../../../componenets/Modal";
import { Table3, TableBody2, TableCell, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { TicketDashboardInterface } from "../type";

export default function Main(props: { onClose: any, TicketDashboardList:any }) {
  const onClickAdd = () => {
    alert("Amit");
  };

 
  return (
    <FullScreenModal
      buttonName=""
      handleClick={onClickAdd}
      title="Agency Invoice Awaiting"
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
          {/* <TableBody2>
            {props.TicketDashboardList.map((item, index) => (
              <TableRow3>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.setting_visa} </TableCell>
                <TableCell>{item.job_order_no} </TableCell>
                <TableCell>{item.company_name} </TableCell>
                <TableCell>{item.candidate_name} </TableCell>
                <TableCell>{item.pp_no} </TableCell>
                <TableCell>{item.actual_profession} </TableCell>
                <TableCell>{item.mofa_no} </TableCell>
                <TableCell>{item.agent} </TableCell>
                <TableCell>{item.rc_name} </TableCell>
                <TableCell>
                  {convertDateFormat(item.visa_received_date)}{" "}
                </TableCell>
                <TableCell>
                  {convertDateFormat(item.visa_expiry_date)}{" "}
                </TableCell>
                <TableCell>{item.sector_from} </TableCell>
                <TableCell>{item.sector_to} </TableCell>
                <TableCell>{convertDateFormat(item.require_date)} </TableCell>
                <TableCell>{item.priority} </TableCell>
                <TableCell> {item.air_ticket} </TableCell>
                <TableCell> {item.visa_authorization} </TableCell>
                <TableCell>{item.division} </TableCell>
                <TableCell>
                  <Checkbox
                    onChange={(e) =>
                      onUpdateRow(index, {
                        ...item,
                        under_process: e.target.checked ? "yes" : "",
                      })
                    }
                  />{" "}
                </TableCell>
                <TableCell>
                  <Checkbox
                    onChange={(e) =>
                      onUpdateRow(index, {
                        ...item,
                        trying: e.target.checked ? "yes" : "",
                      })
                    }
                  />
                </TableCell>
              </TableRow3>
            ))}
          </TableBody2> */}
        </Table3>
      </div>
    </FullScreenModal>
  );
}
