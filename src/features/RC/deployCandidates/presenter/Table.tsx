import { DeployCandidatesInterface } from "../type";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";

const DeployCandidateTable = (props: {
  deployCandidateList: DeployCandidatesInterface[];
  snoBase: number;
  onChange: (value: DeployCandidatesInterface[]) => void;
}) => {
  function onUpdateRow(index: number, rowData: DeployCandidatesInterface) {
    const nextData: DeployCandidatesInterface[] = props.deployCandidateList.map(
      (e, i) => {
        if (i === index) {
          // Increment the clicked counter
          return rowData;
        } else {
          // The rest haven't changed
          return e;
        }
      }
    );
    props.onChange(nextData);
  }

  const deployed = [
    {id:"Yes", name:"Yes"},
    {id:"No", name:"No"}
  ]

  
  const tableHeadings = [
    ["Sr No."],
    ["PARTY CODE"],
    ["COMPANY NAME"],
    ["CANDIDATE NAME"],
    ["PP NO."],
    ["ACTUAL PROFESSION"],
    ["VISA PROFESSION"],
    ["AGENT"],
    ["RC NAME"],
    ["AIR LINE"],
    ["PNR NO."],
    ["DEPARTURE DATE"],
    ["AMOUNT"],
    ["DEPLOYED"],
  ];
  const tableHeadingsComponent = tableHeadings.map((e) => (
    <TableHeadCell3 width={100}> {e[0]}</TableHeadCell3>
  ));
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>{tableHeadingsComponent}</TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.deployCandidateList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index +props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3> {ele.passport_no}</TableCell3>
              <TableCell3> {ele.actual_profession}</TableCell3>
              <TableCell3> {ele.visa_profession}</TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3> {ele.rc_name}</TableCell3>
              <TableCell3> {ele.air_line}</TableCell3>
              <TableCell3> {ele.pnr_no}</TableCell3>
              <TableCell3> {ele.departure_date}</TableCell3>
              <TableCell3> {ele.amount}</TableCell3>
              <TableCell3>
            <span className="w-28">
            <CustomSelectComponent
                  value={ele.deployed}
                  label="Deployed"
                  options={selectOptionConveter({
                    options: deployed,
                    options_struct: { name: "name", value: "id" },
                  })}
                  onChange={(value) => {
                    onUpdateRow(index, { ...ele, deployed: value })
                  }}
                />
            </span>
               
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default DeployCandidateTable;
