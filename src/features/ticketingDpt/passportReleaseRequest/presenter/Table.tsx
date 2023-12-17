
import {  CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { DateInput } from "../../../../componenets/Input";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { PassportReleaseRequestInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";

export default function Main(props: {
  snoBase: number;
  PassportReleaseRequestList: PassportReleaseRequestInterface[];
  onChange: (value: PassportReleaseRequestInterface[]) => void;
}) {
  const HEADERLIST = [
    "SR NO.",
    "PARTY CODE",
    "COMPANY NAME",
    "CANDIDATE NAME",
    "PP NO",
    "ACTUAL PROFESSION",
    "VISA PROFESSION",
    "AGENT",
    "RC NAME",
    "VISA RECEIVED DATE",
    "VISA EXPIRE DATE ",
    "IS INVOICE",
    "AIR TICKET ",
    "DIVISION",
    "SELECT",
    "RELEASE BY DATE",
  ];
  function onUpdateRow(
    index: number,
    rowData: PassportReleaseRequestInterface
  ) {
    const nextData = props.PassportReleaseRequestList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
  }

  return (
    <>
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              {HEADERLIST.map((item) => (
                <TableHeadCell3> {item}</TableHeadCell3>
              ))}
            </TableHeadRow3>
          </TableHead3>
          <TableBody3>
            {props.PassportReleaseRequestList.map((item, index) => (
              <TableRow3>
               <TableCell3 >{index + props.snoBase + 1}</TableCell3>
                <TableCell3> {item.party_code} </TableCell3>
                <TableCell3> {item.company_name} </TableCell3>
                <TableCell3> {item.candidate_name} </TableCell3>
                <TableCell3> {item.pp_no} </TableCell3>
                <TableCell3> {item.actual_profession} </TableCell3>
                <TableCell3> {item.visa_profession} </TableCell3>
                <TableCell3> {item.agent_name} </TableCell3>
                <TableCell3> {item.rc_name} </TableCell3>
                <TableCell3>
                  {" "}
                  {convertDateFormat(item.visa_received_date)}{" "}
                </TableCell3>
                <TableCell3>
                  {" "}
                  {convertDateFormat(item.visa_expiry_date)}{" "}
                </TableCell3>
                <TableCell3> {item.is_invoice} </TableCell3>
                <TableCell3> {item.air_ticket} </TableCell3>
                <TableCell3> {item.division} </TableCell3>
                <TableCell3>
                 
                  <CustomSingleCheckBox
                    onChange={(value) => {onUpdateRow(index, { ...item, checked: value }),

                    // onUpdateRow(index, { ...item, id: item.id })
                    console.log(value)
                  }}
                    value={item.checked ? true : false}
                  />
                </TableCell3>
                <TableCell3>
                  <DateInput
                    id="releaseDate"
                    onChange={(value) => {
                      onUpdateRow(index, {
                        ...item,
                        ticketing_release_by_date: value,
                      });
                    }}
                    value={item.ticketing_release_by_date}
                  />
                </TableCell3>
              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
      </div>
    </>
  );
}
