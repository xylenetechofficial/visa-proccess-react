import { Checkbox } from "flowbite-react";
import { UnlabeledInput } from "../../../../componenets/Input";
import {
  CustomSelectComponent,
  CustomSelectComponentUnlabeled,
} from "../../../../componenets/SelectBox";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { TicketAgencyInvoicesInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";
import { useState } from "react";
import { PaginationBack, PaginationContainer, PaginationCurrent, PaginationNext } from "../../../../componenets/Pagination";


export default function Main(props: {
  TicketAgencyInvoicesList: TicketAgencyInvoicesInterface[];
  onChange: (value: TicketAgencyInvoicesInterface[]) => void;
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
    "VISA EXPIRE DATE",
    "SECTOR FROM",
    "SECTOR TO",
    "REQUIRED DATE ",
    "PRIORITY",
    "AIR TICKET",
    "AIR LINE",
    "TICKET ISSUE DATE",
    "PNR NO.",
    "DEPARTURE DATE",
    "AGENCY",
    "AMOUNT",
    "INVOICE NO.",
    "INVOICE DATE",
    "TALLY ENTRY",
  ];

  function onUpdateRow(index: number, rowData: TicketAgencyInvoicesInterface) {
    const nextData = props.TicketAgencyInvoicesList.map((e, i) => {
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

  // Pagination start demo design
  // console.log(props.TicketAgencyInvoicesList, "Test");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = props.TicketAgencyInvoicesList.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(
    props.TicketAgencyInvoicesList.length / recordPerPage
  );
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const changePrevious = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurrent = (id) => {
    setCurrentPage(id);
  };
  const changeNext = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            {record.map((item, index) => (
              <TableRow3>
                <TableCell3>{item.id}</TableCell3>
                <TableCell3>{item.party_code} </TableCell3>
                <TableCell3>{item.company_name} </TableCell3>
                <TableCell3>{item.candidate_name} </TableCell3>
                <TableCell3>{item.pp_no} </TableCell3>
                <TableCell3>{item.actual_profession} </TableCell3>
                <TableCell3>{item.visa_profession} </TableCell3>
                <TableCell3>{item.agent} </TableCell3>
                <TableCell3>{item.rc_name} </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.visa_received_date)}{" "}
                </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.visa_expiry_date)}{" "}
                </TableCell3>
                <TableCell3>{item.sector_from} </TableCell3>
                <TableCell3>{item.sector_to} </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.required_date)}{" "}
                </TableCell3>
                <TableCell3>{item.priority} </TableCell3>
                <TableCell3>{item.air_ticket} </TableCell3>
                <TableCell3>{item.air_line} </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.ticket_issue_date)}{" "}
                </TableCell3>
                <TableCell3>{item.pnr_no} </TableCell3>
                <TableCell3>
                  {convertDateFormat(item.departure_date)}{" "}
                </TableCell3>
                <TableCell3>{item.agency} </TableCell3>
                <TableCell3>{item.amount} </TableCell3>
                <TableCell3>{item.invoice_no} </TableCell3>
                <TableCell3>{convertDateFormat(item.invoice_date)} </TableCell3>
                <TableCell3>
                  <Checkbox
                    value={item.ticketing_tally_entry}
                    onChange={(e) =>
                      onUpdateRow(index, {
                        ...item,
                        ticketing_tally_entry: e.target.checked ? 1 : 0,
                      })
                    }
                  />
                </TableCell3>
              </TableRow3>
            ))}
          </TableBody3>
        </Table3>
      </div>

      <PaginationContainer >
      {currentPage >= 2 ? (
          <PaginationBack onClick={changePrevious}>Back</PaginationBack>
        ) : null}
        {
        numbers.map((current,i)=> (<PaginationCurrent onClick={()=>changeCurrent(current)} key={i}>{current}</PaginationCurrent>) )
      }
        <PaginationNext onClick={changeNext}  >Next</PaginationNext>
      </PaginationContainer>

    </>

  

  );
}
