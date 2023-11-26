import { useEffect, useState } from "react";
import ViewSingleTable from "./ViewModal";
import {
  CustomNavbarV3,
} from "../../../../componenets/CustomComponents";
import { GreenButton } from "../../../../componenets/CustomButton";
import IndexForEwakalaTable from "./Table";
import { fetchDemanDetailsList, readIndexEwakalaList, updateEwakalaeDate } from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { IndexEwakalaInterface } from "../type";

export default function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState("");
  const [modalName, setModalName]= useState("");
  const [modalData, setModalData] = useState([]);
  const [artyCode, setPartyCode] = useState<number>(0);
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

  const [indexForEwakala, setIndexForEwakala] = useState<
  IndexEwakalaInterface[]
>([]);

  const fetchIndexEwakalaList = async (page?: number) => {
    const data: any = await readIndexEwakalaList(page);
    if (data) {
      setIndexForEwakala(data);
    }

    setAdditionalData(await PaginationManager.getData());
  };


  const OnClickSubmit = async () => {
    console.log(indexForEwakala);
    const newArray = [];
    for (let i = 0; i < indexForEwakala.length; i++) {
      newArray.push(indexForEwakala[i]);
    }
    const res = updateEwakalaeDate(newArray);
    fetchIndexEwakalaList();
  };

 

  useEffect(() => {
    fetchIndexEwakalaList(additionalData.pagination.page);
  }, []);

  return (
    <div>
      <CustomNavbarV3
        pageName="Demand Details"
        searchFunction={(query) => setSearchQuery(query)}
      />

      <IndexForEwakalaTable
        snoBase={additionalData.pagination.sno_base}
        indexForEwakala={indexForEwakala}
        setIndexForEwakala={setIndexForEwakala}
        data={data}
        setData={setData}
        setModalName={(value)=>setModalName(value)}
        setModalData={setModalData}
        onChange={(value) => setIndexForEwakala(value)}
        // fetchModalData={(name, code)=>fetchModalData(name, code)}
      />


<GreenButton onClick={OnClickSubmit} text="Submit" />
      <br />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchIndexEwakalaList(e);
        }}
      />
      {modalName === 'view' ?
      <ViewSingleTable setModalName={(value)=>setModalName(value)} data={modalData}/>
       :''}
    </div>
  );
}
