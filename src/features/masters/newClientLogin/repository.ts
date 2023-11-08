import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { ClientLogin } from "./type";

export async function readClientLoginList(props: {
  refresh?: boolean;
  page?: number;
}) {
  const path = "/masters/client-login-list";

  let queryParameters = {};
    queryParameters = {
      page: props.page,
    };

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: queryParameters,
    cacheTime: props.refresh ? 0 : 1,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return response.data as ClientLogin[];
}

export async function createClientLogin(clientLogin: ClientLogin) {
  const path = "/masters/client-login";

  const payload = clientLogin;
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

export async function readClientLogin(
  id: number,
) {

  const path = "/masters/client-login/" + id;
  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code < 200 || response.code > 299) {
    return false;
  } else {
    return response.data as ClientLogin
  }
}

export async function updateClientLogin(
  clientLogin: ClientLogin
) {
  const payload = clientLogin;

  const path = "/masters/client-login/" + clientLogin.id;
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

export async function deleteClientLogin(id: number) {
  const path = "/masters/client-login/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}
