import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type LoginResponse = {
    name: string;
    phone: string;
    employee_id: string;
    role: "Job Admin";
    email: string;
}

export const login = async (phone: string) => {
    return apiClient.get<any, AxiosResponse<LoginResponse>>(`/login/${phone}`)
        .then(({ data }) => data);
}