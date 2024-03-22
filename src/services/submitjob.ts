import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type SubmitJobBody = {
    jobNumber: string;
    commodity: string;
    commodityGroup: string;
    customer: string;
    jobType: string;
    mine: string;
    createdBy: string;
}

type SubmitJobResposnse = {
    jobNumber: string;
    commodity: string;
    commodityGroup: string;
    customer: string;
    jobType: string;
    mine: string;
    createdBy: string;
    createdOn: string;
}

export const submitJob = async (body: SubmitJobBody) => {
    return apiClient.post<any, AxiosResponse<SubmitJobResposnse>>('/submitjob', body)
        .then(({ data }) => data);
}