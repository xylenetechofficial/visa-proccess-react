import React, { useState } from "react";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import { Table3, TableBody3, TableCell3, TableHead3, TableHeadCell3, TableHeadRow3, TableRow3 } from "../../../../componenets/Table";
import { Checkbox } from "@mui/material";
import { UnlabeledInput } from "../../../../componenets/Input";
import { AddIncentiveInterface, IncentiveInterface } from "../type";
import { convertDateFormat } from "../../../../utils/function";


const AccountDashboardTable = (props: {
  // accountDashboardList: AgentPaymentReceivedInterface[];
  accountDashboardList: IncentiveInterface[];
  setAccountDashboardList:any
  onClickEdit: any;
  updateIncentive: any
  setUpdateIncentive: any
  data: any;
  setData: any
  onClickCreate:any
  onChange:(value:AddIncentiveInterface[])=>void

}) => {
  const dummy = [1, 2];
  
  const [incentivesData, setincentivesData] = useState<AddIncentiveInterface[]>([]);
    console.log(incentivesData,"indcentive",props?.accountDashboardList)

    
    function onUpdateRow(index: number, rowData: IncentiveInterface) {
      const nextData = props.accountDashboardList.map((e, i) => {
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
    <>
    <div className="overflow-auto">


      <Table3>
        <TableHead3>
          <TableHeadRow3>
            <TableHeadCell3> Sr No.</TableHeadCell3>
            <TableHeadCell3> JOB ORDER NO </TableHeadCell3>
            <TableHeadCell3> JOB ORDER DATE</TableHeadCell3>
            <TableHeadCell3> COMPANY</TableHeadCell3>
            <TableHeadCell3> COUNTRY</TableHeadCell3>
            <TableHeadCell3> DIVISION </TableHeadCell3>
            <TableHeadCell3> OPS MANAGER </TableHeadCell3>
            <TableHeadCell3> RC NAME</TableHeadCell3>
            <TableHeadCell3> SELECT </TableHeadCell3>
            <TableHeadCell3> MANAGER INCENTIVE</TableHeadCell3>
            <TableHeadCell3> STAFF INCENTIVE</TableHeadCell3>

          </TableHeadRow3>
        </TableHead3>
        <TableBody3>
          {props?.accountDashboardList?.map((ele: any, index: any) => (
            <TableRow3 key={index}>
              <TableCell3>{index + 1}</TableCell3>
              <TableCell3> {ele?.job_order_no}</TableCell3>
              <TableCell3> {convertDateFormat(ele?.job_order_date)}</TableCell3>
              <TableCell3>
                {ele?.company}
              </TableCell3>
              <TableCell3>{ele?.country} s</TableCell3>
              <TableCell3>{ele?.division} </TableCell3>
              <TableCell3>{ele?.ops_manager} </TableCell3>
              <TableCell3>
                {ele?.rc_name}
              </TableCell3>
              <TableCell3> <Checkbox 
              onClick={(value)=>{
                setincentivesData((prev:any)=>{
                  const newData = [...prev];
                  newData[index] = {
                    ...newData[index],
                    id: ele.id
                  };
                  return newData;
                }),
                console.log(incentivesData,"ss")
                onUpdateRow(index,{...ele, id:ele.id})
              }}/></TableCell3>
              <TableCell3> <UnlabeledInput 
              
// type="number"
                    
              // value={incentivesData[index]?.manager_incentive} onchange={(value) => {
              value={props?.accountDashboardList[index]?.manager_incentive} onchange={(value) => {
                console.log("first"),
                setincentivesData((prev: any) => {

                  const newArray = [...prev];
                  newArray[index] = {
                    ...newArray[index],
                    manager_incentive: parseInt(value),
                  };
                  return newArray;
                });
                onUpdateRow(index,{...ele, manager_incentive:value})
                props?.setAccountDashboardList((prev: any) => {

                  const newArray = [...prev];
                  newArray[index] = {
                    ...newArray[index],
                    manager_incentive: parseInt(value),
                  };
                  return newArray;
                });
                
                props.setData((prev:any) => {
            
                  return {
                    ...prev,
                    job_order_list: incentivesData,
                  };
              });
              
              }} /></TableCell3>
              <TableCell3><UnlabeledInput 
// type="number"
                     value={props.accountDashboardList[index]?.staff_incentive} onchange={(value) => {
                onUpdateRow(index,{...ele, staff_incentive:value})
                  setincentivesData((prev: any) => {

                    const newArray = [...prev];
                    newArray[index] = {
                      ...newArray[index],
                      staff_incentive: parseInt(value),
                    };
                    return newArray;
                  });
                  props?.setAccountDashboardList((prev: any) => {

                    const newArray = [...prev];
                    newArray[index] = {
                      ...newArray[index],
                      staff_incentive: parseInt(value),
                    };
                    return newArray;
                  });
                  props.setData((prev:any) => {
            
                    return {
                      ...prev,
                      job_order_list: incentivesData,
                    };
                });
                console.log("first",incentivesData);
                

              }} /></TableCell3>


            </TableRow3>

          ))}
        </TableBody3>
      </Table3>
    </div>
     <div className="mt-4">
     <GreenButton text="Submit" onClick={()=>{
        props.setData((prev:any) => {
             
         return {
           ...prev,
           job_order_list: incentivesData,
         };
     });console.log(props.data,"a");props.onClickCreate(incentivesData) }} />
     </div>
     </>
  );
};

export default AccountDashboardTable;
