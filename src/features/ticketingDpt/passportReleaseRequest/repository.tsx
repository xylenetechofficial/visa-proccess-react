
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddPassportRequestConverter, PassportReleaseRequestAdapter, PassportReleaseRequestConverter, PassportReleaseRequestInterface } from "./type";


export async function readPassportReleaseRequestList() {
  const path = "/ticketing-dpt/passport-release-request-list";
  
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as PassportReleaseRequestAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(PassportReleaseRequestConverter.toInterface(element));
    }
  }

  return data as PassportReleaseRequestInterface[]
}



export async function createPassportReleaseRequest(PassportReleaseRequest:PassportReleaseRequestInterface[]) {
    const path = "/ticketing-dpt/passport-release-request-list";
  const list:any ={
    selection_list:PassportReleaseRequest
  }
    const payload = AddPassportRequestConverter.toAdapter(list);
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
  
    const data = []
    console.log(response.data)
    if (response.data) {
      const dataAdapter = response.data as PassportReleaseRequestAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(PassportReleaseRequestConverter.toInterface(element));
      }
    }
  
    return data as PassportReleaseRequestInterface[]
  }
  
  
  export async function updatePassportReleaseRequest( PassportReleaseRequest: PassportReleaseRequestInterface) {

    const payload = PassportReleaseRequestConverter.toAdapter(PassportReleaseRequest);
  
    const path = "/ticketing-dpt/passport-release-request-list"
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }



