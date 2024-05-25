import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type Value = {
  value: string;
  text: string;
};

export type ChartType = "BAR" | "PIE";

export type ChartData = {
  type: ChartType;
  description: string;
  values: Array<Value>;
};

export type DashboardData = Record<string, ChartData>;

export const getDashboardData = () => {
  return apiClient.get<any, AxiosResponse<DashboardData>>(`/dashboard`);
};
