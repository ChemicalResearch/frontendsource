import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type TmData = {
  tcrcQRCode: string;
  tmEntryDate: string;
  tmValue: string;
  tmSealNo:string;
};

export const getTmList = () => {
  return apiClient.get<any, AxiosResponse<Array<TmData>>>(`/gettmlist`);
};
type SubmitTmEntryBody = {
  tcrcQRCode: string;
  tmEntryDate: string;
  tmValue: string;
};

export const submitTmEntry = (body: SubmitTmEntryBody) => {
  return apiClient.post("/submittmentry", body);
};
