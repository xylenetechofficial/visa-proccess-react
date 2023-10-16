import { InterviewSectorInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readInterviewSectorList(refresh = false ,page_number?: number) {


  const path = "/masters/interview-sector-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
    queryParameters: {
      page: page_number ?? 1,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  return {
    data: response.data as InterviewSectorInterface[],
    additional_data: response.additional_data as AdditionalDataInterface,
}
 
}

export async function createInterviewSector(interviewSector: InterviewSectorInterface) {
  const path = "/masters/interview-sector"

  const payload = {
    name: interviewSector.name,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateInterviewSector(id: number, interviewSector: InterviewSectorInterface) {



  const payload = {
    name: interviewSector.name,
  };

  const path = "/masters/interview-sector/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteInterviewSector(id: number) {

  const path = "/masters/interview-sector/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
