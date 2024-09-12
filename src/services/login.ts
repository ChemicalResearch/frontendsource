import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type LoginResponse = {
  name: string;
  phone: string;
  employee_id: string;
  role: string;
  email: string;
  plant: string;
  menu: string;
  loginSuccessFlag: "Y" | "N";
  errorMsg: string | null;
};

interface LoginBody {
  phoneNumber: string;
  secret: string;
}

export const login = async (body: LoginBody) => {
  return apiClient
    .post<any, AxiosResponse<LoginResponse>>(`/loginV2`, body)
    .then(({ data }) => data);
};
