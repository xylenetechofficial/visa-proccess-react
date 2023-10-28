import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import BlockVisaTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { BlockVisaInterface, VisaProfesionInterface } from "../type";
import { deleteBlockVisa, readBlockVisaList } from "../repository";
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

const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [editBlockVisa, setEditBlockVisa] = useState<BlockVisaInterface>(
    {} as BlockVisaInterface
  );

  const [modalName, setModalName] = useState("");
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

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (blockVisa: BlockVisaInterface) => {
    setEditBlockVisa(blockVisa);
    console.log("onClickEdit"); // Only Dev
    console.log(blockVisa); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (blockVisa: BlockVisaInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && blockVisa.id) {
      await deleteBlockVisa(blockVisa.id);
      fetchBlockVisaList();
    }
  };

  // useEffect(() => {
  // }, [editBlockVisa, modalName])
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
  const [blockVisaList, setBlockVisaList] = useState<BlockVisaInterface[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: BlockVisaInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.index_date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, blockVisaList);

  const [visaprofession, setVisaProfessionList] = useState<
    VisaProfesionInterface[]
  >([]);

  const fetchBlockVisaList = async (page?: number) => {
    const data = await readBlockVisaList(page ?? 1);
    console.log(data);
    if (data) {
      setBlockVisaList(data);
    }
    setBlockVisaList(data);

    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchBlockVisaList(additionalData.pagination.page);
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);

  return (
    <div className="h-screen">
      <CustomNavbarV3
        pageName="Block Visa"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <CardHeader>
        {/* <CustomButton2 buttonText="Add filter" icon={<FaFilter />} /> */}

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
                    Add BlockVisa +
                </Button> */}
        {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
      </CardHeader>

      {/*  blockVisa stable */}
      <BlockVisaTable
        snoBase={additionalData.pagination.sno_base}
        blockVisaList={dataFiltered}
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
          fetchBlockVisaList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchBlockVisaList={fetchBlockVisaList}
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
          currentElement={editBlockVisa}
          onClose={() => setModalName("")}
          fetchBlockVisaList={fetchBlockVisaList}
          companyList={companyList}
          countryList={countryList}
          sectorList={sectorList}
        />
      )}
    </div>
  );
}
