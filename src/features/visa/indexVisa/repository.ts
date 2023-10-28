import {
  CancelPartyCodeAdapter,
  CancelPartyCodeConverter,
  IndexVisaAdapter,
  IndexVisaConverter,
  IndexVisaInterface,
  JobOrderQuantity,
} from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import {
  JobOrderAdapter,
  JobOrderConverter,
  JobOrderInterface,
} from "../../job-dpt/jobOrder/type";

// get visa - dpt / index - visa - list => GetIndexVisaList
// post visa - dpt / index - visa => PostIndexVisa
// get visa - dpt / index - visa / { id } => GetIndexVisa
// patch visa - dpt / index - visa / { id } => PatchIndexVisa
// delete visa - dpt / index - visa / { id } => DeleteIndexVisa

// //  ------------   Index Visa Profession   ------------ \\
// delete visa - dpt / index - visa - profession / { id } => DeleteIndexVisaProfessio

// visa-dpt/index-visa/job-order-quantity/{job_order_id}

export async function readIndexVisaList(page_number?: number) {
  const path = "/visa-dpt/index-visa-list";

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

  const data = [];
  console.log(response.data);
  if (response.data) {
    const dataAdapter = response.data as IndexVisaAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(IndexVisaConverter.toInterface(element));
    }
  }


  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return data as IndexVisaInterface[];
}

export async function readCancelPartyCodeList() {
  const path = "/visa-dpt/index-visa/cancel-party-code-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return CancelPartyCodeConverter.toInterfaceList(
    response.data as CancelPartyCodeAdapter[]
  );
}

export async function createPartyCode(indexVisa: IndexVisaInterface) {
  console.log(indexVisa);
  const path = "/visa-dpt/index-visa/party-code";

  const payload = IndexVisaConverter.toAdapter(indexVisa);

  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.form,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  return response.data as { party_code: string };
}

export async function cancelPartyCode(indexVisa: IndexVisaInterface) {
  const path = "/visa-dpt/index-visa/cancel-party-code/" + indexVisa.party_code;

  // const payload = IndexVisaConverter.toAdapter(indexVisa);

  const response = await ApiHelper.delete(path, {
    contentType: ContentType.text,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

export async function readIndexVisa(id: number) {
  const path = "/visa-dpt/index-visa" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return IndexVisaConverter.toInterface(response.data as IndexVisaAdapter);
}

export async function createIndexVisa(indexVisa: IndexVisaInterface) {
  console.log(indexVisa);
  const path = "/visa-dpt/index-visa";

  const payload = IndexVisaConverter.toAdapter(indexVisa);

  console.log(payload);
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

export async function updateIndexVisa(
  id: number,
  indexVisa: IndexVisaInterface
) {
  const payload = IndexVisaConverter.toAdapter(indexVisa);

  const path = "/visa-dpt/index-visa/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function deleteIndexVisa(id: number) {
  const path = "/visa-dpt/index-visa/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

export async function readJobOrderList(props: { companyId: number }) {
  const path = "/job-dpt/selection/job-order-list";
  const query_parameter = {
    company_id: props.companyId,
  };
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: query_parameter,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  const data = [];
  console.log(response.data);
  if (response.data) {
    const dataAdapter = response.data as JobOrderAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(JobOrderConverter.toInterface(element));
    }
  }
  return data as JobOrderInterface[];
}

export async function readJobOrderQuantity(id: number) {
  const path = "/visa-dpt/index-visa/job-order-quantity/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    // showMessage_v2({ message: response.message, status: response.code })
  }

  return response.data as JobOrderQuantity;
}
