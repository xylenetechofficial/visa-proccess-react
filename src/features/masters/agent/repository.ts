import axios from "axios";
import { AgentAdapter, AgentConverter, AgentInterface } from "./type";
import {
  AdditionalDataInterface,
  ApiHelper,
  AuthTokenType,
  ContentType,
  ResponseInterface,
} from "../../../utils/api_helper";
import { endpoint } from "../../../constant";
import { showMessage_v2 } from "../../../utils/alert";
import { string } from "prop-types";

export async function readAgentList(
  refresh = false,
  filter_for = "",
  page_number?: number
) {
  const path = "/masters/agent-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
    queryParameters: {
      filter_for: filter_for,
      page: page_number ?? 1,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  const data: AgentInterface[] = [];

  if (response.data) {
    const dataAdapter = response.data as AgentAdapter[];
    for (let i = 0; i < dataAdapter.length; i++) {
      const element = dataAdapter[i];
      data.push(AgentConverter.toInterface(element));
    }
  }

  return {
    data: data,
    additional_data: response.additional_data as AdditionalDataInterface,
  };
}

export async function createAgent(agent: AgentInterface) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };
  const payload = AgentConverter.toAdapter(agent);
  await axios
    .post(endpoint + "/masters/agent", payload)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}

export async function updateAgent(id: number, agent: AgentInterface) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };
  const payload = AgentConverter.toAdapter(agent);
  await axios
    .patch(endpoint + "/masters/agent/" + id, payload)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}

export async function deleteAgent(id: number) {
  let response: ResponseInterface = {
    code: 404,
    message: "Something Went Wrong",
  };
  await axios
    .delete(endpoint + "/masters/agent/" + id)
    .then((res) => {
      console.log(res); // Only Dev
      response = res.data as ResponseInterface;
    })
    .catch((err) => {
      console.log(err); // Only Dev
    });
  return response;
}
