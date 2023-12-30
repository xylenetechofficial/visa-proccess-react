import { useEffect, useState } from "react";
import { FullScreenModal } from "../../../../componenets/Modal";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";

import Pagination from "../../../../componenets/Pagination";
import AgreementTable from "./Table";
import { AgreementInterface } from "../type";
import { createAgreement, readAgreementList } from "../repository";

export default function Main(props: { onClose: any }) {
  const [agreementList, setAgreementList] = useState<AgreementInterface[]>([]);

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

  const fetchCreateAgreementList = async (page?: number) => {
      const data: AgreementInterface[] = await readAgreementList({
          page: page ?? 1,
          status: "no"
        });
        setAgreementList(data);
      setAdditionalData(await PaginationManager.getData());
  };
  useEffect(() => {
    fetchCreateAgreementList(additionalData.pagination.page);
  }, []);

  const onClickSubmit = async () => {
    const newArray = [];

    for (let i = 0; i < agreementList.length; i++) {
       newArray.push(agreementList[i]);
    }
    const update = await createAgreement(newArray);
    if (update) {
      // props.onClose();
      fetchCreateAgreementList();
    }
  };

  return (
    <FullScreenModal
      buttonName="submit"
      handleClick={onClickSubmit}
      title="Agreement Add"
      onClose={props.onClose}
    >
      <div className="overflow-auto">
        <AgreementTable
          snoBase={additionalData.pagination.sno_base}
          agreementList={agreementList}
          actionType="edit"
          onChange={(list) => setAgreementList(list)}
        />
        <Pagination
          data={additionalData}
          onPageChange={(e) => {
            fetchCreateAgreementList(e);
          }}
        />
      </div>
    </FullScreenModal>
  );
}
