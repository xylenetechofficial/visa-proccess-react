import { VisaAuthorisationInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readVisaAuthorisationList(refresh = false, page_number?: number) {


  const path = "/masters/visa-authorisation-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
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

  return response.data as VisaAuthorisationInterface[]
  
}

export async function createVisaAuthorisation(visaAuthorisation: VisaAuthorisationInterface) {
  const path = "/masters/visa-authorisation"

  const payload = {
    name: visaAuthorisation.name,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateVisaAuthorisation(id: number, visaAuthorisation: VisaAuthorisationInterface) {



  const payload = {
    name: visaAuthorisation.name,
  };

  const path = "/masters/visa-authorisation/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteVisaAuthorisation(id: number) {

  const path = "/masters/visa-authorisation/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
