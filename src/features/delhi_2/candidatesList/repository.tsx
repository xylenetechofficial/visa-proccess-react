
import { showMessage_v2 } from "../../../utils/alert";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { CandidateAdapter, CandidateConverter, CandidateInterface } from "./type";



export async function readCandidateList(query: {
    status?: string
    page?: number
  }) {
    const path = "/delhi-account-dasboard/candidate-list";

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

    return CandidateConverter.toInterfaceList(response.data as CandidateAdapter[])
}



export async function createCandidateList(data_list: CandidateInterface[]) {
    const path = "/delhi-account-dasboard/candidate-list";

    const payload = {
        selection_list: CandidateConverter.toAdapterList(data_list)
    }

    const response = await ApiHelper.post(path, payload, {
        contentType: ContentType.json,
        tokenType: AuthTokenType.JWT
    })

    showMessage_v2({ message: response.message, status: response.code })

    if (response.code > 199 && response.code < 300) {
        return true;
    }
    return false;
}
