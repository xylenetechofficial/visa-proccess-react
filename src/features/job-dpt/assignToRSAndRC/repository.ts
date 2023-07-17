import { JobOrderAdapter, JobOrderConverter, JobOrderInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readAssignToRCAndRSList() {
  const path = "/job-dpt/assign-to-rs-rc-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return JobOrderConverter.toInterfaceList(response.data as JobOrderAdapter[]);
}



export async function assign_RC_RS(id: number, jobOrder: JobOrderInterface) {

  const payload = JobOrderConverter.toAdapter(jobOrder);

  const path = "/job-dpt/assign-to-rs-rc/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
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

