import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type SubmitJobBody = {
  commodity: string;
  commodityGroup: string;
  customer: string;
  jobType: string;
  createdBy: string;
  plantId: string;
  fortheMonth: string;
  portId: string;
  tcrcReferenceNumber: string;
};

export type SubmitJobResposnse = {
  jobNumber: string;
  commodity: string;
  commodityGroup: string;
  customer: string;
  jobType: string;
  createdBy: string;
  createdOn: string;
};

export const submitJob = async (body: SubmitJobBody) => {
  return apiClient
    .post<any, AxiosResponse<SubmitJobResposnse>>("/submitjob", body)
    .then(({ data }) => data);
};
