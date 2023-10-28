import { InterviewSchedulePeriodAdapter, InterviewSchedulePeriodConverter, InterviewSchedulePeriodInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readInterviewSchedulePeriodList(page_number?: number) {


  const path = "/domestic-ticket/interview-schedule-period-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: page_number ?? 0,
    },
  });


  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
    return []
  }

  // return response.data as InterviewSchedulePeriodInterface[];
 const data=[]
  if(response.data){
    const dataAdapter = response.data as InterviewSchedulePeriodAdapter[];
     for (let i = 0; i < dataAdapter.length; i++) {
       const element = dataAdapter[i];
       data.push(InterviewSchedulePeriodConverter.toInterface(element));
     }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );
 

  return data as InterviewSchedulePeriodInterface[];

}





export async function createInterviewSchedulePeriod(interviewSchedulePeriod: InterviewSchedulePeriodInterface) {
  const path = "/domestic-ticket/interview-schedule-period"

  const payload = {
    client_id: interviewSchedulePeriod.company,
    from_date: interviewSchedulePeriod.fromDate,
    to_date: interviewSchedulePeriod.toDate,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateInterviewSchedulePeriod(id: number, interviewSchedulePeriod: InterviewSchedulePeriodInterface) {



  const payload = {
    client_id: interviewSchedulePeriod.company,
    from_date: interviewSchedulePeriod.fromDate,
    to_date: interviewSchedulePeriod.toDate,
  };

  const path = "/domestic-ticket/interview-schedule-period/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteInterviewSchedulePeriod(id: number) {

  const path = "/domestic-ticket/interview-schedule-period/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
