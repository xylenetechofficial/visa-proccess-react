import { UserInterface, UserRole } from "../type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../../utils/api_helper";
import { showMessage_v2 } from "../../../../utils/alert";

export async function readUserList(
  props: {
    user_role_id: number;
    active: number;
    page?: number;
  },
  refresh = false
) {
  const path = "/masters/user-list";

  let queryParameters = {};
  if (props.page)
    queryParameters = {
      page: props.page,
      active: props.active,
    };
  else
    queryParameters = {
      user_role_id: props.user_role_id,
      active: props.active,
    };

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: queryParameters,
    cacheTime: refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return response.data as UserInterface[];
}

export const readBDEList = async () => {
  const data = await readUserList({ active: 1, user_role_id: 11 });
  return data as UserInterface[];
};

export const readDirectorList = async () => {
  const data = await readUserList({ active: 1, user_role_id: 1 });
  return data as UserInterface[];
};

export const readOperationManagerist = async () => {
  const data = await readUserList({ active: 1, user_role_id: 3 });
  return data as UserInterface[];
};

export const readRecruitManagerList = async () => {
  const data = await readUserList({ active: 1, user_role_id: 4 });
  return data as UserInterface[];
};
export const readRecruitSuperVisorList = async () => {
  const data = await readUserList({ active: 1, user_role_id: 5 });
  return data as UserInterface[];
};

export const readRecruitCoordinatorList = async () => {
  const data = await readUserList({ active: 1, user_role_id: 6 });
  return data as UserInterface[];
};

export async function createUser(user: UserInterface) {
  const path = "/masters/user";

  const payload = user;
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });

  if (response.code != 201) {
    return false;
  } else {
    return true;
  }
}

export async function updateUser(id: number, user: UserInterface) {
  const payload = user;

  const path = "/masters/user/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code < 200 || response.code > 299) {
    return false;
  } else {
    return true;
  }
}

export async function deleteUser(id: number) {
  const path = "/masters/user/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

// #############

export async function readUserRoleList() {
  const path = "/masters/role-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return response.data as UserRole[];
}
