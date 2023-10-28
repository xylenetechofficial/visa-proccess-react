import { AgreementAdapter,  AgreementInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetAgreementList
// post visa - dpt / block - visa => PostAgreement
// get visa - dpt / block - visa / { id } => GetAgreement
// patch visa - dpt / block - visa / { id } => PatchAgreement
// delete visa - dpt / block - visa / { id } => DeleteAgreement

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteAgreementProfessio



export async function readAgreementList() {
  const path = "/visa-dpt/block-visa-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  // if (response.data) {
  //   const dataAdapter = response.data as AgreementAdapter[];
  //   for (let i = 0; i < dataAdapter.length; i++) {
  //     const element = dataAdapter[i];
  //     data.push(AgreementConverter.toInterface(element));
  //   }
  // }
  // return data as AgreementInterface[]
  return response.data as AgreementInterface[]
}



export async function readAgreement(id: number, page_number?: number) {

  const path = "/visa-dpt/block-visa/" + id;

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

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  // return AgreementConverter.toInterface(response.data as AgreementAdapter)
  return response.data as AgreementInterface
}




export async function createAgreement(Agreement: AgreementInterface) {
  console.log(Agreement)
  const path = "/visa-dpt/block-visa"

  // const payload = AgreementConverter.toAdapter(Agreement);
  const payload = Agreement

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

export async function updateAgreement(id: number, Agreement: AgreementInterface) {

  // const payload = AgreementConverter.toAdapter(Agreement);
  const payload = Agreement;

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteAgreement(id: number) {

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

