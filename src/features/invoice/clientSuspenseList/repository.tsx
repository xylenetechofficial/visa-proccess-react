
// get immigration - list => readImmigrationList

import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { ClientSuspenseAdapter, ClientSuspenseConverter, ClientSuspenseInterface } from "./type";

export async function readClientSuspenseList() {
  const path = "/invoice-dpt/client-suspend-amount-list";

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
    const dataAdapter = response.data as ClientSuspenseAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ClientSuspenseConverter.toInterface(element));
    }
  }

  return data as ClientSuspenseInterface[]
}



export async function createClientSuspense(ClientSuspense:ClientSuspenseInterface) {
    const path = "/invoice-dpt/client-suspend-amount";
  
    const payload = ClientSuspenseConverter.toAdapter(ClientSuspense);
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
  
    const data = []
    console.log(response.data)
    if (response.data) {
      const dataAdapter = response.data as ClientSuspenseAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(ClientSuspenseConverter.toInterface(element));
      }
    }
  
    return data as ClientSuspenseInterface[]
  }
  
  
export async function updateClientSuspense( id:number, AccountDashboard: any) {

  const payload :any  = AccountDashboard
console.log(payload,"aa",AccountDashboard)
  const path = "/invoice-dpt/client-suspend-amount/"+id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteAccountDashboard(id: number) {

  const path = "/account/agent-bulk-payment/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}






