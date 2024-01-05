import { Submission_Dash_CandidateInterface } from "../type";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { useState, useEffect } from "react";
import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import {
  CustomCheckBox,
  CustomSingleCheckBox,
} from "../../../../componenets/Checkbox";
// import { CustomSelectComponent, CustomSelectComponentUnlabeled, selectOptionConveter } from '../../../../componenets/SelectBox';
// import { CustomRadioButton } from '../../../../componenets/RadioButton';
// import { rcList } from '../../../job-dpt/db/user';
import { convertDateFormat } from "../../../../utils/function";

const initValue: Submission_Dash_CandidateInterface = {
  ActualProfession: "",
  age: 0,
  agent: "",
  candidateCode: 0,
  InterviewSector: "",
  medicalStatus: "",
  name: "",
  passportNo: "",
  totalSalary: 0,
  passportIssueDate: "",
  rcName: "",
  id: 0,
  passportExpiryDate: "",
  appliedForVisa: 0,
  rejected: 0,
  visaAppliedDate: "",
};

const CandidateTable = (props: {
  candidateList: Submission_Dash_CandidateInterface[];
  onChange: (ele: Submission_Dash_CandidateInterface[]) => void;
}) => {
  const [onChange, setonChange] = useState<string>("");

  function onUpdateRow(
    index: number,
    rowData: Submission_Dash_CandidateInterface
  ) {
    const nextData: Submission_Dash_CandidateInterface[] =
      props.candidateList.map((e, i) => {
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
    <div className="overflow-auto" style={{ justifyContent: "center" }}>
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>

            <TableHeadCell3>NAME </TableHeadCell3>
            <TableHeadCell3>PASSPORT NO</TableHeadCell3>
            <TableHeadCell3>PASSPORT ISSUED DATE</TableHeadCell3>
            <TableHeadCell3>PASSPORT EXPIRY DATE</TableHeadCell3>
            <TableHeadCell3>ACTUAL PROFESSION</TableHeadCell3>
            <TableHeadCell3>RC NAME</TableHeadCell3>
            <TableHeadCell3>TOTAL SALARY(SR)</TableHeadCell3>
            <TableHeadCell3>AGENT</TableHeadCell3>
            <TableHeadCell3>AGE</TableHeadCell3>
            <TableHeadCell3>INTERVIEW SECTOR</TableHeadCell3>
            <TableHeadCell3>MEDICAL STATUS</TableHeadCell3>
            <TableHeadCell3>APPLIED FOR VISA</TableHeadCell3>
            <TableHeadCell3>REJECTED</TableHeadCell3>
            <TableHeadCell3>VISA APPLIED DATE</TableHeadCell3>
            <TableHeadCell3>Checked</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.candidateList &&
            props.candidateList.map((ele, index) => (
              <TableData
                data={ele}
                index={index}
                onChange={onChange}
                onUpdate={onUpdateRow}
              />
            ))}

          {/* <TableRow3>
                        <TableCell3>
                            <div style={{ width: "111px" }}>
                                <GreenButton text='Add Row' onClick={onClickAddNewRow} />
                            </div>
                        </TableCell3>
                    </TableRow3> */}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default CandidateTable;

const TableData = (props: {
  index: number;
  data: Submission_Dash_CandidateInterface;
  onUpdate: (
    index: number,
    rowData: Submission_Dash_CandidateInterface
  ) => void;
  onChange: string;
}) => {
  const [localRowData, setLocalRowData] =
    useState<Submission_Dash_CandidateInterface>(initValue);
  useEffect(() => {
    setLocalRowData(props.data);
  }, [props.onChange]);

  useEffect(() => {
    console.log("rerender"); // Only Dev
    props.onUpdate(props.index, localRowData!);
  }, [localRowData]);

  // console.log(localRowData)
  return (
    <TableRow3 key={props.index}>
      <TableCell3>{props.index + 1}</TableCell3>
      <TableCell3>{props.data.name}</TableCell3>
      <TableCell3>{props.data.passportNo}</TableCell3>
      <TableCell3>{convertDateFormat(props.data.passportIssueDate)}</TableCell3>
      <TableCell3>
        {convertDateFormat(props.data.passportExpiryDate)}
      </TableCell3>
      <TableCell3>{props.data.ActualProfession}</TableCell3>
      <TableCell3>{props.data.rcName}</TableCell3>
      <TableCell3>{props.data.totalSalary}</TableCell3>
      <TableCell3>{props.data.agent}</TableCell3>{" "}
      <TableCell3>{props.data.age}</TableCell3>{" "}
      <TableCell3>{props.data.InterviewSector}</TableCell3>
      <TableCell3>{props.data.medicalStatus}</TableCell3>
      <TableCell3>
        <CustomSingleCheckBox
          onChange={(value) => {
            const date = new Date();
            const day = ("0" + date.getDate()).slice(-2);
            const month = ("0" + (date.getMonth() + 1)).slice(-2);
            const year = date.getFullYear();

            if (value) {
              setLocalRowData({
                ...localRowData,
                appliedForVisa: 1,
                rejected: 0,
                visaAppliedDate: `${year}-${month}-${day}`,
              });
            } else {
              setLocalRowData({
                ...localRowData,
                appliedForVisa: 0,

                visaAppliedDate: "",
              });
            }
          }}
          value={localRowData.appliedForVisa ? true : false}
        />
      </TableCell3>
      <TableCell3>
        <CustomSingleCheckBox
          onChange={(value) => {
            if (value) {
              setLocalRowData({
                ...localRowData,
                appliedForVisa: 0,
                rejected: 1,
                visaAppliedDate: "",
              });
            } else {
              setLocalRowData({
                ...localRowData,
                rejected: 0,
              });
            }
          }}
          value={localRowData.rejected ? true : false}
        />
      </TableCell3>
      <TableCell3>
        <DateInput
          onChange={(value) =>
            setLocalRowData({ ...localRowData, visaAppliedDate: value })
          }
          value={localRowData.visaAppliedDate}
          id="kjadsfhkjsadfhk"
        />
      </TableCell3>
      <TableCell3>
        <CustomSingleCheckBox
          onChange={(value) =>
            setLocalRowData({ ...localRowData, checked: value })
          }
          value={localRowData.checked ? true : false}
        />
      </TableCell3>
    </TableRow3>
  );
};
