import { TicketIssueInterface } from "../type";
import { Paper } from "@mui/material";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
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
import { CompanyInterface } from "../../../masters/company/type";
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { convertDateFormat } from "../../../../utils/function";
import { InterviewScheduleInterface } from "../../interviewSchedule/type";
import { useUserAuth } from "../../../context/UserAuthContext";

const InterviewScheduleTable = (props: {
  snoBase: number;
  companyList: CompanyInterface[];
  interviewScheduleList: TicketIssueInterface[];
  onClickEdit: any;
  onClickDelete: any;
  sectorList: SectorInterface[];
  InterviewSchedulePeriodList: InterviewSchedulePeriodInterface[];
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
            <TableHeadCell3> Date</TableHeadCell3>
            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.interviewScheduleList.map((ele, index) => {
            let companyName = "";
            for (let i = 0; i < props.InterviewSchedulePeriodList.length; i++) {
              const interviewSchedulePeriod =
                props.InterviewSchedulePeriodList[i];

              for (let j = 0; j < props.companyList.length; j++) {
                const company = props.companyList[j];
                if (interviewSchedulePeriod.company == company.id) {
                  companyName = company.name;
                  break;
                }
              }
              if (companyName != "") break;
            }

            return (
              <TableRow3 key={index}>
                <TableCell3>{index + props.snoBase + 1}</TableCell3>
                <TableCell3> {companyName}</TableCell3>
                <TableCell3>.{}</TableCell3>
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
            );
          })}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default InterviewScheduleTable;
