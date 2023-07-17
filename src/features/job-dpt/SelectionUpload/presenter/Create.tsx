import { createSelection, readJobOrderList } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { ExcelSelectionAdapter, SelectionConverter, SelectionInterface } from "../type";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CountryInterface } from "../../../masters/country/type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import SelectionTable from "./CandidateTable";
import { JobOrderInterface } from "../../jobOrder/type";
import { FileInput } from "../../../../componenets/Input";
import { GreenButton } from "../../../../componenets/CustomButton";
import { read, utils } from "xlsx";
import { AgentInterface } from "../../../masters/agent/type";
import { readAgentList } from "../../../masters/agent/repository";
import { readSectorList } from "../../../masters/sector/repository";


export default function Main(props: {
    onClose: any, fetchSelectionList: any,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) {


    const [selectionList, setSelectionList] = useState<SelectionInterface[]>([])
    const [company, setCompany] = useState<number>(0)



    async function onClickAdd() {

        const newArray: SelectionInterface[] = []
        // console.log(mofaEntryList)
        for (let i = 0; i < selectionList.length; i++) {
            // if (selectionList[i].isChecked) {
            const temp = { ...selectionList[i], company_id: company, job_order_id: joborder }
            newArray.push(temp);
            // }
        }
        // call create
        const response = await createSelection(newArray)

        if (response.code != 201) {
            return;
        }
        setSelectionList([])
        props.fetchSelectionList()
    }

    const [jobOrderList, setJobOrderList] = useState<JobOrderInterface[]>([]);
    const [joborder, setJoborder] = useState(0)
    const [excelFile, setExcelFile] = useState<File>()

    const fetchJobOrder = async () => {
        const data = await readJobOrderList({ companyId: company })
        if (data) {
            setJobOrderList(data)
        }
    }
    useEffect(() => {
        fetchJobOrder()

    }, [company])
    useEffect(() => {
        setSelectionList([])
    }, [company])

    useEffect(() => {
        fetchAgentList()
        fetchSectorList()
    }, [])


    const [agentList, setAgentList] = useState<AgentInterface[]>([])
    const fetchAgentList = async () => {
        const data = await readAgentList();
        if (data) {
            setAgentList(data);

        }
    }

    const [sectorList, setSectorList] = useState<SectorInterface[]>([])
    const fetchSectorList = async () => {
        const data = await readSectorList();
        if (data) {
            setSectorList(data);
        }
    }
    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Selection List"
            onClose={props.onClose}
        >
            {/*  select company */}
            <div className=" grid grid-cols-1 py-3  gap-2 ">
                <UpdateContentBox>
                    <SubHeading1 text="Company :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setCompany(value)}
                        options={selectOptionConveter({ options: props.companyList, options_struct: { name: "name", value: "id" } })}
                        value={company}
                    />
                </UpdateContentBox>

                <UpdateContentBox>
                    <SubHeading1 text="JobOrder :" />
                    <CustomSelectComponentUnlabeled
                        onChange={(value) => setJoborder(value)}
                        options={selectOptionConveter({ options: jobOrderList, options_struct: { name: "jobOrderNumber", value: "id" } })}
                        value={joborder}
                    />
                </UpdateContentBox>
                {company && joborder ? <UpdateContentBox>
                    <FileInput handleFileChange={(file) => setExcelFile(file)} />


                    <GreenButton text={"load"} onClick={async () => {
                        console.log(excelFile?.name);  //  Only Dev

                        const f = await excelFile?.arrayBuffer();
                        const wb = read(f);  //parse the array buffer
                        const ws = wb.Sheets[wb.SheetNames[0]];  //get the first worksheet
                        // const data = utils.sheet_to_json(ws);
                        const data = utils.sheet_to_json<ExcelSelectionAdapter>(ws);
                        console.log(data);   // Only Dev
                        const temp = SelectionConverter.toInterfaceFromExcelList(data)

                        for (let i = 0; i < temp.length; i++) {
                            for (let j = 0; j < agentList.length; j++) {
                                if (temp[i].agent_name == agentList[j].name)
                                    temp[i].agent = (agentList[j].id ?? 0).toString()
                            }


                            for (let j = 0; j < sectorList.length; j++) {
                                if (temp[i].sector_name == sectorList[j].name)
                                    temp[i].sector = sectorList[j].id ?? 0
                            }

                        }
                        setSelectionList(temp)
                        // const data = utils.sheet_to_json<SelectionInterface>(ws);

                    }} />
                </UpdateContentBox> : ""}
            </div>


            {/* candiate list */}
            {company && joborder && selectionList.length ?
                <SelectionTable
                    onChange={(ele) => setSelectionList(ele)}
                    selectionList={selectionList}
                    company={company}
                    joborder={joborder}
                /> : ""}
        </FullScreenModal>
    )
}



// import { useEffect, useState } from "react";
// import CreateModal from './Create'
// import EditModal from './Edit'
// import { Box, styled } from "@mui/material";
// import SelectionTable from "./Table";
// import { confirmationMessage } from "../../../../utils/alert";
// import { GreenButton } from "../../../../componenets/CustomButton";
// import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
// import { FaFilter } from "react-icons/fa";
// import { SelectionInterface } from "../type";
// import { deleteSelection, readJobOrderList, readSelectionList } from "../repository";
// import { SectorInterface } from "../../../masters/sector/type";
// import { readSectorList } from "../../../masters/sector/repository";
// import { readCompanyList } from "../../../masters/company/repository";
// import { CompanyInterface } from "../../../masters/company/type";
// import { CountryInterface } from "../../../masters/country/type";
// import { readCountryList } from "../../../masters/country/repository";
// import { FileInput } from "../../../../componenets/Input";
// import { read, utils } from "xlsx";
// import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
// import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
// import { JobOrderInterface } from "../../jobOrder/type";
// const CardHeader = styled(Box)(() => ({
//     display: "flex",
//     flexWrap: "wrap",
//     paddingRight: "24px",
//     marginBottom: "18px",
//     alignItems: "center",
//     justifyContent: "space-between",
// }));

