
import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { ImmigrationAdapter, ImmigrationConverter, ImmigrationInterface } from "./type";


// get immigration - list => readImmigrationList

export async function readImmigrationList(page_number?: number) {
  const path = "/immigration-dpt/immigration-dashboard-list";

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

  return ImmigrationConverter.toInterfaceList(response.data as ImmigrationAdapter[])
}



export async function createImmigrationList(data_list: ImmigrationInterface[]) {
  const path = "/immigration-dpt/immigration-dashboard-list";

  const payload = {
    selection_list: ImmigrationConverter.toAdapterList(data_list)
  }

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



export async function updateImmigration(id: number, data: ImmigrationInterface) {
  const path = "/immigration-dpt/immigration-dashboard/" + id;

  const payload = ImmigrationConverter.toAdapter(data);

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






