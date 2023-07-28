import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { IndexEwakalaAdapter, IndexEwakalaConverter, IndexEwakalaInterface } from "./type";

export async function readIndexEwakalaList() {
    const path = "/immigration-dpt/index-for-ewakala-list";
  
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
      const dataAdapter = response.data as IndexEwakalaAdapter[];
      for (let i = 0; i < dataAdapter.length; i++) {
        const element = dataAdapter[i];
        data.push(IndexEwakalaConverter.toInterface(element));
      }
    }
  
    return data as IndexEwakalaInterface[]
  }
  