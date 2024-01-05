import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow,
  TableRow3,
} from "../../../../componenets/Table";
import { BlueButton } from "../../../../componenets/CustomButton";
import { ActiveIndexInterface } from "../type/IndexVisa";
import { ActiveIndexListInterface } from "../type2";
import { useUserAuth } from "../../../context/UserAuthContext";

export default function Main(props: {
  snoBase: number;
  indexActiveList: any[];
  onClickEditProVisa: (value: any) => void;
  onClickProView: (ActiveIndex: ActiveIndexInterface) => void;
  onClickVisaEdit: (value: ActiveIndexListInterface) => void;
}) {
  const { authPermissionList } = useUserAuth();
  return (
    <>
      <div className="overflow-auto">
        <Table3>
          <TableHead3>
            <TableHeadRow3>
              <TableHeadCell3>sn. no</TableHeadCell3>
              <TableHeadCell3>job order no </TableHeadCell3>
              <TableHeadCell3>index date</TableHeadCell3>
              <TableHeadCell3>company name</TableHeadCell3>
              <TableHeadCell3>party code </TableHeadCell3>
              <TableHeadCell3>quantity</TableHeadCell3>
              <TableHeadCell3>used qty</TableHeadCell3>
              <TableHeadCell3>dead visa qty</TableHeadCell3>
              <TableHeadCell3>expired visa qty</TableHeadCell3>
              <TableHeadCell3>cancelled qty</TableHeadCell3>
              <TableHeadCell3>balance qty</TableHeadCell3>
              <TableHeadCell3>visa issue date</TableHeadCell3>
              <TableHeadCell3>visa expiry date</TableHeadCell3>
              <TableHeadCell3>country</TableHeadCell3>
              <TableHeadCell3>visa date (arabic)</TableHeadCell3>
              <TableHeadCell3>visa number</TableHeadCell3>
              <TableHeadCell3>visa fee</TableHeadCell3>
              <TableHeadCell3>visa authorization</TableHeadCell3>
              <TableHeadCell3>visa submission</TableHeadCell3>
              <TableHeadCell3>sponsor id</TableHeadCell3>
              <TableHeadCell3>aravic sponsor name</TableHeadCell3>
              <TableHeadCell3>division </TableHeadCell3>
              <TableHeadCell3>
                number of days left for visa expiry
              </TableHeadCell3>
              <TableHeadCell3>mofa done</TableHeadCell3>
              <TableHeadCell3>pp submission</TableHeadCell3>
              <TableHeadCell3>visa cancel</TableHeadCell3>
              <TableHeadCell3>view visa prof.</TableHeadCell3>
              <TableHeadCell3>visa prof. edit</TableHeadCell3>
              <TableHeadCell3>edit</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>

          <TableBody3>
            {props.indexActiveList.map((indexList, index) => (
              <TableRow3 key={index}>
                <TableCell3>{index + props.snoBase + 1}</TableCell3>
                <TableCell3>{indexList.job_order_no}</TableCell3>
                <TableCell3>{indexList.index_date}</TableCell3>
                <TableCell3>{indexList.company_name}</TableCell3>
                <TableCell3>{indexList.party_code}</TableCell3>
                <TableCell3>{indexList.quantity}</TableCell3>
                <TableCell3>{indexList.used_qty}</TableCell3>
                <TableCell3>{indexList.dead_visa_qty}</TableCell3>
                <TableCell3>{indexList.expired_visa_qty}</TableCell3>
                <TableCell3>{indexList.cancelled_qty}</TableCell3>
                <TableCell3>{indexList.balance_qty}</TableCell3>
                <TableCell3>{indexList.visa_issue_date}</TableCell3>
                <TableCell3>{indexList.visa_expiry_date}</TableCell3>
                <TableCell3>{indexList.country}</TableCell3>
                <TableCell3>{indexList.visa_date_arabic}</TableCell3>
                <TableCell3>{indexList.visa_number}</TableCell3>
                <TableCell3>{indexList.visa_fee}</TableCell3>
                <TableCell3>{indexList.visa_authorization}</TableCell3>
                <TableCell3>{indexList.visa_submission}</TableCell3>
                <TableCell3>{indexList.sponsor_id}</TableCell3>

                <TableCell3>{indexList.aravic_sponsor_name}</TableCell3>
                <TableCell3>{indexList.division}</TableCell3>
                <TableCell3>
                  {indexList.number_of_days_left_for_visa_expiry}
                </TableCell3>
                <TableCell3>{indexList.mofa_done}</TableCell3>
                <TableCell3>{indexList.pp_submission}</TableCell3>
                <TableCell3>{indexList.visa_cancel}</TableCell3>

                <TableCell3>
                  <BlueButton
                    text={"View Visa Prof."}
                    onClick={() => {
                      props.onClickProView(indexList);
                    }}
                  />
                </TableCell3>
                <TableCell3>
                  {authPermissionList.url_has("update") ? (
                    <BlueButton
                      text={"Visa Prof. Edit"}
                      onClick={() => {
                        props.onClickEditProVisa(indexList);
                      }}
                    />
                  ) : (
                    ""
                  )}
                </TableCell3>
                <TableCell3>
                  {authPermissionList.url_has("update") ? (
                    <BlueButton
                      text={"Edit"}
                      onClick={() => {
                        props.onClickVisaEdit(indexList);
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
    </>
  );
}
