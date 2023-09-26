

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { PaymentReceivedInterface, PaymentReceivedAdapter, PaymentReceivedConverter } from "./type";


export async function readPaymentReceivedList() {

//   const payload = ServiceChargesByIDConverter.toAdapter(AgentBy);
  const path = `/account/receive-payment-candidate-list`;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
   
  });
console.log(response)
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  } 
//   return response.data
  const data: PaymentReceivedInterface[] = [];
console.log(response.data);
const dataAdapter: PaymentReceivedAdapter[] = response.data as PaymentReceivedAdapter[];
if (response.data) {
  const dataAdapter: PaymentReceivedAdapter[] = response.data as PaymentReceivedAdapter[];
  for (let i = 0; i < dataAdapter.length; i++) {
    const element = dataAdapter[i];
    data.push(PaymentReceivedConverter.toInterface(element));
  }
}
return dataAdapter as PaymentReceivedAdapter[]
}







export async function createServiceCharges(ServiceCharges: PaymentReceivedInterface) {
  console.log(ServiceCharges)
  const path = "/account/service-charge-list"
// const list :any ={
//   "selection_list":ServiceCharges
// }
  const payload = PaymentReceivedConverter.toAdapter(ServiceCharges);

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

