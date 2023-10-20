import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { FullIndexListAdapter, FullIndexListConverter, FullIndexListInterface, VisaProfessionAdapter, VisaProfessionEditAdapter, VisaProfessionEditConverter, VisaProfessionEditInterface, VisaProfessionInterface } from "./type2";
import { VisaProfessionConverter } from "./type/VisaProfession";

export async function readFullIndexList() {
  const path = "/visa-dpt/full-index-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as FullIndexListAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(FullIndexListConverter.toInterface(element));
    }
  }
  return data as FullIndexListInterface[]
}



export async function readVisaProfessionList(party_code: number) {
  const path = "/visa-dpt/full-index/visa-profession-list?party_code=" + party_code;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as VisaProfessionAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(VisaProfessionConverter.toInterface(element));
    }
  }
  return data as VisaProfessionInterface[]
}

export async function updateFullIndex(id: number, FullIndex: FullIndexListInterface) {

  const payload = FullIndexListConverter.toAdapter(FullIndex);

  const path = "/visa-dpt/full-index/" + id
  
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}
export async function readVisaProEditList(id: number) {

  // const payload = FullIndexListConverter.toAdapter(FullIndex);
console.log(id)
  const path = "/visa-dpt/full-index/visa-profession-list" 
  const response = await ApiHelper.get(path,{
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters:{
      party_code:id
    }
    
  })
   if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }
  
  const data = []
  console.log(response.data)
  if (response.data) {
    const dataAdapter = response.data as VisaProfessionEditAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(VisaProfessionEditConverter.toInterface(element));
    }
  }
  return data as VisaProfessionEditInterface[]

}

export async function updateVisaProEdit(item:VisaProfessionEditInterface) {
  const path="/visa-dpt/full-index/visa-profession-list"

  const payload = VisaProfessionEditConverter.toAdapter(item);
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters:{
      parity_code:item.id
    }
  })
  showMessage_v2({ message: response.message, status: response.code })


}
export async function updateEditedSingleIndexFullItem(item:FullIndexListInterface) {
  const path="/visa-dpt/full-index/"+item.id
  
  // const payload=item;
  const payload = FullIndexListConverter.toAdapter(item);
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
   
  })
  showMessage_v2({ message: response.message, status: response.code })


}