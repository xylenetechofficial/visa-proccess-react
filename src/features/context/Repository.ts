import { PermissionNavigationInterface } from "../../componenets/model";
import { showMessage_v2 } from "../../utils/alert";
import { ApiHelper, AuthTokenType, ContentType } from "../../utils/api_helper";
import { UserInterface } from "./Model";

export const JwtRestApi = async () => {
  const path = "/user";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  if (response.code != 200) {
    console.log(response); // Only Dev
    return null;
  }

  return response.data as UserInterface;
};

export async function getpermission_ui() {
  const path = "/permission-ui";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return response.data as PermissionNavigationInterface;
}
