import {
  Table3,
  TableBody3,
  TableCell3,
  TableHead3,
  TableHeadCell3,
  TableHeadRow3,
  TableRow3,

} from "../../../../componenets/Table";

import { UnlabeledInput } from "../../../../componenets/Input";
import { CustomSelectComponentUnlabeledv2, selectOptionConveterv2 } from "../../../../componenets/SelectBox";
import { ClientInvoiceAddInterface } from "../type";

const ClientInvoiceAddTable = (props: {
  ClientInvoiceAddList: ClientInvoiceAddInterface[];
  setClientInvoiceAddList: any
  onChange: (value: ClientInvoiceAddInterface[]) => void
}) => {

  function onUpdateRow(index: number, rowData: ClientInvoiceAddInterface) {
    const nextData = props.ClientInvoiceAddList.map((e, i) => {
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
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CANDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> DIVISION </TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
            <TableHeadCell3> RC </TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> SERVICES CHARGES</TableHeadCell3>

          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.ClientInvoiceAddList?.map((ele, index) => (
            <TableRow3 key={index + 1}>

              <TableCell3> {ele.id}</TableCell3>
              <TableCell3> {ele.party_code}</TableCell3>
              <TableCell3> {ele.company_name}</TableCell3>
              <TableCell3> {ele.name}</TableCell3>
              <TableCell3>{ele.passport_no}</TableCell3>
              <TableCell3>{ele.actual_profession}</TableCell3>
              <TableCell3>{ele.visa_profession}</TableCell3>
              <TableCell3> {ele.visa_received_date}</TableCell3>
              <TableCell3> {ele.agent_name}</TableCell3>
              <TableCell3> {ele.division}</TableCell3>
              <TableCell3> {ele.visa_authorization}</TableCell3>
              <TableCell3> {ele.rc}</TableCell3>
              <TableCell3> {ele.other_charges}
                <UnlabeledInput
                  type="number"
                  // value={props.data[index]?.amount}
                  value={ele.other_charges}
                  onchange={(value) => {

                    // props.setData((prev: any) => {
                    //   const newData = [...prev];
                    //   newData[index] = {
                    //     ...newData[index],
                    //     amount: parseInt(value),
                    //     id: ele.id
                    //   };
                    //   return newData;
                    // });
                    // console.log(props.data, value)
                    if (value) {
                      onUpdateRow(index, { ...ele, other_charges: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, other_charges: value })
                    }
                  }}
                />
                <CustomSelectComponentUnlabeledv2
                  value={ele.other_charges}
                  options={selectOptionConveterv2({
                    // options: props?.ClientInvoiceAddList?.bulk_payment_list,
                    options: [],
                    options_struct: [{ name: "amount", value: "id" }, { name: "amount_used", value: "id" }]
                  })}
                  onChange={(value) => {
                    // props.setData((prev: any) => {
                    //   const newData = [...prev];
                    //   newData[index] = {
                    //     ...newData[index],
                    //     agent_id: parseInt(value)
                    //   };
                    //   return newData;
                    // });
                    if (value) {
                      onUpdateRow(index, { ...ele, other_charges: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, other_charges: value })
                    }
                  }
                  } />
              </TableCell3>
              <TableCell3> {ele.service_charges}
                <UnlabeledInput
                  type="number"
                  // value={props.data[index]?.amount}
                  value={ele.other_charges}
                  onchange={(value) => {

                    // props.setData((prev: any) => {
                    //   const newData = [...prev];
                    //   newData[index] = {
                    //     ...newData[index],
                    //     amount: parseInt(value),
                    //     id: ele.id
                    //   };
                    //   return newData;
                    // });
                    // console.log(props.data, value)
                    if (value) {
                      onUpdateRow(index, { ...ele, other_charges: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, other_charges: value })
                    }
                  }}
                />
                <CustomSelectComponentUnlabeledv2
                  value={ele.service_charges}
                  options={selectOptionConveterv2({
                    // options: props?.ClientInvoiceAddList?.bulk_payment_list,
                    options: [],
                    options_struct: [{ name: "amount", value: "id" }, { name: "amount_used", value: "id" }]
                  })}
                  onChange={(value) => {
                    // props.setData((prev: any) => {
                    //   const newData = [...prev];
                    //   newData[index] = {
                    //     ...newData[index],
                    //     agent_id: parseInt(value)
                    //   };
                    //   return newData;
                    // });
                    if (value) {
                      onUpdateRow(index, { ...ele, service_charges: value })
                        , console.log(value)
                    }
                    else {
                      onUpdateRow(index, { ...ele, service_charges: value })
                    }
                  }
                  } />
              </TableCell3>

            </TableRow3>
          ))
          }

        </TableBody3>
      </Table3>

    </div>
  );
};

export default ClientInvoiceAddTable;
