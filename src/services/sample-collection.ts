import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type Collection = {
    jobNumber: string;
    commodityName: string;
    customerName: string;
    totalSampleCount: string;
}

type SampleCollectionResponse = {
    collectionSummaries: Array<Collection>;
    vehicleType: Array<{
        number: string;
        name: string;
    }>
}

export const getSampleCollection = () => {
    return apiClient.get<any, AxiosResponse<SampleCollectionResponse>>(`/getsamplecollection`)
}