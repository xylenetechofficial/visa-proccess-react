import {
  ProjectStatusKSAAdapter,
  ProjectStatusKSAConverter,
  ProjectStatusKSAInterface,
} from "./type";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readProjectStatusKSAList() {
  const path = "/job-dpt/project-status-ksa-closed-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return ProjectStatusKSAConverter.toInterfaceList(response.data as ProjectStatusKSAAdapter[]);
}

export async function updateProjectStatusKSA(
  projectStatusKSA: ProjectStatusKSAInterface[]
) {

  const payload = {project_ksa_list:ProjectStatusKSAConverter.toAdapterList(projectStatusKSA)}

  const path = "/job-dpt/project-status-ksa-list";
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  return response;
}
