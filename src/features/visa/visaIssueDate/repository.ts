import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { VisaIssueDateAdapter, VisaIssueDateConverter, VisaIssueDateInterface } from "./type";



export async function readVisaIssueDate(page_number?: number) {
    const path = "/visa-dpt/visa-issue-date-list";
  
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
  
    const data: VisaIssueDateInterface[] = VisaIssueDateConverter.toInterfaceList(response.data as VisaIssueDateAdapter[])
  
    return data
  }


  export async function updateVisaIssueDate(VisaIssueDateList: VisaIssueDateInterface[]) {

    const payload = {
      selection_list: VisaIssueDateConverter.toAdapterList(VisaIssueDateList)
    }
  
    const path = "/visa-dpt/visa-issue-date-list"
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
   return response
  }


  