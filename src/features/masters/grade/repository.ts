import { GradeInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readGradeList(refresh = false ,page_number?: number) {


  const path = "/masters/grade-list";

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
    data: response.data as GradeInterface[],
    additional_data: response.additional_data as AdditionalDataInterface,
}

}

export async function createGrade(grade: GradeInterface) {
  const path = "/masters/grade"

  const payload = {
    name: grade.name,
    point: grade.point
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateGrade(id: number, grade: GradeInterface) {



  const payload = {
    name: grade.name,
    point: grade.point
  };

  const path = "/masters/grade/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteGrade(id: number) {

  const path = "/masters/grade/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
