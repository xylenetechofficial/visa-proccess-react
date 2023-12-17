import PassportReleaseRequest from "./Table";
import { useState, useEffect } from "react";

import { PassportReleaseRequestInterface } from "../type";
import {
  
  readPassportReleaseRequestList,
  updatePassportReleaseRequest,
} from "../repository";
import { GreenButton } from "../../../../componenets/CustomButton";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";
import { FullScreenModal } from "../../../../componenets/Modal";
export default function Main(props:{onClose:(value:string)=>void}) {


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

  const [PassportReleaseRequestList, setPassportReleaseRequestList] = useState<
    PassportReleaseRequestInterface[]
  >([]);
  async function fetchPassportReleaseRequest(page?: number) {
    const data = await readPassportReleaseRequestList({
      page: page ?? additionalData.pagination.page,
      status: "yes",
    }
    );
    if (data) {
      setPassportReleaseRequestList(data);
    }
    setAdditionalData(await PaginationManager.getData());
  }
  const onClickUpdate = async (item: PassportReleaseRequestInterface[]) => {
    // await createPassportReleaseRequest(item);
    const newArray = []
    for (let i = 0; i < item.length; i++) {
        if (item[i].checked) newArray.push(item[i])
    }
    await updatePassportReleaseRequest(newArray)
   props.onClose('')
  };

  useEffect(() => {
    fetchPassportReleaseRequest(additionalData.pagination.page);
  }, []);

  return (
    <>
    
    <FullScreenModal
      handleClick={() => props.onClose('')}
      title="Edit Passport Release Request"
      onClose={() => props.onClose('')}
    >
      
      <PassportReleaseRequest
        PassportReleaseRequestList={PassportReleaseRequestList}
        onChange={(value) => setPassportReleaseRequestList(value)}
        snoBase={additionalData.pagination.sno_base}
      />
      <br />
      <GreenButton
        text="Updatte"
        onClick={() => onClickUpdate(PassportReleaseRequestList)}
      />
      <br />
      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchPassportReleaseRequest(e);
        }}
      />
      </FullScreenModal>
    </>
  );
}
