import { Table2, TableBody2, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow, } from '../../../../componenets/Table';
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

      <Table2>
        <TableHead2>
          <TableHeadRow>
            <TableHeadCell2> Sr No.</TableHeadCell2>
            <TableHeadCell2> PARTY CODE </TableHeadCell2>
            <TableHeadCell2> COMPANY NAME</TableHeadCell2>
            <TableHeadCell2> CONDIDATE NAME</TableHeadCell2>
            <TableHeadCell2> PASSPORT NO.</TableHeadCell2>
            <TableHeadCell2> ACTUAL PROFESSION </TableHeadCell2>
            <TableHeadCell2> VISA PROFESSION </TableHeadCell2>
            <TableHeadCell2> AGENT</TableHeadCell2>
            <TableHeadCell2> VISA RECIEVED DATE </TableHeadCell2>
            <TableHeadCell2> VISA AUTHORIZATION </TableHeadCell2>
            <TableHeadCell2> AIR TICKET</TableHeadCell2>
            <TableHeadCell2> SERVICES CHARGES</TableHeadCell2>
            <TableHeadCell2> OTHER CHARGES</TableHeadCell2>
            <TableHeadCell2> DOCUMENT CHARGES</TableHeadCell2>
            <TableHeadCell2> CONSULATE SETTING CHARGES</TableHeadCell2>
            <TableHeadCell2> PARTIAL CHARGES</TableHeadCell2>
            <TableHeadCell2> SECTOR CHARGES</TableHeadCell2>
            <TableHeadCell2> TICKET CHARGES </TableHeadCell2>
            <TableHeadCell2> ATTESTATION CHARGES </TableHeadCell2>
            <TableHeadCell2> EXTRA SERVICE TAX </TableHeadCell2>
            <TableHeadCell2> CONSOLIDATED CHARGES</TableHeadCell2>
            <TableHeadCell2> CONSOLIDATED CHARGES NAME</TableHeadCell2>
            <TableHeadCell2> PREVIOUS DISCOUNT GIVEN</TableHeadCell2>
            <TableHeadCell2> DISCOUNT</TableHeadCell2>
            <TableHeadCell2> DISCOUNT TYPE</TableHeadCell2>
            <TableHeadCell2> REMARK</TableHeadCell2>
            <TableHeadCell2>
              <Checkbox />

              ALL</TableHeadCell2>
          </TableHeadRow>
        </TableHead2>
        <TableBody2>
          {props?.candidateDiscountApproveReject?.map((item: any, index: number) => (
            <TableRow>
              <TableCell>{index + 1} </TableCell>
              <TableCell>{item.party_code}  </TableCell>
              <TableCell>{item.company_name}</TableCell>
              <TableCell>{item.name} </TableCell>
              <TableCell>{item.passport_no} </TableCell>
              <TableCell>{item.actual_profession}  </TableCell>
              <TableCell>{item.visa_profession}  </TableCell>
              <TableCell>{item.agent_name} </TableCell>
              <TableCell>{convertDateFormat(item.visa_received_date)}  </TableCell>
              <TableCell>{item.visa_authorization}  </TableCell>
              <TableCell>{item.ticket_charges} </TableCell>
              <TableCell>{item.service_charges} </TableCell>
              <TableCell>{item.other_charges} </TableCell>
              <TableCell>{item.document_charges}</TableCell>
              <TableCell>{item.consulate_setting_charges} </TableCell>
              <TableCell>{item.partial_charges} </TableCell>
              <TableCell>{item.sector_charges} </TableCell>
              <TableCell>{item.ticket_charges} </TableCell>
              <TableCell>{item.attestation_charges} </TableCell>
              <TableCell>{item.extra_service_tax} </TableCell>
              <TableCell>{item.consolidated_charges} </TableCell>
              <TableCell>{item.consolidated_charges} </TableCell>
              <TableCell>{item.discount_given} </TableCell>
              <TableCell>{item.discount} </TableCell>
              <TableCell>{item.discount_type} </TableCell>
              <TableCell>{item?.remarks} </TableCell>
              <TableCell>{item?.all}

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

              </TableCell>
            </TableRow>

          ))}
        </TableBody2>
      </Table2>
    </div>
  )
}

export default AgentPaymentTable

