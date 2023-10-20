// import { showMessage_v2 } from "../../../utils/alert";
// import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
// import { FullIndexAdapter, FullIndexConverter, FullIndexInterface } from "./type/IndexVisa";



// export async function readFullIndexList() {
//     const path = "/visa-dpt/full-index-list";
  
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
//       const dataAdapter = response.data as FullIndexAdapter[];
//       for (let i = 0; i < dataAdapter.length; i++) {
//         const element = dataAdapter[i];
//         data.push(FullIndexConverter.toInterface(element));
//       }
//     }
//     return data as FullIndexInterface[]
//   }


//   export async function readVisaProfessionList(party_code: number) {
//     const path = "/visa-dpt/full-index/visa-profession-list?party_code="+ party_code;
  
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
//       const dataAdapter = response.data as FullIndexAdapter[];
//       for (let i = 0; i < dataAdapter.length; i++) {
//         const element = dataAdapter[i];
//         data.push(FullIndexConverter.toInterface(element));
//       }
//     }
//     return data as FullIndexInterface[]
//   }

//   export async function updateFullIndex(id: number, FullIndex: FullIndexInterface) {

//     const payload = FullIndexConverter.toAdapter(FullIndex);
  
//     const path = "/visa-dpt/full-index/" + id
//     const response = await ApiHelper.patch(path, payload, {
//       contentType: ContentType.json,
//       tokenType: AuthTokenType.JWT
//     })
//     showMessage_v2({ message: response.message, status: response.code })
  
//   }