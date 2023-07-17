import { AccountDashboardAdapter, AccountDashboardConverter, AccountDashboardInterface, ServerAdapter, CandidateRejectConverter, CandidateRejectInterface, BulkPaymentInterface, BulkPaymentConverter } from "./type";
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
  const path = "/account/agent-commission-list";

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



export async function readAccount(id: string) {

  const path = "/account/agent-commission-add?passport_no=" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return AccountDashboardConverter.toInterface(response.data as AccountDashboardAdapter)
}


export async function readAgentPaymentReceivedList(id: number) {

  const path="/account/agent-commission/receive-payment-list?bulk_payment_id=0&candidate_id="+ id

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  // return AccountDashboardConverter.toInterface(response.data as AccountDashboardAdapter)
  return response.data;
}




export async function createBulkPayment(bulkPayment: BulkPaymentInterface) {
  console.log(bulkPayment)
  const path = "/account/agent-commission/bulk-payment"

  const payload = BulkPaymentConverter.toAdapter(bulkPayment);

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
export async function createCashPayment(bulkPayment: BulkPaymentInterface) {
  console.log(bulkPayment)
  const path = "/account/agent-commission/cash-payment"

  const payload = BulkPaymentConverter.toAdapter(bulkPayment);

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

