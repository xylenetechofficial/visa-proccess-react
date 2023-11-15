
import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { ImmigrationCDonePPReleaseConverter, ImmigrationDonePPReleaseAdapter, ImmigrationDonePPReleaseInterface } from "./type";


// get immigration - list => readImmigrationList

export async function readImmigrationDonePPReleaseList(query: {
  status?: string
  page?: number
}) {
  const path = "/immigration-dpt/immigration-done-pp-release-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
    },

  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return ImmigrationCDonePPReleaseConverter.toInterfaceList(response.data as ImmigrationDonePPReleaseAdapter[])
}



export async function createImmigrationDonePPRelease(data_list: ImmigrationDonePPReleaseInterface[]) {
  const path = "/immigration-dpt/immigration-done-pp-release-list";

  const payload = {
    selection_list: ImmigrationCDonePPReleaseConverter.toAdapterList(data_list)
  };

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

export async function updateImmigrationDonePPReleaseList(data_list: ImmigrationDonePPReleaseInterface[]) {
  const path = "/immigration-dpt/immigration-done-pp-release-list";

  const payload = {
    selection_list: ImmigrationCDonePPReleaseConverter.toAdapterList(data_list)
  };

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

export async function updateImmigration(id: number, data: ImmigrationDonePPReleaseInterface) {
  const path = "/immigration-dpt/immigration-dashboard/" + id;

  const payload = ImmigrationCDonePPReleaseConverter.toAdapter(data);

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






