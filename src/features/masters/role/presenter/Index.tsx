import { useEffect, useState } from "react";
import { createCountry, deleteCountry, readCountryList, updateCountry } from "../repository";
import { CountryInterface } from "../type";
import ItemRow from './Item'
import CreateModal from './Create'
import EditModal from './Edit'
import { Box, Button, Icon, IconButton, TextField, styled } from "@mui/material";
import CountryTable from "./CountryTable";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import { GreenButton, YellowButton } from "../../../../componenets/CustomButton";
import { CustomButton, CustomButton2 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [countryList, setCountryList] = useState<CountryInterface[]>([])

    const [editCountry, setEditCountry] = useState<CountryInterface>({} as CountryInterface)

    const [modalName, setModalName] = useState('')

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: CountryInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.name.toLowerCase().includes(query.toLowerCase())
            );
        }
    };
    const dataFiltered = filterData(searchQuery, countryList);

    const onClickCreate = () => {
        setModalName('create');

    }

    const onClickEdit = (country: CountryInterface) => {
        setEditCountry(country)
        console.log("onClickEdit");   // Only Dev
        console.log(country);   // Only Dev
        setModalName('edit')
    }

    const onClickDelete = async (country: CountryInterface) => {
        const flag = await confirmationMessage("Do you really want to delete?")
        if (flag && country.id) {
            const res = await deleteCountry(country.id);
            showMessage(res.message)
            fetchCountryList()
        }
    }

    // useEffect(() => {
    // }, [editCountry, modalName])

    const fetchCountryList = async () => {
        setCountryList(await readCountryList())
    }
    useEffect(() => {

        fetchCountryList()

    }, [])



    return (

        <div >
            <CardHeader>
                <Heading3 text={" Country"} color={"text-zinc-700"} />
                {/* Country List */}


                    <CustomButton2 buttonText="Add filter" icon={<FaFilter />}  />
                   

                {/* search bar */}

                <form>
                    <TextField
                        id="search-bar"
                        className="text"
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        label="Enter the name"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                    />
                    <IconButton type="submit" aria-label="search">
                        <Icon>search</Icon>
                    </IconButton>

                </form>
                <GreenButton text={"Add Country +"} onClick={() => {
                    setModalName("create")
                }} />
                {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add Country +
                </Button> */}
                {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
            </CardHeader>


            {/*  country stable */}
            <CountryTable
                countryList={dataFiltered}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
            />

            {/* <!-- Modal --> */}

            {/* Create */}
            {modalName !== "create" ? "" : <CreateModal onClose={() => setModalName("")} fetchCountryList={fetchCountryList} />}

            {/* Edit */}
            {modalName !== "edit" ? "" : <EditModal country={editCountry} onClose={() => setModalName("")} fetchCountryList={fetchCountryList}
            />}
        </div>
    )
}