// export default function Main() {
//     const [selectionList, setSelectionList] = useState<SelectionInterface[]>([])

//     const [editSelection, setEditSelection] = useState<SelectionInterface>({} as SelectionInterface)

//     const [modalName, setModalName] = useState('')

//     const [searchQuery, setSearchQuery] = useState("")

//     const filterData = (query: string, data: SelectionInterface[]) => {
//         if (!query) {
//             return data;
//         } else {
//             return data.filter((d) =>
//                 d.name.toLowerCase().includes(query.toLowerCase())
//             );
//         }
//     };
//     const dataFiltered = filterData(searchQuery, selectionList);



//     const onClickEdit = (selection: SelectionInterface) => {
//         setEditSelection(selection)
//         console.log("onClickEdit");   // Only Dev
//         console.log(selection);   // Only Dev
//         setModalName('edit')
//     }

//     const onClickDelete = async (selection: SelectionInterface) => {
//         const flag = await confirmationMessage("Do you really want to delete?")
//         if (flag && selection.id) {
//             await deleteSelection(selection.id);
//             fetchSelectionList()
//         }
//     }

//     // useEffect(() => {
//     // }, [editSelection, modalName])
//     const [sectorList, setSectorList] = useState<SectorInterface[]>([])
//     const fetchSectorList = async () => {
//         const data = await readSectorList();
//         if (data) {
//             setSectorList(data);
//         }
//     }

//     const [companyList, setCompanyList] = useState<CompanyInterface[]>([])
//     const fetchcomapanyList = async () => {
//         const data = await readCompanyList();
//         if (data) {
//             setCompanyList(data);
//         }
//     }

//     const [countryList, setCountryList] = useState<CountryInterface[]>([])
//     const fetchCountryList = async () => {
//         const data = await readCountryList();
//         if (data) {
//             setCountryList(data);
//         }
//     }



//     const fetchSelectionList = async () => {
//         const data = await readSelectionList();
//         console.log(data);
//         setSelectionList(data)
//     }
//     useEffect(() => {

//         fetchSelectionList()
//         fetchSectorList()
//         fetchcomapanyList()
//         fetchCountryList()

//     }, [])

//     const [excelFile, setExcelFile] = useState<File>()
//     const [company, setCompany] = useState<number>(0)

//     const [jobOrderList, setJobOrderList] = useState<JobOrderInterface[]>([]);
//     const [joborder, setJoborder] = useState(0)
//     const fetchJobOrder = async () => {
//         const data = await readJobOrderList({ companyId: company })
//         if (data) {
//             setJobOrderList(data)
//         }
//     }
//     useEffect(() => {
//         fetchJobOrder()

//     }, [company])
//     useEffect(() => {
//         setSelectionList([])
//     }, [company])
//     return (

//         <div >
//             <CustomNavbarV3 pageName="Selection" searchFunction={(query) => setSearchQuery(query)} />

//             <CardHeader>
//                 <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
//                 {/*  select company */}
//                 {/* <div className=" grid grid-cols-1 py-3  gap-2 "> */}
//                 <UpdateContentBox>
//                     <SubHeading1 text="Company :" />
//                     <CustomSelectComponentUnlabeled
//                         onChange={(value) => setCompany(value)}
//                         options={selectOptionConveter({ options: companyList, options_struct: { name: "name", value: "id" } })}
//                         value={company}
//                     />
//                 </UpdateContentBox>

//                 <UpdateContentBox>
//                     <SubHeading1 text="JobOrder :" />
//                     <CustomSelectComponentUnlabeled
//                         onChange={(value) => setJoborder(value)}
//                         options={selectOptionConveter({ options: jobOrderList, options_struct: { name: "jobOrderNumber", value: "id" } })}
//                         value={joborder}
//                     />
//                 </UpdateContentBox>
//                 <FileInput handleFileChange={(file) => setExcelFile(file)} />


//                 <GreenButton text={"load"} onClick={async () => {
//                     console.log(excelFile?.name);   // Only Dev

//                     const f = await excelFile?.arrayBuffer();
//                     const wb = read(f); // parse the array buffer
//                     const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
//                     // const data = utils.sheet_to_json(ws);
//                     const data = utils.sheet_to_json<SelectionInterface>(ws);
//                     console.log(data);   // Only Dev
//                     setSelectionList(data)
//                 }} />

//             </CardHeader>






//            {/*  selection stable */}
//            <SelectionTable
//                 selectionList={dataFiltered}
//                 onClickEdit={onClickEdit}
//                 onClickDelete={onClickDelete}
//                 companyList={companyList}
//                 countryList={countryList}
//                 sectorList={sectorList}
//             />


//             {/* <!-- Modal --> */}

//             {/* Create */}
//             {modalName !== "create" ? "" :
//                 <CreateModal
//                     onClose={() => setModalName("")}
//                     fetchSelectionList={fetchSelectionList}
//                     companyList={companyList}
//                     countryList={countryList}
//                     sectorList={sectorList}
//                 />}

//             {/* Edit */}
//             {modalName !== "edit" ? "" :
//                 <EditModal
//                     currentElement={editSelection}
//                     onClose={() => setModalName("")}
//                     fetchSelectionList={fetchSelectionList}
//                     companyList={companyList}
//                     countryList={countryList}
//                     sectorList={sectorList}
//                 />}
//         </div>
//     )
// }