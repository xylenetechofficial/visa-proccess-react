import { useEffect, useState } from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,

} from "../../../../componenets/Table";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { ImmigrationDonePPReleaseInterface } from "../type";
import { CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
import { GivenToList, GivenToList_only_passprt, GivenToList_without_RC } from "../../../db";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";

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

  // useEffect(()=>{

  // },[])

  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Candidate</TableHeadCell3>
            <TableHeadCell3> Passport No</TableHeadCell3>
            <TableHeadCell3> Company</TableHeadCell3>
            <TableHeadCell3> Immigration Required </TableHeadCell3>

            <TableHeadCell3> Payment </TableHeadCell3>
            {/* <TableHeadCell3> Service Tax Received </TableHeadCell3> */}
            <TableHeadCell3> Is Invoice </TableHeadCell3>

            <TableHeadCell3> Select </TableHeadCell3>
            <TableHeadCell3> Given To </TableHeadCell3>
            <TableHeadCell3> Given Date </TableHeadCell3>

            <TableHeadCell3> Division </TableHeadCell3>
            <TableHeadCell3> Visa Authorization </TableHeadCell3>
            <TableHeadCell3> Party Code </TableHeadCell3>

            <TableHeadCell3> Submission Date </TableHeadCell3>
            <TableHeadCell3> Received Date </TableHeadCell3>
            <TableHeadCell3> Actual Profession </TableHeadCell3>
            <TableHeadCell3> Visa Profession </TableHeadCell3>

            <TableHeadCell3> Agent</TableHeadCell3>
            {/* <TableHeadCell3> Agent Location</TableHeadCell3> */}

            <TableHeadCell3> Visa Issued Date </TableHeadCell3>
            <TableHeadCell3> Visa Received Date </TableHeadCell3>
            <TableHeadCell3> Visa Expire Date </TableHeadCell3>
            <TableHeadCell3> Document Received </TableHeadCell3>
            <TableHeadCell3> Release By Date </TableHeadCell3>
            <TableHeadCell3> Release Requested By </TableHeadCell3>

          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.RcPPRecieved.map(( item, index) => {
            let GivenToList_local: any = [];

            console.log(item.passport_no + "  " + item.local_given_to);   // Only Dev

            if (item.local_given_to == "Given To RC") {
              GivenToList_local = GivenToList_only_passprt
            } else if (item.balance_amount < 1) {
              GivenToList_local = GivenToList
            } else {
              GivenToList_local = GivenToList_without_RC
            }

            return (<TableRow3>

              <TableCell3>{index + 1} </TableCell3>
              <TableCell3>{item.name} </TableCell3>
              <TableCell3>{item.passport_no} </TableCell3>
              <TableCell3>{item.company_name} </TableCell3>
              <TableCell3>{item.immigration_required} </TableCell3>

              <TableCell3>{item.payment} </TableCell3>
              {/* <TableCell3>{item.service_tax_received} </TableCell3> */}
              <TableCell3>{item.is_invoice} </TableCell3>
              <TableCell3 >
                <CustomSingleCheckBox
                  onChange={(value) => onUpdateRow(index, { ...item, checked: value })}
                  value={item.checked ? true : false}
                />
              </TableCell3>

              <TableCell3>
                {item.local_given_to == "Given To Cancelation" ? item.local_given_to : <>
                  <CustomSelectComponentUnlabeled
                    value={item.given_to}
                    onChange={(value: any) => {
                      onUpdateRow(index, { ...item, given_to: value })
                    }}
                    options={GivenToList_local}
                  />
                </>}
                {/* <CustomSelectComponentUnlabeled
                  value={item.given_to}
                  onChange={(value: any) => {
                    onUpdateRow(index, { ...item, given_to: value })
                  }}
                  options={GivenToList_local}
                /> */}
              </TableCell3>
              <TableCell3>
                <UnlabeledInput type="date" onchange={(value) => {
                  onUpdateRow(index, { ...item, given_date: value })
                }}
                  value={item?.given_date} />
              </TableCell3>

              <TableCell3>{item.division} </TableCell3>
              <TableCell3>{item.visa_authorization_name} </TableCell3>
              <TableCell3>{item.party_code} </TableCell3>

              <TableCell3>{item.immigration_submission_date} </TableCell3>
              <TableCell3>{item.immigration_received_date} </TableCell3>
              <TableCell3>{item.actual_profession} </TableCell3>
              <TableCell3>{item.visa_profession} </TableCell3>

              <TableCell3>{item.agent_name} </TableCell3>
              {/* <TableCell3>{item.agent_location_name} </TableCell3> */}

              <TableCell3>{item.visa_issued_date} </TableCell3>
              <TableCell3>{item.visa_received_date} </TableCell3>
              <TableCell3>{item.visa_expire_date} </TableCell3>
              <TableCell3> {item.immigration_document_received}</TableCell3>
              <TableCell3>{item.release_by_date} </TableCell3>
              <TableCell3>{item.release_requested_by} </TableCell3>

            </TableRow3>)
          })}

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ImmigrationDOnePPReleaseTable;
