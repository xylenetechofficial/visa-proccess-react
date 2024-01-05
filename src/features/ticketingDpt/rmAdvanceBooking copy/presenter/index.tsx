import RMAdvanceBooking from "./Table";
import { useState, useEffect } from "react";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { Box, styled } from "@mui/material";
import { RMAdvanceBookingInterface } from "../type";
import {
  createRMAdvanceBooking,
  readRMAdvanceBookingList,
} from "../repository";
import {
  GreenButton,
  YellowButton,
} from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { confirmationMessage } from "../../../../utils/alert";
import { useUserAuth } from "../../../context/UserAuthContext";

const filterButtonList = [
  { name: "All", value: "all" },
  { name: "Pending", value: "pending" },
  { name: "ECNR", value: "no" },
  { name: "ECR", value: "yes" },
];
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
  const [immigrationStatus, setImmigrationStatus] = useState("all");

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
  const { authPermissionList } = useUserAuth();
  const [RMAdvanceBookingList, setRMAdvanceBookingList] = useState<
    RMAdvanceBookingInterface[]
  >([]);
  async function fetchRMAdvanceBooking(
    page?: number,
    query?: { immigration_status: any }
  ) {
    const data = await readRMAdvanceBookingList({
      page: page ?? additionalData.pagination.page,
      status: "no",
      immigration_status: query?.immigration_status ?? immigrationStatus,
    });
    if (data) {
      setRMAdvanceBookingList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  // const onClickCreate = async (item: RMAdvanceBookingInterface[]) => {
  //   const new_data: RMAdvanceBookingInterface[] = [];
  //   for (let i = 0; i < item.length; i++) {
  //     const element = item[i];
  //     // console.log(item);   // Only Dev
  //     // console.log(element);   // Only Dev
  //     if (element.advance == "Yes") new_data.push(element);
  //   }
  //   await createRMAdvanceBooking(new_data);
  //   fetchRMAdvanceBooking();
  //   // window.location.reload()
  // };

  const onClickCreate = async (item: RMAdvanceBookingInterface[]) => {
    const new_data: RMAdvanceBookingInterface[] = [];
    for (let i = 0; i < item.length; i++) {
      const element = item[i];
      if (element.advance == "Yes") new_data.push(element);
    }

    const final_data = await get_approve_data(new_data);
    console.log("new_data", new_data); // Only Dev
    console.log("final_data", final_data); // Only Dev
  };

  async function get_approve_data(
    list: RMAdvanceBookingInterface[]
  ): Promise<RMAdvanceBookingInterface[]> {
    const new_data: RMAdvanceBookingInterface[] = [];
    let find_one = false;

    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (element.is_pendding) {
        if (element.is_approve) {
          new_data.push(element);
        } else {
          find_one = true;
          const flag = await confirmationMessage(
            `PP ${element.pp_no} is pending`
          );
          if (flag) {
            new_data.push({ ...element, is_approve: 1 });
          }
        }
      } else {
        new_data.push(element);
      }
    }

    if (find_one) {
      return await get_approve_data(new_data);
    }
    return new_data;
  }

  useEffect(() => {
    fetchRMAdvanceBooking(additionalData.pagination.page);
  }, []);

  return (
    <>
      <CustomNavbarV3
        pageName="RM Advance Booking"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => {
          fetchRMAdvanceBooking();
        }}
      />
      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <div>
          {filterButtonList.map((ele) => (
            <YellowButton
              text={ele.name}
              onClick={() => {
                setImmigrationStatus(ele.value);
                fetchRMAdvanceBooking(additionalData.pagination.page, {
                  immigration_status: ele.value,
                });
              }}
            />
          ))}
        </div>
      </CardHeader>
      <RMAdvanceBooking
        snoBase={additionalData.pagination.sno_base}
        RMAdvanceBookingList={RMAdvanceBookingList}
        onChange={(value) => setRMAdvanceBookingList(value)}
      />
      <br />
      {authPermissionList.url_has("create") ? (
        <GreenButton
          text="Submit"
          onClick={() => onClickCreate(RMAdvanceBookingList)}
        />
      ) : (
        ""
      )}

      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          // console.log(e); // Only Dev
          fetchRMAdvanceBooking(e);
        }}
      />
    </>
  );
}
