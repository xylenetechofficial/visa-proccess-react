import React, { useState } from "react";
import { AccountDashboardInterface, AgentPaymentReceivedInterface } from "../type";
import { BlueButton, GreenButton, RedButton } from "../../../../componenets/CustomButton";
import {
  Table,
  Table2,
  TableBody,
  TableCell,
  TableHead,
  TableHead2,
  TableHeadCell,
  TableHeadCell2,
  TableHeadRow,
  TableHeadRow2,
  TableRow,
} from "../../../../componenets/Table";
import { Checkbox } from "@mui/material";
import { UnlabeledInput } from "../../../../componenets/Input";


const AccountDashboardTable = (props: {
  // accountDashboardList: AgentPaymentReceivedInterface[];
  accountDashboardList: any;
  setAccountDashboardList:any
  onClickEdit: any;
  updateIncentive: any
  setUpdateIncentive: any
  data: any;
  setData: any
  onClickCreate:any
}) => {
  const dummy = [1, 2];
  
  const [incentivesData, setincentivesData] = useState(props?.accountDashboardList);
    console.log(incentivesData,"indcentive",props?.accountDashboardList)
  return (
    <>
    <div className="overflow-auto">


      <Table2>
        <TableHead2>
          <TableHeadRow2>
            <TableHeadCell2> Sr No.</TableHeadCell2>
            <TableHeadCell2> JOB ORDER NO </TableHeadCell2>
            <TableHeadCell2> JOB ORDER DATE</TableHeadCell2>
            <TableHeadCell2> COMPANY</TableHeadCell2>
            <TableHeadCell2> COUNTRY</TableHeadCell2>
            <TableHeadCell2> DIVISION </TableHeadCell2>
            <TableHeadCell2> OPS MANAGER </TableHeadCell2>
            <TableHeadCell2> RC NAME</TableHeadCell2>
            <TableHeadCell2> SELECT </TableHeadCell2>
            <TableHeadCell2> MANAGER INCENTIVE</TableHeadCell2>
            <TableHeadCell2> STAFF INCENTIVE</TableHeadCell2>

          </TableHeadRow2>
        </TableHead2>
        <TableBody>
          {props?.accountDashboardList?.map((ele: any, index: any) => (
            <TableRow key={index}>
              <TableCell>{ele?.id}</TableCell>
              <TableCell> {ele?.job_order_no}</TableCell>
              <TableCell> {ele?.job_order_date}</TableCell>
              <TableCell>
                {ele?.company}
              </TableCell>
              <TableCell>{ele?.country} s</TableCell>
              <TableCell>{ele?.division} </TableCell>
              <TableCell>{ele?.ops_manager} </TableCell>
              <TableCell>
                {ele?.rc_name}
              </TableCell>
              <TableCell> <Checkbox 
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
              }}/></TableCell>
              <TableCell> <UnlabeledInput 
              type="number"
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
              props.setData((prev:any) => {
             
                return {
                  ...prev,
                  job_order_list: incentivesData,
                };
            })
              }} /></TableCell>
              <TableCell><UnlabeledInput type="number" value={props.accountDashboardList[index]?.staff_incentive} onchange={(value) => {
                
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
                props.setData((prev:any) => {
             
                  return {
                    ...prev,
                    job_order_list: incentivesData,
                  };
              })

              }} /></TableCell>


            </TableRow>

          ))}
        </TableBody>
      </Table2>
    </div>
     <div className="mt-4">
     <GreenButton text="Submit" onClick={()=>{
        props.setData((prev:any) => {
             
         return {
           ...prev,
           job_order_list: incentivesData,
         };
     });console.log(props.data,"a");props.onClickCreate(props.data) }} />
     </div>
     </>
  );
};

export default AccountDashboardTable;
