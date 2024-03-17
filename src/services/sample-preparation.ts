import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type SamplePreparationResponse = {
    models: Array<{
        jobNumber: string;
        collectionNumber: string;
        commodity: string;
        customer: string;
        preparationModels: Array<{
            qrcode: string;
            image: string;
            despatchDate: string | null;
            type: string;
        }>
    }>
}

export const getSamplePreparation = () => {
    return apiClient.get<any, AxiosResponse<SamplePreparationResponse>>(`/getsamplepreparation`)
}