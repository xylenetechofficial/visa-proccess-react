import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3, } from '../../../../componenets/Table';
import { SectorInterface } from '../../../masters/sector/type';
import { CompanyInterface } from '../../../masters/company/type';
import { CountryInterface } from '../../../masters/country/type';
import { CandidateDiscountApproveRejectInterface } from '../type';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import { convertDateFormat } from '../../../../utils/function';

const AgentPaymentTable = (props: {
  candidateDiscountApproveReject: CandidateDiscountApproveRejectInterface[],
  onClickEdit: any,
  onClickDelete: any
  setData: any;
  data: any,
  onChange: (value: any) => void
}) => {
  const [list, setList] = useState([{ discount_id: '', status: '' }])
  function onUpdateRow(index: number, rowData: CandidateDiscountApproveRejectInterface) {
    const nextData = props.candidateDiscountApproveReject.map((e: any, i: any) => {
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
  console.log(props.candidateDiscountApproveReject, "ll")
  return (
    <div className="overflow-auto">

      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> PARTY CODE </TableHeadCell3>
            <TableHeadCell3> COMPANY NAME</TableHeadCell3>
            <TableHeadCell3> CONDIDATE NAME</TableHeadCell3>
            <TableHeadCell3> PASSPORT NO.</TableHeadCell3>
            <TableHeadCell3> ACTUAL PROFESSION </TableHeadCell3>
            <TableHeadCell3> VISA PROFESSION </TableHeadCell3>
            <TableHeadCell3> AGENT</TableHeadCell3>
            <TableHeadCell3> VISA RECIEVED DATE </TableHeadCell3>
            <TableHeadCell3> VISA AUTHORIZATION </TableHeadCell3>
            <TableHeadCell3> AIR TICKET</TableHeadCell3>
            <TableHeadCell3> SERVICES CHARGES</TableHeadCell3>
            <TableHeadCell3> OTHER CHARGES</TableHeadCell3>
            <TableHeadCell3> DOCUMENT CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSULATE SETTING CHARGES</TableHeadCell3>
            <TableHeadCell3> PARTIAL CHARGES</TableHeadCell3>
            <TableHeadCell3> SECTOR CHARGES</TableHeadCell3>
            <TableHeadCell3> TICKET CHARGES </TableHeadCell3>
            <TableHeadCell3> ATTESTATION CHARGES </TableHeadCell3>
            <TableHeadCell3> EXTRA SERVICE TAX </TableHeadCell3>
            <TableHeadCell3> CONSOLIDATED CHARGES</TableHeadCell3>
            <TableHeadCell3> CONSOLIDATED CHARGES NAME</TableHeadCell3>
            <TableHeadCell3> PREVIOUS DISCOUNT GIVEN</TableHeadCell3>
            <TableHeadCell3> DISCOUNT</TableHeadCell3>
            <TableHeadCell3> DISCOUNT TYPE</TableHeadCell3>
            <TableHeadCell3> REMARK</TableHeadCell3>
            <TableHeadCell3>
              <Checkbox />

              ALL</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props?.candidateDiscountApproveReject?.map((item: any, index: number) => (
            <TableRow3>
              <TableCell3>{index + 1} </TableCell3>
              <TableCell3>{item.party_code}  </TableCell3>
              <TableCell3>{item.company_name}</TableCell3>
              <TableCell3>{item.name} </TableCell3>
              <TableCell3>{item.passport_no} </TableCell3>
              <TableCell3>{item.actual_profession}  </TableCell3>
              <TableCell3>{item.visa_profession}  </TableCell3>
              <TableCell3>{item.agent_name} </TableCell3>
              <TableCell3>{convertDateFormat(item.visa_received_date)}  </TableCell3>
              <TableCell3>{item.visa_authorization}  </TableCell3>
              <TableCell3>{item.ticket_charges} </TableCell3>
              <TableCell3>{item.service_charges} </TableCell3>
              <TableCell3>{item.other_charges} </TableCell3>
              <TableCell3>{item.document_charges}</TableCell3>
              <TableCell3>{item.consulate_setting_charges} </TableCell3>
              <TableCell3>{item.partial_charges} </TableCell3>
              <TableCell3>{item.sector_charges} </TableCell3>
              <TableCell3>{item.ticket_charges} </TableCell3>
              <TableCell3>{item.attestation_charges} </TableCell3>
              <TableCell3>{item.extra_service_tax} </TableCell3>
              <TableCell3>{item.consolidated_charges} </TableCell3>
              <TableCell3>{item.consolidated_charges} </TableCell3>
              <TableCell3>{item.discount_given} </TableCell3>
              <TableCell3>{item.discount} </TableCell3>
              <TableCell3>{item.discount_type} </TableCell3>
              <TableCell3>{item?.remarks} </TableCell3>
              <TableCell3>{item?.all}

                <Checkbox
                  onChange={(e) => {

                    setList((prev: any) => {
                      const newArray = { ...prev };
                      newArray[index] = {
                        ...newArray[index],
                        discount_id: item.discount_id,
                        status: e.target.checked ? 1 : 0,
                      };
                      return newArray;



                    });

                    // props.setData((prevs: any) => {
                    //   const newArray = [...prevs.selection_list];
                    //   newArray[index] = {
                    //     ...newArray[index],
                    //     discount_id: item.discount_id,

                    //   };

                    //   return {
                    //     ...prevs,
                    //     selection_list: newArray,
                    //   };
                    // }); console.log(list, index, props.data);
                    onUpdateRow(index, { ...item, discount_id: e.target.checked ? item.id : '' })
                  }}
                />

              </TableCell3>
            </TableRow3>

          ))}
        </TableBody3>
      </Table3>
    </div>
  )
}

export default AgentPaymentTable

