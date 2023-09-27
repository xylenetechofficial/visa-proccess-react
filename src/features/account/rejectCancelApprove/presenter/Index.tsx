import { useEffect, useState } from "react";
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, styled } from "@mui/material";
import RejectCancelApproveTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton, RedButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
// import { EditRejectCancelApproveInterface, RejectCancelApproveInterface, VisaProfesionInterface } from "../type";
import { EditRejectCancelApproveInterface, RejectCancelApproveInterface } from "../type";
import { deleteRejectCancelApprove, readRejectCancelApproveList, updateRejectCancelApprove } from "../repository";
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

    // const [editRejectCancelApprove, setEditRejectCancelApprove] = useState<EditRejectCancelApproveInterface>({} as EditRejectCancelApproveInterface)
    const [editRejectCancelApprove, setEditRejectCancelApprove] = useState({
        "selection_list":[
            {
                "id":0,
                "mofa_cancel_id":0,
                "status":0
            }
        ]
    });

    const [modalName, setModalName] = useState('')
    const [btnClicked,setBtnClicked]=useState('')
    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (RejectCancelApprove: RejectCancelApproveInterface) => {
        // setEditRejectCancelApprove(RejectCancelApprove)
        console.log("onClickEdit");   // Only Dev
        console.log(RejectCancelApprove);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (RejectCancelApprove: RejectCancelApproveInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && RejectCancelApprove.id) {
            await deleteRejectCancelApprove(RejectCancelApprove.id);
            fetchRejectCancelApproveList()
        }
    }

    // useEffect(() => {
    // }, [editRejectCancelApprove, modalName])
    const [sectorList, setSectorList] = useState<SectorInterface[]>([])
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    }

    const [companyList, setCompanyList] = useState<CompanyInterface[]>([])
    const fetchcomapanyList = async () => {
        const data = await readCompanyList();
        if (data) {
            setCompanyList(data);
        }
    }

    const [countryList, setCountryList] = useState<CountryInterface[]>([])
    const fetchCountryList = async () => {
        const data = await readCountryList();
        if (data) {
            setCountryList(data);
        }
    }

    // const [BDEList, setBDEList] = useState<CountryInterface[]>([])
    // const fetchCountryList = async () => {
    //     const data = await readCompanyList();
    //     if(data){
    //         setCompanyList(data);
    //     }
    // }
    const [RejectCancelApproveList, setRejectCancelApproveList] = useState<RejectCancelApproveInterface[]>([])

    const [searchQuery, setSearchQuery] = useState("")

    // const filterData = (query: string, data: RejectCancelApproveInterface[]) => {
    //     if (!query) {
    //         return data;
    //     } else {
    //         return data.filter((d) =>
    //             d.toLowerCase().includes(query.toLowerCase())
    //         );
    //     }
    // };
    // const dataFiltered = filterData(searchQuery, RejectCancelApproveList);

    // const [visaprofession, setVisaProfessionList] = useState<VisaProfesionInterface[]>([])
    const [visaprofession, setVisaProfessionList] = useState<any[]>([])

    const fetchRejectCancelApproveList = async () => {
        const data = await readRejectCancelApproveList();
        console.log(data, "kkkkkllllll");
        if (data) {
            setRejectCancelApproveList(data);

        }
        // setRejectCancelApproveList(data)

    }
    const updateRejectCancelApproveList= async(id:number, item:any)=>{
        const res :any = await updateRejectCancelApprove(id, item);
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
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
                companyList={companyList}
                countryList={countryList}
                sectorList={sectorList}
                setEditRejectCancelApprove={setEditRejectCancelApprove}
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