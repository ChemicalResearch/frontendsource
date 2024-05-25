import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type FinalReport = {
  jrfNumber: string;
  labReportNumber: string;
  reportNumber: string;
  labReportDate: string;
  testReport: string;
  gcvReport: string;
};

export const getFinalReport = () => {
  return apiClient.get<any, AxiosResponse<Array<FinalReport>>>(
    `/getfinalreport`
  );
};
type SubmitFinalReportBody = {
  jrfNumber: string;
  labReportNumber: string;
  reportNumber: string;
  labReportDate: string;
  testReport: string;
  gcvReport: string;
};

export const submitFinalReport = (body: SubmitFinalReportBody) => {
  return apiClient.post("/submitfinalreport", body);
};
