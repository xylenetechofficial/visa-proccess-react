import { useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import DegreeAttestationList from "./DegreAttestationList";

export default function Main(props: {
    onClose: any, 
    // fetchBlockVisaList: any,
    // sectorList: SectorInterface[],
    // companyList: CompanyInterface[],
    // countryList: CountryInterface[],
}) {
    const [degreAttestationList, setDegreAttestationList] = useState([])

    async function onClickAdd() {
        return
    }
    return(
<FullScreenModal 
buttonName="Add"
handleClick={onClickAdd}
title="Add Degree Attestation"
onClose={props.onClose}
>

<DegreeAttestationList
                degreAttestationList={degreAttestationList}
                onChange={(value) => setDegreAttestationList(value)}
            />

</FullScreenModal>
    )
}
