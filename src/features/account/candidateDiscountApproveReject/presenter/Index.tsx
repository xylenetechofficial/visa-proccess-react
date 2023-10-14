import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import BlockVisaTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton, RedButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { deleteBlockVisa, readCandidateDiscountList, updateCandidateDiscountApproveReject } from "../repository";


const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {

  const [modalName, setModalName] = useState("");


  const onClickEdit = (blockVisa: any) => {


    console.log("onClickEdit"); // Only Dev
    console.log(blockVisa); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (blockVisa: any) => {

    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && blockVisa.id) {
      await deleteBlockVisa(blockVisa.id);
      fetchCandidateDiscountList();
    }
  };


  const [data, setData] = useState(
    {
      "selection_list": [
        {

        },

      ]
    })
  const [blockVisaList, setBlockVisaList] = useState<any[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  // const filterData = (query: string, data: BlockVisaInterface[]) => {
  const filterData = (query: string, data: any[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, blockVisaList);



  const fetchCandidateDiscountList = async () => {
    const data: any = await readCandidateDiscountList();
    console.log(data);
    if (data) {
      setBlockVisaList(data);
    }
    setBlockVisaList(data);
  };
  useEffect(() => {
    fetchCandidateDiscountList();

  }, []);
  
  const handleClick = async (status: any) => {
    const newArray: any = { ...data }
    console.log(newArray, "PPPP")
    const filteredArray = Object.values(newArray)
      .filter((item: any) => item.discount_id !== '')
      .map((item: any, index: any) => {
        newArray[index].status = status;
        return item; // Return the modified item
      });
    const res: any = await updateCandidateDiscountApproveReject({ selection_list: filteredArray });
    if (res) {
      fetchCandidateDiscountList();

    }
  }
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidate Discount Approve/Reject"
        searchFunction={(query) => setSearchQuery(query)}
      />


      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

      </CardHeader>

      {/*  blockVisa stable */}
      <BlockVisaTable
        candidateDiscountApproveReject={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}

        setData={setData}
        data={data}
        onChange={(value) => setData(value)}
      />





      <GreenButton onClick={() => handleClick(1)} text="Approve" />
      <RedButton onClick={() => handleClick(2)} text="Reject" />
    </div>
  );
}
