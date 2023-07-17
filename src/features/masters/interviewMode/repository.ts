import { InterviewModeAdapter, InterviewModeInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readInterviewModeList(refresh = false) {


  const path = "/masters/interview-mode-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  const data: InterviewModeInterface[] = []

  const dataAdapter = response.data as InterviewModeAdapter[];
  for (let i = 0; i < dataAdapter.length; i++) {
    const element = dataAdapter[i];
    data.push({
      id: element.id,
      name: element.name,
      selectionType: element.selection_type,
    });
  }


  return data
}

export async function createInterviewMode(interviewMode: InterviewModeInterface) {
  const path = "/masters/interview-mode"

  const payload = {
    name: interviewMode.name,
    selection_type: interviewMode.selectionType,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateInterviewMode(id: number,
  interviewMode: InterviewModeInterface) {



    const payload = {
      name: interviewMode.name,
      selection_type: interviewMode.selectionType,
    };

  const path = "/masters/interview-mode/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteInterviewMode(id: number) {

  const path = "/masters/interview-mode/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
