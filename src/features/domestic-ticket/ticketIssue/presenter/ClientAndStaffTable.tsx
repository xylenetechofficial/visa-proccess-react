import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
// import { CustomCheckBox, CustomSingleCheckBox } from "../../../../componenets/Checkbox";
import { UnlabeledInput } from "../../../../componenets/Input";
import { StaffAndClientInterface } from "../type";
import {  CustomSelectComponentUnlabeled, selectOptionConveter} from "../../../../componenets/SelectBox";
import { TravelBytList } from "../../../db";
// import { CustomSelectComponentUnlabeled } from "../../../../componenets/SelectBox";
// import { GivenToList } from "../../../db";
// import { convertDateFormat } from "../../../../utils/function";
// import { RedButton } from "../../../../componenets/CustomButton";
// import { removeStaffAndClient } from "../repository";


const Main = (props: {
  snoBase: number,
  staffAndClientDataList: StaffAndClientInterface[],
  onChange: any,
}) => {

  const HEADERLIST = [
    "SR NO.",
    "Name",
    "Ticket Amount",
    "Travel By",

    "Hotel Amount",
    "Other Expense",
    "Total",

    "Remarks",
  ];


  function onUpdateRow(index: number, rowData: StaffAndClientInterface) {
    const nextData = props.staffAndClientDataList.map((e, i) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData)
  }
  console.log(props.staffAndClientDataList,"SS")
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            {HEADERLIST.map((item) => (<TableHeadCell3> {item}</TableHeadCell3>))}
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.staffAndClientDataList.map((item, index) => (

            <TableRow3 key={index}>
              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>
                <UnlabeledInput
                  value={item.name}
                  onchange={(val: any) => {
                    console.log(val);   // Only Dev
                    onUpdateRow(index, { ...item, name: val })
                  }}
                />
              </TableCell3>
              <TableCell3>
                <UnlabeledInput
                  value={item.ticket_amount}
                  type="number"
                  onchange={(value:any) => {
                    // console.log(val);   // Only Dev
                    onUpdateRow(index, { ...item, ticket_amount: value })
                  }}
                />
              </TableCell3>
              <TableCell3>

                <CustomSelectComponentUnlabeled
                  value={item.travel_by}
                  options={selectOptionConveter({ options: TravelBytList, options_struct: { name: "name", value: "value" } })}
                  onChange={(val) => {
                    console.log(val);   // Only Dev
                    onUpdateRow(index, { ...item, travel_by: val })
                  }}
                />
              </TableCell3>
              <TableCell3>
                <UnlabeledInput
                  onchange={(val:any) => {
                    console.log(val);   // Only Dev
                    onUpdateRow(index, { ...item, hotel_amount: val })
                  }}
                  value={item.hotel_amount}
                  type="number"
                />
              </TableCell3>
              <TableCell3>
                <UnlabeledInput
                  value={item.other_expenses}
                  type="number"
                  onchange={(val: any) => {
                    console.log(val);   // Only Dev
                    onUpdateRow(index, { ...item, other_expenses: val })
                  }}
                />
              </TableCell3>
              <TableCell3>
                <UnlabeledInput
                  value={item.total_amount}
                  type="number"
                  onchange={(val: any) => {
                    console.log(val);   // Only Dev
                    onUpdateRow(index, { ...item, total_amount: val })
                  }}
                />
              </TableCell3>
              <TableCell3>
                <UnlabeledInput
                  value={item.remarks}
                  onchange={(val: any) => {
                    console.log(val);   // Only Dev
                    onUpdateRow(index, { ...item, remarks: val })
                  }}
                />
              </TableCell3>
            </TableRow3>
          ))}



        </TableBody3>
      </Table3>
    </div>
  );
};

export default Main;
