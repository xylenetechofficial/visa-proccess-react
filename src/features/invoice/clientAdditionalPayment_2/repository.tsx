import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { ClientAdditionalPaymentConverter, ClientAdditionalPaymentInterface, PaymentConverter, PaymentInterface, SuspenseAdjustAmountConverter, SuspenseAdjustAmountInterface } from "./type";

export async function readClientAdditionalPaymentList() {
  const path = "/invoice-dpt/client-additional-payment-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return ClientAdditionalPaymentConverter.toInterfaceList(response.data as ClientAdditionalPaymentInterface[])
}

export async function readAdjustAmountList(company_id: number) {
  const path = "/invoice-dpt/client-suspend-amount/adjust-amount-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      company_id: company_id
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return SuspenseAdjustAmountConverter.toInterfaceList(response.data as SuspenseAdjustAmountInterface[])
}

export async function readPaymentList(invoice_number: string) {
  const path = "/invoice-dpt/client-additional-payment/payment-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      invoice_number: invoice_number
    }
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  return PaymentConverter.toInterfaceList(response.data as PaymentInterface[])
}



export async function addPayment(item: PaymentInterface) {
  const path = "/invoice-dpt/client-additional-payment";

  const payload = PaymentConverter.toAdapter(item);

  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}



export async function updatePaymentList(list: PaymentInterface[]) {
  const path = "/invoice-dpt/client-additional-payment-list";

  const payload = {
    payment_list: PaymentConverter.toAdapterList(list)
  }

  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function deletePayment(id: number) {

  const path = "/invoice-dpt/client-additional-payment/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}






