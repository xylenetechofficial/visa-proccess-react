import { CountryInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readCountryList(refresh = false ,page_number?: number) {


  const path = "/masters/country-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
    queryParameters: {
      page: page_number ?? 1,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  return {
    data: response.data as CountryInterface[],
    additional_data: response.additional_data as AdditionalDataInterface,
  } 
}

export async function createCountry(
  country: CountryInterface
) {
  const path = "/masters/country"

  const payload = {
    name: country.name,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateCountry(
  id: number,
  country: CountryInterface
) {


  const payload = {
    name: country.name,
  };

  const path = "/masters/country/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteCountry(id: number) {

  const path = "/masters/country/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
