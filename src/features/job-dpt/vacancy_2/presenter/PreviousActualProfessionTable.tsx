
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,
} from "../../../../componenets/Table";

import { useState, useEffect } from "react";
import { ActualProfessionInterface } from "../../Extra/type";


const PreviousActualProfessionTable = (props: {
    actualProfesionList_old: ActualProfessionInterface[];
}) => {
  const [actualProfessionList, setActualProfesionList] = useState<
    ActualProfessionInterface[]
  >([]);
console.log(actualProfessionList)
//   useEffect(() => {

//     props.onChange(actualProfessionList);
//   }, [actualProfessionList]);

  return (
    <div className="overflow-auto" style={{ justifyContent: "center" }}>
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> Actual Profession</TableHeadCell3>
            <TableHeadCell3>Sector</TableHeadCell3>
            <TableHeadCell3>Sector Charge</TableHeadCell3>
            <TableHeadCell3> Quantity</TableHeadCell3>
            <TableHeadCell3>Service Charges</TableHeadCell3>
            <TableHeadCell3> Partial Charges</TableHeadCell3>
            <TableHeadCell3>Consoldilate Charges</TableHeadCell3>
            <TableHeadCell3> Agent Commission</TableHeadCell3>
            <TableHeadCell3> Air Ticket</TableHeadCell3>
            <TableHeadCell3> Is Invoice</TableHeadCell3>
            <TableHeadCell3> Invoice Service Charges</TableHeadCell3>
            <TableHeadCell3> Invoice Ticket Charges</TableHeadCell3>
            <TableHeadCell3> Invoice Service Charges Currency</TableHeadCell3>
            {/* <TableHeadCell3 >  Action</TableHeadCell3> */}
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.actualProfesionList_old &&
            props.actualProfesionList_old.map((localRowData, index) => (
                <TableRow3 key={index}>
                <TableCell3>{index + 1}</TableCell3>
                <TableCell3>
                  {localRowData.actual_profession}
                </TableCell3>
          
                <TableCell3>
                    .
                {/* {localRowData.sector == e.id ? e.name : ""} */}
                </TableCell3>
                <TableCell3>{localRowData.sector_charge}</TableCell3>
                <TableCell3>{localRowData.quantity}</TableCell3>
          
                <TableCell3>{localRowData.service_charges}</TableCell3>
                <TableCell3>{localRowData.partial_charges}</TableCell3>
                <TableCell3>
               
                  {localRowData.consodilate_charges}
                </TableCell3>
          
                <TableCell3>{localRowData.agent_commission}</TableCell3>
                <TableCell3>{localRowData.air_ticket}</TableCell3>
  
                <TableCell3>{localRowData.invoice_service_charges}</TableCell3>
                <TableCell3>{localRowData.invoice_ticket_charges}</TableCell3>
          
                <TableCell3>{localRowData.invoice_service_charges_currency}</TableCell3>
              </TableRow3>
            ))}
        </TableBody3>
      </Table3>
    </div>
  );
};

export default PreviousActualProfessionTable;

// const TableData = (props: {
//   index: number;
//   data: ActualProfessionInterface;
//   interViewSectorList: InterviewSectorInterface[];
// }) => {
//   const [localRowData, setLocalRowData] = useState<ActualProfessionInterface>({
//     jobOrder_id: 0,
//     actual_profession: "",
//     quantity: 0,
//     sector_charge: 0,
//     seletion_target_quantity: 0,
//     min_salary: 0,
//     max_salary: 0,
//     job_description: "",
//     master_service_charges: 0,
//     differed_service_charges: 0,
//   });

//   const [consolidateChargeList, setConsolidateChargeList] = useState<
//     ConsolidateChargeInterface[]
//   >([]);
//   const fetchConsolidateCharges = async () => {
//     console.log("consolidate charges called"); // Only Dev
//     const data = await readConsolidateChargeList();
//     console.log("consolidate charges list"); // Only Dev
//     console.log(data); // Only Dev
//     setConsolidateChargeList(data);
//   };



//   // console.log(localRowData)
//   return (
//     <TableRow3 key={props.index}>
//       <TableCell3>{props.index + 1}</TableCell3>
//       <TableCell3>
//         {localRowData.actual_profession}
//       </TableCell3>

//       <TableCell3>
//         {props.interViewSectorList.map((e) =>
//           localRowData.sector == e.id ? e.name : ""
//         )}
//       </TableCell3>
//       <TableCell3>{localRowData.sector_charge}</TableCell3>
//       <TableCell3>{localRowData.quantity}</TableCell3>

//       <TableCell3>{localRowData.service_charges}</TableCell3>
//       <TableCell3>{localRowData.partial_charges}</TableCell3>
//       <TableCell3>
//         <MultiSelectCheckbox
//           onChange={(value) => {
//             const { name_list, total } = cal_consolidate_charge(
//               consolidateChargeList,
//               value
//             );
//             setLocalRowData({
//               ...localRowData,
//               consolidate_charges_id: value,
//               consodilate_charges: total.toString(),
//               consodilate_charges_name: name_list,
//             });
//           }}
//           value={localRowData.consolidate_charges_id}
//           option={selectOptionConveter({
//             options: consolidateChargeList ?? [],
//             options_struct: { name: "name", value: "id" },
//           })}
//         />
//         {localRowData.consodilate_charges}
//       </TableCell3>

//       <TableCell3>{localRowData.agent_commission}</TableCell3>
//       <TableCell3>{localRowData.air_ticket}</TableCell3>
//       <TableCell3>
//         <CustomSingleCheckBox
//           value={localRowData.is_invoice == 1 ? true : false}
//           onChange={(value: boolean) =>
//             setLocalRowData({ ...localRowData, is_invoice: value ? 1 : 0 })
//           }
//         />
//       </TableCell3>
//       <TableCell3>{localRowData.invoice_service_charges}</TableCell3>
//       <TableCell3>{localRowData.invoice_ticket_charges}</TableCell3>

//       <TableCell3>{localRowData.invoice_service_charges_currency}</TableCell3>
//     </TableRow3>
//   );
// };
