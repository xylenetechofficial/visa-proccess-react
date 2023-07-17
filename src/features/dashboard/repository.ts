// import axios from "axios";
// import { endpoint } from "../../../constant";
// import { ResponseInterface } from "../../../model";
// import { CategoryAdapter, CategoryInterface } from "./Model";
// import { alertMessage, getAdminApiKey } from "../../../utils/utils";
// import {
//   ApiHelper,
//   AuthTokenType,
//   ContentType,
// } from "../../../utils/api_helper";

// export async function readCategoryList() {
  
//   // let path = "/category-list";
//   // let response = await ApiHelper.get(path, {
//   //   tokenType: AuthTokenType.apiKey,
//   // });

//   // let data: CategoryInterface[] = [];
//   // if (response.code === 200) {
//   //   let dataAdapter = response.data as CategoryAdapter[];
//   //   for (let i = 0; i < dataAdapter.length; i++) {
//   //     const element = dataAdapter[i];
//   //     data.push({
//   //       id: element.id,
//   //       name: element.name,
//   //       image: element.image,
//   //       visibility: element.visibility,
//   //       // order: element.order,
//   //     });
//   //   }
//   // } else {
//   //   alertMessage(response.message);
//   // }

//   let response: ResponseInterface;
//   let data: CategoryInterface[] = [];
//   await axios
//     .get(endpoint + "/category-list", {
//       headers: { "X-API-KEY": getAdminApiKey() },
//     })
//     .then((res) => {
//       console.log(res); // Only Dev
//       response = res.data as ResponseInterface;
//       if (response.code == 200) {
//         let dataAdapter = response.data as CategoryAdapter[];
//         for (let i = 0; i < dataAdapter.length; i++) {
//           const element = dataAdapter[i];
//           data.push({
//             id: element.id,
//             name: element.name,
//             image: element.image,
//             visibility: element.visibility,
//             // order: element.order,
//           });
//         }
//       } else {
//         alertMessage(response.message);
//       }
//     })
//     .catch((err) => {
//       console.log(err); // Only Dev
//     });
//   return data;
// }

// export async function createCategory(category: CategoryInterface) {
//   let path = "/category";
//   let response = await ApiHelper.post(path, category, {
//     contentType: ContentType.form,
//     tokenType: AuthTokenType.apiKey,
//   });
//   return response;
// }

// export async function updateCategory(
//   id: number,
//   category: CategoryInterface
// ) {
//   let path = "/category/" + id;
//   let response = await ApiHelper.post(path, category, {
//     contentType: ContentType.form,
//     tokenType: AuthTokenType.apiKey,
//   });
//   return response;
// }

// export async function deleteCategory(id: number) {
//   console.log("fgghgvhb");   // Only Dev
//   let path = "/category/" + id;
//   let response = await ApiHelper.delete(path, {
//     tokenType: AuthTokenType.apiKey,
//   });
//   return response;
// }
