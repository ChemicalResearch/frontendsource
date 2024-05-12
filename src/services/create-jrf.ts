import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type Model = {
    qrcode: string;
    image: string;
    despatchDate: string | null;
    type: string;
}

type SamplePreparationResponse = {
    models: Array<{
        jobNumber: string;
        collectionNumber: string;
        commodity: string;
        customer: string;
        preparationModels: Array<Model>
    }>;
    labMasters: Array<{
        id: number;
        labName: string;
        number: number;
    }>;
}

export const getSamplePreparation = () => {
    return apiClient.get<any, AxiosResponse<SamplePreparationResponse>>(`/getsamplepreparation`)
}

type SubmitSamplePreparationBody = {
    jobNumber: string;
    qrcode: string;
    despatchDate: string;
    collectionNumber: string;
    commodity: string;
    labNumber: string;
};

export const submitSamplePreparation = (body: SubmitSamplePreparationBody) => {
    return apiClient.post('/submitpreparation', body)
}