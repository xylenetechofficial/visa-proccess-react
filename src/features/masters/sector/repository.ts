import { SectorInterface } from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readSectorList(refresh = false, page_number?: number) {
  const path = "/masters/sector-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
    queryParameters: {
      page: page_number ?? 1,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return {
    data: response.data as SectorInterface[],
    additional_data: response.additional_data as AdditionalDataInterface,
  }

}

export async function createSector(sector: SectorInterface) {
  const path = "/masters/sector";

  const payload =sector;
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
  return response
}

export async function updateSector(id: number, sector: SectorInterface) {
  const payload = {
    name: sector.name,
  };

  const path = "/masters/sector/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  return response

}

export async function deleteSector(id: number) {
  const path = "/masters/sector/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
