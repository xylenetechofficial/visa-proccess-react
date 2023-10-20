import { ConsolidateChargeInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readConsolidateChargeList(refresh = false ,page_number?: number) {


  const path = "/masters/consolidate-charges-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
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
  return response.data as ConsolidateChargeInterface[];
 
}

export async function createConsolidateCharge(consolidateCharge: ConsolidateChargeInterface) {
  const path = "/masters/consolidate-charges"

  const payload = {
    name: consolidateCharge.name,
    charge: consolidateCharge.charge
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateConsolidateCharge(id: number, consolidateCharge: ConsolidateChargeInterface) {



  const payload = {
    name: consolidateCharge.name,
    charge: consolidateCharge.charge
  };

  const path = "/masters/consolidate-charges/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteConsolidateCharge(id: number) {

  const path = "/masters/consolidate-charges/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
