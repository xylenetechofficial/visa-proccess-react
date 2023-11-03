import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { confirmationMessage } from "../../../../utils/alert";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import {  CandidateDiscountInterface,  } from "../type";
import { deleteCandidateDiscount, readCandidateDiscountList, updateCandidateDiscount } from "../repository";
import CandidateDiscountTable from "./Table";
// import CandidateDiscountTable from "./Table_copy";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import { TextAreaInput } from "../../../../componenets/Input";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";


const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [editCandidateDiscount, setEditCandidateDiscount] = useState<CandidateDiscountInterface>(
    {} as CandidateDiscountInterface
  );

  const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
    {
      pagination: {
        page: 1,
        page_count: 1,
        item_count: 0,
        sno_base: 0,
      },
    }
  );

  // const [modalName, setModalName] = useState("");
    const [data, setData]= useState([])
  // const onClickCreate = () => {
  //   setModalName("create");
  // };

  // const onClickEdit = (CandidateDiscount: CandidateDiscountInterface) => {
  //   setEditCandidateDiscount(CandidateDiscount);
  //   console.log("onClickEdit"); // Only Dev
  //   console.log(CandidateDiscount); // Only Dev
  //   setModalName("edit");
  // };

  // const onClickDelete = async (CandidateDiscount: CandidateDiscountInterface) => {
  //   const flag = await confirmationMessage("Do you really want to delete?");
  //   if (flag && CandidateDiscount.id) {
  //     await deleteCandidateDiscount(CandidateDiscount.id);
  //     fetchCandidateDiscountList();
  //   }
  // };

  
  const [CandidateDiscountList, setCandidateDiscountList] = useState<CandidateDiscountInterface[]>([]);
// console.log(CandidateDiscountList,"kj")
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: CandidateDiscountInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, CandidateDiscountList);

const [discountAndRemark, setDiscountAndRemark] =useState({
  discount:'',discount_remark:''
})
const [discountList, setDiscountList]= useState({
  selection_list:[],
})

  const fetchCandidateDiscountList = async (page?:number) => {
    const data :any= await readCandidateDiscountList({
      page: page ?? additionalData.pagination.page,
      status: "no"
    });
    if (data) {
      setCandidateDiscountList(data);
    }
    setAdditionalData(await PaginationManager.getData());
    
  };
  useEffect(() => {
    fetchCandidateDiscountList(additionalData.pagination.page);
   
  }, []);
const handleSubmit =async (data:any)=>{
  console.log(data,"lllAAAAAAA")

  
  
const updatedForm={selection_list:data };

  const res :any = await updateCandidateDiscount(updatedForm)
  if(res){
    fetchCandidateDiscountList();
  }
  
}

const handleDiscountChange = (value: string) => {
  // Regular expression pattern to match only numbers
  const numberRegex = /[0-9]+$/;

  // Check if the input value matches the number pattern
  if (numberRegex.test(value) || value === '') {
    setDiscountAndRemark((prev)=> { return {...prev , discount:value}})
  }
};
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidate Discount"
        searchFunction={(query) => setSearchQuery(query)}
      />

      
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mb-4 justify-center flex-end">
      <UpdateContentBox>
        <SubHeading1 text="Discount :" />
        
        <TextAreaInput  id='discount' value={discountAndRemark.discount} onChange={(value)=>{
          handleDiscountChange(value)
          // setDiscountAndRemark((prev)=> { return {...prev , discount:value}})
        }}/>
        
        </UpdateContentBox>
        <UpdateContentBox>
        <SubHeading1 text="Discount Remarks:" />
        <TextAreaInput id='discount_remark'   onChange={(value)=>setDiscountAndRemark((prev)=> { return {...prev , discount_remark:value}})}/>
        </UpdateContentBox>
      </div>
      </CardHeader>

      {/*  Candidate-discount-table */}
      <CandidateDiscountTable
      snoBase={additionalData.pagination.sno_base}
        CandidateDiscountList={CandidateDiscountList}
        setCandidateDiscountList={setCandidateDiscountList}
        discountAndRemark={discountAndRemark}
        setDiscountList={setDiscountList}
        setData={setData}
        data={data}
        discountList={discountList}
        onChange={(value)=>{console.log(value), setCandidateDiscountList(value)}}
        />
      <div className="mt-4">
      <CustomButton2 buttonText="Submit" onClick={()=>{handleSubmit(CandidateDiscountList)}}/>
      <br />
      <Pagination
data={additionalData}
onPageChange={(e) => {
  console.log(e); // Only Dev
  fetchCandidateDiscountList(e);
}}
/>
      </div>
    </div>
  );
}
