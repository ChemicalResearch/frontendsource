import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type GetTestProgressJRFResponse = Array<{
    "tcrcRefNumber": string;
    "tcrcSampleId": string;
    "commodity": string;
    "dispatchDate": string;
    "noOfSample": string;
    "plantEmail": string;
    "jrfNumber": string;
    "jrfUrl": string;
    "jrfTableModels": string;
}>;

export const getTestProgressJRF = () => {
    return apiClient.get<any, AxiosResponse<GetTestProgressJRFResponse>>("/testprogressjrfs");
}

export type GetTestProgressListParams = {
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
  
  export type GetTestProgressListResponse = Array<LabActivitySample>;
  
  export const getTestProgressList = (params: GetTestProgressListParams) => {
    return apiClient.get<any, AxiosResponse<GetTestProgressListResponse>>(
      "/labactivityjrfs",
      { params }
    );
  };
  