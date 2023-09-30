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
import { Checkbox } from "flowbite-react";
// import { TicketReissueInterface } from "../type";

export default function Main(props: {
  indexFullList: any[];
  onClickEditProVisa: any,
  onClickProView:any,
  onClickVisaEdit:any
}) {

  const onChange = () => {};
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
              <TableHeadCell3>number of days left for visa expiry</TableHeadCell3>
              <TableHeadCell3>mofa done</TableHeadCell3>
              <TableHeadCell3>pp submission</TableHeadCell3>
              <TableHeadCell3>visa cancel</TableHeadCell3>
              <TableHeadCell3>view visa prof.</TableHeadCell3>
              <TableHeadCell3>visa prof. edit</TableHeadCell3>
              <TableHeadCell3>edit</TableHeadCell3>
            </TableHeadRow3>
          </TableHead3>

          <TableBody3>
            <TableRow3>
              <TableCell3>1</TableCell3>
              <TableCell3>job order no </TableCell3>
              <TableCell3>index date</TableCell3>
              <TableCell3>company name</TableCell3>
              <TableCell3>party code </TableCell3>
              <TableCell3>quantity</TableCell3>
              <TableCell3>used qty</TableCell3>
              <TableCell3>dead visa qty</TableCell3>
              <TableCell3>expired visa qty</TableCell3>
              <TableCell3>cancelled qty</TableCell3>
              <TableCell3>balance qty</TableCell3>
              <TableCell3>visa issue date</TableCell3>
              <TableCell3>visa expiry date</TableCell3>      
              <TableCell3>country</TableCell3>
              <TableCell3>visa date (arabic)</TableCell3>
              <TableCell3>visa number</TableCell3>
              <TableCell3>visa fee</TableCell3>
              <TableCell3>visa authorization</TableCell3>
              <TableCell3>visa submission</TableCell3>
              <TableCell3>sponsor id</TableCell3>
              <TableCell3>aravic sponsor name</TableCell3>
              <TableCell3>division </TableCell3>
              <TableCell3>number of days left for visa expiry</TableCell3>
              <TableCell3>mofa done</TableCell3>
              <TableCell3>pp submission</TableCell3>
              <TableCell3>visa cancel</TableCell3>
              <TableCell3>
              <BlueButton
                  text={"View Visa Prof."}
                  onClick={() => {
                    props.onClickProView();
                  }}
                />
              </TableCell3>
              <TableCell3>
              <BlueButton
                  text={"Visa Prof. Edit"}
                  onClick={() => {
                    props.onClickEditProVisa();
                  }}
                />

              </TableCell3>
              <TableCell3>
              <BlueButton
                  text={"Edit"}
                  onClick={() => {
                    props.onClickVisaEdit();
                  }}
                />
              </TableCell3>
              
            </TableRow3>
          </TableBody3>
        </Table3>
      </div>
    </>
  );
}
