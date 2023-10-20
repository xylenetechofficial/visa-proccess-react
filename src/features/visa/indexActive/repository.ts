import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";
import { ActiveIndexListAdapter, ActiveIndexListConverter, ActiveIndexListInterface, VisaProfessionAdapter, VisaProfessionEditAdapter, VisaProfessionEditConverter, VisaProfessionEditInterface, VisaProfessionInterface } from "./type2";
import { VisaProfessionConverter } from "./type/VisaProfession";

export async function readActiveIndexList() {
  const path = "/visa-dpt/active-index-list";

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
    const dataAdapter = response.data as ActiveIndexListAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(ActiveIndexListConverter.toInterface(element));
    }
  }
  return data as ActiveIndexListInterface[]
}



export async function readVisaProfessionList(party_code: number) {
  const path = "/visa-dpt/active-index/visa-profession-list?party_code=" + party_code;

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

export async function updateActiveIndex(id: number, ActiveIndex: ActiveIndexListInterface) {

  const payload = ActiveIndexListConverter.toAdapter(ActiveIndex);

  const path = "/visa-dpt/active-index/" + id
  
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}
export async function readVisaProEditList(id: number) {

  // const payload = ActiveIndexListConverter.toAdapter(ActiveIndex);
console.log(id)
  const path = "/visa-dpt/active-index/visa-profession-list" 
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
  const path="/visa-dpt/active-index/visa-profession-list"

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
export async function updateEditedSingleIndexActiveItem(item:ActiveIndexListInterface) {
  const path="/visa-dpt/active-index/"+item.id
  
  // const payload=item;
  const payload = ActiveIndexListConverter.toAdapter(item);
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
   
  })
  showMessage_v2({ message: response.message, status: response.code })


}