import { MolReceivedAdapter, MolReceivedConverter, MolReceivedInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function ReadMolRecievedData(page_number?: number, status?: string) {
  const path = "/visa-dpt/work-permit-receive-from-company-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: page_number ?? 0,
      status: status ?? ''
    },

  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface

  );

  const data: MolReceivedInterface[] = MolReceivedConverter.toInterfaceList(response.data as MolReceivedAdapter[])

  return data
}



export async function createMolReceivedData(candidateList: MolReceivedInterface[]) {

  const payload = {
    selection_list: MolReceivedConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/work-permit-receive-from-company-list"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
  return response
}

export async function updateMolReceivedData(candidateList: MolReceivedInterface[]) {

  const payload = {
    selection_list: MolReceivedConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/work-permit-receive-from-company-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
  return response
}

