import { AgencyInterface } from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { UserInterface } from "../user/type";

export async function readAgencyList(refresh = false, page_number?: number) {
  const path = "/masters/agency-list";

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

// masters/role-list
export async function readRoleList() {
  const path = "/masters/role-list";
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,

  });
  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  console.log(response.data)
  return response.data;

}

// get masters/user-list
export async function readUserList(props: { user_role_id: number, active: number },refresh = false) {
  const path = "/masters/user-list";
  const queryParameters = {
    "user_role_id": props.user_role_id,
    "active": props.active
  }
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: queryParameters,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  return response.data as UserInterface[];
}

// post masters/user
export async function createUser(user: UserInterface) {
  const path = "/masters/user"

  const payload = user
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

// get masters/user single user
export async function readSingleUser(id: number) {
  const path = "/masters/user/" + id
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}
// update single user
export async function updateUser(id: number, user: UserInterface) {
  const payload = user
  const path = "/masters/user/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
}

// delete masters/user
export async function deleteUser(id: number) {
  const path = "/masters/user/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
}