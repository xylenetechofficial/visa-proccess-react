import { BlockVisaAdapter, BlockVisaConverter, BlockVisaInterface, ServerAdapter, VisaProfesionInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetBlockVisaList
// post visa - dpt / block - visa => PostBlockVisa
// get visa - dpt / block - visa / { id } => GetBlockVisa
// patch visa - dpt / block - visa / { id } => PatchBlockVisa
// delete visa - dpt / block - visa / { id } => DeleteBlockVisa

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteBlockVisaProfessio



export async function readBlockVisaList(page_number?: number) {
  const path = "/visa-dpt/block-visa-list";

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

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as BlockVisaAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(BlockVisaConverter.toInterface(element));
    }
  }
  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as BlockVisaInterface[]
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

  return BlockVisaConverter.toInterface(response.data as BlockVisaAdapter)
}




export async function createBlockVisa(blockVisa: BlockVisaInterface) {
  console.log(blockVisa)
  const path = "/visa-dpt/block-visa"

  const payload = BlockVisaConverter.toAdapter(blockVisa);

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

export async function updateBlockVisa(id: number, blockVisa: BlockVisaInterface) {

  const payload = BlockVisaConverter.toAdapter(blockVisa);

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteBlockVisa(id: number) {

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

