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
import { DegreeAttestationInterface } from "../type/Index";
import { VendorInterface } from "../../../masters/vendor/type";
import { UserInterface } from "../../../context/Model";
import { AgentAdapter, AgentInterface } from "../../../masters/agent/type";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CompanyInterface } from "../../../masters/company/type";

const DegreeAttestationList = (props: {
  degreAttestationList: DegreeAttestationInterface[];
  AgentList: AgentInterface[]
  RecruitCoordinatorList: UserInterface[]
  VendorList: VendorInterface[]
  companyList: CompanyInterface[]
  onChange: (ele: any) => void;
  actionType: string;
}) => {
  const [onChange, setonChange] = useState<string>("");

  const onClickAddNewRow = () => {
    const arr = [
      ...props.degreAttestationList,
      {
        candidate_name: '',
        passport_no: '',
        actual_position: '',
        agent_id: 0,
        rc_id: 0,
        company_id: 0,
        amout_payable_to_vendor: 0,
        amount_receivaled: 0,
        vendor_id: 0,
      },
    ];
    props.onChange(arr);
  };

  const onClickRemoveRow = (index: number) => {
    if (!confirm("Are You Sure?")) return;
    const arr = props.degreAttestationList.filter((e: any, i: any) => i !== index);
    props.onChange(arr);
    setonChange(Date.now().toString());
  };

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.degreAttestationList.map((e: any, i: any) => {
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

  return (<div className="overflow-auto " style={{ justifyContent: "center" }}>
    <Table3>
      <TableHead3>
        <TableHeadRow3>
          {[
            'sn. no',
            'candidate name',
            'p.p no',
            'actual position ',

            'agent',
            'rc',
            'company',
            'amout payable to vendor',
            'amount receivale',

            'vendor',
            'action'
          ]
            .map((ele: string) =>
              <TableHeadCell3>{ele}</TableHeadCell3>
            )}
        </TableHeadRow3>
      </TableHead3>
      <TableBody3>
        {props.degreAttestationList &&
          props.degreAttestationList.map((ele: DegreeAttestationInterface, index: any) => (
            <TableData
              actionType={props.actionType}
              data={ele}
              index={index}
              onChange={onChange}
              onClickRemove={onClickRemoveRow}
              onUpdate={onUpdateRow}

              AgentList={props.AgentList}
              RecruitCoordinatorList={props.RecruitCoordinatorList}
              VendorList={props.VendorList}
              companyList={props.companyList}
            />
          ))}

        {props.actionType == 'create' ? <>
          <TableRow3>
            <TableCell3>
              <div style={{ width: "111px" }}>
                <GreenButton text="Add Row" onClick={onClickAddNewRow} />
              </div>
            </TableCell3>
          </TableRow3>
        </> : ''}
      </TableBody3>
    </Table3>
  </div>)

};

export default DegreeAttestationList;

const TableData = (props: {
  actionType: string
  index: number;
  data: DegreeAttestationInterface;
  // onClickEdit: any;
  onUpdate: (index: number, rowData: DegreeAttestationInterface) => void;
  onClickRemove: (index: number) => void;
  onChange: string;

  AgentList: AgentInterface[]
  RecruitCoordinatorList: UserInterface[]
  VendorList: VendorInterface[]
  companyList: CompanyInterface[]
}) => {
  const [localRowData, setLocalRowData] = useState<DegreeAttestationInterface>({
    candidate_name: '',
    passport_no: '',
    actual_position: '',
    agent_id: 0,
    rc_id: 0,
    company_id: 0,
    amout_payable_to_vendor: 0,
    amount_receivaled: 0,
    vendor_id: 0,
  });

  useEffect(() => {
    setLocalRowData(props.data);
  }, [props.onChange]);

  useEffect(() => {
    console.log("rerender"); // Only Dev
    props.onUpdate(props.index, localRowData!);
  }, [localRowData]);

  return (
    <TableRow3 key={props.index}>
      <TableCell3>{props.index + 1}</TableCell3>
      <TableCell3>
        <UnlabeledInput
          value={localRowData.candidate_name}
          onchange={(value) =>
            setLocalRowData({ ...localRowData, candidate_name: value })
          }
        />
      </TableCell3>


      <TableCell3>
        <UnlabeledInput
          value={localRowData.passport_no}
          onchange={(value) =>
            setLocalRowData({ ...localRowData, passport_no: value })
          }
        />
      </TableCell3>

      <TableCell3>
        <UnlabeledInput
          value={localRowData.actual_position}
          onchange={(value) =>
            setLocalRowData({ ...localRowData, actual_position: value })
          }
        />
      </TableCell3>

      <TableCell3>
        <CustomSelectComponentUnlabeled
          onChange={(value) => setLocalRowData({ ...localRowData, agent_id: value })}

          options={selectOptionConveter({ options: props.AgentList, options_struct: { name: "name", value: "id" } })}
          value={localRowData.agent_id}
        />
      </TableCell3>

      <TableCell3>
        <CustomSelectComponentUnlabeled
          onChange={(value) => setLocalRowData({ ...localRowData, rc_id: value })}

          options={selectOptionConveter({ options: props.RecruitCoordinatorList, options_struct: { name: "name", value: "id" } })}
          value={localRowData.rc_id}
        />
      </TableCell3>

      <TableCell3>
        <CustomSelectComponentUnlabeled
          onChange={(value) => setLocalRowData({ ...localRowData, company_id: value })}

          options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
          value={localRowData.company_id}
        />
      </TableCell3>

      <TableCell3>
        <UnlabeledInput
          value={localRowData.amout_payable_to_vendor}
          
type="number"
                    
          onchange={(value) =>
            setLocalRowData({ ...localRowData, amout_payable_to_vendor: parseInt(value) })
          }
        />
      </TableCell3>

      <TableCell3>
        <UnlabeledInput
          value={localRowData.amount_receivaled}
          
type="number"
                    
          onchange={(value) =>
            setLocalRowData({ ...localRowData, amount_receivaled: parseInt(value) })
          }
        />
      </TableCell3>

      <CustomSelectComponentUnlabeled
        onChange={(value) => setLocalRowData({ ...localRowData, vendor_id: value })}

        options={selectOptionConveter({ options: props.VendorList, options_struct: { name: "name", value: "id" } })}
        value={localRowData.vendor_id}
      />

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
