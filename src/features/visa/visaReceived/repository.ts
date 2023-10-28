import {  VisaReceivedAdapter, VisaReceivedConverter, VisaReceivedInterface, } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { VisaAllocationConverter } from "../indexVisa/type";




export async function readVisaReceivedDate(page_number?: number) {
  const path = "/visa-dpt/visa-received-list";

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

  const data: VisaReceivedInterface[] = VisaReceivedConverter.toInterfaceList(response.data as VisaReceivedAdapter[])

  return data
}

export async function updateVisaReceivedData(candidateList: VisaReceivedInterface[]) {

  const payload = {
    selection_list: VisaReceivedConverter.toAdapterList(candidateList)
  }

  const path = "/visa-dpt/visa-received-list"
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response
}

