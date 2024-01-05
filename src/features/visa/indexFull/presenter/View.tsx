import { useEffect, useState } from "react";
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
import { readVisaProfessionList } from "../repository";
import { FullIndexInterface } from "../type/IndexVisa";
import { VisaProfessionInterface } from "../type/VisaProfession";

export default function Main(props: {
  currentFullIndex: FullIndexInterface;
  onClose: ()=>void;
}) {

  const [visaProfessionList, setVisaProfessionList] = useState<VisaProfessionInterface[]>([]);

  const fetchVisaProfessionList = async () => {
    const data = await readVisaProfessionList(props.currentFullIndex.party_code);
    // console.log(data, "visaProfessionList",props.currentFullIndex.party_code);
    if (data) {
      setVisaProfessionList(data);
    }
  };
  useEffect(() => {
    fetchVisaProfessionList();
  }, []);

  const onClickAdd = () => {
    return ""
  };
  return (
    <>
      <FullScreenModal
        buttonName=""
        handleClick={onClickAdd}
        title="Index Visa Professions View"
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
              </TableHeadRow3>
            </TableHead3>
            <TableBody3>
              {visaProfessionList.map((visaProList, index)=>(
                <TableRow3>
                <TableCell3>{index + 1}</TableCell3>
                <TableCell3>{visaProList.index_date}</TableCell3>
                <TableCell3>{visaProList.company_name}</TableCell3>
                <TableCell3>{visaProList.party_code}</TableCell3>
                <TableCell3>{visaProList.visa_profession}</TableCell3>
                <TableCell3>{visaProList.aravic_visa_category}</TableCell3>
                <TableCell3>{visaProList.visa_quantity}</TableCell3>
                <TableCell3>{visaProList.visa_used}</TableCell3>
                <TableCell3>{visaProList.dead_visa_qty}</TableCell3>
                <TableCell3>{visaProList.visa_balance}</TableCell3>
                <TableCell3>{visaProList.mofa_done}</TableCell3>
                <TableCell3>{visaProList.pp_submission}</TableCell3>
                <TableCell3>{visaProList.rejected}</TableCell3>
                <TableCell3>{visaProList.canceled}</TableCell3>
              </TableRow3>
              ))}
            </TableBody3>
          </Table3>
        </div>
      </FullScreenModal>
    </>
  );
}
