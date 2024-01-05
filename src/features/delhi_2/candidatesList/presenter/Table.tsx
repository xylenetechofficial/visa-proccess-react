import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { RedButton } from "../../../../componenets/CustomButton";
import { CustomCheckBox } from "../../../../componenets/Checkbox";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { CandidateInterface } from "../type";
import { CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
import { DAD_GivenToList } from "../../../db";
import { removeCandidate } from "../repository";
import { useUserAuth } from "../../../context/UserAuthContext";


const Main = (props: {
  snoBase: number,
  candidateDataList: CandidateInterface[],
  onChange: (value: CandidateInterface[]) => void,
  fetchCandidateList: () => void
}) => {
  const {authPermissionList} = useUserAuth();

  const HEADERLIST = [
    "SR NO.",
    "Candidate Name",
    "Passport No",
    "Company Name",

    "Party Code",
    "Actual Profession",
    "Visa Profession",
    "Agent",

    "Total Service Charges",
    "Amount Received",
    "Amount Received (Delhi)",

    "Service Tax",
    "Service Tax Received",
    "Amount",
    "Given To",
    "Given Date",
    "Action",
  ];

  function onUpdateRow(index: number, rowData: CandidateInterface) {
    const nextData = props.candidateDataList.map((e, i) => {
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
          {props.candidateDataList.map((item, index) => (

            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>{item.name}</TableCell3>
              <TableCell3>{item.passport_no}</TableCell3>
              <TableCell3>{item.company_name}</TableCell3>

              <TableCell3>{item.party_code}</TableCell3>
              <TableCell3>{item.actual_profession}</TableCell3>
              <TableCell3>{item.visa_profession}</TableCell3>
              <TableCell3>{item.agent_name}</TableCell3>

              <TableCell3>{item.total_service_charges}</TableCell3>
              <TableCell3>{item.amount_received}</TableCell3>
              <TableCell3>{item.amount_received_delhi}</TableCell3>

              <TableCell3>
                <CustomCheckBox
                  value={item.dad_service_tax}
                  onChange={(value) => {
                    onUpdateRow(index, { ...item, dad_service_tax: value })
                  }}
                  option={[{ name: "Yes", value: "yes" }, { name: "No", value: "no" }]} />
              </TableCell3>
              <TableCell3>{item.service_tax_received}</TableCell3>

              <TableCell3>
                <UnlabeledInput
                  type="number"

                  onchange={(value) => {
                    onUpdateRow(index, { ...item, dad_amount: parseInt(value) })
                  }}
                  value={item.dad_amount} />
              </TableCell3>
              <TableCell3>
                <CustomSelectComponentUnlabeled
                  value={item.given_to}
                  onChange={(value) => {
                    onUpdateRow(index, { ...item, given_to: value })
                  }}
                  options={DAD_GivenToList}
                />
              </TableCell3>
              <TableCell3>
                <DateInput id="dhfkgdfj" onChange={(value) => {
                  onUpdateRow(index, { ...item, given_date: value })
                }}
                  value={item.given_date} />
              </TableCell3>

              <TableCell3>
                {
                  authPermissionList.url_has("delete")?
                  <RedButton
                  text="Remove"
                  onClick={()=>{
                    removeCandidate(item)
                    window.location.reload()
                    // props.fetchCandidateList()
                  }}
                />:""
                }
            
              </TableCell3>
            </TableRow3>
          ))}



        </TableBody3>
      </Table3>
    </div>
  );
};

export default Main;
