
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { MolReceivedAdapter, MolReceivedConverter, MolReceivedInterface } from "./type";




export async function ReadMolRecievedData() {
  const path = "/visa-dpt/mol-submitted-to-company-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data: MolReceivedInterface[] = MolReceivedConverter.toInterfaceList(response.data as MolReceivedAdapter[])

  return data
}




export async function updateMolReceivedData(candidateList: MolReceivedInterface[]) {

  const payload = {
    selection_list: MolReceivedConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/mol-submitted-to-company-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response
}

