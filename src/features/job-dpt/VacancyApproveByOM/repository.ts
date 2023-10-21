import { JobOrderAdapter, JobOrderConverter, JobOrderInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readJobOrderList(page_number?: number) {
  const path = "/job-dpt/approve-by-om-list"

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
        queryParameters: {
    page: page_number ?? 0,
  },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  
  return JobOrderConverter.toInterfaceList(response.data as JobOrderAdapter[]);
}

export async function readJobOrder(id: number) {

  const path = "/job-dpt/approve-by-om/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return JobOrderConverter.toInterface(response.data as JobOrderAdapter)
}

export async function updateJobOrder(id: number, jobOrder: JobOrderInterface) {

  const payload = JobOrderConverter.toAdapter(jobOrder);

  const path = "/job-dpt/approve-by-om/" + id
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}



