import { MofaPaymentInterface } from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readMofaPaymentList(refresh = false) {
  const path = "/masters/mofa-payment-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return response.data as MofaPaymentInterface[];
}

export async function createMofaPayment(mofaPayment: MofaPaymentInterface) {
  const path = "/masters/mofa-payment";

  const payload = mofaPayment;
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

export async function updateMofaPayment(
  id: number,
  mofaPayment: MofaPaymentInterface
) {
  const payload = mofaPayment;

  const path = "/masters/mofa-payment/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

export async function deleteMofaPayment(id: number) {
  const path = "/masters/mofa-payment/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
