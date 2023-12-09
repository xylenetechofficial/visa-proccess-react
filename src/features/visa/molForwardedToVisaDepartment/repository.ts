import { MolForwardedTovisaDepartmentDataAdapter, MolForwardedTovisaDepartmentDataConverter, MolForwardedTovisaDepartmentDataInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readMolForwardedTovisaDept(page_number?: number, status?:string) {
  const path = "/visa-dpt/mol-forward-to-visa-dpt-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      status: status ?? "",
      page: page_number ?? 0,
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );


  const data: MolForwardedTovisaDepartmentDataInterface[] = MolForwardedTovisaDepartmentDataConverter.toInterfaceList(response.data as MolForwardedTovisaDepartmentDataAdapter[])

  return data
}

export async function createMolForwardedToVisaDeptData(candidateList: MolForwardedTovisaDepartmentDataInterface[]) {

  const payload = {
    selection_list: MolForwardedTovisaDepartmentDataConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/mol-forward-to-visa-dpt-list"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
  return response
}



export async function updateMolForwardedToVisaDeptData(candidateList: MolForwardedTovisaDepartmentDataInterface[]) {

  const payload = {
    selection_list: MolForwardedTovisaDepartmentDataConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/mol-forward-to-visa-dpt-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
  return response
}

