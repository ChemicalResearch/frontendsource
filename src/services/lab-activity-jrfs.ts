import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type JRFLISTS = {
  tcrcRefNumber: string;
  tcrcSampleId: string;
  commodity: string;
  dispatchDate: string;
  noOfSample: string;
  plantEmail: string;
  jrfNumber: string;
  jrfUrl: string;
  jrfTableModels: string;
};

export type GetLabJRFListResponse = Array<JRFLISTS>;

export const getLabactivityJrfs = () => {
  return apiClient.get<any, AxiosResponse<GetLabJRFListResponse>>(
    "/labactivityjrfs"
  );
};

export type GetLabactivitySamplesParams = {
  jrfNumber: string;
};

export type LabActivitySample = {
  commodity: string;
  dispatchDate: string;
  jrfNumber: string;
  jrfTableModels: string;
  jrfUrl: string;
  noOfSample: string;
  plantEmail: string;
  tcrcRefNumber: string;
  tcrcSampleId: string;
};

export type GetLabactivitySamplesResponse = Array<LabActivitySample>;

export const getLabactivitySamples = (params: GetLabactivitySamplesParams) => {
  return apiClient.get<any, AxiosResponse<GetLabactivitySamplesResponse>>(
    "/labactivityjrfs",
    { params }
  );
};
