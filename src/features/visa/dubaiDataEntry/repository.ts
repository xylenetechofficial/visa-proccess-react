import { DubaiDataEntryAdapter, DubaiDataEntryConverter, DubaiDataEntryInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";




export async function readDubaiDataEntryList(page_number?: number) {
  const path = "/visa-dpt/dubai-data-entry-list";

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

  let data: DubaiDataEntryInterface[] = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as DubaiDataEntryAdapter[];
    data = DubaiDataEntryConverter.toInterfaceList(dataAdapter)
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return data as DubaiDataEntryInterface[]
}


export async function updateDubaiDataEntry(DubaiDataEntry: DubaiDataEntryInterface[]) {

  const payload = {
    selection_list: DubaiDataEntryConverter.toAdapterList(DubaiDataEntry)
  }
  const path = "/visa-dpt/dubai-data-entry-list"
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function updateDubaiDataEntryOne(DubaiDataEntry: DubaiDataEntryInterface) {

  const payload = DubaiDataEntryConverter.toAdapter(DubaiDataEntry);

  const path = "/visa-dpt/dubai-data-entry/" + DubaiDataEntry.id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}


