import {  RejectCancelApproveAdapter, RejectCancelApproveConverter, RejectCancelApproveInterface, RejectCancelApproveListConverter, RejectCancelApproveListInterface} from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";


export async function readRejectCancelApproveList(query: {
  status?: string
  page?: number
}) {
  const path = "/account/reject-cancel-approve-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
    },
    
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as RejectCancelApproveAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(RejectCancelApproveConverter.toInterface(element));
    }
  }
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as RejectCancelApproveInterface[]
}


export async function updateRejectCancelApprove(status:number, RejectCancelApprove: RejectCancelApproveInterface[]) {

  const list :RejectCancelApproveListInterface= {selection_list:RejectCancelApprove}
  const payload = RejectCancelApproveListConverter.toAdapter(list);
  console.log(payload,"payload")
  // const payload = RejectCancelApprove
  // payload.selection_list[0].status=status;
  const path = "/account/reject-cancel-approve-list" 
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;

}

