import { OtherDocsInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readOtherDocsList(refresh = false) {


  const path = "/masters/other-docs-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  return response.data as OtherDocsInterface[];
}

export async function createOtherDocs(otherDocs: OtherDocsInterface) {
  const path = "/masters/other-docs"

  const payload = {
    name: otherDocs.name,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateOtherDocs(id: number, otherDocs: OtherDocsInterface) {



  const payload = {
    name: otherDocs.name,
  };

  const path = "/masters/other-docs/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteOtherDocs(id: number) {

  const path = "/masters/other-docs/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
