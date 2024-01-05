import {
  BlueButton,
  GreenButton,
  RedButton,
} from "../../../../componenets/CustomButton";
import {
  Table3,
  TableBody,
  TableBody3,
  TableCell,
  TableCell3,
  TableHead,
  TableHead3,
  TableHeadCell,
  TableHeadCell3,
  TableHeadRow,
  TableHeadRow3,
  TableRow,
  TableRow3,
} from "../../../../componenets/Table";
import { CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { convertDateFormat, getJsDate } from "../../../../utils/function";
import {
  CustomSelectComponent,
  CustomSelectComponentUnlabeled,
} from "../../../../componenets/SelectBox";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { MolReceivedInterface } from "../type";

const Table = (props: {
  snoBase: number;
  jobOrderList: MolReceivedInterface[];
  onChange: (value: MolReceivedInterface[]) => void;
}) => {
  const tableHeadings = [
    ["SR. NO."],
    ["NAME"],
    ["PASSPORT NO"],
    ["PP ISSUED DATE"],
    ["PP EXPIRY DATE"],
    ["PLACE OF ISSUE"],
    ["DATE OF BIRTH"],
    ["PLACE OF BIRTH"],
    ["ADDRESS"],
    ["RELIGION"],
    ["ACTUAL PROFESSION"],
    ["VISA PROFESSIONN"],
    ["AGENT"],
    ["DIVISION"],
    ["RM"],
    ["RS"],
    ["RC"],
    ["PP/COPY"],
    ["MOL PP RECEIVED DATE"],
    // ["MOL FORWARDED "],
    ["MOL FORWARDED DATE"],
    // ["MOL RECEIVE STATUS"],
    ["MOL RECEIVED DATE"],
    ["*SELECT "],
    ["*SUBMITTED TO COMPANY"],
    ["*SUBMITTED DATE"],
  ];

  function onUpdateRow(index: number, rowData: MolReceivedInterface) {
    const nextData: MolReceivedInterface[] = props.jobOrderList.map((e, i) => {
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

  const tableHeadingsComponent = tableHeadings.map((e) => (
    <TableHeadCell3> {e[0]}</TableHeadCell3>
  ));

  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>{tableHeadingsComponent}</TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.jobOrderList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3> {ele.passportNo}</TableCell3>
              <TableCell3> {convertDateFormat(ele.ppIssueDate)}</TableCell3>

              <TableCell3> {convertDateFormat(ele.ppExpiryDate)}</TableCell3>
              <TableCell3> {ele.placeOfIssue}</TableCell3>
              <TableCell3> {convertDateFormat(ele.dateOfBirth)}</TableCell3>
              <TableCell3> {ele.placeOfBirth}</TableCell3>
              <TableCell3> {ele.address}</TableCell3>
              <TableCell3> {ele.religion}</TableCell3>
              <TableCell3> {ele.actualProfession}</TableCell3>
              <TableCell3> {ele.visaProfession}</TableCell3>
              <TableCell3> {ele.agent}</TableCell3>
              <TableCell3> {ele.division}</TableCell3>
              <TableCell3> {ele.RM}</TableCell3>
              <TableCell3> {ele.rs}</TableCell3>
              <TableCell3> {ele.rc}</TableCell3>
              <TableCell3> {ele.ppCopy}</TableCell3>
              <TableCell3>
                {" "}
                {convertDateFormat(ele.molPPReceivedDate)}
              </TableCell3>
              <TableCell3>
                {" "}
                {convertDateFormat(ele.molForwardedDate)}
              </TableCell3>
              <TableCell3> {convertDateFormat(ele.molReceiedDate)}</TableCell3>
              <TableCell3>
                <CustomSingleCheckBox
                  onChange={(value) => {
                    // const date = new Date();
                    // const day = ("0" + date.getDate()).slice(-2);
                    // const month = ("0" + (date.getMonth() + 1)).slice(-2);
                    // const year = date.getFullYear();
                    // onUpdateRow(index, { ...ele, checked: value ? 1 : 0 })

                    if (value)
                      onUpdateRow(index, {
                        ...ele,
                        checked: 1,
                        submittedToCompany: "yes",
                        submitedDate: `${getJsDate()}`,
                      });
                    else
                      onUpdateRow(index, {
                        ...ele,
                        checked: 0,
                        submittedToCompany: ``,
                        submitedDate: ``,
                      });
                  }}
                  value={ele.checked ? true : false}
                />
              </TableCell3>
              <TableCell3>
                <CustomSelectComponentUnlabeled
                  options={[
                    { name: "yes", value: "yes" },
                    { name: "no", value: "no" },
                  ]}
                  onChange={(value) => {
                    // const date = new Date();
                    // const day = ("0" + date.getDate()).slice(-2);
                    // const month = ("0" + (date.getMonth() + 1)).slice(-2);
                    // const year = date.getFullYear();

                    if (value)
                      onUpdateRow(index, {
                        ...ele,
                        checked: 1,
                        submittedToCompany: "yes",
                        submitedDate: `${getJsDate()}`,
                      });
                    else
                      onUpdateRow(index, {
                        ...ele,
                        checked: 0,
                        submittedToCompany: ``,
                        submitedDate: ``,
                      });
                  }}
                  value={ele.submittedToCompany}
                />
              </TableCell3>
              <TableCell3>
                {" "}
                {ele.submitedDate ? convertDateFormat(ele.submitedDate) : ""}
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default Table;
