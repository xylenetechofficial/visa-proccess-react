import { AgreementConverter, AgreementInterface } from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readAgreementList(query: {
  status?: string;
  page?: number;
}) {
  const path = "/agreements/agreement-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return AgreementConverter.toInterfaceList(
    response.data as AgreementInterface[]
  );
}

export async function createAgreement(Agreement: AgreementInterface[]) {
  console.log(Agreement);
  const path = "/agreements/agreement-list";

  const payload = {
    selection_list: AgreementConverter.toAdapterList(Agreement),
  };

  console.log(payload);
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function createAgreementList(list: AgreementInterface[]) {
  const path = "/agreements/agreement-list";

  const payload = {
    selection_list: AgreementConverter.toAdapterList(list),
  };

  console.log(payload);
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

export async function updateAgreement(
  id: number,
  Agreement: AgreementInterface
) {
  const path = "/agreements/agreement-list" + id;

  const payload = AgreementConverter.toAdapter(Agreement);
  // const payload = Agreement;

  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

export async function updateAgreementList(list: AgreementInterface[]) {
  const path = "/agreements/agreement-list";

  const payload = {
    selection_list: AgreementConverter.toAdapterList(list),
  };
  // const payload = Agreement;

  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
// export async function deleteAgreement(id: number) {

//   const path = "/visa-dpt/block-visa/" + id
//   const response = await ApiHelper.delete(path, {
//     tokenType: AuthTokenType.JWT
//   })

//   showMessage_v2({ message: response.message, status: response.code })

// }

// export async function readAgreement(id: number, page_number?: number) {

//   const path = "/visa-dpt/block-visa/" + id;

//   const response = await ApiHelper.get(path, {
//     contentType: ContentType.json,
//     tokenType: AuthTokenType.JWT,
//     queryParameters: {
//       page: page_number ?? 0,
//     },
//   });

//   if (response.code != 200) {
//     showMessage_v2({ message: response.message, status: response.code })
//   }

//   await PaginationManager.setData(
//     response.additional_data as AdditionalDataInterface
//   );

//   // return AgreementConverter.toInterface(response.data as AgreementAdapter)
//   return response.data as AgreementInterface
// }
