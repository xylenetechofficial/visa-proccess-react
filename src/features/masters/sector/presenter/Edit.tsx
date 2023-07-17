import { useEffect, useState } from "react";
import { updateSector } from "../repository";
import { SectorInterface } from "../type";
import { showMessage } from "../../../../utils/alert";
import { CustomSelectComponent, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CountryInterface } from "../../country/type";
import ModalContent from "../../../../componenets/Modal";
import { StandardInput } from "../../../../componenets/Input";


export default function Main(props: { sector: SectorInterface, onClose: any, fetchSectorList: any, countryList: CountryInterface[] }) {


    const initValue: SectorInterface = {
        country: 0,
        name: "",

    }
    const [sector, setSector] = useState(initValue)


    useEffect(() => {
        setSector(props.sector)
    }, [])


    async function onClickSave() {
        const data = await updateSector(props.sector.id ?? 0, sector)
        // showMessage(data.message)
        props.fetchSectorList()
        props.onClose()
    }

    return (
        <ModalContent
            buttonName="Update"
            handleClick={onClickSave}
            title="Update Sector"
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
                    selectOptionConveter({ options: props.countryList, options_struct: { name: "name", value: "id" } })}

                onChange={(value) => {
                    setSector({ ...sector, country: value })

                }} />
        </ModalContent>
    )
}