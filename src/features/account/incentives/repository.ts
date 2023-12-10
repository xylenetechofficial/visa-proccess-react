import {  AddIncentiveConverter, IncentiveAdapter, IncentiveConverter, IncentiveInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";


export async function readIncentiveList( value:string, query: {
  status?: string
  page?: number
}) {
  const path = "/account/incentive-list";

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
    const dataAdapter = response.data as IncentiveAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(IncentiveConverter.toInterface(element));
    }
  }
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as IncentiveInterface[]
}

export async function createIncentive(AccountDashboard: any) {
  
  const path = "/account/incentive-list"
  const list :any ={job_order_list:AccountDashboard}
  const payload = AddIncentiveConverter.toAdapter(list);
  
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

export async function updateIncentiveList(AccountDashboard: any) {
  
  const path = "/account/incentive-list"
  const list :any ={job_order_list:AccountDashboard}
  const payload = AddIncentiveConverter.toAdapter(list);
  
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
