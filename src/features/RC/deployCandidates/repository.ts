import { DeployCandidatesAdapter, DeployCandidatesConverter, DeployCandidatesInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";



export async function readDeployCandidatesList(page_number?: number) {
  const path = "/rc/deploy-candidates-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: page_number ?? 0,
    },
  });


  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  const data: DeployCandidatesInterface[] = DeployCandidatesConverter.toInterfaceList(response.data as DeployCandidatesAdapter[])

  return data
}


export async function updateDeployCandidates(DeployCandidates: DeployCandidatesInterface[]) {

  const path = "/rc/deploy-candidates-list";

  const payload = {
    selection_list: DeployCandidatesConverter.toAdapterList(DeployCandidates)
  }

  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })
 return response

}


