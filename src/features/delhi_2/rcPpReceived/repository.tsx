
import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { PP_RC_CandidateAdapter, PP_RC_CandidateConverter, PP_RC_CandidateInterface } from "./type";



export async function readPP_RC_CandidateList(query: {
    status?: string
    page?: number
  }) {
    const path = "/delhi-account-dasboard/rc-candidate-list";

    const response = await ApiHelper.get(path, {
        contentType: ContentType.json,
        tokenType: AuthTokenType.JWT,
        queryParameters: {
            page: query.page ?? 0,
            status: query.status ?? "",
          },
    });

    if (response.code != 200) {
        showMessage_v2({ message: response.message, status: response.code })
    }

    await PaginationManager.setData(
        response.additional_data as AdditionalDataInterface
      );

    return PP_RC_CandidateConverter.toInterfaceList(response.data as PP_RC_CandidateAdapter[])
}