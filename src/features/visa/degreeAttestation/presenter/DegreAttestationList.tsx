import {
  BlueButton,
  GreenButton,
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

import { useState, useEffect } from "react";
import { UnlabeledInput } from "../../../../componenets/Input";

const DegreeAttestationList = (props: {
  degreAttestationList: any;
  onChange: (ele: any) => void;
}) => {
  const [onChange, setonChange] = useState<string>("");

  const onClickAddNewRow = () => {
    const arr = [
      ...props.degreAttestationList,
      {
        visa_profession: "",
        arabic_visa_category: "",
        block_visa_id: 0,
        quantity: 0,
      },
    ];
    props.onChange(arr);
  };

  const onClickRemoveRow = (index: number) => {
    if (!confirm("Are You Sure?")) return;
    const arr = props.degreAttestationList.filter((e:any, i:any) => i !== index);
    props.onChange(arr);
    setonChange(Date.now().toString());
  };

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.degreAttestationList.map((e:any, i:any) => {
      if (i === index) {
        // Increment the clicked counter
        return rowData;
      } else {
        // The rest haven't changed
        return e;
      }
    });
    props.onChange(nextData);
  }

  return (
    <div className="overflow-auto " style={{ justifyContent: "center" }}>
      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3>sn. no</TableHeadCell3>
            <TableHeadCell3>name</TableHeadCell3>
            <TableHeadCell3>passport no</TableHeadCell3>
            <TableHeadCell3>agent </TableHeadCell3>
            <TableHeadCell3>rc name</TableHeadCell3>
            <TableHeadCell3>attestation charges</TableHeadCell3>
            <TableHeadCell3>remove</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props.degreAttestationList &&
            props.degreAttestationList.map((ele:any, index:any) => (
              <TableData
                data={ele}
                index={index}
                onChange={onChange}
                onClickRemove={onClickRemoveRow}
                onUpdate={onUpdateRow}
              />
            ))}

          <TableRow3>
            <TableCell3>
              <div style={{ width: "111px" }}>
                <GreenButton text="Add Row" onClick={onClickAddNewRow} />
              </div>
            </TableCell3>
          </TableRow3>
        </TableBody3>
      </Table3>
    </div>
  );
};

export default DegreeAttestationList;

const TableData = (props: {
  index: number;
  data: any;
  // onClickEdit: any;
  onUpdate: (index: number, rowData: any) => void;
  onClickRemove: (index: number) => void;
  onChange: string;
}) => {
  const [localRowData, setLocalRowData] = useState<any>({
   
  });
  useEffect(() => {
    setLocalRowData(props.data);
  }, [props.onChange]);
  useEffect(() => {
    console.log("rerender"); // Only Dev
    props.onUpdate(props.index, localRowData!);
  }, [localRowData]);

  console.log(localRowData);
  return (
    <TableRow3 key={props.index}>
      <TableCell3>{props.index + 1}</TableCell3>
      <TableCell3>
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData})
          }
        />
      </TableCell3>

      <TableCell3>
        {/* {props.data.service_charges} */}
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData,})
          }
        />
      </TableCell3>
      <TableCell3>
        {/* {props.data.quantity} */}
        <UnlabeledInput
        
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData,  })
          }
        />
      </TableCell3>
      <TableCell3>
        {/* {props.data.service_charges} */}
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData, })
          }
        />
      </TableCell3>
      <TableCell3>
        {/* {props.data.service_charges} */}
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData, })
          }
        />
      </TableCell3>
      <TableCell3>
        <RedButton
          text={" Remove"}
          onClick={() => {
            props.onClickRemove(props.index);
          }}
        />
      </TableCell3>
    </TableRow3>
  );
};
