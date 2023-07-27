
import { showMessage_v2 } from "../../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { AddImmigrationInterface, AddInvoiceRaiseConverter, ImmigrationAdapter, ImmigrationConverter, ImmigrationInterface, UpdateImmigrationRejectConverter, UpdateImmigrationRejectInterface } from "./type";


// get immigration - list => readImmigrationList

export async function readImmigrationDonePPReleaseList() {
  const path = "/immigration-dpt/immigration-done-pp-release-list";
  
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



export async function createImmigrationDonePPRelease(AddImmigration:AddImmigrationInterface) {
  const path = "/immigration-dpt/immigration-done-pp-release-list";
const list :any ={
  selection_list:AddImmigration,
}
  const payload = AddInvoiceRaiseConverter.toAdapter(list);
 console.log(payload)
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}



export async function updateImmigration(id:number,updateImmigration:UpdateImmigrationRejectInterface) {
  const path = "/immigration-dpt/immigration-dashboard/"+ id;
  
  const payload = UpdateImmigrationRejectConverter.toAdapter(updateImmigration);
  console.log(payload,"payload")
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}






