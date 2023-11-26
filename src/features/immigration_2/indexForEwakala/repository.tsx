import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { IndexEwakalaAdapter, IndexEwakalaConverter, IndexEwakalaInterface } from "./type";

export async function readIndexEwakalaList(page_number?: number) {
    const path = "/immigration-dpt/index-for-ewakala-list";
  
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
  
    const data = []
    console.log(response.data)
    if (response.data) {
      const dataAdapter = response.data as IndexEwakalaAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(IndexEwakalaConverter.toInterface(element));
      }
    }
    await PaginationManager.setData(
      response.additional_data as AdditionalDataInterface
    );
  
    return data as IndexEwakalaInterface[]
  }


  export async function updateEwakalaeDate(EwakalaeDateList: IndexEwakalaInterface[]) {

    const payload = {
      selection_list: IndexEwakalaConverter.toAdapterList(EwakalaeDateList)
    }
  
    const path = "/immigration-dpt/index-for-ewakala-list"
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
   return response
  }
  
  export async function fetchDemanDetailsList(code:number) {
    const path =`/immigration-dpt/index-for-ewakala/visa-profession-list`;
    const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
      queryParameters: {
        party_code:code
      },
    });
    if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
    return response.data;
  }