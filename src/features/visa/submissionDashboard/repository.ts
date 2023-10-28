import {  SubmissionDashboardAdapter, SubmissionDashboardConverter, SubmissionDashboardInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readSubmissionDashboardData(page_number?: number) {
  const path = "/visa-dpt/submission-dashboard-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: page_number ?? 0,
    },
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

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

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

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function updateSubmissionDashboardDataOne(data: SubmissionDashboardInterface) {

  const payload = SubmissionDashboardConverter.toAdapter(data);

  const path = "/visa-dpt/submission-dashboard/" + data.id
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

export async function updateSubmissionDashboardDataOne_patch_mofa_forward(data: SubmissionDashboardInterface) {

  const payload = SubmissionDashboardConverter.toAdapter(data);

  const path = "/visa-dpt/patch_mofa_forward/" + data.id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

