import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type GetTestProgressJRFResponse = Array<{
  tcrcRefNumber: string;
  tcrcSampleId: string;
  commodity: string;
  dispatchDate: string;
  noOfSample: string;
  plantEmail: string;
  jrfNumber: string;
  jrfUrl: string;
  jrfTableModels: string;
}>;

export const getTestProgressJRF = () => {
  return apiClient.get<any, AxiosResponse<GetTestProgressJRFResponse>>(
    "/testprogressjrfs"
  );
};

export type GetTestProgressListParams = {
  jrfNumber: string;
};

export type TestProgress = {
  adbAsh: string;
  adbGCV: string;
  adbIM: string;
  adbVM: string;
  arbTM: string;
  ebEM: string;
  jrfNumber: string;
  tcrcQrCode: string;
  tcrcSampleId: string;
  testEndDate: string;
};

export type GetTestProgressListResponse = Array<TestProgress>;

export const getTestProgressList = (params: GetTestProgressListParams) => {
  return apiClient.get<any, AxiosResponse<GetTestProgressListResponse>>(
    "/testprogresslist",
    { params }
  );
};


export type SubmitTestDetailBody = {
  tcrcSampleId: string;
  jrfNumber: string;
  tcrcQrCode: string;
  adbIM: string;
  adbVM: string;
  adbAsh: string;
  adbGCV: string;
  arbTM: string;
  ebEM: string;
  testEndDate: string;
};

export const submitTestDetail = (body: SubmitTestDetailBody) => {
  return apiClient.post<any, AxiosResponse<SubmitTestDetailBody>>(
    "/submittestdetail",
    body
  );
};