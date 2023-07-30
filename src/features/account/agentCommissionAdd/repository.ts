import { AccountDashboardAdapter, AccountDashboardConverter, AccountDashboardInterface, ServerAdapter, CandidateRejectConverter, CandidateRejectInterface, AgentCommissionInterface, AgentCommissionConverter } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetAccountDashboardList
// post visa - dpt / block - visa => PostAccountDashboard
// get visa - dpt / block - visa / { id } => GetAccountDashboard
// patch visa - dpt / block - visa / { id } => PatchAccountDashboard
// delete visa - dpt / block - visa / { id } => DeleteAccountDashboard

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteAccountDashboardProfessio



export async function readAccountDashboardList() {
  // const path = "/visa-dpt/block-visa-list";
  const path = "/account/account-dashboard-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as AccountDashboardAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(AccountDashboardConverter.toInterface(element));
    }
  }
  return data as AccountDashboardInterface[]
}



export async function readAccountDashboard(id: number) {

  const path = "/visa-dpt/block-visa/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return AccountDashboardConverter.toInterface(response.data as AccountDashboardAdapter)
}




export async function createAgentCommission(id:number,AgentCommission: number) {
  console.log(AgentCommission)
  const path = "/account/agent-commission-add/"+id

  const payload = AgentCommissionConverter.toAdapter({agent_commission:AgentCommission});
  // const payload = {agent_commission:AgentCommission}

  console.log(payload,AgentCommission,"agent_commissionagent_commission")
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function updateAccountDashboard(id: number, AccountDashboard: CandidateRejectInterface) {

  const payload = CandidateRejectConverter.toAdapter(AccountDashboard);
console.log(payload,"aa",AccountDashboard)
  const path = "/account/account-dashboard-cancel/" + id
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteAccountDashboard(id: number) {

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

