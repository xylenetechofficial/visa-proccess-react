// import axios from '../../axiosFile'
// import { ResponseInterface } from "../../model";
// import { getAdminApiKey } from "../../utils/utils";
// import { AxiosHeaders } from "axios";

import { ApiHelper, AuthTokenType, ContentType } from "../../utils/api_helper";
import { UserInterface } from "./Model";

// // export function getAuthRoles() {
// //     let data = authRoles as AuthRolesInterface

// //     return data;
// // }

export const JwtRestApi = async (props: { JwtToken: any }) => {
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
