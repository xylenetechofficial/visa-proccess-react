import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import VendorTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { VendorInterface } from "../type";
import { deleteAgency, readVendorList } from "../repository";
import Pagination from "../../../../componenets/Pagination";
import { AdditionalDataInterface, PaginationManager } from "../../../../utils/api_helper";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [vendorList, setVendorList] = useState<VendorInterface[]>([]);
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

  const [editVendor, setEditVendor] = useState<VendorInterface>(
    {} as VendorInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [dataFiltered, setDataFiltered] = useState<VendorInterface[]>([]);
  const filterData = (query: string, data: VendorInterface[]) => {
    if (!query) {
      setDataFiltered(data);
      return;
    } else {
      const d = data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
      setDataFiltered(d);
      return;
    }
  };

  const searchFunction = async (query: string) => {
    filterData(query, vendorList);
  };

  const onClickEdit = (vendor: VendorInterface) => {
    setEditVendor(vendor);
    console.log("onClickEdit"); // Only Dev
    console.log(vendor); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (vendor: VendorInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && vendor.id) {
      await deleteAgency(vendor.id);
      fetchVendorList();
    }
  };

  // useEffect(() => {
  // }, [editAgency, modalName])

  const fetchVendorList = async (page?: number) => {
    const res = await readVendorList(true, page ?? 1);
    setVendorList(res)
    filterData("", res);
    setAdditionalData(await PaginationManager.getData());

  };

  useEffect(() => {
    fetchVendorList();
  }, []);

  return (
    <div>
      <CustomNavbarV3 pageName="Vendor" searchFunction={searchFunction} />
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

      {/*  agency stable */}
      <VendorTable
        snoBase={additionalData.pagination.sno_base}
        vendorList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          fetchVendorList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchVendorList={fetchVendorList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          vendor={editVendor}
          onClose={() => setModalName("")}
          fetchVendorList={fetchVendorList}
        />
      )}
    </div>
  );
}
