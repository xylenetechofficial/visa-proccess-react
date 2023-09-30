import {
  BulkPaymentAdapter,
  BulkPaymentConverter,
  MofaPaymentAdapter,
  MofaPaymentConverter,
  Mofa_Entry_Candidate_Adapter,
  Mofa_Entry_Candidate_Interface,
  Mofa_Entry_Converter,
} from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readMofaEntryCandiateList(
  status: string,
  partyCode?: number
) {
  const path = "/visa-dpt/mofa-entry-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      status: status ?? "",
      party_code: partyCode ?? 0,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  const data: Mofa_Entry_Candidate_Interface[] =
    Mofa_Entry_Converter.toInterfaceList(
      response.data as Mofa_Entry_Candidate_Adapter[]
    );

  return data;
}

export async function readBulkPaymentList(agent_id: number) {
  const path = "/account/agent-return-payment/bulk-payment-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      agent_id: agent_id ?? 0,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return BulkPaymentConverter.toInterfaceList(
    response.data as BulkPaymentAdapter[]
  );
}

export async function readMofaPaymentList() {
  const path = "/visa-dpt/mofa-payment-list";

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

export async function createReturnPayment(data: any) {
  const path = "/account/agent-return-payment";
  const response = await ApiHelper.post(path, data, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  return response;
}

export async function UpdateMofaEntry(
  id: number,
  candidateEle: Mofa_Entry_Candidate_Interface
) {
  const payload = Mofa_Entry_Converter.toAdapter(candidateEle);

  const path = "/visa-dpt/mofa-entry/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  return response;
}
