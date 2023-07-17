import {
  SelectionAdapter,
  SelectionConverter,
  SelectionInterface,
} from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readSelectionList() {
  const path = "/without-job-order/selection-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  const data: SelectionInterface[] = [];

  if (response.data) {
    const dataAdapter = response.data as SelectionAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(SelectionConverter.toInterface(element));
    }
  }

  return data;
}

export async function updateSelection(
  id: number,
  selection: SelectionInterface
) {
  const payload = SelectionConverter.toAdapter(selection);
  const path = "/without-job-order/selection/" + id;
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
  const path = "/without-job-order/selection-list";
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message,status:response.code})

  return response;
}
export async function deleteSelection(id: number) {
  const path = "/without-job-order/selection/" + id;
  const response = await ApiHelper.delete(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message,status:response.code})

  return response;
}
