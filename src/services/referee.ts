import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type ViewSamplePreparationResponse = Array<{
  plantId: string;
  plantName: string;
}>;

export const viewPlants = () => {
  return apiClient.get<any, AxiosResponse<ViewSamplePreparationResponse>>(
    `/viewsamplepreparation`
  );
};

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
export type GetRefereeBody = {
  fromDate: string;
  toDate: string;
  plantId: string;
  sampleId: string;
};
export const getRefereeData = (body: GetRefereeBody) => {
  return apiClient.post<any, AxiosResponse<Array<RefereeSetData>>>(
    "/searchsample",
    body
  );
};

export type RefereeSubmitData = {
  advice: string;
  paymentDate: string;
  labDetail: string;
  resultDate: string;
  result: string;
  qrcode: string;
};
export const submitRefereeData = (body: FormData) => {
  return apiClient.post('/updatereferee', body)
}
// export const submitSampleDataSet = (body: SampleDataSet) => {
//   return apiClient.post('/posttsampledataset', body)
// }
