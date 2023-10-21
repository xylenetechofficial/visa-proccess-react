import {
  SelectionAdapter,
  SelectionConverter,
  SelectionInterface,
} from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { JobOrderAdapter, JobOrderConverter } from "../jobOrder/type";

export async function readSelectionList(page_number?: number) {
  const path = "/job-dpt/selection-list";

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

  return SelectionConverter.toInterfaceList(response.data as SelectionAdapter[]);
}

export async function updateSelection(
  id: number,
  selection: SelectionInterface
) {
  const payload = SelectionConverter.toAdapter(selection);
  const path = "/job-dpt/selection/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message,status:response.code})

  return response;
}

export async function createSelection(selection: SelectionInterface[]) {
  const payload = {
    selection_list: SelectionConverter.toAdapterList(selection),
  };
  const path = "/job-dpt/selection-list"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message,status:response.code})

  return response;
}
export async function deleteSelection(id: number) {
  const path = "/job-dpt/selection/" + id;
  const response = await ApiHelper.delete(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message,status:response.code})

  return response;
  
}

export async function readJobOrderList(props:{companyId:number}) {
  const path = "/job-dpt/selection/job-order-list";
  const query_parameter={
    company_id:props.companyId
  }
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters:query_parameter
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return JobOrderConverter.toInterfaceList(response.data as JobOrderAdapter[]);
}