import React from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,

} from "../../../../componenets/Table";
import { DegreeAttestationInterface } from "../type/DegreeAttestation";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import { addDegreeAttestationCancel, addDegreeAttestationForward } from "../repository";

const DegreeAttestationTable = (props: {
  snoBase: number,
  degreAttestationList: DegreeAttestationInterface[]
  fetch_list: any
  onClickCancel: (ele: DegreeAttestationInterface) => void
}) => {

  const onclickForward = async (element: DegreeAttestationInterface) => {
    const res = await addDegreeAttestationForward(element)

    if (!res)
      return

    props.fetch_list()
  };

  // const onclickCancel = async (element: DegreeAttestationInterface) => {
  //   const res = await addDegreeAttestationCancel(element)

  //   if (!res)
  //     return

  //   props.fetch_list()
  // };
  const HeaderList = ['sn. no', 'candidate name', 'p.p no', 'actual position ',
    'agent name', 'rc name', 'company', 'amout payable to vendor', 'amount receivale',
    'vendor name', 'for visa process', 'for degree cancelation charge']
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            {HeaderList.map((ele: string) =>
              <TableHeadCell3>{ele}</TableHeadCell3>
            )}

          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.degreAttestationList.map((ele: DegreeAttestationInterface, index: any) => (
            <TableRow3 key={index}>
              <TableCell3 >{index + props.snoBase + 1}</TableCell3>
              <TableCell3>{ele.candidate_name}</TableCell3>
              <TableCell3>{ele.passport_no}</TableCell3>
              <TableCell3>{ele.actual_position}</TableCell3>

              <TableCell3>{ele.agent_name}</TableCell3>
              <TableCell3>{ele.rc_name}</TableCell3>
              <TableCell3>{ele.company_name}</TableCell3>

              <TableCell3>{ele.amout_payable_to_vendor}</TableCell3>
              <TableCell3>{ele.amount_receivaled}</TableCell3>
              <TableCell3>{ele.vendor_name}</TableCell3>
              <TableCell3>
                <BlueButton
                  text="Forwards"
                  onClick={() => onclickForward(ele)} />
              </TableCell3>
              <TableCell3>
                <RedButton
                  text="Cancel"
                  onClick={() => props.onClickCancel(ele)} />
              </TableCell3>

            </TableRow3>
          ))}

        </TableBody3>
      </Table3>
    </div>
  );
};

export default DegreeAttestationTable;
