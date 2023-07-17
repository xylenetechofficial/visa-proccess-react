import { Src_Col_Dash_CandidateAdapter, Src_Col_Dash_CandidateConverter, Src_Col_Dash_CandidateInterface, Src_Col_Dash_JobOrderAdapter, Src_Col_Dash_JobOrderConverter, Src_Col_Dash_JobOrderInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readSourcingCollectionDashboardJobOrder() {
  const path = "/visa-dpt/sourcing-dashboard-index-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data: Src_Col_Dash_JobOrderInterface[] = Src_Col_Dash_JobOrderConverter.toInterfaceList(response.data as Src_Col_Dash_JobOrderAdapter[])

  return data
}



export async function readSourcingCollectionDashboardCandidate(id: number, status?: string) {

  const path = "/visa-dpt/sourcing-dashboard-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      job_order_id: id,
      status: status ?? ""
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return Src_Col_Dash_CandidateConverter.toInterfaceList(response.data as Src_Col_Dash_CandidateAdapter[])
}






export async function createSourcingCollectionDashboardCandidate(candidateList: Src_Col_Dash_CandidateInterface[]) {

  const payload = {
    selection_list: Src_Col_Dash_CandidateConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/sourcing-dashboard-list"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response;
}

export async function updateSourcingCollectionDashboardCandidate(candidateList: Src_Col_Dash_CandidateInterface[]) {

  const payload = {
    selection_list: Src_Col_Dash_CandidateConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/sourcing-dashboard-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response
}

