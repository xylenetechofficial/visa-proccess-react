import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { BlueButton, RedButton } from "../../../../componenets/CustomButton";
import ImmigrationTable from "./Table";
import { ImmigrationInterface } from "../type";
import { createImmigrationList, readImmigrationList } from "../repository";

import RejectModal from "./RejectModal";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
export default function Main() {
  const CardHeader = styled(Box)(() => ({
    display: "flex",
    flexWrap: "wrap",
    paddingRight: "24px",
    marginBottom: "18px",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const [searchQuery, setSearchQuery] = useState("");
  const [immigrationDataList, setImmigrationDataList] = useState<
    ImmigrationInterface[]
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

  const [modalName, setModalName] = useState("");
  const [singleImmigration, setSingleImmigration] =
    useState<ImmigrationInterface>({} as ImmigrationInterface);

  const fetchImmigrationList = async (page?: number) => {
    const data: any = await readImmigrationList(page);
    setImmigrationDataList(data);
    setAdditionalData(await PaginationManager.getData());
  };

  function onClickReject(item: ImmigrationInterface) {
    setSingleImmigration(item);
    setModalName("reject");
  }
  const createImmigration = async (data_list: ImmigrationInterface[]) => {
    const new_list = [];
    for (let index = 0; index < data_list.length; index++) {
      const element = data_list[index];
      if (!element.checked) continue;

      // // if immigration_required
      // if (element.immigration_required.toLowerCase() == 'yes')
      //     // then received_date and submission_date required
      //     if (element.immigration_received_date == '' || element.immigration_submission_date == '')
      //         continue

      new_list.push(element);
    }

    const data: any = await createImmigrationList(new_list);
    fetchImmigrationList();
  };
  useEffect(() => {
    fetchImmigrationList(additionalData.pagination.page);
  }, []);
  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Immigration Dashboard"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => {
          fetchImmigrationList();
        }}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
      </CardHeader>
      <ImmigrationTable
        snoBase={additionalData.pagination.sno_base}
        immigrationDataList={immigrationDataList}
        // onClickEdit={() => console.log("first")}
        onClickReject={onClickReject}
        onChange={(value) => setImmigrationDataList(value)}
        fetchImmigrationList={fetchImmigrationList}
      />

      <BlueButton
        text="Submit"
        onClick={() => {
          createImmigration(immigrationDataList);
        }}
      />
      <br />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchImmigrationList(e);
        }}
      />
      {/* Reject */}
      {modalName !== "reject" ? (
        ""
      ) : (
        <RejectModal
          immigration={singleImmigration}
          onClose={() => setModalName("")}
          fetchImmigrationList={fetchImmigrationList}
        />
      )}
    </div>
  );
}
