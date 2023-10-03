import React, { useState } from "react";
import { PenaltyAfterDeploymentDashboardInterface } from "../type";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
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
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3> Sr No.</TableHeadCell3>
              <TableHeadCell3> CONDIDATE NO</TableHeadCell3>
              <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
              <TableHeadCell3> PASSPORT NO</TableHeadCell3>
              <TableHeadCell3> PASSPORT ISSUED DATE</TableHeadCell3>
              <TableHeadCell3> PASSPORT EXPIRY DATE</TableHeadCell3>
              <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
              <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
              <TableHeadCell3> JOB ORDER NUMBER </TableHeadCell3>
              <TableHeadCell3> GRADE</TableHeadCell3>
              <TableHeadCell3> COMPANY NAME</TableHeadCell3>
              <TableHeadCell3> PARTY CODE </TableHeadCell3>
              <TableHeadCell3> AGENT </TableHeadCell3>
              <TableHeadCell3> RM </TableHeadCell3>
              <TableHeadCell3> RC </TableHeadCell3>
              <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
              <TableHeadCell3> VISA ISSUED DATE </TableHeadCell3>
              <TableHeadCell3> VISA EXPIRY DATE </TableHeadCell3>
              <TableHeadCell3> DIVISION </TableHeadCell3>
              <TableHeadCell3> STATUS </TableHeadCell3>
              <TableHeadCell3> PNR NO. </TableHeadCell3>
              <TableHeadCell3> AGENCY </TableHeadCell3>
              <TableHeadCell3> DEPARTURE DATE </TableHeadCell3>
              <TableHeadCell3> MISTAKE BY </TableHeadCell3>
              <TableHeadCell3> AGENCY INVOICE </TableHeadCell3>
              <TableHeadCell3> CHANGE ISSUE TYPE </TableHeadCell3>
              <TableHeadCell3> SECTOR FROM </TableHeadCell3>
              <TableHeadCell3> SECTOR TO </TableHeadCell3>
              <TableHeadCell3> INVOICE RAISED </TableHeadCell3>
              <TableHeadCell3> IS INVOICE  </TableHeadCell3>
              <TableHeadCell3> AIR TICKET  </TableHeadCell3>
              <TableHeadCell3> PHOTO CHARGES</TableHeadCell3>
              <TableHeadCell3> TRAINING CHARGES</TableHeadCell3>
              <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
              <TableHeadCell3> DOCUMENT CHARGES</TableHeadCell3>
              <TableHeadCell3> SERVICE CHARGES</TableHeadCell3>
              <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
              <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
              <TableHeadCell3> SECTOR CHARGES </TableHeadCell3>
              <TableHeadCell3> TICKET CHARGES</TableHeadCell3>
              <TableHeadCell3> ATTESTION CHARGES</TableHeadCell3>
              <TableHeadCell3> EXTRA SERVICE CHARGES</TableHeadCell3>
              <TableHeadCell3> CONSOLIDATED CHARGES</TableHeadCell3>
              <TableHeadCell3> DISCOUNTED AMOUNT</TableHeadCell3>
              <TableHeadCell3> PAYMENT </TableHeadCell3>
              <TableHeadCell3> PENDING AMOUNT  </TableHeadCell3>
              <TableHeadCell3> <Checkbox />  </TableHeadCell3>
              <TableHeadCell3> PENALTY AFTER DEPARTURE</TableHeadCell3>
              <TableHeadCell3> PENALTY REMARKS</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {props?.accountDashboardList?.map((ele, index) => (
              <TableRow3 key={index}>
                <TableCell3>{index + 1}</TableCell3>
                <TableCell3> {ele?.id}</TableCell3>
                <TableCell3> {ele?.name}</TableCell3>
                <TableCell3> {ele?.passport_no}</TableCell3>
                <TableCell3> {convertDateFormat(ele?.passport_issued_date)}</TableCell3>
                <TableCell3> {convertDateFormat(ele?.passport_expiry_date)}</TableCell3>
                <TableCell3> {ele?.actual_profession}</TableCell3>
                <TableCell3> {ele?.visa_profession} </TableCell3>
                <TableCell3> {ele?.job_order_no} </TableCell3>
                <TableCell3> {ele?.grade}</TableCell3>
                <TableCell3> {ele?.company_name}</TableCell3>
                <TableCell3> {ele?.party_code} </TableCell3>
                <TableCell3> {ele?.agent_name} </TableCell3>
                <TableCell3> {ele?.rm} </TableCell3>
                <TableCell3> {ele?.rc} </TableCell3>
                <TableCell3>{ele?.visa_authorization} </TableCell3>
                <TableCell3> {convertDateFormat(ele?.visa_issued_date)} </TableCell3>
                <TableCell3> {convertDateFormat(ele?.visa_expiry_date)} </TableCell3>
                <TableCell3> {ele?.division} </TableCell3>
                <TableCell3> {ele?.status} </TableCell3>
                <TableCell3> {ele?.pnr_no} </TableCell3>
                <TableCell3> {ele?.agency} </TableCell3>
                <TableCell3> {convertDateFormat(ele?.departure_date)} </TableCell3>
                <TableCell3> {ele?.mistake_by} </TableCell3>
                <TableCell3> {ele?.agency_invoice} </TableCell3>
                <TableCell3> {ele?.change_issue_type} </TableCell3>
                <TableCell3> {ele?.sector_from} </TableCell3>
                <TableCell3> {ele?.sector_to} </TableCell3>
                <TableCell3> {ele?.invoice_raised} </TableCell3>
                <TableCell3> {ele?.is_invoice}  </TableCell3>
                <TableCell3> {ele?.air_ticket}  </TableCell3>
                <TableCell3> {ele?.photo_charges}</TableCell3>
                <TableCell3> {ele?.training_charges} </TableCell3>
                <TableCell3> {ele?.other_charges} </TableCell3>
                <TableCell3> {ele?.document_charges} </TableCell3>
                <TableCell3> {ele?.service_charges} </TableCell3>
                <TableCell3> {ele?.consulate_setting_charges} </TableCell3>
                <TableCell3> {ele?.partial_charges} </TableCell3>
                <TableCell3> {ele?.sector_charges} </TableCell3>
                <TableCell3> {ele?.ticket_charges} </TableCell3>
                <TableCell3> {ele?.attestation_charges} </TableCell3>
                <TableCell3> {ele?.consolidated_charges}</TableCell3>
                <TableCell3> {ele?.consolidated_charges} </TableCell3>
                <TableCell3> {ele?.discount_amount} </TableCell3>
                <TableCell3> {ele?.payment} </TableCell3>
                <TableCell3> {ele?.pending_amount}  </TableCell3>
                <TableCell3> <Checkbox
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
                  }} />  </TableCell3>
                <TableCell3> <UnlabeledInput type="number" value={ele?.penalty_after_departure}
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
                /></TableCell3>
                <TableCell3> <TextAreaInput id="penalty_remarks" value={ele?.penalty_remarks}
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

                  }} /></TableCell3>

              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
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
