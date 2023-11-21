import { useEffect, useState } from "react";
import { CustomNavbarV3 } from "../../../../componenets/CustomComponents";
import AgentPaymentReceivedDetailTable from "./Table";
import EditModal from "./Edit";
import { PaymentReceivedInterface } from "../type";
import {
  deletePaymentReceived,
  readEditPaymentReceivedList,
  readPaymentReceivedList,
} from "../repository";
import {
  AdditionalDataInterface,
  PaginationManager,
} from "../../../../utils/api_helper";
import Pagination from "../../../../componenets/Pagination";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState("");
  const [paymentReceivedList, setPaymentReceivedList] = useState<
    PaymentReceivedInterface[]
  >([]);
  const fetchList = async (page?: number) => {
    const res: any = await readPaymentReceivedList(page ?? 1);
    if (res) {
      setPaymentReceivedList(res);
    }
    setAdditionalData(await PaginationManager.getData());
  };
  const [editPaymentList, setEditPaymentList] = useState<any>([]);
  const fetchEditPaymentList = async (ele: PaymentReceivedInterface) => {
    console.log("first");
    const res = await readEditPaymentReceivedList(ele);
    if (res) {
      setEditPaymentList(res);
    }
  };
  useEffect(() => {
    fetchList(additionalData.pagination.page);
  }, []);
  const onClickDelete =async(id:number)=>{
    await deletePaymentReceived(id)
    window.location.reload()
  }
  return (
    <div>
      <CustomNavbarV3
        pageName="PAYMENTS RECEIVED"
        searchFunction={(query) => setSearchQuery(query)}
        refresh={() => {
          fetchList();
        }}
      />
      <AgentPaymentReceivedDetailTable
       snoBase={additionalData.pagination.sno_base}
        paymentReceivedList={paymentReceivedList}
        onClickEdit={(value) => {
          setModal("edit"), fetchEditPaymentList(value);
        }}
      />

      <Pagination
        data={additionalData}
        onPageChange={(e) => {
          console.log(e); // Only Dev
          fetchList(e);
        }}
      />

      {modal === "edit" ? (
        <EditModal
          editPaymentList={editPaymentList}
          setModal={(value) => setModal(value)}
          onClickDelete={(id)=>onClickDelete(id)}
        />
      ) : (
        ""
      )}
    </div>
  );
}
