import { useEffect, useState } from "react";
import { deleteCountry, readCountryList } from "../repository";
import { CountryInterface } from "../type";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import CountryTable from "./CountryTable";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import Pagination from "../../../../componenets/Pagination";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import { useUserAuth } from "../../../context/UserAuthContext";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [countryList, setCountryList] = useState<CountryInterface[]>([]);
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

  const [editCountry, setEditCountry] = useState<CountryInterface>(
    {} as CountryInterface
  );

  const { authPermissionList } = useUserAuth();
  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: CountryInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, countryList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (country: CountryInterface) => {
    setEditCountry(country);
    console.log("onClickEdit"); // Only Dev
    console.log(country); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (country: CountryInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && country.id) {
      await deleteCountry(country.id);
      fetchCountryList();
    }
  };

  // useEffect(() => {
  // }, [editCountry, modalName])

  const fetchCountryList = async (page?: number) => {
    const res = await readCountryList(
      true,
      page ?? additionalData.pagination.page
    );
    setCountryList(res);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchCountryList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Country"
        searchFunction={(value) => setSearchQuery(value)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />
        {authPermissionList.url_has("create") ? (
          <GreenButton
            text={"Add +"}
            onClick={() => {
              setModalName("create");
            }}
          />
        ) : (
          ""
        )}

        {/* <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                        setModalName("create")
                    }}
                >
                    Add Country +
                </Button> */}
        {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
      </CardHeader>

      {/*  country stable */}
      <CountryTable
        snoBase={additionalData.pagination.sno_base}
        countryList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          fetchCountryList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchCountryList={fetchCountryList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          country={editCountry}
          onClose={() => setModalName("")}
          fetchCountryList={fetchCountryList}
        />
      )}
    </div>
  );
}
