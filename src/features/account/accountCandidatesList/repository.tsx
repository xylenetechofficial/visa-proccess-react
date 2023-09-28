// import { CandidateDiscountConverter, CandidateDiscountInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { AccountCandidateAdapter, AccountCandidateCancelConverter, AccountCandidateCancelConverter2, AccountCandidateCancelInterface, AccountCandidateCancelInterface2, AccountCandidateConverter, AccountCandidateInterface } from "./type";



export async function readCandidateDiscountList() {
  const path = "/account/account-candidate-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  console.log(response,"r")
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data,"SESESE")
  if (response.data) {
    const dataAdapter = response.data as AccountCandidateAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(AccountCandidateConverter.toInterface(element));
    }
  }
  return data as AccountCandidateInterface[]
//   return data 
}


export async function updateCandidate(id:number, CandidateDiscount: AccountCandidateCancelInterface) {

  const payload = AccountCandidateCancelConverter.toAdapter(CandidateDiscount);
  

  const path = "/account/account-candidate/"+ id 
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function createAccountCandidateCancel( AccountDashboard: AccountCandidateCancelInterface2) {

  const payload = AccountCandidateCancelConverter2.toAdapter(AccountDashboard);
console.log(payload,"aa",AccountDashboard)
  const path = "/account/account-candidate"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}
