import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type CommodityGroup = {
    identifier: number;
    name: string;
}

type Commodity = {
    name: string;
    identifier: number;
    groupIdentifier: number;
}

type Customer = {
    name: string;
    identifier: string;
}

type Mime = {
    name: string;
    identifier: string;
}

type JobType = {
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
    commodityGroups: Array<CommodityGroup>;
    commodities: Array<Commodity>;
    customers: Array<Customer>;
    mines: Array<Mime>;
    jobtypes: Array<JobType>;
    plantModels: Array<PlantModel>;
}

export const getCreateJob = async () => {
    return apiClient.get<any, AxiosResponse<CreateJobResponse>>('/createjob')
}