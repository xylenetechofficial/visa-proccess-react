import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import InterviewSchedulePeriodTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { InterviewSchedulePeriodInterface } from "../type";
import {
  deleteInterviewSchedulePeriod,
  readInterviewSchedulePeriodList,
} from "../repository";
import { readCountryList } from "../../../masters/country/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
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
  const [interviewSchedulePeriodList, setInterviewSchedulePeriodList] =
    useState<InterviewSchedulePeriodInterface[]>([]);

  const [editInterviewSchedulePeriod, setEditInterviewSchedulePeriod] =
    useState<InterviewSchedulePeriodInterface>(
      {} as InterviewSchedulePeriodInterface
    );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

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

  const [dataFiltered, setDataFiltered] = useState<
    InterviewSchedulePeriodInterface[]
  >([]);
  const filterData = (
    query: string,
    data: InterviewSchedulePeriodInterface[]
  ) => {
    if (!query) {
      setDataFiltered(data);
      return;
    } else {
      const d = data.filter((d) =>
        d.fromDate.toLowerCase().includes(query.toLowerCase())
      );
      setDataFiltered(d);
      return;
    }
  };

  const searchFunction = async (query: string) => {
    filterData(query, interviewSchedulePeriodList);
  };

  const onClickEdit = (
    interviewSchedulePeriod: InterviewSchedulePeriodInterface
  ) => {
    setEditInterviewSchedulePeriod(interviewSchedulePeriod);
    console.log("onClickEdit"); // Only Dev
    console.log(interviewSchedulePeriod); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (
    interviewSchedulePeriod: InterviewSchedulePeriodInterface
  ) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && interviewSchedulePeriod.id) {
      await deleteInterviewSchedulePeriod(interviewSchedulePeriod.id);
      fetchInterviewSchedulePeriodList();
    }
  };

  // useEffect(() => {
  // }, [editInterviewSchedulePeriod, modalName])

  const fetchInterviewSchedulePeriodList = async (page?: number) => {
    const data = await readInterviewSchedulePeriodList(page ?? 1);
    setInterviewSchedulePeriodList(data);
    filterData("", data);

    setAdditionalData(await PaginationManager.getData());
  };
  const [companyList, setCompanyList] = useState<CompanyInterface[]>([]);

  const fetchCompanyList = async () => {
    const data = await readCompanyList();
    setCompanyList(data);
  };
  useEffect(() => {
    fetchInterviewSchedulePeriodList(additionalData.pagination.page);
    fetchCompanyList();
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Interview Schedule Period"
        searchFunction={searchFunction}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        {/* Add */}
        <GreenButton
          text={"Add +"}
          onClick={() => {
            setModalName("create");
          }}
        />
      </CardHeader>
      {/*  interviewSchedulePeriod stable */}
      <InterviewSchedulePeriodTable
      snoBase={additionalData.pagination.sno_base}
        companyList={companyList}
        interviewSchedulePeriodList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchInterviewSchedulePeriodList(e);
        }}
      />
      {/* <!-- Modal --> */}
      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          companyList={companyList}
          onClose={() => setModalName("")}
          fetchInterviewSchedulePeriodList={fetchInterviewSchedulePeriodList}
        />
      )}
      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          companyList={companyList}
          currentElement={editInterviewSchedulePeriod}
          onClose={() => setModalName("")}
          fetchInterviewSchedulePeriodList={fetchInterviewSchedulePeriodList}
        />
      )}
    </div>
  );
}
