import { VisaTypeAdapter, VisaTypeConverter, VisaTypeInterface } from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readVisaTypeList(refresh = false) {
  const path = "/masters/visa-type-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
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
