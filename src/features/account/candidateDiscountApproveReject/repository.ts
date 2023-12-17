import { CandidateDiscountApproveRejectAdapter, CandidateDiscountApproveRejectConverter, CandidateDiscountApproveRejectInterface,  } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetBlockVisaList
// post visa - dpt / block - visa => PostBlockVisa
// get visa - dpt / block - visa / { id } => GetBlockVisa
// patch visa - dpt / block - visa / { id } => PatchBlockVisa
// delete visa - dpt / block - visa / { id } => DeleteBlockVisa

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteBlockVisaProfessio



export async function readCandidateDiscountList(query: {
  status?: string
  page?: number
}) {
  const path = "/account/candidate-discount-approve-list";

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

  const data = response.data;
  // const data = []
  // console.log(response.data)
  // if (response.data) {
  //   const dataAdapter = response.data as CandidateDiscountApproveRejectAdapter[];
  //   for (let i = 0; i < dataAdapter.length; i++) {
  //     const element = dataAdapter[i];
  //     data.push(CandidateDiscountApproveRejectConverter.toInterface(element));
  //   }
  // }
  // return data as CandidateDiscountApproveRejectInterface[]

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data 
}



export async function readBlockVisa(id: number) {

  const path = "/visa-dpt/block-visa/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return CandidateDiscountApproveRejectConverter.toInterface(response.data as CandidateDiscountApproveRejectAdapter)
}




export async function createBlockVisa(blockVisa: CandidateDiscountApproveRejectInterface) {
  console.log(blockVisa)
  const path = "/visa-dpt/block-visa"

  const payload = CandidateDiscountApproveRejectConverter.toAdapter(blockVisa);

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

export async function updateCandidateDiscountApproveReject(blockVisa: any) {
// export async function updateBlockVisa(blockVisa: CandidateDiscountApproveRejectInterface) {

  // const payload = CandidateDiscountApproveRejectConverter.toAdapter(blockVisa);
  const payload = blockVisa;
console.log(payload,"aa")
  const path = "/account/candidate-discount-approve-list" 
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
export async function updateBlockVisa(blockVisa: CandidateDiscountApproveRejectInterface) {
  const payload = blockVisa;
  console.log(payload,"aa")
    // const path = "/account
}



