import { Submission_Dash_CandidateAdapter, Submission_Dash_CandidateConverter, Submission_Dash_CandidateInterface, Submission_Dash_JobOrderAdapter, Submission_Dash_JobOrderConverter, Submission_Dash_JobOrderInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readSourcingCollectionDashboardJobOrder() {
  const path = "/visa-dpt/submission-dashboard-dubai-index-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data: Submission_Dash_JobOrderInterface[] = Submission_Dash_JobOrderConverter.toInterfaceList(response.data as Submission_Dash_JobOrderAdapter[])

  return data
}



export async function readSourcingCollectionDashboardCandidate(id: number, status?: string) {

  const path = "/visa-dpt/submission-dashboard-dubai-list";

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

  return Submission_Dash_CandidateConverter.toInterfaceList(response.data as Submission_Dash_CandidateAdapter[])
}






export async function createSourcingCollectionDashboardCandidate(candidateList: Submission_Dash_CandidateInterface[]) {

  const payload = {
    selection_list: Submission_Dash_CandidateConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/submission-dashboard-dubai-list"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response;
}

export async function updateSourcingCollectionDashboardCandidate(candidateList: Submission_Dash_CandidateInterface[]) {

  const payload = {
    selection_list: Submission_Dash_CandidateConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/submission-dashboard-dubai-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response
}

