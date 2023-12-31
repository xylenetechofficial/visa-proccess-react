import { CompanyInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readCompanyList(refresh = false) {


  const path = "/masters/company-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
 
  return response.data as CompanyInterface[];
}

export async function createCompany(company: CompanyInterface) {
  const path = "/masters/company"

  const payload = {
    name: company.name,
    code: company.code,
    country: company.country,

  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateCompany(id: number, company: CompanyInterface) {



  const payload = {
    name: company.name,
    code: company.code,
    country: company.country,

  };

  const path = "/masters/company/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteCompany(id: number) {

  const path = "/masters/company/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
