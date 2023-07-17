import { MolReceivedAdapter, MolReceivedConverter, MolReceivedInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function ReadMolRecievedData() {
  const path = "/visa-dpt/mol-receive-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data: MolReceivedInterface[] = MolReceivedConverter.toInterfaceList(response.data as MolReceivedAdapter[])

  return data
}



// export async function readSourcingCollectionDashboardCandidate(id: number, status?: string) {

//   const path = "/visa-dpt/sourcing-dashboard-list";

//   const response = await ApiHelper.get(path, {
//     contentType: ContentType.json,
//     tokenType: AuthTokenType.JWT,
//     queryParameters: {
//       job_order_id: id,
//       status: status ?? ""
//     }
//   });

//   if (response.code != 200) {
//     showMessage_v2({ message: response.message, status: response.code })
//   }

//   return Src_Col_Dash_CandidateConverter.toInterfaceList(response.data as Src_Col_Dash_CandidateAdapter[])
// }






// export async function createSourcingCollectionDashboardCandidate(candidateList: MolForwardedTovisaDepartmentDataInterface[]) {

//   const payload = {
//     selection_list: Src_Col_Dash_CandidateConverter.toAdapterList(candidateList)
//   }

//   const path = "/visa-dpt/sourcing-dashboard-list"
//   const response = await ApiHelper.post(path, payload, {
//     contentType: ContentType.json,
//     tokenType: AuthTokenType.JWT
//   })
//   showMessage_v2({ message: response.message, status: response.code })
//  return response;
// }

export async function updateMolReceivedData(candidateList: MolReceivedInterface[]) {

  const payload = {
    selection_list: MolReceivedConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/mol-receive-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response
}

