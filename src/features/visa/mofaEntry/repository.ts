import {
  MofaPaymentAdapter,
  MofaPaymentConverter,
  Mofa_Entry_Candidate_Adapter,
  Mofa_Entry_Candidate_Interface,
  Mofa_Entry_Converter,
  PartyCodeAdapter,
  PartyCodeConverter,
} from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readMofaEntryCandiateList(
  status: string,
  partyCode?: number,
  page_number?: number
) {
  const path = "/visa-dpt/mofa-entry-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      status: status ?? "",
      party_code: partyCode ?? 0,
      page: page_number ?? 0,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  const data: Mofa_Entry_Candidate_Interface[] =
    Mofa_Entry_Converter.toInterfaceList(
      response.data as Mofa_Entry_Candidate_Adapter[]
    );

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data;
}

export async function readMofaEntryPartyCodeList(status: string) {
  const path = "/visa-dpt/mofa-entry-party-code-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      status: status ?? "",
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return PartyCodeConverter.toInterfaceList(
    response.data as PartyCodeAdapter[]
  );
}

export async function readMofaPaymentList() {
  const path = "/visa-dpt/mofa-payment-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }
  return MofaPaymentConverter.toInterfaceList(
    response.data as MofaPaymentAdapter[]
  );
}

// export async function readSourcingCollectionDashboardCandidate(id: number, status?: string) {

//   const path = "/visa-dpt/sourcing-dashboard-list";

//   const response = await ApiHelper.get(path, {
//     contentType: ContentType.json,
//     tokenType: AuthTokenType.JWT,
//     queryParameters: {
//       job_order_id: id,
//       status: status ?? ""
//     }
//   });

//   if (response.code != 200) {
//     showMessage_v2({ message: response.message, status: response.code })
//   }

//   return Src_Col_Dash_CandidateConverter.toInterfaceList(response.data as Src_Col_Dash_CandidateAdapter[])
// }

export async function createMofaEntry(
  candidateList: Mofa_Entry_Candidate_Interface[],
  countryTypeID: number
) {
  const payload = {
    selection_list: Mofa_Entry_Converter.toAdapterList(candidateList),
    country_type_id: countryTypeID,
  };

  const path = "/visa-dpt/mofa-entry-list";
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  return response;
}

export async function UpdateMofaEntry(
  id: number,
  candidateEle: Mofa_Entry_Candidate_Interface
) {
  const payload = Mofa_Entry_Converter.toAdapter(candidateEle);

  const path = "/visa-dpt/mofa-entry/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
  return response;
}
export async function deleteMofaEntry(candidateEle:Mofa_Entry_Candidate_Interface){
  
  const path = "/visa-dpt/mofa-entry/" + candidateEle.id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code });
}
