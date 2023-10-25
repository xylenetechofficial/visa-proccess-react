import { useEffect, useState } from "react";
import CreateModal from "./Create";
import EditModal from "./Edit";
import { Box, styled } from "@mui/material";
import JobOrderTable from "./Table";
import { confirmationMessage } from "../../../../utils/alert";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  CustomButton2,
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { FaFilter } from "react-icons/fa";
import { JobOrderInterface } from "../type";
import { deleteJobOrder, readJobOrderList } from "../repository";
import { SectorInterface } from "../../../masters/sector/type";
import { readSectorList } from "../../../masters/sector/repository";
import { readCompanyList } from "../../../masters/company/repository";
import { CompanyInterface } from "../../../masters/company/type";
import { CountryInterface } from "../../../masters/country/type";
import { readCountryList } from "../../../masters/country/repository";
import { readConsolidateChargeList } from "../../../masters/consolidateCharge/repository";

import Pagination from "../../../../componenets/Pagination";

import { ConsolidateChargeInterface } from "../../../masters/consolidateCharge/type";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  paddingRight: "24px",
  marginBottom: "18px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function Main() {
  const [jobOrderList, setJobOrderList] = useState<JobOrderInterface[]>([]);
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

  const [editJobOrder, setEditJobOrder] = useState<JobOrderInterface>(
    {} as JobOrderInterface
  );

  const [modalName, setModalName] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (query: string, data: JobOrderInterface[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d) =>
        d.date.toLowerCase().includes(query.toLowerCase())
      );
    }
  };
  const dataFiltered = filterData(searchQuery, jobOrderList);

  const onClickCreate = () => {
    setModalName("create");
  };

  const onClickEdit = (jobOrder: JobOrderInterface) => {
    setEditJobOrder(jobOrder);
    console.log("onClickEdit"); // Only Dev
    console.log(jobOrder); // Only Dev
    setModalName("edit");
  };

  const onClickDelete = async (jobOrder: JobOrderInterface) => {
    const flag = await confirmationMessage("Do you really want to delete?");
    if (flag && jobOrder.id) {
      await deleteJobOrder(jobOrder.id);
      fetchJobOrderList();
    }
  };

  // useEffect(() => {
  // }, [editJobOrder, modalName])
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

  const fetchJobOrderList = async (page?: number) => {
    const res = await readJobOrderList(page ?? 1);
    setJobOrderList(res);
    setAdditionalData(await PaginationManager.getData());
  };

  const [consolidateChargeList, setConsolidateChargeList] = useState<
    ConsolidateChargeInterface[]
  >([]);
  const fetchConsolidateCharges = async () => {
    const res = await readConsolidateChargeList();
    setConsolidateChargeList(res);
  };

  useEffect(() => {
    fetchConsolidateCharges();
    fetchJobOrderList(additionalData.pagination.page);
    fetchSectorList();
    fetchcomapanyList();
    fetchCountryList();
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Job Order"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={()=>fetchJobOrderList()}
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
                    Add JobOrder +
                </Button> */}
        {/* <IconButton>
                    <Icon color="primary">refresh</Icon>
                </IconButton> */}
      </CardHeader>

      {/*  jobOrder stable */}
      <JobOrderTable
        snoBase={additionalData.pagination.sno_base}
        jobOrderList={dataFiltered}
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
          fetchJobOrderList(e);
        }}
      />

      {/* <PaginationContainer>
                {currentPage >= 2 ? (
                    <PaginationBack onClick={changePrevious}>Back</PaginationBack>
                ) : null}
                {numbers.map((current, i) => (
                    <PaginationCurrent onClick={() => changeCurrent(i)} key={i}>
                        {current}
                    </PaginationCurrent>
                ))}
                <PaginationNext onClick={changeNext}>Next</PaginationNext>
            </PaginationContainer> */}

      {/* <!-- Modal --> */}

      {/* Create */}
      {modalName !== "create" ? (
        ""
      ) : (
        <CreateModal
          onClose={() => setModalName("")}
          fetchJobOrderList={fetchJobOrderList}
          companyList={companyList}
          countryList={countryList}
          sectorList={sectorList}
          consolidateChargeList={consolidateChargeList}
        />
      )}

      {/* Edit */}
      {modalName !== "edit" ? (
        ""
      ) : (
        <EditModal
          consolidateChargeList={consolidateChargeList}
          currentElement={editJobOrder}
          onClose={() => setModalName("")}
          fetchJobOrderList={fetchJobOrderList}
          companyList={companyList}
          countryList={countryList}
          sectorList={sectorList}
        />
      )}
    </div>
  );
}
