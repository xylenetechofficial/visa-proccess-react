import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import ProjectStatusKSATable from "./Table";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { ProjectStatusKSAInterface } from "../type";
import {
  readProjectStatusKSAList,
  updateProjectStatusKSA,
} from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [projectStatusKSAList, setProjectStatusKSAList] = useState<
    ProjectStatusKSAInterface[]
  >([]);

  const [additionalData, setAdditionalData] = useState<AdditionalDataInterface>(
    {
      pagination: {
        page: 1,
        page_count: 1,
        item_count: 0,
        sno_base: 0,
      },
    }
  );

  const [searchQuery, setSearchQuery] = useState("");

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
        ele.isChecked = value;
        return ele;
      } else {
        return ele;
      }
    });

    setProjectStatusKSAList(newArray);
  };

  const handleksaStatus = (index: number, value: string) => {
    const newArray = projectStatusKSAList.map((ele, i) => {
      if (i == index) {
        ele.ksa_status = value;
        return ele;
      } else {
        return ele;
      }
    });

    setProjectStatusKSAList(newArray);
  };

  const handleSubmit = async () => {
    const newArray: ProjectStatusKSAInterface[] = [];
    console.log(projectStatusKSAList);
    for (let i = 0; i < projectStatusKSAList.length; i++) {
      if (projectStatusKSAList[i].isChecked) {
        newArray.push(projectStatusKSAList[i]);
      }
    }

    console.log(newArray);
    const res = await updateProjectStatusKSA(newArray);
    if (res.code != 200) {
      return;
    }
    fetchProjectStatusKSAList();
  };

  const fetchProjectStatusKSAList = async (page?: number) => {
    const data = await readProjectStatusKSAList(page);
    console.log(data);
    setProjectStatusKSAList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchProjectStatusKSAList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Project Status KSA"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>

      {/*  projectStatusKSA stable */}
      <ProjectStatusKSATable
        snoBase={additionalData.pagination.sno_base}
        projectStatusKSAList={dataFiltered}
        handleCheckBox={handleCheckBox}
        handleksaStatus={handleksaStatus}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchProjectStatusKSAList(e);
        }}
      />

      <GreenButton onClick={handleSubmit} text="Submit" />
    </div>
  );
}
