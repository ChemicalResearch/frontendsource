import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type PlantModel = {
  plantId: string;
  plantName: string;
};

type GetJRFSelectionResponse = [
  {
    despatchDate: string;
    plantModels: Array<PlantModel>;
  }
];

export const getJRFSelection = () => {
  return apiClient.get<any, AxiosResponse<GetJRFSelectionResponse>>(
    `/getjrfselection`
  );
};

type GetJRFListParams = {
  plantId: string;
  despatchDate: string;
};

export type JRF = {
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

export type GetJRFListResponse = Array<JRF>;

export const getJRFList = (params: GetJRFListParams) => {
  return apiClient.get<any, AxiosResponse<GetJRFListResponse>>("/getjrflist", {
    params,
  });
};

export type CreateJRFBody = {
  plantId: string;
  sampleIds: Array<string>;
};

export type CreateJRFResponse = {
  plantId: string;
  sampleIds: Array<string>;
  returnJrfNumber: string;
};

export const createJRF = (body: CreateJRFBody) => {
  return apiClient.post<any, AxiosResponse<CreateJRFResponse>>(
    "/createjrf",
    body
  );
};
