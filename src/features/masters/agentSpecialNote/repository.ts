import { AgentSpecialNoteInterface } from "./type";
import { AdditionalDataInterface, ApiHelper, AuthTokenType, ContentType, PaginationManager } from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readAgentSpecialNoteList(refresh = false, page_number?: number) {


  const path = "/masters/agent-special-note-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    cacheTime: refresh ? 0 : 1,
    queryParameters: {
      page: page_number ?? 0,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code })
  }

  await PaginationManager.setData(
    response.additional_data as AdditionalDataInterface
  );

  return  response.data as AgentSpecialNoteInterface[];
 
}

export async function createAgentSpecialNote(agentSpecialNote: AgentSpecialNoteInterface) {
  const path = "/masters/agent-special-note"

  const payload = {
    agent: agentSpecialNote.agent,
    note:agentSpecialNote.note,
    date:agentSpecialNote.date,
  };
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })
}

export async function updateAgentSpecialNote(id: number, agentSpecialNote: AgentSpecialNoteInterface) {



  const payload = {
    agent: agentSpecialNote.agent,
    note:agentSpecialNote.note,
    date:agentSpecialNote.date,
  };

  const path = "/masters/agent-special-note/" + id
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT
  })
  showMessage_v2({ message: response.message, status: response.code })

}

export async function deleteAgentSpecialNote(id: number) {

  const path = "/masters/agent-special-note/" + id
  const response = await ApiHelper.delete(path, {
    tokenType: AuthTokenType.JWT
  })

  showMessage_v2({ message: response.message, status: response.code })

}
