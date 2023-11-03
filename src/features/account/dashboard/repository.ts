import { AccountDashboardAdapter, AccountDashboardConverter, AccountDashboardInterface, ServerAdapter, CandidateRejectConverter, CandidateRejectInterface, AccountDashboardInterface2, AccountDashboardConverter2 } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetAccountDashboardList
// post visa - dpt / block - visa => PostAccountDashboard
// get visa - dpt / block - visa / { id } => GetAccountDashboard
// patch visa - dpt / block - visa / { id } => PatchAccountDashboard
// delete visa - dpt / block - visa / { id } => DeleteAccountDashboard

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteAccountDashboardProfessio



export async function readAccountDashboardList(
  query: {
    status?: string
    page?: number
  }
) {
  // const path = "/visa-dpt/block-visa-list";
  const path = "/account/account-dashboard-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
    },
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

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
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



export async function createAccountDashboard2( AccountDashboard: AccountDashboardInterface2) {

  const payload = AccountDashboardConverter2.toAdapter(AccountDashboard);
console.log(payload,"aa",AccountDashboard)
  const path = "/account/account-dashboard"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}
