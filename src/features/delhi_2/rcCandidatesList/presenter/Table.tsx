import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { CustomCheckBox, CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { RC_CandidateInterface } from "../type";
import { CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
import { GivenToList } from "../../../db";
import { convertDateFormat } from "../../../../utils/function";
import { RedButton } from "../../../../componenets/CustomButton";
import { removeRC_Candidate } from "../repository";


const Main = (props: {
  snoBase: number,
  rc_candidateDataList: RC_CandidateInterface[],
  onChange: (value: RC_CandidateInterface[]) => void,
  fetchRC_CandidateList: any
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
    "Action",
  ];


  function onUpdateRow(index: number, rowData: RC_CandidateInterface) {
    const nextData = props.rc_candidateDataList.map((e, i) => {
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
        <TableBody3>
          {props.rc_candidateDataList.map((item, index) => (

            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
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
              <TableCell3>
                <CustomSingleCheckBox
                  onChange={(value) => {
                    onUpdateRow(index, { ...item, dad_pp_received: value })
                  }}
                  value={item.dad_pp_received ? true : false}
                />
              </TableCell3>

              <TableCell3>
                <DateInput id="jhvh" onChange={(value) => {
                  onUpdateRow(index, { ...item, dad_pp_received_date: value })
                }}
                  value={item.dad_pp_received_date} />
              </TableCell3>

              <TableCell3>
                <RedButton
                  text="Remove"
                  onClick={()=>{
                    removeRC_Candidate(item)
                    props.fetchRC_CandidateList()
                  }}
                />
              </TableCell3>
            </TableRow3>
          ))}



        </TableBody3>
      </Table3>
    </div>
  );
};

export default Main;
