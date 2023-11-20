

// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { ClientPaymentAddInterface, ClientPaymentAddAdapter, ClientPaymentAddConverter, ClientPaymentSingleAddInterface, ClientPaymentSingleAddConverter, ClientAdditionalPaymentSingleUpdateConverter, ClientPaymentSingleUpdateInterface } from "./type";

export async function readClientAdditionalPaymentList(
  queryParameters: {
    page: number
  }
) {
  const path = "/invoice-dpt/client-additional-payment-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: queryParameters,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as ClientPaymentAddAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ClientPaymentAddConverter.toInterface(element));
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as ClientPaymentAddInterface[]
}



export async function createCandidatesTicketCharges(CandidatesTicketCharges:ClientPaymentAddInterface) {
    const path = "/invoice-dpt/candidates-ticket-charge-list";
  const list :any ={
    selection_list:CandidatesTicketCharges,
  }
    const payload = ClientPaymentAddConverter.toAdapter(list);
   
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
  

export async function createClientPayment(clientPayment:ClientPaymentSingleAddInterface) {
    const path = "/invoice-dpt/client-payment";
  const list :any =clientPayment;
  console.log(clientPayment.amount,"llpp")
    const payload = ClientPaymentAddConverter.toAdapter(list);
   
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
export async function createBulkClientPayment(clientPayment:ClientPaymentSingleAddInterface) {
    const path = "/invoice-dpt/client-payment";
  const list :any ={"payment_list":clientPayment};
    const payload = ClientPaymentAddConverter.toAdapter(list);
   
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
  

export async function updateClientSinglePayment(id:number,clientPayment:any) {
    const path = "/invoice-dpt/client-additional-payment/"+ id;
    const list :ClientPaymentSingleUpdateInterface ={
      amount:clientPayment[0]?.amount,
      date:clientPayment[0]?.date,
      description:clientPayment[0]?.description,
    }
    const payload = ClientAdditionalPaymentSingleUpdateConverter.toAdapter(list);
    console.log(payload,"payload")
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
  

  

export async function updateBulkClientPaymentList( AccountDashboard: any) {

    const payload :any  ={"payment_list": AccountDashboard};
  console.log(payload,"aa",AccountDashboard)
    const path = "/invoice-dpt/client-additional-payment-list";
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
    showMessage_v2({ message: response.message, status: response.code })
    if (response.code > 199 && response.code < 300) {
      return true;
    }
    return false;
  }
export async function updateClientPayment( AccountDashboard: any) {

    const payload :any  ={"payment_list": AccountDashboard};
  console.log(payload,"aa",AccountDashboard)
    const path = "/invoice-dpt/client-payment-list";
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
    showMessage_v2({ message: response.message, status: response.code })
    if (response.code > 199 && response.code < 300) {
      return true;
    }
    return false;
  }
  
  export async function deleteAdditionalPayment(id: number) {
  
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
  
  
  



