import { AccountDashboardAdapter, AccountDashboardConverter, AccountDashboardInterface, ServerAdapter, CandidateRejectConverter, CandidateRejectInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetAccountDashboardList
// post visa - dpt / block - visa => PostAccountDashboard
// get visa - dpt / block - visa / { id } => GetAccountDashboard
// patch visa - dpt / block - visa / { id } => PatchAccountDashboard
// delete visa - dpt / block - visa / { id } => DeleteAccountDashboard

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteAccountDashboardProfessio



export async function readAccountDashboardList(page_number?: number) {
  // const path = "/visa-dpt/block-visa-list";
  const path = "/account/agent-commission/receive-payment-list?bulk_payment_id=0&candidate_id=1";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: page_number ?? 0,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    // const dataAdapter = response.data as AccountDashboardAdapter[];
    const dataAdapter = response.data as any;
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      // data.push(AccountDashboardConverter.toInterface(element));
      data.push(element);
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  // return data as AccountDashboardInterface[]
  return data as any[]
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




export async function createAccountDashboard(AccountDashboard: AccountDashboardInterface) {
  console.log(AccountDashboard)
  const path = "/visa-dpt/block-visa"

  const payload = AccountDashboardConverter.toAdapter(AccountDashboard);

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

