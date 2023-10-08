import { VendorInterface } from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readVendorList(refresh = false) {
  const path = "/masters/vendor-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
  });



  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return response.data as VendorInterface[];
}

export async function createVendor(vendor: VendorInterface) {
  const path = "/masters/vendor";

  const payload = {
    name: vendor.name,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

export async function updateVendor(id: number, vendor: VendorInterface) {
  const payload = {
    name: vendor.name,
  };

  const path = "/masters/vendor/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

export async function deleteAgency(id: number) {
  const path = "/masters/vendor/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}