import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import SelectionTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { SelectionInterface } from "../type";
import { deleteSelection, readSelectionList } from "../repository";
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
  const [selectionList, setSelectionList] = useState<SelectionInterface[]>([]);

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

  const [editSelection, setEditSelection] = useState<SelectionInterface>(
    {} as SelectionInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: SelectionInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, selectionList);

  const onClickEdit = (selection: SelectionInterface) => {
    setEditSelection(selection);
    console.log("onClickEdit"); // Only Dev
    console.log(selection); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (selection: SelectionInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && selection.id) {
      await deleteSelection(selection.id);
      fetchSelectionList();
    }
  };

  // useEffect(() => {
  // }, [editSelection, modalName])
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

  const fetchSelectionList = async (page?: number) => {
    const data = await readSelectionList(page);
    console.log(data);
    setSelectionList(data);
    setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchSelectionList(additionalData.pagination.page);
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Selection"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => fetchSelectionList()}
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
                    Add Selection +
                </Button> */}
        {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
      </CardHeader>

      {/*  selection stable */}
      <SelectionTable
      snoBase={additionalData.pagination.sno_base}
        selectionList={dataFiltered}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        // companyList={companyList}
        // countryList={countryList}
        // sectorList={sectorList}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchSelectionList(e);
        }}
      />

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchSelectionList={fetchSelectionList}
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
          currentElement={editSelection}
          onClose={() => setModalName("")}
          fetchSelectionList={fetchSelectionList}
          companyList={companyList}
          countryList={countryList}
          sectorList={sectorList}
        />
      )}
    </div>
  );
}
