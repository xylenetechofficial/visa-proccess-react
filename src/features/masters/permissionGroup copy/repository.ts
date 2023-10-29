
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";


// masters/permission-group-list
export async function readPermissionGroupList(refresh = false, page_number?: number) {
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

// masters/permission-group 
export async function createPermissionGroup(permissionGroup: any) {
  const path = "/masters/permission-group";

  const payload = {
    name: permissionGroup,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

// get /masters/permission-group single permission group
export async function readSinglePermissionGroup(id: number) {
  const path = "/masters/permission-group/" + id
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return response.data;
}

// patch  masters/permission-group update a single permission group
export async function updatePermissionGroup(id: number, permission: any) {
  const payload = {
    name: permission,
  };

  const path = "/masters/permission-group/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

// /masters/permission-group/{id}
export async function deletePermissionGroup(id: number) {
  const path = "/masters/permission-group/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
