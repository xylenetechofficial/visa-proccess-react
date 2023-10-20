import {
  DegreeAttestationAdapter,
  DegreeAttestationConverter,
  DegreeAttestationInterface,
} from "./type/DegreeAttestation";
import {
  ApiHelper,
  AuthTokenType,
  ContentType,
} from "../../../utils/api_helper";
import { showMessage_v2 } from "../../../utils/alert";

export async function readDegreeAttestationList(props: {
  status?: string;
  page_number?: number;
}) {
  const path = "/visa-dpt/degree-attestation-list";

  const response = await ApiHelper.get(path, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
    queryParameters: {
      page: props.page_number ?? 0,
      // status: props.page_number ?? 0,
    },
  });

  if (response.code != 200) {
    showMessage_v2({ message: response.message, status: response.code });
  }

  return DegreeAttestationConverter.toInterfaceList(
    response.data as DegreeAttestationAdapter[]
  );
}

export async function addDegreeAttestationList(
  DegreeAttestation: DegreeAttestationInterface[]
) {
  const payload = {
    selection_list: DegreeAttestationConverter.toAdapterList(DegreeAttestation),
  };
  const path = "/visa-dpt/degree-attestation-list";
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
export async function updateDegreeAttestationList(
  DegreeAttestation: DegreeAttestationInterface[]
) {
  const payload = {
    selection_list: DegreeAttestationConverter.toAdapterList(DegreeAttestation),
  };
  const path = "/visa-dpt/degree-attestation-list";
  const response = await ApiHelper.patch(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function addDegreeAttestationForward(
  DegreeAttestation: DegreeAttestationInterface
) {
  const payload = DegreeAttestationConverter.toAdapter(DegreeAttestation);

  const path = "/visa-dpt/degree-attestation/forward";
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}

export async function addDegreeAttestationCancel(
  DegreeAttestation: DegreeAttestationInterface
) {
  const payload = DegreeAttestationConverter.toAdapter(DegreeAttestation);

  const path = "/visa-dpt/degree-attestation/cancel";
  const response = await ApiHelper.post(path, payload, {
    contentType: ContentType.json,
    tokenType: AuthTokenType.JWT,
  });
  showMessage_v2({ message: response.message, status: response.code });

  if (response.code > 199 && response.code < 300) {
    return true;
  }
  return false;
}
