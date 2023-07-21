import {
  Table,
  TableBody2,
  TableCell,
  TableHead2,
  TableHeadCell,
  TableHeadRow,
  TableRow,

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

      <Table>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell> Sr No.</TableHeadCell>
            <TableHeadCell> PARTY CODE </TableHeadCell>
            <TableHeadCell> COMPANY NAME</TableHeadCell>
            <TableHeadCell> CANDIDATE NAME</TableHeadCell>
            <TableHeadCell> PASSPORT NO.</TableHeadCell>
            <TableHeadCell> ACTUAL PROFESSION </TableHeadCell>
            <TableHeadCell> VISA PROFESSION </TableHeadCell>
            <TableHeadCell> VISA RECIEVED DATE </TableHeadCell>
            <TableHeadCell> AGENT</TableHeadCell>
            <TableHeadCell> DIVISION </TableHeadCell>
            <TableHeadCell> VISA AUTHORIZATION </TableHeadCell>
            <TableHeadCell> RC </TableHeadCell>
            <TableHeadCell> OTHER CHARGES</TableHeadCell>
            <TableHeadCell> SERVICES CHARGES</TableHeadCell>

          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props.ClientInvoiceAddList?.map((ele, index) => (
            <TableRow key={index + 1}>

              <TableCell> {ele.id}</TableCell>
              <TableCell> {ele.party_code}</TableCell>
              <TableCell> {ele.company_name}</TableCell>
              <TableCell> {ele.name}</TableCell>
              <TableCell>{ele.passport_no}</TableCell>
              <TableCell>{ele.actual_profession}</TableCell>
              <TableCell>{ele.visa_profession}</TableCell>
              <TableCell> {ele.visa_received_date}</TableCell>
              <TableCell> {ele.agent_name}</TableCell>
              <TableCell> {ele.division}</TableCell>
              <TableCell> {ele.visa_authorization}</TableCell>
              <TableCell> {ele.rc}</TableCell>
              <TableCell> {ele.other_charges}
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
              </TableCell>
              <TableCell> {ele.service_charges}
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
              </TableCell>

            </TableRow>
          ))
          }

        </TableBody2>
      </Table>

    </div>
  );
};

export default ClientInvoiceAddTable;
