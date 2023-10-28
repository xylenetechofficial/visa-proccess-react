import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { PenaltyChargesAdapter, PenaltyChargesConverter, PenaltyChargesInterface } from "./type";

export async function readPenaltyChargesList(page_number?: number) {
    const path = "/account/penalty-charges-list";
  
    const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
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
     
    return PenaltyChargesConverter.toInterfaceList(response.data as PenaltyChargesAdapter[])
  }



  export async function updatePenaltyChargesItem(data_list: PenaltyChargesInterface) {
    console.log(data_list)
    const path = "/account/penalty-charges/"

    const payload =  PenaltyChargesConverter.toAdapter(data_list)
    
  
    console.log(payload)
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }
  
