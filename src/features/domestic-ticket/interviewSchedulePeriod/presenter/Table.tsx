import { InterviewSchedulePeriodInterface } from "../type";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { CompanyInterface } from "../../../masters/company/type";
import { convertDateFormat } from "../../../../utils/function";
import { useUserAuth } from "../../../context/UserAuthContext";

const InterviewSchedulePeriodTable = (props: {
  snoBase: number;
  companyList: CompanyInterface[];
  interviewSchedulePeriodList: InterviewSchedulePeriodInterface[];
  onClickEdit: (
    interviewSchedulePeriod: InterviewSchedulePeriodInterface
  ) => void;
  onClickDelete: (
    interviewSchedulePeriod: InterviewSchedulePeriodInterface
  ) => void;
}) => {
  const { authPermissionList } = useUserAuth();
  return (
    <div
      className="overflow-auto"
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Comapany</TableHeadCell3>
            <TableHeadCell3> From</TableHeadCell3>
            <TableHeadCell3> To</TableHeadCell3>

            <TableHeadCell3> Job Order No</TableHeadCell3>
            <TableHeadCell3> OPERATIONS MANAGER</TableHeadCell3>
            <TableHeadCell3> Recuitment Coordinator</TableHeadCell3>

            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.interviewSchedulePeriodList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>
                {" "}
                {props.companyList.map((e) =>
                  e.id == ele.company ? e.name : ""
                )}
              </TableCell3>
              <TableCell3>{convertDateFormat(ele.fromDate)}</TableCell3>
              <TableCell3>{convertDateFormat(ele.toDate)}</TableCell3>

              <TableCell3>{ele.job_order_no}</TableCell3>
              <TableCell3>{ele.om_name}</TableCell3>
              <TableCell3>{ele.rc_name}</TableCell3>

              <TableCell3>
                {authPermissionList.url_has("update") ? (
                  <BlueButton
                    text={" EDIT"}
                    onClick={() => {
                      props.onClickEdit(ele);
                    }}
                  />
                ) : (
                  ""
                )}
                {authPermissionList.url_has("delete") ? (
                  <RedButton
                    text={"DELETE"}
                    onClick={() => {
                      props.onClickDelete(ele);
                    }}
                  />
                ) : (
                  ""
                )}
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default InterviewSchedulePeriodTable;
