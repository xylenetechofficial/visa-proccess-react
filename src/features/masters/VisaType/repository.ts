import { VisaTypeAdapter, VisaTypeConverter, VisaTypeInterface } from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readVisaTypeList(refresh = false, page_number?: number) {
  const path = "/masters/visa-type-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
    queryParameters: {
      page: page_number ?? 0,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return VisaTypeConverter.toInterfaceList(response.data as VisaTypeAdapter[]);


}

export async function createVisaType(visaType: VisaTypeInterface) {
  const path = "/masters/visa-type";

  const payload = VisaTypeConverter.toAdapter(visaType);
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

export async function updateVisaType(id: number, visaType: VisaTypeInterface) {
  const path = "/masters/visa-type/" + id;

  const payload = VisaTypeConverter.toAdapter(visaType);
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

export async function deleteVisaType(id: number) {
  const path = "/masters/visa-type/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
