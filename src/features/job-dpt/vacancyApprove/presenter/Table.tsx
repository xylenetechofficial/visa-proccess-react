import { JobOrderInterface } from "../type";
import {
  BlueButton,
  LinkButton,
  RedButton,
} from "../../../../componenets/CustomButton";
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
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
// import { BDEList, OPManagerList, rcList, recruitManagerList, rsList } from '../../db/user';
import { convertDateFormat, openPopupWindow } from "../../../../utils/function";
import { useUserAuth } from "../../../context/UserAuthContext";

const JobOrderTable = (props: {
  snoBase: number;
  jobOrderList: JobOrderInterface[];
  onClickEdit: any;
  sectorList: SectorInterface[];
  companyList: CompanyInterface[];
  countryList: CountryInterface[];
}) => {
  const { authPermissionList } = useUserAuth()
  return (
    <div className="overflow-auto">
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Job Order Number</TableHeadCell3>
            <TableHeadCell3> Date</TableHeadCell3>
            <TableHeadCell3> Company</TableHeadCell3>
            <TableHeadCell3> Country</TableHeadCell3>
            <TableHeadCell3> BDE</TableHeadCell3>
            <TableHeadCell3> Sector</TableHeadCell3>
            <TableHeadCell3> Opration Manager</TableHeadCell3>
            <TableHeadCell3> Recruit Manager</TableHeadCell3>
            <TableHeadCell3> Recruit Supervisor</TableHeadCell3>
            <TableHeadCell3> Recruit Coordinator</TableHeadCell3>
            <TableHeadCell3> Action</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.jobOrderList.map((ele, index) => (
            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>
                <LinkButton
                  text={ele.jobOrderNumber}
                  onClick={() => {
                    openPopupWindow(ele.job_order_no_url ?? "", "", 700, 650);
                  }}
                />
                {/* {ele.jobOrderNumber} */}
              </TableCell3>
              <TableCell3> {convertDateFormat(ele.date)}</TableCell3>
              <TableCell3> {ele.company_name ?? ""}</TableCell3>
              <TableCell3> {ele.client_country_name ?? ""}</TableCell3>
              <TableCell3> {ele.bde_name ?? ""}</TableCell3>
              <TableCell3>
                {" "}
                {props.sectorList.map((sector) =>
                  sector.id == ele.sectorId ? sector.name : ""
                )}
              </TableCell3>
              <TableCell3> {ele.operation_manager_name ?? ""}</TableCell3>
              <TableCell3> {ele.recruitment_manager_name ?? ""}</TableCell3>
              <TableCell3> {ele.rs_name ?? ""}</TableCell3>
              <TableCell3> {ele.rc_name ?? ""}</TableCell3>
              <TableCell3>
                {
                  authPermissionList.url_has('update') ?
                  <BlueButton
                  text={" Update"}
                  onClick={() => {
                    props.onClickEdit(ele);
                  }}
                />
                  :""
                }
               

                {/* <RedButton text={"Delete"} preIcon='delete' onClick={() => {
                                        props.onClickDelete(ele)
                                    }} /> */}
              </TableCell3>
            </TableRow3>
          ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default JobOrderTable;
