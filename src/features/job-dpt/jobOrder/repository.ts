import { JobOrderAdapter, JobOrderConverter, JobOrderInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readJobOrderList() {
  const path = "/job-dpt/job-order-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return JobOrderConverter.toInterfaceList(response.data as JobOrderAdapter[]);
}
export async function readJobOrder(id: number) {

  const path = "/job-dpt/v2/job-order/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return JobOrderConverter.toInterface(response.data as JobOrderAdapter)
}

export async function createJobOrder(jobOrder: JobOrderInterface) {
  console.log(jobOrder)
  const path = "/job-dpt/v2/job-order"

  const payload = JobOrderConverter.toAdapter(jobOrder);

  console.log(payload)
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function updateJobOrder(id: number, jobOrder: JobOrderInterface) {

  const payload = JobOrderConverter.toAdapter(jobOrder);

  const path = "/job-dpt/v2/job-order/" + id
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteJobOrder(id: number) {

  const path = "/job-dpt/job-order/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

