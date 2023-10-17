import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import RejectCancelApproveTable from "./Table";
import {  RedButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import {   RejectCancelApproveInterface } from "../type";
import {  readRejectCancelApproveList, updateRejectCancelApprove } from "../repository";

const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {

    
     const [btnClicked,setBtnClicked]=useState('')

    const [RejectCancelApproveList, setRejectCancelApproveList] = useState<RejectCancelApproveInterface[]>([])

    const [searchQuery, setSearchQuery] = useState("");

    const fetchRejectCancelApproveList = async () => {
        const data = await readRejectCancelApproveList();
        
        if (data) {
            setRejectCancelApproveList(data);

        }

    }
    const updateRejectCancelApproveList= async(id:number, item:RejectCancelApproveInterface[])=>{
        
        const list :RejectCancelApproveInterface[] = item.filter((ele)=> ele.is_checked !== undefined || null)
        list.map((ele)=> {return  ele.status= id })
        
        const res :any = await updateRejectCancelApprove(id, list);
        if(res){
            fetchRejectCancelApproveList();   
        }
    }
    useEffect(() => {

        fetchRejectCancelApproveList()
      
    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Reject Cancel Approve" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>
            {/*  RejectCancelApprove stable */}
            <RejectCancelApproveTable
                RejectCancelApproveList={RejectCancelApproveList}
                onChange={(value)=>setRejectCancelApproveList(value)}
                
            />
            <YellowButton text={"Reject"} onClick={() => {
                // setBtnClicked("Reject")
                updateRejectCancelApproveList(1,RejectCancelApproveList)
            }} />
            <RedButton text={"Cancel / Approve"} onClick={() => {
                // setBtnClicked("Cancel / Approve")
                updateRejectCancelApproveList(2,RejectCancelApproveList)
            }} />
          
        </div>
    )
}