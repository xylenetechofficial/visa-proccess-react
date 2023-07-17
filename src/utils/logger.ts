import { appEnv, appVersion } from "../constant";
import { useUserAuth } from "../features/context/UserAuthContext";

export async function GenerateLog(message: string, data?: any) {
//   const { authUser } = useUserAuth();
  const errorLog: ErrorLog = {
    user_id: 0,
    message: message,
    data: {},
    timestamp: new Date().toISOString(),
    app_version: appVersion,
    app_env: appEnv,
  };

  if (data) errorLog.data = data;

  return errorLog;
}

interface ErrorLog {
  user_id?: number;
  message: string;
  data: any;
  timestamp: string;
  app_version: string;
  app_env: string;
}
