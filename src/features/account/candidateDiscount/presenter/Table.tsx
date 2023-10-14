import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from '../../../../componenets/Table';
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
            <TableHeadCell3> VISA AUTHORIZATION NAME </TableHeadCell3>
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
            <TableHeadCell3> {"SAS"}</TableHeadCell3>
            <TableHeadCell3> DISCOUNT</TableHeadCell3>
            <TableHeadCell3> DISCOUNT TYPE</TableHeadCell3>
            <TableHeadCell3>DISCOUNT REMARK</TableHeadCell3>
          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props?.CandidateDiscountList?.map((item: any, index: any) =>

          (
            <TableRow3 key={index}>
              <TableCell3> {index +1}</TableCell3>
              <TableCell3> {item.party_code} </TableCell3>
              <TableCell3> {item.company_name}</TableCell3>
              <TableCell3> {item.name}</TableCell3>
              <TableCell3> {item.passport_no}</TableCell3>
              <TableCell3> {item.actual_profession} </TableCell3>
              <TableCell3> {item.visa_profession} </TableCell3>
              <TableCell3> {item.agent_name}</TableCell3>
              <TableCell3> {convertDateFormat(item.visa_received_date)} </TableCell3>
              <TableCell3> {item.visa_authorization} </TableCell3>
              <TableCell3> {item.visa_authorization_name} </TableCell3>
              <TableCell3> {item.air_ticket}</TableCell3>
              <TableCell3> {item.service_charges}</TableCell3>
              <TableCell3> {item.other_charges}</TableCell3>
              <TableCell3> {item.document_charges}</TableCell3>
              <TableCell3> {item.consulate_setting_charges}</TableCell3>
              <TableCell3> {item.partial_charges}</TableCell3>
              <TableCell3> {item.sector_charges}</TableCell3>
              <TableCell3> {item.ticket_charges} </TableCell3>
              <TableCell3> {item.attestation_charges} </TableCell3>
              <TableCell3> {item.extra_service_tax}</TableCell3>
              <TableCell3> {item.consolidated_charges}</TableCell3>
              <TableCell3> {item.consolidated_charges}</TableCell3>
              <TableCell3> {item?.discount_given}</TableCell3>
              <TableCell3>
                <Checkbox onChange={(e) => {
                
                  if (e.target.checked) {
                    // setDiscount((prev: any) => {
                    //   const newArray: any = [...prev];
                    //   newArray[index].sas = e.target.checked;

                    //   return newArray;
                    // });
                    onUpdateRow(index, {...item, isSas: true})
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
                      newArray[index] = e.target.checked;
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

              </TableCell3>
              <TableCell3> <UnlabeledInput value={item?.discount}
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
                  onUpdateRow(index, {...item , discount:parseInt(value)})
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

              </TableCell3>
              <TableCell3>
                <Checkbox
                  value={"Normal Discount"}
                  checked={selectedCheckbox[index]?.isChecked === `${item.id}yes`}

                  onChange={(value) => {
                    onUpdateRow(index, {...item , discount_type:value.target.checked ? "Normal Discount":"",})
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
                    onUpdateRow(index, {...item , discount_type:value.target.checked ? "Error Discount":"",})
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

              </TableCell3>
              <TableCell3>
                <TextAreaInput id="remark" value={item?.discount_remarks} onChange={(value) => {
                  onUpdateRow(index, {...item , discount_remarks:value})
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
              </TableCell3>

            </TableRow3>
          )
          )}
        </TableBody3>
      </Table3>



    </div>

  )
}

export default CandidateDiscountTable

