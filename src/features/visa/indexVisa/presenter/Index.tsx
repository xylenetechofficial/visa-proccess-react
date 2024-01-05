import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import IndexVisaTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { BlueButton, GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { IndexVisaInterface } from "../type";
import { deleteIndexVisa, readIndexVisaList } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
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
  const [indexVisaList, setIndexVisaList] = useState<IndexVisaInterface[]>([]);

  const [editIndexVisa, setEditIndexVisa] = useState<IndexVisaInterface>(
    {} as IndexVisaInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: IndexVisaInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, indexVisaList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (indexVisa: IndexVisaInterface) => {
    setEditIndexVisa(indexVisa);
    console.log("onClickEdit"); // Only Dev
    console.log(indexVisa); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (indexVisa: IndexVisaInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && indexVisa.id) {
      await deleteIndexVisa(indexVisa.id);
      fetchIndexVisaList();
    }
  };

  // useEffect(() => {
  // }, [editIndexVisa, modalName])
  const [sectorList, setSectorList] = useState<SectorInterface[]>([]);
  const fetchSectorList = async () => {
    const data = await readSectorList();
    if (data) {
      setSectorList(data);
    }
  };

  const [companyList, setCompanyList] = useState<CompanyInterface[]>([]);
  const fetchcomapanyList = async () => {
    const data = await readCompanyList();
    if (data) {
      setCompanyList(data);
    }
  };

  const [countryList, setCountryList] = useState<CountryInterface[]>([]);
  const fetchCountryList = async () => {
    const data = await readCountryList();
    if (data) {
      setCountryList(data);
    }
  };

  // const [BDEList, setBDEList] = useState<CountryInterface[]>([])
  // const fetchCountryList = async () => {
  //     const data = await readCompanyList();
  //     if(data){
  //         setCompanyList(data);
  //     }
  // }

  const fetchIndexVisaList = async (page?: number) => {
    const data = await readIndexVisaList(page ?? 1);
    console.log(data);
    setIndexVisaList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchIndexVisaList(additionalData.pagination.page);
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Index Visa"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        <CustomButton2 buttonText="Add filter" icon={<FaFilter />} />

        <a
          href="index-visa/cancel-party-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlueButton key={"mfbvjhdb"} text="View Cancel Party Code" />
        </a>
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
                    Add IndexVisa +
                </Button> */}
        {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
      </CardHeader>

      {/*  indexVisa stable */}
      <IndexVisaTable
        snoBase={additionalData.pagination.sno_base}
        indexVisaList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        companyList={companyList}
        countryList={countryList}
        sectorList={sectorList}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchIndexVisaList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchIndexVisaList={fetchIndexVisaList}
          companyList={companyList}
          countryList={countryList}
          sectorList={sectorList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          currentElement={editIndexVisa}
          onClose={() => setModalName("")}
          fetchIndexVisaList={fetchIndexVisaList}
          companyList={companyList}
          countryList={countryList}
          sectorList={sectorList}
        />
      )}
    </div>
  );
}
