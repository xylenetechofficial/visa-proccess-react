import { SendToMofa_JobOrderAdapter, SendToMofa_JobOrderConverter, SendToMofa_JobOrderInterface, } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readSendToMofaJobOrder(status:string) {
  const path = "/visa-dpt/send-to-mofa-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      status: status ?? ""
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data: SendToMofa_JobOrderInterface[] = SendToMofa_JobOrderConverter.toInterfaceList(response.data as SendToMofa_JobOrderAdapter[])

  return data
}








export async function createSendToMofaCandidate(candidateList:SendToMofa_JobOrderInterface []) {

  const payload = {
    selection_list: SendToMofa_JobOrderConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/send-to-mofa-list"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response;
}

// export async function updateSourcingCollectionDashboardCandidate(candidateList: Src_Col_Dash_CandidateInterface[]) {

//   const payload = {
//     selection_list: Src_Col_Dash_CandidateConverter.toAdapterList(candidateList)
//   }

//   const path = "/visa-dpt/sourcing-dashboard-list"
//   const response = await ApiHelper.patch(path, payload, {
//     contentType: ContentType.json,
//     tokenType: AuthTokenType.JWT
//   })
//   showMessage_v2({ message: response.message, status: response.code })
//  return response
// }

