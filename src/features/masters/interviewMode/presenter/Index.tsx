import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import {
  Box,
  Button,
  Icon,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import InterviewModeTable from "./InterViewModeTable";
import { confirmationMessage, showMessage } from "../../../../utils/alert";
import { Heading1, Heading3 } from "../../../../componenets/CoustomHeader";
import {
  GreenButton,
  YellowButton,
} from "../../../../componenets/CustomButton";
import {
  CustomButton,
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { InterviewModeInterface } from "../type";
import { deleteInterviewMode, readInterviewModeList } from "../repository";
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
  const [interviewModeList, setInterviewModeList] = useState<
    InterviewModeInterface[]
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

  const [editInterviewMode, setEditInterviewMode] =
    useState<InterviewModeInterface>({} as InterviewModeInterface);

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: InterviewModeInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, interviewModeList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (interviewMode: InterviewModeInterface) => {
    setEditInterviewMode(interviewMode);
    console.log("onClickEdit"); // Only Dev
    console.log(interviewMode); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (interviewMode: InterviewModeInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && interviewMode.id) {
      await deleteInterviewMode(interviewMode.id);
      fetchInterviewModeList();
    }
  };

  // useEffect(() => {
  // }, [editInterviewMode, modalName])

  const fetchInterviewModeList = async (page?: number) => {
    const res = await readInterviewModeList(true, page);
    setInterviewModeList(res);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchInterviewModeList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Interview Mode"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <GreenButton
          text={"Add  +"}
          onClick={() => {
            setModalName("create");
          }}
        />
      </CardHeader>

      {/*  interviewMode stable */}
      <InterviewModeTable
        snoBase={additionalData.pagination.sno_base}
        interviewModeList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          fetchInterviewModeList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchInterviewModeList={fetchInterviewModeList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          interviewMode={editInterviewMode}
          onClose={() => setModalName("")}
          fetchInterviewModeList={fetchInterviewModeList}
        />
      )}
    </div>
  );
}
