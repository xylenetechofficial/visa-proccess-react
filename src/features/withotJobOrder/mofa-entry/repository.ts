import {
  MofaEntryAdapter,
  MofaEntryConverter,
  MofaEntryInterface,
  MofaPaymentAdapter,
  MofaPaymentConverter,
} from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readMofaEntryList({ status = "", companyId = 0 }) {
  const path = "/without-job-order/mofa-entry-list";

  const query_parameter = {
    status: status,
    company_id: companyId,
  };
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: query_parameter,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  const data: MofaEntryInterface[] = [];

  if (response.data) {
    const dataAdapter = response.data as MofaEntryAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(MofaEntryConverter.toInterface(element));
    }
  }

  return data;
}

export async function readMofaPaymentList() {
  const path = "/without-job-order/mofa-payment-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return MofaPaymentConverter.toInterfaceList(
    response.data as MofaPaymentAdapter[]
  );
}

export async function updateMofaEntry(
  id: number,
  mofaEntry: MofaEntryInterface
) {
  const payload = MofaEntryConverter.toAdapter(mofaEntry);
  const path = "/without-job-order/mofa-entry/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  return response;
}

export async function createMofaEntry(mofaEntry: MofaEntryInterface[]) {
  const payload = {
    selection_list: MofaEntryConverter.toAdapterList(mofaEntry),
  };
  const path = "/without-job-order/mofa-entry-list";
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  return response;
}

export async function deleteMofaEntry(id: number) {
  const path = "/job-order/mofa-entry/" + id;
  const response = await ApiHelper.delete(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });

  return response;
}

// get without-job-order/mofa-entry-list
// post without-job-order/mofa-entry-list
// patch without-job-order/mofa-entry-list

// get without-job-order/mofa-entry/{id}
// patch without-job-order/mofa-entry/{id}
// delete without-job-order/mofa-entry/{id}
