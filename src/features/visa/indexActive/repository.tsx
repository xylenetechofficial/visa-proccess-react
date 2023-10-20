// import { showMessage_v2 } from "../../../utils/alert";
// import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
// import { ActiveIndexAdapter, ActiveIndexConverter, ActiveIndexInterface } from "./type/IndexVisa";



// export async function readActiveIndexList() {
//     const path = "/visa-dpt/Active-index-list";
  
//     const response = await ApiHelper.get(path, {
//       contentType: ContentType.json,
//       tokenType: AuthTokenType.JWT,
//     });
  
//     if (response.code != 200) {
//       showMessage_v2({ message: response.message, status: response.code })
//     }
  
//     const data = []
//     console.log(response.data)
//     if (response.data) {
//       const dataAdapter = response.data as ActiveIndexAdapter[];
//       for (let i = 0; i < dataAdapter.length; i++) {
//         const element = dataAdapter[i];
//         data.push(ActiveIndexConverter.toInterface(element));
//       }
//     }
//     return data as ActiveIndexInterface[]
//   }


//   export async function readVisaProfessionList(party_code: number) {
//     const path = "/visa-dpt/Active-index/visa-profession-list?party_code="+ party_code;
  
//     const response = await ApiHelper.get(path, {
//       contentType: ContentType.json,
//       tokenType: AuthTokenType.JWT,
//     });
  
//     if (response.code != 200) {
//       showMessage_v2({ message: response.message, status: response.code })
//     }
  
//     const data = []
//     console.log(response.data)
//     if (response.data) {
//       const dataAdapter = response.data as ActiveIndexAdapter[];
//       for (let i = 0; i < dataAdapter.length; i++) {
//         const element = dataAdapter[i];
//         data.push(ActiveIndexConverter.toInterface(element));
//       }
//     }
//     return data as ActiveIndexInterface[]
//   }

//   export async function updateActiveIndex(id: number, ActiveIndex: ActiveIndexInterface) {

//     const payload = ActiveIndexConverter.toAdapter(ActiveIndex);
  
//     const path = "/visa-dpt/Active-index/" + id
//     const response = await ApiHelper.patch(path, payload, {
//       contentType: ContentType.json,
//       tokenType: AuthTokenType.JWT
//     })
//     showMessage_v2({ message: response.message, status: response.code })
  
//   }