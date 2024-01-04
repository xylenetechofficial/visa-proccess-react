import { InterviewScheduleInterface } from "../type";
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
import { SectorInterface } from "../../../masters/sector/type";
import { InterviewSchedulePeriodInterface } from "../../interviewSchedulePeriod/type";
import { convertDateFormat } from "../../../../utils/function";
import { useUserAuth } from "../../../context/UserAuthContext";
import { InterviewSectorInterface } from "../../../masters/interviewSector/type";

const InterviewScheduleTable = (props: {
  snoBase: number;
  // companyList: CompanyInterface[],
  interviewScheduleList: InterviewScheduleInterface[];
  onClickEdit: (interviewSchedule: InterviewScheduleInterface) => void;
  onClickDelete: (interviewSchedule: InterviewScheduleInterface) => void;
  sectorList: InterviewSectorInterface[];
  InterviewSchedulePeriodList: InterviewSchedulePeriodInterface[];
}) => {
  const { authPermissionList } = useUserAuth();
  return (
    <div
      className="overflow-auto"
      // style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Comapany</TableHeadCell3>
            <TableHeadCell3> Date</TableHeadCell3>
            <TableHeadCell3> Sector</TableHeadCell3>
            {/* <TableHeadCell3> Staff</TableHeadCell3> */}
            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.interviewScheduleList.map((ele, index) => {
            return (
              <TableRow3 key={index}>
                <TableCell3>{index + props.snoBase + 1}</TableCell3>
                <TableCell3> {ele.company_name}</TableCell3>
                <TableCell3>{convertDateFormat(ele.date)}</TableCell3>
                <TableCell3>{ele.sector_name}</TableCell3>
                {/* <TableCell3>{ele.staff}</TableCell3> */}
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
