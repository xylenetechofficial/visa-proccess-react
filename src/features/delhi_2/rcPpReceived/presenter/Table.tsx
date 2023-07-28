import { Table3, TableBody2, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { PP_RC_CandidateInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";


const Main = (props: {
  pp_rc_candidateDataList: PP_RC_CandidateInterface[],
  onChange: (value: PP_RC_CandidateInterface[]) => void,
  fetchPP_RC_CandidateList: any
}) => {

  const HEADERLIST = [
    "SR NO.",
    "Candidate Name",
    "Passport No",
    "Company Name",

    "Party Code",
    "Actual Profession",
    "Visa Profession",

    "Visa Submitte Date",
    "Visa Received Date",
    "Agent",

    "Total Service Charges",
    "Amount Received",
    "Amount Received (Delhi)",

    "Given To Delhi Office Date",
    "PP Received",
    "PP Received Date",
  ];


  function onUpdateRow(index: number, rowData: PP_RC_CandidateInterface) {
    const nextData = props.pp_rc_candidateDataList.map((e, i) => {
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

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
          </TableHeadRow3>
        </TableHead3>
        <TableBody2>
          {props.pp_rc_candidateDataList.map((item, index) => (

            <TableRow3 key={index}>
              <TableCell3>{index+1}</TableCell3>
              <TableCell3>{item.name}</TableCell3>
              <TableCell3>{item.passport_no}</TableCell3>
              <TableCell3>{item.company_name}</TableCell3>

              <TableCell3>{item.party_code}</TableCell3>
              <TableCell3>{item.actual_profession}</TableCell3>
              <TableCell3>{item.visa_profession}</TableCell3>

              <TableCell3>{convertDateFormat(item.visa_submitted_date)}</TableCell3>
              <TableCell3>{convertDateFormat(item.visa_received_date)}</TableCell3>
              <TableCell3>{item.agent_name}</TableCell3>

              <TableCell3>{item.total_service_charges}</TableCell3>
              <TableCell3>{item.amount_received}</TableCell3>
              <TableCell3>{item.amount_received_delhi}</TableCell3>


              <TableCell3>{convertDateFormat(item.given_to_delhi_office_date)}</TableCell3>
              <TableCell3>{item.dad_pp_received ? "Yes" : "No"}</TableCell3>
              <TableCell3>{convertDateFormat(item.dad_pp_received_date)}</TableCell3>

            </TableRow3>
          ))}



        </TableBody2>
      </Table3>
    </div>
  );
};

export default Main;
