import { JobOrderAdapter, JobOrderConverter, JobOrderInterface } from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readJobOrderList(page_number?: number) {
  const path = "/job-dpt/v3/vacancy-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: page_number ?? 1,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return JobOrderConverter.toInterfaceList(response.data as JobOrderAdapter[]);
}
export async function readJobOrder(id: number) {
  const path = "/job-dpt/v3/vacancy/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  // console.log(response.data);
  return JobOrderConverter.toInterface(response.data as JobOrderAdapter);
}

export async function addJobOrder(id: number, jobOrder: JobOrderInterface) {
  const payload = JobOrderConverter.toAdapter(jobOrder);
  console.log(payload);
  // return
  const path = "/job-dpt/v3/vacancy/" + id + "/add";
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function updateJobOrder(id: number, jobOrder: JobOrderInterface) {
  const payload = JobOrderConverter.toAdapter(jobOrder);
  console.log(payload);
  // return
  const path = "/job-dpt/v3/vacancy/" + id;
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function deleteVacancy(id: number) {
  const path = "/job-dpt/v3/vacancy/" + id;
  const response = await ApiHelper.delete(path, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}
