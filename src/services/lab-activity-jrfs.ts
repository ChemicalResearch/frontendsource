import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";




export type JRFLISTS = {
    "tcrcRefNumber": string;
    "tcrcSampleId": string;
    "commodity": string;
    "dispatchDate": string;
    "noOfSample": string;
    "plantEmail": string;
    "jrfNumber": string;
    "jrfUrl": string;
    "jrfTableModels": string;
}

export type GetLabJRFListResponse = Array<JRFLISTS>;

export const getLabactivityJrfs = (
    
) => {
  return apiClient.get<any, AxiosResponse<GetLabJRFListResponse>>(
    "/labactivityjrfs",    
  );
};
