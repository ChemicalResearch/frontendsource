import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type RefereeSetData = {
  tcrcSampleId: string;
  jrfNumber: string;
  tcrcQrCode: string;
  adbIM: string;
  adbVM: string;
  adbAsh: string;
  adbFc: string;
  adbBand: string;
  adbGCV: string;
  arbTM: string;
  arbVM: string;
  arbAsh: string;
  arbFC: string;
  arbGCV: string;
  arbBand: string;
  emEM: string;
  emVM: string;
  emAsh: string;
  emFC: string;
  emGCV: string;
  emBand: string;
  jrfLink: string;
  paymentDate: string;
  adviceUrl: string;
  labDetails: string;
  resultDate: string;
  resultUrl: string;
};

export const getRefereeDataSet = () => {
  return apiClient.get<any, AxiosResponse<Array<RefereeSetData>>>(
    `/getrefereelist`
  );
};

// export const submitSampleDataSet = (body: SampleDataSet) => {
//   return apiClient.post('/posttsampledataset', body)
// }
