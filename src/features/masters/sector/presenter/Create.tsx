import {
    Box,
    Button,
    styled,
    TextField,
    Modal,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { showMessage_v2 } from "../../../../utils/alert";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { SectorInterface } from "../type";
import { CountryInterface } from "../../country/type";
import { readCountryList } from "../../country/repository";
import { createSector } from "../repository";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";

export default function Main(props: { onClose: any, fetchSectorList: any }) {
    const initValue: SectorInterface = {
        name: "",
        country: 0,
    }
    const [sector, setSector] = useState(initValue)

    const [countyList, setCountryList] = useState<CountryInterface[]>([])

    const fetchCountryList = async () => {
        setCountryList(await readCountryList())
        // let options=[];
        // countyList.map
    }
    useEffect(() => {
        fetchCountryList()

    }, [])

    async function onClickAdd() {
        // let agentNumber = getNanoID()

        // call create
        const data = await createSector(sector)
        // show alert
        // showMessage_v2({ message: data.message, status: data.code })

        if (data.code !== 201)
            return

        setSector(initValue)

        props.fetchSectorList()
        props.onClose()
    }





    return (
        <ModalContent
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add Sector"
            onClose={props.onClose}
        >
            {/* /* name Input */}
            <StandardInput
                label="Name"
                value={sector.name}
                onChangeValue={(value: string) => {
                    setSector({ ...sector, name: value })

                }}
            />

            {/* Country */}
            <CustomSelectComponent
                value={sector.country}
                label="Country"
                options={
                    selectOptionConveter({ options: countyList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setSector({ ...sector, country: value })

                }} />
        </ModalContent>

    )
}