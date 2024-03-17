import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type SampleCollectionResponse = {
    collectionSummaries: Array<{
        jobNumber: string;
        commodityName: string;
        customerName: string;
        totalSampleCount: string;
    }>,
    vehicleType: Array<{
        number: string;
        name: string;
    }>
}

export const getSampleCollection = () => {
    return apiClient.get<any, AxiosResponse<SampleCollectionResponse>>(`/getsamplecollection`)
}