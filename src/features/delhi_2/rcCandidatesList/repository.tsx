
import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { RC_CandidateAdapter, RC_CandidateConverter, RC_CandidateInterface } from "./type";



export async function readRC_CandidateList(query: {
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

    return RC_CandidateConverter.toInterfaceList(response.data as RC_CandidateAdapter[])
}



export async function createRC_CandidateList(data_list: RC_CandidateInterface[]) {
    const path = "/delhi-account-dasboard/rc-candidate-list";

    const payload = {
        selection_list: RC_CandidateConverter.toAdapterList(data_list)
    }

    const response = await ApiHelper.patch(path, payload, {
        contentType: ContentType.json,
        tokenType: AuthTokenType.JWT
    })

    showMessage_v2({ message: response.message, status: response.code })

    if (response.code > 199 && response.code < 300) {
        return true;
    }
    return false;
}
