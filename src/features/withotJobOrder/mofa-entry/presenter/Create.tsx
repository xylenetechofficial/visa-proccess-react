import { createMofaEntry, readMofaEntryList } from "../repository";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import { SectorInterface } from "../../../masters/sector/type";
import { CompanyInterface } from "../../../masters/company/type";
import { MofaEntryInterface } from "../type";
import { CustomSelectComponentUnlabeled, selectOptionConveter } from "../../../../componenets/SelectBox";
import { CountryInterface } from "../../../masters/country/type";
import { SubHeading1, UpdateContentBox } from "../../../../componenets/CoustomHeader";
import MofaEntryTable from "./CandidateTable";


export default function Main(props: {
    onClose: ()=>void, fetchMofaEntryList: ()=>void,
    sectorList: SectorInterface[],
    companyList: CompanyInterface[],
    countryList: CountryInterface[],
}) {


    const [mofaEntryList, setMofaEntryList] = useState<MofaEntryInterface[]>([])
    const [company, setCompany] = useState()



    async function onClickAdd() {

        const newArray: MofaEntryInterface[] = []
        console.log(mofaEntryList)
        for (let i = 0; i < mofaEntryList.length; i++) {
            if (mofaEntryList[i].isChecked) {
                newArray.push(mofaEntryList[i]);
            }
        }

        console.log(newArray)
        // call create
        const response = await createMofaEntry(newArray)

        if (response.code != 201) {
            return;
        }
        setMofaEntryList([])
        fetchMofaEntryList()
    }
    const fetchMofaEntryList = async () => {
        const data = await readMofaEntryList({ companyId: company, status: "no" });
        console.log(data);
        setMofaEntryList(data)
    }

    const handleCheckBox = (index: number, value: boolean) => {
        const newArray = mofaEntryList.map((ele, i) => {
            if (i == index) {
                ele.isChecked = value
                return ele
            } else {
                return ele
            }
        })

        setMofaEntryList(newArray);


    }
    useEffect(() => {
        fetchMofaEntryList();
    }, [company])
    return (

        <FullScreenModal
            buttonName="Add"
            handleClick={onClickAdd}
            title="Add MofaEntry List"
            onClose={() => {
                setMofaEntryList([])
                props.onClose()
            }}
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
            </div>


            {/* candiate list */}
            {company ?
                <MofaEntryTable
                    onChange={(ele) => setMofaEntryList(ele)}
                    mofaEntryList={mofaEntryList}
                    company={company}
                    handleCheckBox={handleCheckBox}
                /> : ""}
        </FullScreenModal>
    )
}