import { SendToMofa_JobOrderInterface } from "../type";
import { RedButton } from "../../../../componenets/CustomButton";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";
import { convertDateFormat } from "../../../../utils/function";
import { useUserAuth } from "../../../context/UserAuthContext";

const Table = (props: {
  snoBase: number;
  jobOrderList: SendToMofa_JobOrderInterface[];
  onClickAdd: (ele: SendToMofa_JobOrderInterface) => void;
  onClickEdit: (ele: SendToMofa_JobOrderInterface) => void;
  onClickDelete: (ele: SendToMofa_JobOrderInterface) => void;
}) => {
  const { authPermissionList } = useUserAuth();
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> JOB ORDER NO.</TableHeadCell3>
            <TableHeadCell3>COMPANY</TableHeadCell3>
            <TableHeadCell3> CANDIDATE NAME</TableHeadCell3>
            <TableHeadCell3>PASSPORT NO</TableHeadCell3>
            <TableHeadCell3> PASSPORT ISSUED DATE</TableHeadCell3>
            <TableHeadCell3> PASSPORT EXPIRY DATE</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION</TableHeadCell3>
            <TableHeadCell3>AGENT</TableHeadCell3>
            <TableHeadCell3>RS</TableHeadCell3>
            <TableHeadCell3>RM</TableHeadCell3>
            <TableHeadCell3>RC</TableHeadCell3>
            <TableHeadCell3>APPROVAL DATE</TableHeadCell3>
            <TableHeadCell3>MEDICAL STATUS</TableHeadCell3>
            <TableHeadCell3>SELECTION STATUS</TableHeadCell3>
            <TableHeadCell3>CURRENT STATUS</TableHeadCell3>
            <TableHeadCell3>VISA PROFESSION</TableHeadCell3>
            <TableHeadCell3>PARTY CODE </TableHeadCell3>
            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.jobOrderList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.jobOrderNo}</TableCell3>
              <TableCell3> {ele.company}</TableCell3>
              <TableCell3> {ele.candidateName}</TableCell3>

              <TableCell3> {ele.passportNo}</TableCell3>
              <TableCell3>
                {" "}
                {convertDateFormat(ele.passortIssuwDate)}
              </TableCell3>
              <TableCell3>
                {" "}
                {convertDateFormat(ele.passortExpiryDate)}
              </TableCell3>
              <TableCell3> {ele.agent}</TableCell3>
              <TableCell3> {ele.rs}</TableCell3>
              <TableCell3> {ele.rs}</TableCell3>
              <TableCell3> {ele.rm}</TableCell3>
              <TableCell3> {ele.rc}</TableCell3>
              <TableCell3> {convertDateFormat(ele.approvalDate)}</TableCell3>
              <TableCell3> {ele.medicalStatus}</TableCell3>
              <TableCell3> {ele.selectionStatus}</TableCell3>
              <TableCell3> {ele.currentStatus}</TableCell3>
              <TableCell3> {ele.visaProfession}</TableCell3>
              <TableCell3> {ele.partyCode}</TableCell3>
              <TableCell3>
                {/* <GreenButton text={"Add"}  onClick={() => {
                                    props.onClickAdd(ele)
                                }} />
                                <BlueButton text={" Edit"} onClick={() => {
                                    props.onClickEdit(ele)
                                }} /> */}

                {authPermissionList.url_has("delte") ? (
                  <RedButton
                    text="Delete"
                    onClick={() => props.onClickDelete(ele)}
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

export default Table;
