import { JobOrderAdapter, JobOrderConverter, JobOrderInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readJobOrderList() {
  const path = "/job-dpt/vacancy-approve-list";

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
    const dataAdapter = response.data as JobOrderAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(JobOrderConverter.toInterface(element));
    }
  }
  return data as JobOrderInterface[];
}
export async function readJobOrder(id: number) {

  const path = "/job-dpt/v2/vacancy-approve/" + id;

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

  const path = "/job-dpt/v2/vacancy-approve/" + id
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}



