import { BlueButton } from "../../../../componenets/CustomButton";
import { FullScreenModal } from "../../../../componenets/Modal";
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
import { VisaProfessionEditInterface } from "../type2";

export default function Main(props: {
  onClose: any;
  editProVisaList: VisaProfessionEditInterface[];
  onClickVisaProEdit: (value:VisaProfessionEditInterface)=>void
}) {
  console.log(props.editProVisaList,"SS")
  const onClickAdd = () => {console.log(props.editProVisaList,"SS")}; 
  return (
    <>
      <FullScreenModal
        buttonName=""
        handleClick={onClickAdd}
        title="Index Visa Professions EDIT"
        onClose={props.onClose}
      >
        <div className="overflow-auto">
          <Table3>
            <TableHead3>
              <TableHeadRow3>
                <TableHeadCell3>sr.no</TableHeadCell3>
                <TableHeadCell3>index date</TableHeadCell3>
                <TableHeadCell3>company name</TableHeadCell3>
                <TableHeadCell3>party code </TableHeadCell3>
                <TableHeadCell3>visa profession</TableHeadCell3>
                <TableHeadCell3>aravic visa category</TableHeadCell3>
                <TableHeadCell3>visa quantity</TableHeadCell3>
                <TableHeadCell3>visa used</TableHeadCell3>
                <TableHeadCell3>dead visa qty</TableHeadCell3>
                <TableHeadCell3>visa balance</TableHeadCell3>
                <TableHeadCell3>mofa done</TableHeadCell3>
                <TableHeadCell3>pp submission</TableHeadCell3>
                <TableHeadCell3>rejected</TableHeadCell3>
                <TableHeadCell3>cancelled</TableHeadCell3>
                <TableHeadCell3>edit</TableHeadCell3>
              </TableHeadRow3>
            </TableHead3>
            <TableBody3>
              <TableRow3>
                {props.editProVisaList.map((ele, index)=>
                (
                  <>
               <TableCell3>{index + 1}</TableCell3>
                <TableCell3>{convertDateFormat(ele.index_date)}</TableCell3>
                <TableCell3>{ele.company_name}</TableCell3>
                <TableCell3>{ele.party_code} </TableCell3>
                <TableCell3>{ele.visa_profession}</TableCell3>
                <TableCell3>{ele.aravic_visa_category}</TableCell3>
                <TableCell3>{ele.visa_quantity}</TableCell3>
                <TableCell3>{ele.visa_used}</TableCell3>
                <TableCell3>{ele.dead_visa_qty}</TableCell3>
                <TableCell3>{ele.visa_balance}</TableCell3>
                <TableCell3>{ele.mofa_done}</TableCell3>
                <TableCell3>{ele.pp_submission}</TableCell3>
                <TableCell3>{ele.rejected}</TableCell3>
                <TableCell3>{ele.canceled}</TableCell3> 
                <TableCell3>

                  <BlueButton
                    text={"Visa Edit"}
                    onClick={() => {
                      props.onClickVisaProEdit(ele);
                    }}
                  />
                </TableCell3>
                </>
                ))}
              </TableRow3>
            </TableBody3>
          </Table3>
        </div>
      </FullScreenModal>
    </>
  );
}
