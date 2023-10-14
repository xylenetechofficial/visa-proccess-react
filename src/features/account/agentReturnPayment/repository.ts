import {
  BulkPaymentAdapter,
  BulkPaymentConverter,
  MofaPaymentAdapter,
  MofaPaymentConverter,
  AgentReturnPaymentAdapter,
  AgentReturnPaymentInterface,
  AgentReturnPaymentConverter,
} from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readAgentReturnPaymentList(
  status: string,
  partyCode?: number
) {
  const path = "/account/agent-return-payment-list";

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

  const data: AgentReturnPaymentInterface[] =
    AgentReturnPaymentConverter.toInterfaceList(
      response.data as AgentReturnPaymentAdapter[]
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
  const path = "/account/agent-return-payment-list";

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

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function updateAgentReturnPayment(
  id: number,
  candidateEle: AgentReturnPaymentInterface
) {
  const payload = AgentReturnPaymentConverter.toAdapter(candidateEle);

  const path = "/account/agent-return-payment/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  return response;
}


export async function deleteAgentReturnPayment(id: number) {

  const path = "/account/agent-return-payment/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
