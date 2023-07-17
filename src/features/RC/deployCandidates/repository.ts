import { DeployCandidatesAdapter, DeployCandidatesInterface } from "./type";
import { ApiHelper, AuthTokenType, ContentType } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetDeployCandidatesList
// post visa - dpt / block - visa => PostDeployCandidates
// get visa - dpt / block - visa / { id } => GetDeployCandidates
// patch visa - dpt / block - visa / { id } => PatchDeployCandidates
// delete visa - dpt / block - visa / { id } => DeleteDeployCandidates

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteDeployCandidatesProfessio



export async function readDeployCandidatesList() {
  const path = "/visa-dpt/block-visa-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data)
  // if (response.data) {
    // const dataAdapter = response.data as DeployCandidatesAdapter[];
    // for (let i = 0; i < dataAdapter.length; i++) {
    //   const element = dataAdapter[i];
    //   data.push(DeployCandidatesConverter.toInterface(element));
    // }
  // }
  // return data as DeployCandidatesInterface[]

  return response.data as DeployCandidatesInterface[]
}



export async function readDeployCandidates(id: number) {

  const path = "/visa-dpt/block-visa/" + id;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  // return DeployCandidatesConverter.toInterface(response.data as DeployCandidatesAdapter)
  return response.data as DeployCandidatesInterface
}




export async function createDeployCandidates(DeployCandidates: DeployCandidatesInterface) {
  console.log(DeployCandidates)
  const path = "/visa-dpt/block-visa"

  // const payload = DeployCandidatesConverter.toAdapter(DeployCandidates);
  const payload = DeployCandidates

  console.log(payload)
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

export async function updateDeployCandidates(id: number, DeployCandidates: DeployCandidatesInterface) {

  // const payload = DeployCandidatesConverter.toAdapter(DeployCandidates);
  const payload = DeployCandidates

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteDeployCandidates(id: number) {

  const path = "/visa-dpt/block-visa/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}

