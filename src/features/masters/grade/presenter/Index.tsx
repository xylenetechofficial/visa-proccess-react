import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import GradeTable from "./GradeTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { GradeInterface } from "../type";
import { deleteGrade, readGradeList } from "../repository";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
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
  const [gradeList, setGradeList] = useState<GradeInterface[]>([]);
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

  const [editGrade, setEditGrade] = useState<GradeInterface>(
    {} as GradeInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: GradeInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, gradeList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (grade: GradeInterface) => {
    setEditGrade(grade);
    console.log("onClickEdit"); // Only Dev
    console.log(grade); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (grade: GradeInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && grade.id) {
      await deleteGrade(grade.id);
      fetchGradeList();
    }
  };

  // useEffect(() => {
  // }, [editGrade, modalName])

  const fetchGradeList = async (page?: number) => {
    const res = await readGradeList(true, page);
    setGradeList(res);
  setAdditionalData(await PaginationManager.getData());

  };
  useEffect(() => {
    fetchGradeList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Grade"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        />
        {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add Grade +
                </Button> */}
        {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
      </CardHeader>

      {/*  grade stable */}
      <GradeTable
        snoBase={additionalData.pagination.sno_base}
        gradeList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          fetchGradeList(e);
        }}
      />
      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchGradeList={fetchGradeList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          grade={editGrade}
          onClose={() => setModalName("")}
          fetchGradeList={fetchGradeList}
        />
      )}
    </div>
  );
}
