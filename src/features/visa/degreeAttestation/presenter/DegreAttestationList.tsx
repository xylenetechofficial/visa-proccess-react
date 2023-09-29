import {
  BlueButton,
  GreenButton,
  RedButton,
} from "../../../../componenets/CustomButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
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
    const arr = props.degreAttestationList.filter((e, i) => i !== index);
    props.onChange(arr);
    setonChange(Date.now().toString());
  };

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.degreAttestationList.map((e, i) => {
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
      <Table>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>sn. no</TableHeadCell>
            <TableHeadCell>name</TableHeadCell>
            <TableHeadCell>passport no</TableHeadCell>
            <TableHeadCell>agent </TableHeadCell>
            <TableHeadCell>rc name</TableHeadCell>
            <TableHeadCell>attestation charges</TableHeadCell>
            <TableHeadCell>remove</TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {props.degreAttestationList &&
            props.degreAttestationList.map((ele, index) => (
              <TableData
                data={ele}
                index={index}
                onChange={onChange}
                onClickRemove={onClickRemoveRow}
                onUpdate={onUpdateRow}
              />
            ))}

          <TableRow>
            <TableCell>
              <div style={{ width: "111px" }}>
                <GreenButton text="Add Row" onClick={onClickAddNewRow} />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
    <TableRow key={props.index}>
      <TableCell>{props.index + 1}</TableCell>
      <TableCell>
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData})
          }
        />
      </TableCell>

      <TableCell>
        {/* {props.data.service_charges} */}
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData,})
          }
        />
      </TableCell>
      <TableCell>
        {/* {props.data.quantity} */}
        <UnlabeledInput
        
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData,  })
          }
        />
      </TableCell>
      <TableCell>
        {/* {props.data.service_charges} */}
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData, })
          }
        />
      </TableCell>
      <TableCell>
        {/* {props.data.service_charges} */}
        <UnlabeledInput
          value={localRowData}
          onchange={(value) =>
            setLocalRowData({ ...localRowData, })
          }
        />
      </TableCell>
      <TableCell>
        <RedButton
          text={" Remove"}
          onClick={() => {
            props.onClickRemove(props.index);
          }}
        />
      </TableCell>
    </TableRow>
  );
};
