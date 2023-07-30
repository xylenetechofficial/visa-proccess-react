// import { CandidateDiscountConverter, CandidateDiscountInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { AccountCandidateAdapter, AccountCandidateConverter, AccountCandidateInterface } from "./type";

// get visa - dpt / block - visa - list => GetCandidateDiscountList
// post visa - dpt / block - visa => PostCandidateDiscount
// get visa - dpt / block - visa / { id } => GetCandidateDiscount
// patch visa - dpt / block - visa / { id } => PatchCandidateDiscount
// delete visa - dpt / block - visa / { id } => DeleteCandidateDiscount

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteCandidateDiscountProfessio



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


export async function createCandidateDiscount(CandidateDiscount: any) {
  console.log(CandidateDiscount)
  const path = "/account/candidate-discount-list"

  const payload = AccountCandidateConverter.toAdapter(CandidateDiscount);

//   console.log(payload)

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

export async function updateCandidateDiscount( CandidateDiscount: any) {
// export async function updateCandidateDiscount( CandidateDiscount: AddCandidateDiscountInterface) {

  // const payload = AddCandidateDiscountConverter.toAdapter(CandidateDiscount);
  const payload =CandidateDiscount

  const path = "/account/candidate-discount-list" 
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}
