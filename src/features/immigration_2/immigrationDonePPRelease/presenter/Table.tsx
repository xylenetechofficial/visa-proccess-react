import { useState } from "react";
import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

} from "../../../../componenets/Table";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { ImmigrationDonePPReleaseInterface } from "../type";
import { CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
import { GivenToList } from "../../../db";

const ImmigrationDOnePPReleaseTable = (props: {

  RcPPRecieved: ImmigrationDonePPReleaseInterface[];
  setRcRcPPRecieved: any
  onChange: (value: ImmigrationDonePPReleaseInterface[]) => void,
  data: any;
  setData: any;
}) => {

  const [date, setDate] = useState<any>([])
  console.log(props.data)

  function onUpdateRow(index: number, rowData: ImmigrationDonePPReleaseInterface) {
    const nextData = props.RcPPRecieved.map((e, i) => {
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
    <div className="overflow-auto">

      <Table>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell> Sr No.</TableHeadCell>
            <TableHeadCell> Candidate</TableHeadCell>
            <TableHeadCell> Passport No</TableHeadCell>
            <TableHeadCell> Company</TableHeadCell>
            <TableHeadCell> Immigration Required </TableHeadCell>

            <TableHeadCell> Payment </TableHeadCell>
            <TableHeadCell> Service Tax Received </TableHeadCell>
            <TableHeadCell> Is Invoice </TableHeadCell>

            <TableHeadCell> Given To </TableHeadCell>
            <TableHeadCell> Given Date </TableHeadCell>

            <TableHeadCell> Division </TableHeadCell>
            <TableHeadCell> Visa Authorization </TableHeadCell>
            <TableHeadCell> Party Code </TableHeadCell>

            <TableHeadCell> Submission Date </TableHeadCell>
            <TableHeadCell> Received Date </TableHeadCell>
            <TableHeadCell> Actual Profession </TableHeadCell>
            <TableHeadCell> Visa Profession </TableHeadCell>

            <TableHeadCell> Agent</TableHeadCell>
            <TableHeadCell> Agent Location</TableHeadCell>

            <TableHeadCell> Visa Issued Date </TableHeadCell>
            <TableHeadCell> Visa Received Date </TableHeadCell>
            <TableHeadCell> Visa Expire Date </TableHeadCell>
            <TableHeadCell> Document Received </TableHeadCell>
            <TableHeadCell> Release By Date </TableHeadCell>
            <TableHeadCell> Release Requested By </TableHeadCell>

          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.RcPPRecieved.map((item, index) => (
            <TableRow>

              <TableCell>{index + 1} </TableCell>
              <TableCell>{item.name} </TableCell>
              <TableCell>{item.passport_no} </TableCell>
              <TableCell>{item.company_name} </TableCell>
              <TableCell>{item.immigration_required} </TableCell>

              <TableCell>{item.payment} </TableCell>
              <TableCell>{item.service_tax_received} </TableCell>
              <TableCell>{item.is_invoice} </TableCell>

              <TableCell>
                <CustomSelectComponentUnlabeled
                  value={item.given_to}
                  onChange={(value: any) => {
                    onUpdateRow(index, { ...item, given_to: value })
                  }}
                  options={GivenToList}
                />
              </TableCell>
              <TableCell>
                <UnlabeledInput type="date" onchange={(value) => {
                  onUpdateRow(index, { ...item, given_date: value })
                }}
                  value={item?.given_date} />
              </TableCell>

              <TableCell>{item.division} </TableCell>
              <TableCell>{item.visa_authorization_name} </TableCell>
              <TableCell>{item.party_code} </TableCell>

              <TableCell>{item.immigration_submission_date} </TableCell>
              <TableCell>{item.immigration_received_date} </TableCell>
              <TableCell>{item.actual_profession} </TableCell>
              <TableCell>{item.visa_profession} </TableCell>

              <TableCell>{item.agent_name} </TableCell>
              <TableCell>{item.agent_location_name} </TableCell>

              <TableCell>{item.visa_issued_date} </TableCell>
              <TableCell>{item.visa_received_date} </TableCell>
              <TableCell>{item.visa_expire_date} </TableCell>
              <TableCell> {item.immigration_document_received}</TableCell>
              <TableCell>{item.release_by_date} </TableCell>
              <TableCell>{item.release_requested_by} </TableCell>

            </TableRow>



          ))}

        </TableBody2>
      </Table>

    </div>
  );
};

export default ImmigrationDOnePPReleaseTable;
