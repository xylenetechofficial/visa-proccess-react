import { EditRejectCancelApproveInterface, RejectCancelApproveAdapter, RejectCancelApproveConverter, RejectCancelApproveInterface} from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetRejectCancelApproveList
// post visa - dpt / block - visa => PostRejectCancelApprove
// get visa - dpt / block - visa / { id } => GetRejectCancelApprove
// patch visa - dpt / block - visa / { id } => PatchRejectCancelApprove
// delete visa - dpt / block - visa / { id } => DeleteRejectCancelApprove

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteRejectCancelApproveProfessio



export async function readRejectCancelApproveList() {
  const path = "/account/reject-cancel-approve-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
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

  return data as RejectCancelApproveInterface[]
}



export async function readRejectCancelApprove(id: number) {

  const path = "/visa-dpt/block-visa/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return RejectCancelApproveConverter.toInterface(response.data as RejectCancelApproveAdapter)
}




export async function createRejectCancelApprove(RejectCancelApprove: RejectCancelApproveInterface) {
  console.log(RejectCancelApprove)
  const path = "/visa-dpt/block-visa"

  const payload = RejectCancelApproveConverter.toAdapter(RejectCancelApprove);

  console.log(payload)
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function updateRejectCancelApprove(status:number, RejectCancelApprove: any) {

  // const payload = editRejectCancelApproveConverter.toAdapter(RejectCancelApprove);
  const payload = RejectCancelApprove
  payload.selection_list[0].status=status;
  const path = "/account/reject-cancel-approve-list" 
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteRejectCancelApprove(id: number) {

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

