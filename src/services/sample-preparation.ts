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
    }>
}

export const getSamplePreparation = () => {
    return apiClient.get<any, AxiosResponse<SamplePreparationResponse>>(`/getsamplepreparation`)
}