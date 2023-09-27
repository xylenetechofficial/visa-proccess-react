import {  SubmissionDashboardAdapter, SubmissionDashboardConverter, SubmissionDashboardInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readSubmissionDashboardData() {
  const path = "/visa-dpt/submission-dashboard-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  let data: SubmissionDashboardInterface[] = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as SubmissionDashboardAdapter[];
    data = SubmissionDashboardConverter.toInterfaceList(dataAdapter)
  }
  return data as SubmissionDashboardInterface[]
}


export async function updateSubmissionDashboardData(DubaiDataEntry: SubmissionDashboardInterface[]) {

  const payload = {
    selection_list :SubmissionDashboardConverter.toAdapterList(DubaiDataEntry)
  }

  const path = "/visa-dpt/submission-dashboard-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function updateSubmissionDashboardDataOne(data: SubmissionDashboardInterface) {

  const payload = SubmissionDashboardConverter.toAdapter(data);

  const path = "/visa-dpt/submission-dashboard/" + data.id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function updateSubmissionDashboardDataOne_patch_mofa_forward(data: SubmissionDashboardInterface) {

  const payload = SubmissionDashboardConverter.toAdapter(data);

  const path = "/visa-dpt/patch_mofa_forward/" + data.id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

