import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import RejectCancelApproveTable from "./Table";
import {  RedButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import {  EditRejectCancelApproveInterface, RejectCancelApproveInterface } from "../type";
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

    
    const [editRejectCancelApprove, setEditRejectCancelApprove] = useState<[EditRejectCancelApproveInterface[]]>(
    //     {
    //     "selection_list":[
    //         {
    //             "id":0,
    //             "mofa_cancel_id":0,
    //             "status":0
    //         }
    //     ]
    // }
    );
    const [btnClicked,setBtnClicked]=useState('')

    const [RejectCancelApproveList, setRejectCancelApproveList] = useState<RejectCancelApproveInterface[]>([])

    const [searchQuery, setSearchQuery] = useState("");

    const fetchRejectCancelApproveList = async () => {
        const data = await readRejectCancelApproveList();
        console.log(data, "kkkkkllllll");
        if (data) {
            setRejectCancelApproveList(data);

        }

    }
    const updateRejectCancelApproveList= async(id:number, item:any)=>{
        console.log(item,"ITEM", id)
        // const res :any = await updateRejectCancelApprove(id, item);
        // if(res){
        //     fetchRejectCancelApproveList();   
        // }
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
                // setEditRejectCancelApprove={(value)=>setEditRejectCancelApprove(value)}
                // onChange={(value)=>setEditRejectCancelApprove({...editRejectCancelApprove,value})}
                editRejectCancelApprove={editRejectCancelApprove}
            />
            <YellowButton text={"Reject"} onClick={() => {
                // setModalName("create")
                setBtnClicked("Reject")
                updateRejectCancelApproveList(1,editRejectCancelApprove)
            }} />
            <RedButton text={"Cancel / Approve"} onClick={() => {
                setBtnClicked("Cancel / Approve")
                updateRejectCancelApproveList(2,editRejectCancelApprove)
            }} />
           {/* <GreenButton text={"Mofa 15 Days"} onClick={() => {
            setBtnClicked("Mofa 15 Days")
              updateRejectCancelApproveList(0,editRejectCancelApprove)
            }} /> */}
        </div>
    )
}