import { useEffect, useState } from "react";
import { deleteSector, readSectorList } from "../repository";
import { SectorInterface } from "../type";
import { Box, styled } from "@mui/material";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import SectorTable from "./SectorTable";
import CreateModal from './Create'
import EditModal from './Edit'
import { readCountryList } from "../../country/repository";
import { CountryInterface } from "../../country/type";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";

const CardHeader = styled(Box)(() => ({
    display: "flex",

    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {

    const [sectorList, setSectorList] = useState<SectorInterface[]>([])

    const [editSector, setEditSector] = useState<SectorInterface>({} as SectorInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: SectorInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, sectorList);

    const onClickCreate = () => {
        setModalName('create');

    }
    const onClickEdit = (sector: SectorInterface) => {
        setEditSector(sector)
        console.log("onClickEdit");   // Only Dev
        console.log(sector);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (sector: SectorInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && sector.id) {
            const res = await deleteSector(sector.id);
            // showMessage(res.message)
            fetchSectorList()
        }
    }

    const [countyList, setCountryList] = useState<CountryInterface[]>([])

    const fetchCountryList = async () => {
        setCountryList(await readCountryList())
    }

    const fetchSectorList = async () => {
        console.log("read sector");   // Only Dev
        setSectorList(await readSectorList(true))
    }
    useEffect(() => {
        fetchSectorList()
        fetchCountryList()
    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Sector" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

                <GreenButton text={"Add +"} onClick={() => {
                    setModalName("create")
                }} />
                {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add Agent +
                </Button> */}
                {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
            </CardHeader>


            {/*  agent stable */}
            <SectorTable
                sectorList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />



            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal
                onClose={() => setModalName("")}
                fetchSectorList={fetchSectorList}

            />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal
                sector={editSector}
                onClose={() => setModalName("")}
                fetchSectorList={fetchSectorList}
                countryList={countyList}
            />}
        </div>
    )
}