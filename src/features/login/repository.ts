import { ApiHelper, AuthTokenType, ContentType } from "../../utils/api_helper";
import { UserInterface } from "../context/Model";

export async function LogIn(user: UserInterface) {
  const path = "/login";
  const payload = {
    user_name: user.user_name,
    password: user.password,
  };

  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  return response;
}

export async function GetUser() {
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
}
