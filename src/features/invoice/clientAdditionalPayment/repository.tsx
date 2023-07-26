

// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { ClientPaymentAddInterface, ClientPaymentAddAdapter, ClientPaymentAddConverter, ClientPaymentSingleAddInterface, ClientPaymentSingleAddConverter, ClientAdditionalPaymentSingleUpdateConverter } from "./type";

export async function readClientAdditionalPaymentList() {
  const path = "/invoice-dpt/client-additional-payment-list";

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
    const dataAdapter = response.data as ClientPaymentAddAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ClientPaymentAddConverter.toInterface(element));
    }
  }

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
  

export async function updateClientSinglePayment(id:number,clientPayment:ClientPaymentSingleAddInterface) {
    const path = "/invoice-dpt/client-additional-payment/"+ id;
  const list :any =clientPayment;
  console.log(id, clientPayment,"aa")
    const payload = ClientAdditionalPaymentSingleUpdateConverter.toAdapter(list);
   
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
    const path = "/invoice-dpt/client-payment-list";
    const response = await ApiHelper.patch(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
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
  
  }
  
  export async function deleteAdditionalPayment(id: number) {
  
    const path = "/invoice-dpt/client-additional-payment/" + id
    const response = await ApiHelper.delete(path, {
      tokenType: AuthTokenType.JWT
    })
  
    showMessage_v2({ message: response.message, status: response.code })
  
  }
  
  
  



