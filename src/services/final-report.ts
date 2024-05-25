import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type FinalReport = {
  jrfNumber: string;
  labReportnumber: string;
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
type SubmitFinalReport = {
  jrfNumber: string;
  labReportnumber: string;
  reportNumber: string;
  labReportDate: string;
  testReport: string;
  gcvReport: string;
};

export const submitFinalReport = (body: SubmitFinalReport) => {
  return apiClient.post("/submitfinalreport", body);
};
