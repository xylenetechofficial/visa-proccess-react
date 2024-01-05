import { Submission_Dash_JobOrderInterface } from "../type";
import {
  BlueButton,
  GreenButton,
  RedButton,
} from "../../../../componenets/CustomButton";
import {
  Table2,
  Table3,
  TableBody,
  TableBody2,
  TableBody3,
  TableCell,
  TableCell2,
  TableCell3,
  TableHead,
  TableHead2,
  TableHead3,
  TableHeadCell,
  TableHeadCell2,
  TableHeadCell3,
  TableHeadRow,
  TableHeadRow2,
  TableHeadRow3,
  TableRow,
  TableRow2,
  TableRow3,
} from "../../../../componenets/Table";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { useUserAuth } from "../../../context/UserAuthContext";

const Table = (props: {
  snoBase: number;
  jobOrderList: Submission_Dash_JobOrderInterface[];
  onClickAdd: (ele: Submission_Dash_JobOrderInterface) => void;
  onClickEdit: (ele: Submission_Dash_JobOrderInterface) => void;
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
            <TableHeadCell3> DIVISION</TableHeadCell3>
            <TableHeadCell3> QTY AS PER JOB</TableHeadCell3>
            <TableHeadCell3> SELECTION QTY</TableHeadCell3>
            <TableHeadCell3> DOCS COLLECTED QTY</TableHeadCell3>
            <TableHeadCell3> DOCS BALANCE FOR COLLECTION</TableHeadCell3>
            {/* <TableHeadCell2 > BACKED OUT / UNFIT</TableHeadCell2> */}
            <TableHeadCell3> Action</TableHeadCell3>
            {/* <TableHeadCell2 > Action</TableHeadCell2> */}
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.jobOrderList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3> {ele.jobOrderNo}</TableCell3>
              <TableCell3 width={150}> {ele.company}</TableCell3>
              <TableCell3> {ele.division}</TableCell3>

              <TableCell3> {ele.quantityAsPerJob}</TableCell3>
              <TableCell3> {ele.selectionQty}</TableCell3>
              <TableCell3> {ele.docsCollectedQty}</TableCell3>
              <TableCell3> {ele.docsBalanceForCollections}</TableCell3>
              {/* <TableCell2 > {ele.BackedOutUnfit}</TableCell2> */}
              <TableCell3>
                {authPermissionList.url_has("create") ? (
                  <GreenButton
                    text={"Add"}
                    onClick={() => {
                      props.onClickAdd(ele);
                    }}
                  />
                ) : (
                  ""
                )}
                :
                {authPermissionList.url_has("update") ? (
                  <BlueButton
                    text={" Edit"}
                    onClick={() => {
                      props.onClickEdit(ele);
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

export default Table;
