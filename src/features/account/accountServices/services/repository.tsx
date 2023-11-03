

import { showMessage_v2 } from "../../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../../utils/api_helper";
import { AddServiceChargesInterFace, AddServiceConverter, ServiceChargesConverter, ServiceChargesInterface } from "./type";


export async function readServiceChargesList(query: {
  status?: string
  page?: number
}) {

//   const payload = ServiceChargesByIDConverter.toAdapter(AgentBy);
  const path = `/account/service-charge-list`;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
    },
   
  });
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
 

console.log(response)
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  } 
  return response.data

//   const data: ServiceChargesInterface[] = [];
// console.log(response.data);
// const dataAdapter: ServiceChargesAdapter[] = response.data as ServiceChargesAdapter[];
// if (response.data) {
//   const dataAdapter: ServiceChargesAdapter[] = response.data as ServiceChargesAdapter[];
//   for (let i = 0; i < dataAdapter.length; i++) {
//     const element = dataAdapter[i];
//     data.push(ServiceChargesConverter.toInterface(element));
//   }
// }
// return dataAdapter as ServiceChargesAdapter[]
}







export async function createServiceCharges(ServiceCharges: AddServiceChargesInterFace) {
  console.log(ServiceCharges)
  const path = "/account/service-charge-list"
// const list :any ={
//   "selection_list":ServiceCharges
// }
  const payload = AddServiceConverter.toAdapter(ServiceCharges);

  console.log(payload)
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

