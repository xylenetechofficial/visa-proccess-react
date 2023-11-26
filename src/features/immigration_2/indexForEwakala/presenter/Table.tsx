import { useState } from "react";
import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,

} from "../../../../componenets/Table";

import { DateInput, UnlabeledInput } from "../../../../componenets/Input";
import { IndexEwakalaInterface } from "../type";
import { addDaysToDate } from "../../../../utils/function";
import { BlueButton } from "../../../../componenets/CustomButton";
import { fetchDemanDetailsList } from "../repository";

const IndexForEwakalaTable = (props: {
  snoBase: number,
  indexForEwakala: IndexEwakalaInterface[];
  setIndexForEwakala: any
  data: any;
  setData: any,
  setModalName: (value: string) => void,
  onChange: (value: IndexEwakalaInterface[]) => void,
  setModalData:(value:any)=>void
}) => {
  function onUpdateRow(index: number, rowData: IndexEwakalaInterface) {
    const nextData: IndexEwakalaInterface[] = props.indexForEwakala.map((e, i) => {
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
  const [date, setDate] = useState<any>([])
  console.log(props.data)
  const fetchModalData = async(name:string, code:number)=>{
    props.setModalName(name);
    const res :any= await fetchDemanDetailsList(code)
    console.log(res)
    if(res){
      props.setModalData(res)
    }
  }
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3>RECEIVED DATE</TableHeadCell3>
            {/* <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3> */}
            <TableHeadCell3> VISA QUANTITY </TableHeadCell3>
            <TableHeadCell3> VISA NUMBER </TableHeadCell3>
            {/* <TableHeadCell3> Ekawala Qty </TableHeadCell3> */}
            <TableHeadCell3> Category </TableHeadCell3>
            <TableHeadCell3> Pt no. </TableHeadCell3>
            <TableHeadCell3> Demand id </TableHeadCell3>
            <TableHeadCell3> Country </TableHeadCell3>
            <TableHeadCell3> Approved date </TableHeadCell3>
            <TableHeadCell3> Expiry date </TableHeadCell3>
            <TableHeadCell3> Deman acknowledged date </TableHeadCell3>

            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props?.indexForEwakala?.map((item, index) => (
            <TableRow3 key={index}>

              <TableCell3>{index + props.snoBase + 1}</TableCell3>
              <TableCell3>{item?.party_code}</TableCell3>
              <TableCell3>{item?.company_name} </TableCell3>
              <TableCell3> {item?.received_date}</TableCell3>
              {/* <TableCell3>  </TableCell3> */}
              <TableCell3>{item?.visa_quantity} </TableCell3>
              <TableCell3>{item?.visa_number} </TableCell3>
              {/* <TableCell3>{item?.ekawala_qty} </TableCell3> */}
              <TableCell3>{item?.category}<BlueButton text={"View"} onClick={() => { fetchModalData('view', item.party_code)}} /> </TableCell3>
              {/* <TableCell3>{item?.pt_number} </TableCell3> */}

              <TableCell3>
                <UnlabeledInput
                  placeholder=""
                  type="text"
                  value={item?.pt_number} onchange={(value) => {
                    onUpdateRow(index, { ...item, pt_number: value })
                  }}
                />
              </TableCell3>


              {/* <TableCell3>{item?.demand_id} </TableCell3> */}
              <TableCell3>
                <UnlabeledInput
                  placeholder=""
                  type="text"
                  onchange={(value) => {
                    onUpdateRow(index, { ...item, demand_id: value })
                  }}
                  value={item.demand_id}
                />
              </TableCell3>
              <TableCell3>{item?.country} </TableCell3>

              <TableCell3>
                <DateInput
                  id=""
                  onChange={(value) => {
                    console.log(value);   // Only Dev
                    const date = addDaysToDate(value, 365)
                    onUpdateRow(index, { ...item, approved_date: value, expiry_date: date })
                  }}
                  value={item.approved_date}
                />
              </TableCell3>
              <TableCell3>
                <DateInput
                  id=""
                  onChange={(value) => {
                    onUpdateRow(index, { ...item, expiry_date: value })
                  }}
                  value={item.expiry_date}
                />
              </TableCell3>
              <DateInput
                id=""
                onChange={(value) => {
                  console.log(value);   // Only Dev
                  onUpdateRow(index, { ...item, deman_acknowledged_date: value })
                }}
                value={item.deman_acknowledged_date}
              />
              <TableCell3>{item?.visa_authorization_name} </TableCell3>

            </TableRow3>

          ))}



        </TableBody3>
      </Table3>

    </div>
  );
};

export default IndexForEwakalaTable;
