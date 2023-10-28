import { MolForwardedTovisaDepartmentDataAdapter, MolForwardedTovisaDepartmentDataConverter, MolForwardedTovisaDepartmentDataInterface, MolWorkPermitCancelConverter2, MolWorkPermitCancelInterface2 } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readMolForwardedTovisaDept() {
  const path = "/visa-dpt/mol-work-permit-cancel-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      status: status ?? ""
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data: MolForwardedTovisaDepartmentDataInterface[] = MolForwardedTovisaDepartmentDataConverter.toInterfaceList(response.data as MolForwardedTovisaDepartmentDataAdapter[])

  return data
}



export async function updateMolWorkPermitCancelData(candidateList: MolForwardedTovisaDepartmentDataInterface[]) {

  const payload = {
    selection_list: MolForwardedTovisaDepartmentDataConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/mol-work-permit-cancel"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
  return response
}

export async function addMolWorkPermitCancel(data: MolWorkPermitCancelInterface2) {

  const payload = MolWorkPermitCancelConverter2.toAdapter(data)

  const path = "/visa-dpt/mol-work-permit-cancel"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
  return response
}