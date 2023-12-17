
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import {  PassportReleaseRequestAdapter, PassportReleaseRequestConverter, PassportReleaseRequestInterface } from "./type";


export async function readPassportReleaseRequestList(query: {
  status?: string
  page?: number
}) {
  const path = "/ticketing-dpt/passport-release-request-list";
  
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

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as PassportReleaseRequestAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(PassportReleaseRequestConverter.toInterface(element));
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as PassportReleaseRequestInterface[]
}



export async function createPassportReleaseRequest(PassportReleaseRequest:PassportReleaseRequestInterface[]) {
    const path = "/ticketing-dpt/passport-release-request-list";
  
    const payload = PassportReleaseRequestConverter.toAdapterList(PassportReleaseRequest);
    console.log(payload)
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
      return false;
    } 
    return true
  }
  
  
  export async function updatePassportReleaseRequest( PassportReleaseRequest: PassportReleaseRequestInterface[]) {
    const payload ={selection_list: PassportReleaseRequestConverter.toAdapterList(PassportReleaseRequest)};
    const path = "/ticketing-dpt/passport-release-request-list"
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
      return false;
    } 
    return true
  
  }



