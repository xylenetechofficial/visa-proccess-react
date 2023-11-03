import { AccountDashboardAdapter, AccountDashboardConverter, AccountDashboardInterface, ServerAdapter, CandidateRejectConverter, CandidateRejectInterface, DelhiOtherDailyPaymentAdapter, DelhiOtherDailyPaymentConverter, DelhiOtherDailyPaymentInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readAccountDashboardList(query: {
  status?: string
  page?: number
}) {
  // const path = "/visa-dpt/block-visa-list";
  const path = "/account/delhi-agent-payment-list";

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
    const dataAdapter = response.data as DelhiOtherDailyPaymentAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(DelhiOtherDailyPaymentConverter.toInterface(element));
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface

  );


  return data as DelhiOtherDailyPaymentInterface[]
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




export async function createAccountDashboard(AccountDashboard: DelhiOtherDailyPaymentInterface) {
  console.log(AccountDashboard)
  const path = "/account/delhi-agent-payment/add-in-account"

  const payload = DelhiOtherDailyPaymentConverter.toAdapter(AccountDashboard);

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

