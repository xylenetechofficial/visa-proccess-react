import React, { useState } from "react";
import { PenaltyAfterDeploymentDashboardInterface } from "../type";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
  Table2,
  TableBody,
  TableCell,
  TableHead,
  TableHead2,
  TableHeadCell,
  TableHeadCell2,
  TableHeadRow,
  TableHeadRow2,
  TableRow,
} from "../../../../componenets/Table";
import { Checkbox } from "@mui/material";
import { TextAreaInput, UnlabeledInput } from "../../../../componenets/Input";
import { convertDateFormat } from "../../../../utils/function";


const AccountDashboardTable = (props: {
  // accountDashboardList: AgentPaymentReceivedInterface[];
  accountDashboardList: PenaltyAfterDeploymentDashboardInterface[];
  setAccountDashboardList: any;
  onClickCreate: any;
  data: any;
  setData: any;
  setStatus: any;
  fetchAccountDashboardList: any
  onChange: (value: any) => void
}) => {
  const [penaltyData, setPenaltyData] = useState(
    props?.accountDashboardList);

  function onUpdateRow(index: number, rowData: PenaltyAfterDeploymentDashboardInterface) {
    const nextData = props.accountDashboardList.map((e, i) => {
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
    <>
      <div className="overflow-auto">
        <Table2>
          <TableHead2>
            <TableHeadRow2>
              <TableHeadCell2> Sr No.</TableHeadCell2>
              <TableHeadCell2> CONDIDATE NO</TableHeadCell2>
              <TableHeadCell2> CONDIDATE NAME</TableHeadCell2>
              <TableHeadCell2> PASSPORT NO</TableHeadCell2>
              <TableHeadCell2> PASSPORT ISSUED DATE</TableHeadCell2>
              <TableHeadCell2> PASSPORT EXPIRY DATE</TableHeadCell2>
              <TableHeadCell2> ACTUAL PROFESSION </TableHeadCell2>
              <TableHeadCell2> VISA PROFESSION </TableHeadCell2>
              <TableHeadCell2> JOB ORDER NUMBER </TableHeadCell2>
              <TableHeadCell2> GRADE</TableHeadCell2>
              <TableHeadCell2> COMPANY NAME</TableHeadCell2>
              <TableHeadCell2> PARTY CODE </TableHeadCell2>
              <TableHeadCell2> AGENT </TableHeadCell2>
              <TableHeadCell2> RM </TableHeadCell2>
              <TableHeadCell2> RC </TableHeadCell2>
              <TableHeadCell2> VISA AUTHORIZATION </TableHeadCell2>
              <TableHeadCell2> VISA ISSUED DATE </TableHeadCell2>
              <TableHeadCell2> VISA EXPIRY DATE </TableHeadCell2>
              <TableHeadCell2> DIVISION </TableHeadCell2>
              <TableHeadCell2> STATUS </TableHeadCell2>
              <TableHeadCell2> PNR NO. </TableHeadCell2>
              <TableHeadCell2> AGENCY </TableHeadCell2>
              <TableHeadCell2> DEPARTURE DATE </TableHeadCell2>
              <TableHeadCell2> MISTAKE BY </TableHeadCell2>
              <TableHeadCell2> AGENCY INVOICE </TableHeadCell2>
              <TableHeadCell2> CHANGE ISSUE TYPE </TableHeadCell2>
              <TableHeadCell2> SECTOR FROM </TableHeadCell2>
              <TableHeadCell2> SECTOR TO </TableHeadCell2>
              <TableHeadCell2> INVOICE RAISED </TableHeadCell2>
              <TableHeadCell2> IS INVOICE  </TableHeadCell2>
              <TableHeadCell2> AIR TICKET  </TableHeadCell2>
              <TableHeadCell2> PHOTO CHARGES</TableHeadCell2>
              <TableHeadCell2> TRAINING CHARGES</TableHeadCell2>
              <TableHeadCell2> OTHER CHARGES</TableHeadCell2>
              <TableHeadCell2> DOCUMENT CHARGES</TableHeadCell2>
              <TableHeadCell2> SERVICE CHARGES</TableHeadCell2>
              <TableHeadCell2> CONSULATE SETTING CHARGES</TableHeadCell2>
              <TableHeadCell2> PARTIAL CHARGES</TableHeadCell2>
              <TableHeadCell2> SECTOR CHARGES </TableHeadCell2>
              <TableHeadCell2> TICKET CHARGES</TableHeadCell2>
              <TableHeadCell2> ATTESTION CHARGES</TableHeadCell2>
              <TableHeadCell2> EXTRA SERVICE CHARGES</TableHeadCell2>
              <TableHeadCell2> CONSOLIDATED CHARGES</TableHeadCell2>
              <TableHeadCell2> DISCOUNTED AMOUNT</TableHeadCell2>
              <TableHeadCell2> PAYMENT </TableHeadCell2>
              <TableHeadCell2> PENDING AMOUNT  </TableHeadCell2>
              <TableHeadCell2> <Checkbox />  </TableHeadCell2>
              <TableHeadCell2> PENALTY AFTER DEPARTURE</TableHeadCell2>
              <TableHeadCell2> PENALTY REMARKS</TableHeadCell2>
            </TableHeadRow2>
          </TableHead2>
          <TableBody>
            {props?.accountDashboardList?.map((ele, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell> {ele?.id}</TableCell>
                <TableCell> {ele?.name}</TableCell>
                <TableCell> {ele?.passport_no}</TableCell>
                <TableCell> {convertDateFormat(ele?.passport_issued_date)}</TableCell>
                <TableCell> {convertDateFormat(ele?.passport_expiry_date)}</TableCell>
                <TableCell> {ele?.actual_profession}</TableCell>
                <TableCell> {ele?.visa_profession} </TableCell>
                <TableCell> {ele?.job_order_no} </TableCell>
                <TableCell> {ele?.grade}</TableCell>
                <TableCell> {ele?.company_name}</TableCell>
                <TableCell> {ele?.party_code} </TableCell>
                <TableCell> {ele?.agent_name} </TableCell>
                <TableCell> {ele?.rm} </TableCell>
                <TableCell> {ele?.rc} </TableCell>
                <TableCell>{ele?.visa_authorization} </TableCell>
                <TableCell> {convertDateFormat(ele?.visa_issued_date)} </TableCell>
                <TableCell> {convertDateFormat(ele?.visa_expiry_date)} </TableCell>
                <TableCell> {ele?.division} </TableCell>
                <TableCell> {ele?.status} </TableCell>
                <TableCell> {ele?.pnr_no} </TableCell>
                <TableCell> {ele?.agency} </TableCell>
                <TableCell> {convertDateFormat(ele?.departure_date)} </TableCell>
                <TableCell> {ele?.mistake_by} </TableCell>
                <TableCell> {ele?.agency_invoice} </TableCell>
                <TableCell> {ele?.change_issue_type} </TableCell>
                <TableCell> {ele?.sector_from} </TableCell>
                <TableCell> {ele?.sector_to} </TableCell>
                <TableCell> {ele?.invoice_raised} </TableCell>
                <TableCell> {ele?.is_invoice}  </TableCell>
                <TableCell> {ele?.air_ticket}  </TableCell>
                <TableCell> {ele?.photo_charges}</TableCell>
                <TableCell> {ele?.training_charges} </TableCell>
                <TableCell> {ele?.other_charges} </TableCell>
                <TableCell> {ele?.document_charges} </TableCell>
                <TableCell> {ele?.service_charges} </TableCell>
                <TableCell> {ele?.consulate_setting_charges} </TableCell>
                <TableCell> {ele?.partial_charges} </TableCell>
                <TableCell> {ele?.sector_charges} </TableCell>
                <TableCell> {ele?.ticket_charges} </TableCell>
                <TableCell> {ele?.attestation_charges} </TableCell>
                <TableCell> {ele?.consolidated_charges}</TableCell>
                <TableCell> {ele?.consolidated_charges} </TableCell>
                <TableCell> {ele?.discount_amount} </TableCell>
                <TableCell> {ele?.payment} </TableCell>
                <TableCell> {ele?.pending_amount}  </TableCell>
                <TableCell> <Checkbox
                  value={penaltyData[index]?.id} onClick={(value) => {
                    setPenaltyData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        id: ele.id
                      };
                      return newData;
                    }),
                      onUpdateRow(index, { ...ele, id: ele.id })
                    console.log(penaltyData, "ss")
                  }} />  </TableCell>
                <TableCell> <UnlabeledInput type="number" value={ele?.penalty_after_departure}
                  onchange={(value) => {
                    console.log(value, penaltyData, props.data);
                    setPenaltyData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        penalty_after_departure: parseInt(value),

                      };
                      return newData;
                    });
                    if (value) {
                      onUpdateRow(index, { ...ele, penalty_after_departure: parseInt(value) })
                    }
                    else {
                      onUpdateRow(index, { ...ele, penalty_after_departure: parseInt('') })
                    }

                    props.setAccountDashboardList((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        penalty_after_departure: parseInt(value),


                      };
                      return newData;

                    })
                  }}
                /></TableCell>
                <TableCell> <TextAreaInput id="penalty_remarks" value={ele?.penalty_remarks}
                  onChange={(value) => {
                    console.log(value, penaltyData, props.data);
                    setPenaltyData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        penalty_remarks: value,


                      };
                      return newData;
                    });
                    onUpdateRow(index, { ...ele, penalty_remarks: value })
                     props.setAccountDashboardList((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        penalty_remarks: value,


                      };
                      return newData;

                    })

                  }} /></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table2>
      </div >
      <div className="mt-4">
        <GreenButton text="Submit" onClick={() => {
          props.setData((prev: any) => {

            return {
              ...prev,
              selection_list: penaltyData,
            };
          }); props.onClickCreate(penaltyData); props.setStatus('yes'); setPenaltyData([])
        }} />
      </div>
    </>
  );
};

export default AccountDashboardTable;
