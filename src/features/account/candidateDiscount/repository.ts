import { AddCandidateDiscountConverter, AddCandidateDiscountInterface, AddCandidateDiscountListConverter, CandidateDiscountAdapter, CandidateDiscountAdapter2, CandidateDiscountConverter, CandidateDiscountConverter2, CandidateDiscountInterface, CandidateDiscountInterface2, ServerAdapter, VisaProfesionInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetCandidateDiscountList
// post visa - dpt / block - visa => PostCandidateDiscount
// get visa - dpt / block - visa / { id } => GetCandidateDiscount
// patch visa - dpt / block - visa / { id } => PatchCandidateDiscount
// delete visa - dpt / block - visa / { id } => DeleteCandidateDiscount

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteCandidateDiscountProfessio



export async function readCandidateDiscountList() {
  const path = "/account/candidate-discount-list";

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
    const dataAdapter = response.data as CandidateDiscountAdapter2[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(CandidateDiscountConverter2.toInterface(element));
    }
  }
  return data as CandidateDiscountInterface2[]
  return data 
}



export async function readCandidateDiscount(id: number) {

  const path = "/visa-dpt/block-visa/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return CandidateDiscountConverter.toInterface(response.data as CandidateDiscountAdapter)
}




export async function createCandidateDiscount(CandidateDiscount: CandidateDiscountInterface) {
  console.log(CandidateDiscount)
  const path = "/account/candidate-discount-list"

  const payload = CandidateDiscountConverter.toAdapter(CandidateDiscount);

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

export async function updateCandidateDiscount( CandidateDiscount: any) {
// export async function updateCandidateDiscount( CandidateDiscount: AddCandidateDiscountInterface) {

  const payload = AddCandidateDiscountListConverter.toAdapter(CandidateDiscount);
  // const payload =CandidateDiscount

  const path = "/account/candidate-discount-list" 
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteCandidateDiscount(id: number) {

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

