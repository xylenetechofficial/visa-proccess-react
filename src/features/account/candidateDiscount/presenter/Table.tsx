import { Table2, TableBody, TableCell, TableHead2, TableHeadCell2, TableHeadRow, TableRow } from '../../../../componenets/Table';
import { Checkbox } from '@mui/material';
import { TextAreaInput, UnlabeledInput } from '../../../../componenets/Input';
import { useState } from 'react';
import { convertDateFormat } from '../../../../utils/function';

const CandidateDiscountTable = (props: {
  // CandidateDiscountList: CandidateDiscountInterface[],
  CandidateDiscountList: any,
  setCandidateDiscountList: any
  discountAndRemark: any,
  setDiscountList: any,
  data: any,
  setData: any,
  discountList: any,
  onChange:(value: any)=>void

}) => {
  console.log(props?.CandidateDiscountList, "PPPPPP", props?.discountAndRemark)
  const [discount, setDiscount] = useState([{ name: "Normal Discount", value: 0, sas: 0 }, { name: "Error Discount", value: 0, sas: 0 }]);


  const [list, setList] = useState(props?.CandidateDiscountList)
  const [selectedCheckbox, setSelectedCheckbox] = useState([{isChecked:""}]);

  const handleCheckboxChange = (itemId: any,index:number) => {
    setSelectedCheckbox((prev)=>{
    const newData: any = [...prev];
    newData[index] = {
      ...newData[index],
      isChecked: itemId,
        };
    return newData;
  })
  };

  function onUpdateRow(index: number, rowData: any) {
    const nextData = props.CandidateDiscountList.map((e:any, i:any) => {
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
  console.log("lll", list, props.data)
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
            <TableHeadCell2> VISA AUTHORIZATION NAME </TableHeadCell2>
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
            <TableHeadCell2> {"SAS"}</TableHeadCell2>
            <TableHeadCell2> DISCOUNT</TableHeadCell2>
            <TableHeadCell2> DISCOUNT TYPE</TableHeadCell2>
            <TableHeadCell2>DISCOUNT REMARK</TableHeadCell2>
          </TableHeadRow>
        </TableHead2>
        <TableBody>
          {props?.CandidateDiscountList?.map((item: any, index: any) =>

          (
            <TableRow key={index}>
              <TableCell> {index +1}</TableCell>
              <TableCell> {item.party_code} </TableCell>
              <TableCell> {item.company_name}</TableCell>
              <TableCell> {item.name}</TableCell>
              <TableCell> {item.passport_no}</TableCell>
              <TableCell> {item.actual_profession} </TableCell>
              <TableCell> {item.visa_profession} </TableCell>
              <TableCell> {item.agent_name}</TableCell>
              <TableCell> {convertDateFormat(item.visa_received_date)} </TableCell>
              <TableCell> {item.visa_authorization} </TableCell>
              <TableCell> {item.visa_authorization_name} </TableCell>
              <TableCell> AIR TICKET</TableCell>
              <TableCell> {item.service_charges}</TableCell>
              <TableCell> {item.other_charges}</TableCell>
              <TableCell> {item.document_charges}</TableCell>
              <TableCell> {item.consulate_setting_charges}</TableCell>
              <TableCell> {item.partial_charges}</TableCell>
              <TableCell> {item.sector_charges}</TableCell>
              <TableCell> {item.ticket_charges} </TableCell>
              <TableCell> {item.attestation_charges} </TableCell>
              <TableCell> {item.extra_service_tax}</TableCell>
              <TableCell> {item.consolidated_charges}</TableCell>
              <TableCell> {item.consolidated_charges}</TableCell>
              <TableCell> {item?.discount_given}</TableCell>
              <TableCell>
                <Checkbox onChange={(e) => {
                  if (e.target.checked) {
                    // setDiscount((prev: any) => {
                    //   const newArray: any = [...prev];
                    //   newArray[index].sas = e.target.checked;

                    //   return newArray;
                    // });
                    props.setCandidateDiscountList((prev: any) => {
                      const newArray: any = [...prev];
                      newArray[index].discount = props.discountAndRemark?.discount;
                      newArray[index].discount_remarks = props.discountAndRemark?.discount_remark;
                      return newArray;
                    })
                      // setList((prev:any) => {
                      //   const newArray :any= [...prev]; 
                      //   newArray[index].discount = props?.discountAndRemark?.discount; 
                      //   newArray[index].discount_remarks = props?.discountAndRemark?.discount_remark; 
                      //   newArray[index].id = item?.id; 
                      //   return newArray;
                      // })

                    props.setData((prev: any) => {
                      const newData: any = [...prev];
                      newData[index] = {
                        ...newData[index],
                        discount: props?.discountAndRemark?.discount,
                        discount_remarks: props?.discountAndRemark?.discount_remark,
                        id: item?.id
                      };
                      return newData;
                    });
                  }
                  else {
                    setDiscount((prev) => {
                      const newArray: any = [...prev];
                      newArray[index].sas = e.target.checked;
                      return newArray;
                    });
                    // setList((prev:any) => {
                    //   const newArray :any= [...prev]; 
                    //   newArray[index].discount = props.discountAndRemark?.discount; 
                    //   newArray[index].discount_remarks = props.discountAndRemark?.discount_remark;  
                    //   return newArray;
                    // })

                    props.setCandidateDiscountList((prev: any) => {
                      const newArray: any = [...prev];
                      newArray[index].discount = "";
                      newArray[index].discount_remarks = "";
                      return newArray;
                    })
                  }

                }} />

              </TableCell>
              <TableCell> <UnlabeledInput value={item?.discount}
                //  onchange={(value)=>{            
                //   setList((prev) => {
                //     const newArray = [...prev];
                //     newArray[index] = {
                //       ...newArray[index],
                //       discount: Number(value),
                //     };
                //     return newArray;
                //   });

                //   }}
                // value={props.data[index]?.amount}
                type='number'
                onchange={(value) => {
                  console.log(value);
                  props.setData((prev: any) => {
                    const newData = [...prev];
                    newData[index] = {
                      ...newData[index],
                      discount: value,
                      id: item.id
                    };
                    return newData;
                  });
                  props.setCandidateDiscountList((prev: any) => {
                    const newData = [...prev];
                    newData[index] = {
                      ...newData[index],
                      discount: parseInt(value),
                      
                    };
                    return newData;
                  });
                  // console.log(props.data, value)
                }}
              />

              </TableCell>
              <TableCell>
                <Checkbox
                  value={"Normal Discount"}
                  checked={selectedCheckbox[index]?.isChecked === `${item.id}yes`}

                  onChange={(value) => {
                    handleCheckboxChange(`${item.id}yes`,index)
                    setList((prev: any) => {
                      const newArray: any = [...prev];
                      newArray[index] = {
                        ...newArray[index],
                        discount_type: value,
                      };
                      return newArray;
                    });
                    props.setDiscountList((prev: any) => {

                      return {
                        ...prev,
                        selection_list: list,
                      };
                    });
                    
                      props.setData((prev: any) => {
                        const newData = [...prev];
                        newData[index] = {
                          ...newData[index],
                          discount_type: value.target.checked ? "Normal Discount":"",
                          
                        };
                        return newData;
                      });
                    


                  }}

                />Normal Discount

                <Checkbox
                  value={"Error Discount"}
                  checked={selectedCheckbox[index]?.isChecked === `${item.id}no`}

                  //  option={[{name:"Normal Discount",value:"Normal Discount"},{name:"Error Discount", value:"Error Discount"}]}
                  onChange={(value) => {
                    handleCheckboxChange(`${item.id}no`,index)
                    setList((prev: any) => {
                      const newArray: any = [...prev];
                      newArray[index] = {
                        ...newArray[index],
                        discount_type: value.target.checked ? "Error Discount":"",
                      };
                      return newArray;
                    });
                    // console.log(list,"oooooooo")

                    // props.setDiscountList((prev:any) => {
                    //   const updatedSelectionList = prev?.selection_list?.map((item:any) => {
                    //     Find the corresponding item in the incoming data array
                    //     const matchingItem = props.discountAndRemark.findIndex((newItem:any) => newItem.id === item.id);
                    //     if (matchingItem) {
                    //       return {
                    //         ...item,
                    //         discount: list[index]?.discount,
                    //         discount_type: list[index]?.discount_type,
                    //         discount_remarks: list[index]?.discount_remarks,
                    //       };
                    //     }
                    //     return item;
                    //   });
                    //   return {
                    //     ...prev,
                    //     selection_list: updatedSelectionList,
                    //   };
                    // });
                    props.setDiscountList((prev: any) => {

                      return {
                        ...prev,
                        selection_list: list,
                      };
                    });
                    props.setCandidateDiscountList((prev: any) => {
                      const newArray = [...prev];
                      newArray[index] = {
                        ...newArray[index],
                        discount_type: value,
                      };
                      return newArray;
                    });
                    props.setData((prev: any) => {
                      const newData = [...prev];
                      newData[index] = {
                        ...newData[index],
                        discount_type: value.target.checked ? "Error Discount":"",
                        
                      };
                      return newData;
                    });

                  }} />Error Discount

              </TableCell>
              <TableCell>
                <TextAreaInput id="remark" value={item?.discount_remarks} onChange={(value) => {
                  setList((prev: any) => {
                    const newArray = [...prev];
                    newArray[index] = {
                      ...newArray[index],
                      discount_remarks: value,
                    };
                    return newArray;
                  });
                  props.setCandidateDiscountList((prev: any) => {
                    const newArray = [...prev];
                    newArray[index] = {
                      ...newArray[index],
                      discount_remarks: value,
                    };
                    return newArray;
                  });
                  props.setData((prev: any) => {
                    const newData = [...prev];
                    newData[index] = {
                      ...newData[index],
                      discount_remarks: value,
                      
                    };
                    return newData;
                  });
                }} />
              </TableCell>

            </TableRow>
          )
          )}
        </TableBody>
      </Table2>



    </div>

  )
}

export default CandidateDiscountTable

