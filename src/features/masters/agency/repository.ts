import { AgencyInterface } from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readAgencyList(refresh = false) {
  const path = "/masters/agency-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return response.data as AgencyInterface[];
}

export async function createAgency(agency: AgencyInterface) {
  const path = "/masters/agency";

  const payload = {
    name: agency.name,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

export async function updateAgency(id: number, agency: AgencyInterface) {
  const payload = {
    name: agency.name,
  };

  const path = "/masters/agency/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

export async function deleteAgency(id: number) {
  const path = "/masters/agency/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
