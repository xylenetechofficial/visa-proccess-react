import {  AddIncentiveConverter, IncentiveAdapter, IncentiveConverter, IncentiveInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetAccountDashboardList
// post visa - dpt / block - visa => PostAccountDashboard
// get visa - dpt / block - visa / { id } => GetAccountDashboard
// patch visa - dpt / block - visa / { id } => PatchAccountDashboard
// delete visa - dpt / block - visa / { id } => DeleteAccountDashboard

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteAccountDashboardProfessio



export async function readAccountDashboardList( value:string,) {
  const path = "/account/incentive-list?status="+ value;

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
    const dataAdapter = response.data as IncentiveAdapter[];
    // const dataAdapter = response.data as any;
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(IncentiveConverter.toInterface(element));
      // data.push(element);
    }
  }
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as IncentiveInterface[]
  // return data as any
}






// export async function createAccountDashboard(AccountDashboard: AccountDashboardInterface) {
export async function createAccountDashboard(AccountDashboard: any) {
  
  const path = "/account/incentive-list"
  const list :any ={job_order_list:AccountDashboard}
  const payload = AddIncentiveConverter.toAdapter(list);
  // const payload = AccountDashboard;

  
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
