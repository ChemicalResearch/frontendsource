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

export const getVerificationJRFs = () => {
  return apiClient.get<any, AxiosResponse<GetTestProgressJRFResponse>>(
    "/verificationjrfs"
  );
};

export type GetVerificationListParams = {
  jrfNumber: string;
};

export type Verification = {
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
  verificationFlag: string;
  testReport: string;
  gcvReport: string;
};

export type GetVerificationListResponse = Array<Verification>;

export const getVerificationList = (params: GetVerificationListParams) => {
  return apiClient.get<any, AxiosResponse<GetVerificationListResponse>>(
    "/verificationlist",
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

export const submitVerification = (body: FormData) => {
  return apiClient.post<any, AxiosResponse<SubmitTestDetailBody>>(
    "/submitverification",
    body,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
