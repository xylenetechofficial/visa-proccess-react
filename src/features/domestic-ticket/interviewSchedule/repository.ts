import {
  InterviewScheduleAdapter,
  InterviewScheduleConverter,
  InterviewScheduleInterface,
} from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  PaginationManager,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readInterviewScheduleList(
  page_number?: number,
  queryParameters?: {
    interview_schedule_period?: any;
  }
) {
  const path = "/domestic-ticket/interview-schedule-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: page_number ?? 0,
      interview_schedule_period: queryParameters?.interview_schedule_period,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
    return [];
  }

  // return response.data as InterviewScheduleInterface[];
  const data = [];
  if (response.data) {
    const dataAdapter = response.data as InterviewScheduleAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(InterviewScheduleConverter.toInterface(element));
    }
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return data as InterviewScheduleInterface[];
}

export async function createInterviewSchedule(
  interviewSchedule: InterviewScheduleInterface
) {
  const path = "/domestic-ticket/interview-schedule";

  // const payload = {
  //   date: interviewSchedule.date,
  //   interview_schedule_period_id: interviewSchedule.interviewSchedulePeriodId,
  //   sector_id: interviewSchedule.sectorId,
  //   staff: interviewSchedule.staff,
  //   no_person: interviewSchedule.noOfPerson,
  // };

  const payload = InterviewScheduleConverter.toAdapter(interviewSchedule);
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

export async function updateInterviewSchedule(
  id: number,
  interviewSchedule: InterviewScheduleInterface
) {
  // const payload = {
  //   date: interviewSchedule.date,
  //   interview_schedule_period_id: interviewSchedule.interviewSchedulePeriodId,
  //   sector_id: interviewSchedule.sectorId,
  //   staff: interviewSchedule.staff,
  //   no_person: interviewSchedule.noOfPerson,
  // };

  const payload = InterviewScheduleConverter.toAdapter(interviewSchedule);

  const path = "/domestic-ticket/interview-schedule/" + id;
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });
}

export async function deleteInterviewSchedule(id: number) {
  const path = "/domestic-ticket/interview-schedule/" + id;
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });
}

export async function readInterviewSchedule(id: number) {
  const path = "/domestic-ticket/interview-schedule/" + id;
  const response = await ApiHelper.get(path, {
    tokenType: AuthTokenType.JWT,
  });

  showMessage_v2({ message: response.message, status: response.code });

  return InterviewScheduleConverter.toInterface(
    response.data as InterviewScheduleAdapter
  );
}
