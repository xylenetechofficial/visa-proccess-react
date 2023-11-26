import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { CandidateReverseToDeployeMentAdapter, CandidateReverseToDeployeMentInterface } from "./type";

export async function readCandidateReverseToUnderdeploymentList(refresh = false, page_number?: number) {
    const path = "/masters/candidate-reverse-to-underployment-list";
      const response = await ApiHelper.get(path, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT,
      cacheTime: refresh ? 0 : 1,
      queryParameters: {
        page: page_number ?? 0,
      },
    });
      if (response.code != 200) {
      showMessage_v2({ message: response.message, status: response.code })
    }
    const data : CandidateReverseToDeployeMentInterface[]= [];
    const dataAdapter = response.data as CandidateReverseToDeployeMentAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(element);
    }
    await PaginationManager.setData(
      response.additional_data as AdditionalDataInterface
    );
    return  data as CandidateReverseToDeployeMentInterface[]  
  }
  

  export async function createCandidateReverseToUnderdeployement(item: CandidateReverseToDeployeMentInterface) {
    const path = `/masters/candidate-reverse-to-underployment/${item.id}`
    const payload = item;
    const response = await ApiHelper.post(path, payload, {
      contentType: ContentType.json,
      tokenType: AuthTokenType.JWT
    })
    showMessage_v2({ message: response.message, status: response.code })
  }
  