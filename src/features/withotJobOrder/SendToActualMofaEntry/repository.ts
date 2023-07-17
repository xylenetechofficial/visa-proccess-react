import {
  PartyCodeAdapter,
  PartyCodeConverter,
  SendToActualMofaEntryAdapter,
  SendToActualMofaEntryConverter,
  SendToActualMofaEntryInterface,
} from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readPartyCodeList() {
  const path = "/without-job-order/party-code-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return PartyCodeConverter.toInterfaceList(
    response.data as PartyCodeAdapter[]
  );
}

export async function readSendToActualMofaEntryList(company_id: number) {
  const path = "/without-job-order/send-to-mofa-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: { company_id: company_id },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return SendToActualMofaEntryConverter.toInterfaceList(
    response.data as SendToActualMofaEntryAdapter[]
  );
}

export async function createSendToActualMofaEntry(
  sendToActualMofaEntryList: SendToActualMofaEntryInterface[]
) {
  const path = "/without-job-order/send-to-mofa-list";

  const payload = SendToActualMofaEntryConverter.toAdapterList(
    sendToActualMofaEntryList
  );
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });

  if (response.code != 200) return false;

  return true;
}

export async function createSendToActualMofaEntryList(
  sendToActualMofaEntryList: SendToActualMofaEntryInterface[]
) {
  const path = "/without-job-order/send-to-mofa-list";

  const payload = {
    selection_list: SendToActualMofaEntryConverter.toAdapterList(
      sendToActualMofaEntryList
    ),
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });

  if (response.code != 200) return false;

  return true;
}
