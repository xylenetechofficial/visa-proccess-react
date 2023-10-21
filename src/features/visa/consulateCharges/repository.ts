import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { ConsulateChargesAdapter, ConsulateChargesConverter, ConsulateChargesInterface} from "./type";

export async function readConsulateChargesList() {
    const path = "/visa-dpt/consulate-charges-list";
  
    const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
    });
  
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
     
    return ConsulateChargesConverter.toInterfaceList(response.data as ConsulateChargesAdapter[])
  }
  

  export async function createConsulateCharges(consulateCharges: ConsulateChargesInterface) {
    console.log(consulateCharges)
    const path = "/visa-dpt/consulate-charges-list"
  
    const payload = ConsulateChargesConverter.toAdapter(consulateCharges);
  
    console.log(payload)
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