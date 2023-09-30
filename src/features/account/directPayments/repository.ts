import {
  AgentPaymentAddConverter,
  AgentPaymentAddInterface,
  AddSelectionAgentPaymentAdapter,
  CandidateAdvancePaymentInterface,
  CandidateAdvancePaymentConverter,
  DirectPaymentInterface,
  DirectPaymentConverter,
  DirectPaymentAdapter,
  AdvancePaymentConverter,
  AdvancePaymentAdapter,
  AdvancePaymentInterface,
  CandidatePaymentInterface,
  CandidatePaymentConverter,
  AgentPaymentReceivedPaymentListInterface,
  AgentPaymentReceivedPaymentListAdapter,
  AgentPaymentReceivedPaymentListConverter,
  AgentPaymentByIDInterface,
  AgentPaymentByIDConverter,
  AddDirectPaymentConverter,
  AddAgentPaymentInterface,
} from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import {
  CandidateDiscountApproveRejectConverter,
  CandidateDiscountApproveRejectInterface,
} from "../candidateDiscountApproveReject/type";

export async function readDirectPaymentList(
  AgentBy: AgentPaymentByIDInterface
) {
  const payload = AgentPaymentByIDConverter.toAdapter(AgentBy);
  // const path = `/account/direct-payment-list?${payload}`;
  const path = `/account/direct-payment-list`;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      agent_id: AgentBy.agent_id ?? 0,
      passport_no: AgentBy.passport_no ?? "",
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  const data: DirectPaymentInterface[] = [];

  const dataAdapter: DirectPaymentAdapter[] =
    response.data as DirectPaymentAdapter[];
  if (response.data) {
    const dataAdapter: DirectPaymentAdapter[] =
      response.data as DirectPaymentAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(DirectPaymentConverter.toInterface(element));
    }
  }
  return dataAdapter as DirectPaymentAdapter[];
}

export async function createAgentPayment(
  CandidateAdvancePayment: AddAgentPaymentInterface
) {
  console.log(CandidateAdvancePayment);
  const path = "/account/direct-payment-list";
  const payload = AddDirectPaymentConverter.toAdapter(CandidateAdvancePayment);
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
// Fetch Direct Payment List End
export async function readAgentPayment(id: number) {
  const path = "/visa-dpt/block-visa/" + id;
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return DirectPaymentConverter.toInterface(
    response.data as DirectPaymentAdapter
  );
}
export async function createCandidateAdvancePayment(
  CandidateAdvancePayment: CandidateAdvancePaymentInterface
) {
  console.log(CandidateAdvancePayment);
  const path = "/account/direct-payment/advance-payment-add";
  const payload = CandidateAdvancePaymentConverter.toAdapter(
    CandidateAdvancePayment
  );
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
export async function createCandidatePaymentAdd(
  CandidatePayment: CandidatePaymentInterface
) {
  // console.log(CandidatePayment); // Only Dev
  // return;

  const path = "/account/direct-payment/candidate-add";
  const payload = CandidatePaymentConverter.toAdapter(CandidatePayment);
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
export async function createAgentPaymentAdd(
  AgentPaymentAdd: AgentPaymentAddInterface
) {
  const path = "/account/agent-payment/agent-add";
  const payload = AgentPaymentAddConverter.toAdapter(AgentPaymentAdd);
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
//  Add Advance Payment Start
export async function addAdvancePayment(
  candidateDiscountApprovalReject: CandidateAdvancePaymentInterface
) {
  console.log(candidateDiscountApprovalReject);
  const path = "/account/direct-payment/advance-payment-add";
  const payload = CandidateAdvancePaymentConverter.toAdapter(
    candidateDiscountApprovalReject
  );
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

//  Add Advance Payment End

//Read Advance Payment List Start
export async function readAdvancePaymentList() {
  const path = "/account/direct-payment/advance-payment-list";
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  const data: AdvancePaymentInterface[] = [];
  const dataAdapter: AdvancePaymentAdapter[] =
    response.data as AdvancePaymentAdapter[];
  if (response.data) {
    const dataAdapter: AdvancePaymentAdapter[] =
      response.data as AdvancePaymentAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(AdvancePaymentConverter.toInterface(element));
    }
  }
  return dataAdapter as AdvancePaymentAdapter[];
}
//Read Advance Payment List End

// Fetch Agent Payment Received Payment List Start

export async function readAgentPaymentReceivedPaymentList() {
  const path =
    "/account/agent-payment/receive-payment-list?bulk_payment_id=0&candidate_id=2";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  console.log(response);
  const data: AgentPaymentReceivedPaymentListInterface[] = [];
  console.log(response.data);
  const dataAdapter: AgentPaymentReceivedPaymentListAdapter[] =
    response.data as AgentPaymentReceivedPaymentListAdapter[];
  if (response.data) {
    const dataAdapter: AgentPaymentReceivedPaymentListAdapter[] =
      response.data as AgentPaymentReceivedPaymentListAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(AgentPaymentReceivedPaymentListConverter.toInterface(element));
    }
  }
  return dataAdapter as AgentPaymentReceivedPaymentListAdapter[];

  // return AdvancePaymentConverter.toInterface(response.data as AdvancePaymentAdapter)
}

// Fetch Agent Payment Received Payment List End

export async function deleteAgentPayment(id: number) {
  const path = "/visa-dpt/block-visa/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
