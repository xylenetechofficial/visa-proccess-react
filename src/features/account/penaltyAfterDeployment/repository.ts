import { AddPenaltyAfterDeploymentInterface, AddSelectionPenaltyAfterDeploymentConverter, AddSelectionPenaltyAfterDeploymentInterface, PenaltyAfterDeploymentDashboardAdapter, PenaltyAfterDeploymentDashboardConverter, PenaltyAfterDeploymentDashboardInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

// get visa - dpt / block - visa - list => GetAccountDashboardList
// post visa - dpt / block - visa => PostAccountDashboard
// get visa - dpt / block - visa / { id } => GetAccountDashboard
// patch visa - dpt / block - visa / { id } => PatchAccountDashboard
// delete visa - dpt / block - visa / { id } => DeleteAccountDashboard

// //  ------------   Block Visa Profession   ------------ \\
// delete visa - dpt / block - visa - profession / { id } => DeleteAccountDashboardProfessio



export async function readAccountDashboardList(query: {
  status?: string
  page?: number
}) {
  // const path = "/visa-dpt/block-visa-list";
  const value :string = query.status? query.status :"no"
  const path = "/account/penalty-after-deployment-list?status=" + value;

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: query.page ?? 0,
      status: query.status ?? "",
    },
    
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  const data = []
  console.log(response.data,"l")
  if (response.data) {
    const dataAdapter = response.data as PenaltyAfterDeploymentDashboardAdapter[];
    // const dataAdapter = response.data as any;
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      // data.push(element);
      data.push(PenaltyAfterDeploymentDashboardConverter.toInterface(element));
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
  return data as PenaltyAfterDeploymentDashboardInterface[]
  // return data as any
}

export async function createAccountDashboard(AddPenaltyAfterDeployment: AddSelectionPenaltyAfterDeploymentInterface) {
// export async function createAddPenaltyAfterDeployment(AddPenaltyAfterDeployment: any) {
  console.log(AddPenaltyAfterDeployment)
  const path = "/account/penalty-after-deployment-list"

  const payload = AddSelectionPenaltyAfterDeploymentConverter.toAdapter(AddPenaltyAfterDeployment);
  // const payload = AddPenaltyAfterDeployment

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

export async function updateAccountDashboard(AddPenaltyAfterDeployment: AddSelectionPenaltyAfterDeploymentInterface) {

  const payload = AddSelectionPenaltyAfterDeploymentConverter.toAdapter(AddPenaltyAfterDeployment);
  // const payload = AddPenaltyAfterDeployment;
console.log(payload,"aa",AddPenaltyAfterDeployment)
  const path = "/account/penalty-after-deployment-list";
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

