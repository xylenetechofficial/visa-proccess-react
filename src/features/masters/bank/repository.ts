import { BankAdapter, BankInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readBankList(refresh = false) {


  const path = "/masters/bank-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  const data: BankInterface[] = [];
  const dataAdapter = response.data as BankAdapter[];
  for (let i = 0; i < dataAdapter.length; i++) {
    const element = dataAdapter[i];
    data.push({
      id: element.id,
      name: element.name,
      visaAuthorisation: element.visa_authorisation,
    });
  }
  return data as BankInterface[];
}

export async function createBank(bank: BankInterface) {
  const path = "/masters/bank"

  const payload = {
    name: bank.name,
    visa_authorisation: bank.visaAuthorisation,

  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateBank(id: number, bank: BankInterface) {



  const payload = {
    name: bank.name,
    visa_authorisation: bank.visaAuthorisation,

  };

  const path = "/masters/bank/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteBank(id: number) {

  const path = "/masters/bank/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
