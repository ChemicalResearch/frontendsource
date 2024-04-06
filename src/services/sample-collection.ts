import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type Collection = {
    jobNumber: string;
    collectionNumber: string;
    commodityName: string;
    customerName: string;
    totalSampleCount: string;
}

type SampleCollectionResponse = {
    collectionSummaries: Array<Collection>;
    vehicleType: Array<{
        number: string;
        name: string;
    }>;
    unitModel: Array<{
        identifier: string;
        name: string;
        selected: boolean;
    }>
}

export const getSampleCollection = () => {
    return apiClient.get<any, AxiosResponse<SampleCollectionResponse>>(`/getsamplecollection`)
}

type SubmitSampleCollectionBody = {
    jobNumber: string;
    collectionNumber: string;
    vehicleTypeNumber: string;
    vehicleNumber: string;
    quantity: string;
    unitNumber: string;
    createdBy: string;
};

export const submitSampleCollection = (body: SubmitSampleCollectionBody) => {
    return apiClient.post('/submitcollection', body)
}