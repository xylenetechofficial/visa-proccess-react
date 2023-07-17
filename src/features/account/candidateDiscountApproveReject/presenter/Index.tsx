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
import {  VisaProfesionInterface } from "../type";
import { deleteBlockVisa, readBlockVisaList, updateCandidateDiscountApproveReject } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  // const [editBlockVisa, setEditBlockVisa] = useState<BlockVisaInterface>(
  //   {} as BlockVisaInterface
  // );
  const [editBlockVisa, setEditBlockVisa] = useState<any>(
    {} as any
  );

  const [modalName, setModalName] = useState("");

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (blockVisa: any) => {
  // const onClickEdit = (blockVisa: BlockVisaInterface) => {
    setEditBlockVisa(blockVisa);
    console.log("onClickEdit"); // Only Dev
    console.log(blockVisa); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (blockVisa: any) => {
  // const onClickDelete = async (blockVisa: BlockVisaInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && blockVisa.id) {
      await deleteBlockVisa(blockVisa.id);
      fetchBlockVisaList();
    }
  };

  // useEffect(() => {
  // }, [editBlockVisa, modalName])
  const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
  const fetchSectorList = async () => {
    const data = await readSectorList();
    if (data) {
      setSectorList(data);
    }
  };

  const [companyList, setCompanyList] = useState<CompanyInterface[]>([]);
  const fetchcomapanyList = async () => {
    const data = await readCompanyList();
    if (data) {
      setCompanyList(data);
    }
  };

  const [countryList, setCountryList] = useState<CountryInterface[]>([]);
  const fetchCountryList = async () => {
    const data = await readCountryList();
    if (data) {
      setCountryList(data);
    }
  };
const [data,setData]= useState(
  {
      "selection_list":[
          {
              
          },
         
      ]
  })
  // const [BDEList, setBDEList] = useState<CountryInterface[]>([])
  // const fetchCountryList = async () => {
  //     const data = await readCompanyList();
  //     if(data){
  //         setCompanyList(data);
  //     }
  // }
  // const [blockVisaList, setBlockVisaList] = useState<BlockVisaInterface[]>([]);
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

  const [visaprofession, setVisaProfessionList] = useState<
    VisaProfesionInterface[]
  >([]);

  const fetchBlockVisaList = async () => {
    const data :any = await readBlockVisaList();
    console.log(data);
    if (data) {
      setBlockVisaList(data);
    }
    setBlockVisaList(data);
  };
  useEffect(() => {
    fetchBlockVisaList();
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);
const handleClick =(status:any)=>{
  const newArray :any={...data}
  console.log(newArray)
  newArray.selection_list.map((item :any,index:any)=>{

    
    newArray.selection_list[index].status=status
  })
  setData(newArray);
  console.log(data,"!!!!!!!!!!@@@@@@@@@@@@@")
  updateCandidateDiscountApproveReject(data)
}
  return (
    <div>
      <CustomNavbarV3
        pageName="Candidate Discount Approve/Reject"
        searchFunction={(query) => setSearchQuery(query)}
      />

      
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                 {/* <GreenButton
          text={"Submit"}
          onClick={() => {
           console.log("")
          }}
        /> */}
      </CardHeader>

      {/*  blockVisa stable */}
      <BlockVisaTable
        candidateDiscountApproveReject={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        companyList={companyList}
        countryList={countryList}
        sectorList={sectorList}
        setData={setData}
        data={data}
      />

      

     

      <GreenButton onClick={()=>handleClick(1)} text="Approve"/>
      <RedButton onClick={()=>handleClick(0)} text="Reject"/>
    </div>
  );
}
