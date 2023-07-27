import { showMessage_v2 } from "../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../utils/api_helper";
import { ImmigrationAdapter, ImmigrationConverter, ImmigrationInterface } from "./type";


// get immigration - list => readImmigrationList

export async function readImmigrationList() {
  const path = "/account/reject-cancel-approve-list";

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
    const dataAdapter = response.data as ImmigrationAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ImmigrationConverter.toInterface(element));
    }
  }

  return data as ImmigrationInterface[]
}




