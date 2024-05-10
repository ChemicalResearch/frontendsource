import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";


type Mime = {
    name: string;
    identifier: string;
}



type PlantModel = {
    plantId: string;
    plantName: string;
}

type CreateJobResponse = {
    id: number;
    createdBy: number;
    status: string;
    commodityGroups: Array<{
        number: string;
        name: string;
    }>;
    commodities: Array<{
        number: string;
        name: string;
    }>;
    customers: Array<{
        number: string;
        name: string;
    }>;
    mines: Array<Mime>;
    jobtypes: Array<{
        number: string;
        name: string;
    }>;
    plantModels: Array<PlantModel>;
    portModels: Array<{
        number: string;
        name: string;
    }>
}

export const getCreateJob = async () => {
    return apiClient.get<any, AxiosResponse<CreateJobResponse>>('/createjob')
}