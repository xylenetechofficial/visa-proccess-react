import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { PenaltyChargesAdapter, PenaltyChargesConverter, PenaltyChargesInterface } from "./type";

export async function readPenaltyChargesList(query: {
  status?: string
  page?: number
}) {
    const path = "/account/penalty-charges-list";
  
    const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
      queryParameters: {
        page: query.page ?? 0,
        status: query.status ?? "",
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
    const path = "/account/penalty-charges/"+data_list.id
    const payload =  PenaltyChargesConverter.toAdapter(data_list)  
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  
  }
  

