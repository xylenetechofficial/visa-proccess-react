import { AgentPaymentAddConverter, AgentPaymentAddInterface, AgentPaymentAdapter, AgentPaymentConverter, AgentPaymentInterface, VisaProfesionInterface, AddAgentPaymentInterface , AddSelectionAgentPaymentAdapter, AddAgentPaymentConverter, AgentPaymentByIDInterface, AgentPaymentByIDConverter} from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { CandidateDiscountApproveRejectConverter, CandidateDiscountApproveRejectInterface } from "../candidateDiscountApproveReject/type";

// get visa - dpt / block - visa - list => GetAgentPaymentList
// post visa - dpt / block - visa => PostAgentPayment
// get visa - dpt / block - visa / { id } => GetAgentPayment
// patch visa - dpt / block - visa / { id } => PatchAgentPayment
// delete visa - dpt / block - visa / { id } => DeleteAgentPayment

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteAgentPaymentProfessio


// ! EMG
export async function readAgentPaymentList(AgentBy:AgentPaymentByIDInterface) {

  const payload = AgentPaymentByIDConverter.toAdapter(AgentBy);
  const path = `/account/agent-payment-list`;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      agent_id: AgentBy.agent_id ?? 0,
      passport_no: AgentBy.passport_no ?? ""
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  // const data = []
  // console.log(response.data)
  // if (response.data) {
  //   const dataAdapter :any= response.data as AgentPaymentAdapter[];
  //   for (let i = 0; i < dataAdapter.length; i++) {
  //     const element = dataAdapter[i];
  //     data.push(AgentPaymentConverter.toInterface(element));
  //   }
  // }
  // return data as AgentPaymentInterface[]
  const data: AgentPaymentInterface[] = [];
console.log(response.data);
const dataAdapter: AgentPaymentAdapter[] = response.data as AgentPaymentAdapter[];
if (response.data) {
  const dataAdapter: AgentPaymentAdapter[] = response.data as AgentPaymentAdapter[];
  for (let i = 0; i < dataAdapter.length; i++) {
    const element = dataAdapter[i];
    data.push(AgentPaymentConverter.toInterface(element));
  }
}
return dataAdapter as AgentPaymentAdapter[]
}



export async function readAgentPayment(id: number) {

  const path = "/visa-dpt/block-visa/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return AgentPaymentConverter.toInterface(response.data as AgentPaymentAdapter)
}




export async function createAgentPayment(AgentPayment: AgentPaymentInterface) {
  console.log(AgentPayment)
  const path = "/visa-dpt/block-visa"

  const payload = AgentPaymentConverter.toAdapter(AgentPayment);

  console.log(payload)
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function createCandidateDiscountApprovalReject(candidateDiscountApprovalReject: CandidateDiscountApproveRejectInterface) {
  console.log(candidateDiscountApprovalReject)
  const path = "/account/agent-payment/candidate-add"

  // const payload = AgentPaymentConverter.toAdapter(AgentPayment);
  const payload = CandidateDiscountApproveRejectConverter.toAdapter(candidateDiscountApprovalReject);

  console.log(payload)
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}


export async function createAgentPaymentAdd(AgentPaymentAdd: AgentPaymentAddInterface) {
  console.log(AgentPaymentAdd)
  const path = "/account/agent-payment/agent-add"

  // const payload = AgentPaymentConverter.toAdapter(AgentPayment);
  const payload = AgentPaymentAddConverter.toAdapter(AgentPaymentAdd);

  console.log(payload)
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
export async function addAgentPayment(AgentPaymentAdd: AddAgentPaymentInterface) {
  console.log(AgentPaymentAdd,"AddAgentPaymentConverter")
  const path = "/account/agent-payment-list"

  const payload = AddAgentPaymentConverter.toAdapter(AgentPaymentAdd);
  console.log(payload,"z")
  
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
export async function updateAgentPayment(id: number, AgentPayment: AgentPaymentInterface) {

  const payload = AgentPaymentConverter.toAdapter(AgentPayment);

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteAgentPayment(id: number) {

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

export async function readPaymentDetails(type:string,id:number) {
  
  const path = `/account/agent-payment/receive-payment-list?${type}=${id}`;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code !== 200 ) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  // const data = []
  // console.log(response.data)
  // if (response.data) {
  //   const dataAdapter :any= response.data as AgentPaymentAdapter[];
  //   for (let i = 0; i < dataAdapter.length; i++) {
  //     const element = dataAdapter[i];
  //     data.push(AgentPaymentConverter.toInterface(element));
  //   }
  // }
  // return data as AgentPaymentInterface[]
  const data: any[] = [];
console.log(response.data);
const dataAdapter: any[] = response.data as any[];
if (response.data) {
  const dataAdapter: any[] = response.data as any[];
  for (let i = 0; i < dataAdapter.length; i++) {
    const element = dataAdapter[i];
    data.push(element);
  }
}
return dataAdapter as any[]
}
