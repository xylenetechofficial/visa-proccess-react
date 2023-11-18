import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../../utils/api_helper";
import { showMessage_v2 } from "../../../../utils/alert";
import { PermissionGroupInterface } from "../type";

export async function readPermissionGroupList(
  refresh = false,
  page_number?: number
) {
  const path = "/masters/permission-group-list";
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
  return response.data as [];
}

export async function createPermissionGroup(
  permissionGroup: PermissionGroupInterface
) {
  const path = "/masters/permission-group";

  const payload = { ...permissionGroup, id: 0 };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  
  if (response.code != 201) {
    showMessage_v2({ message: response.message, status: response.code });
    return false;
  } else {
    return response.data as {id:number};
  }
}

export async function readSinglePermissionGroup(id: number) {
  const path = "/masters/permission-group/" + id;
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return response.data;
}

// patch  masters/permission-group update a single permission group
export async function updatePermissionGroup(
  permissionGroup: PermissionGroupInterface
) {
  const payload = permissionGroup;

  const path = "/masters/permission-group/" + permissionGroup.id ?? 0;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code < 200 || response.code > 299) {
    showMessage_v2({ message: response.message, status: response.code });
    return false;
  } else {
    return true;
  }
}

// /masters/permission-group/{id}
export async function deletePermissionGroup(id: number) {
  const path = "/masters/permission-group/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
