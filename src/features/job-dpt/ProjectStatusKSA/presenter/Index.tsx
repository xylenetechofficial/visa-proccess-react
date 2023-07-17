
import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import ProjectStatusKSATable from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import { CustomButton2, CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { ProjectStatusKSAInterface } from "../type";
import { readProjectStatusKSAList, updateProjectStatusKSA } from "../repository";

const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
}));

export default function Main() {
    const [projectStatusKSAList, setProjectStatusKSAList] = useState<ProjectStatusKSAInterface[]>([])

    const [searchQuery, setSearchQuery] = useState("")

    const filterData = (query: string, data: ProjectStatusKSAInterface[]) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) =>
                d.ksa_status.toLowerCase().includes(query.toLowerCase())
            );
        }
    };

    const dataFiltered = filterData(searchQuery, projectStatusKSAList);

    //   const [] 
    const handleCheckBox = (index: number, value: boolean) => {
        const newArray = projectStatusKSAList.map((ele, i) => {
            if (i == index) {
                ele.isChecked = value
                return ele
            } else {
                return ele
            }
        })

        setProjectStatusKSAList(newArray);


    }

    const handleksaStatus = (index: number, value: string) => {
        const newArray = projectStatusKSAList.map((ele, i) => {
            if (i == index) {
                ele.ksa_status = value
                return ele
            } else {
                return ele
            }
        })

        setProjectStatusKSAList(newArray);
    }




    const handleSubmit = async () => {

        const newArray: ProjectStatusKSAInterface[] = []
        console.log(projectStatusKSAList)
        for (let i = 0; i < projectStatusKSAList.length; i++) {
            if (projectStatusKSAList[i].isChecked) {
                newArray.push(projectStatusKSAList[i]);
            }
        }

        console.log(newArray)
        const res = await updateProjectStatusKSA(newArray)
        if (res.code != 200) {
            return;
        }
        fetchProjectStatusKSAList()
    }


    const fetchProjectStatusKSAList = async () => {
        const data = await readProjectStatusKSAList();
        console.log(data);
        setProjectStatusKSAList(data)
    }
    useEffect(() => {
        fetchProjectStatusKSAList()
    }, [])



    return (

        <div >
            <CustomNavbarV3 pageName="Project Status KSA" searchFunction={(query) => setSearchQuery(query)} />

            <CardHeader>
                <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
            </CardHeader>


            {/*  projectStatusKSA stable */}
            <ProjectStatusKSATable
                projectStatusKSAList={dataFiltered}
                handleCheckBox={handleCheckBox}
                handleksaStatus={handleksaStatus}

            />


            <GreenButton onClick={handleSubmit} text="Submit" />

        </div>
    )
}