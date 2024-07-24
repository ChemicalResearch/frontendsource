import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type SampleDataSet = {
  jobNumber: string;
  sampleId: string;
  rakeNumber: string;
  tcrcQrCode: string;
  tcrcSealNo: string;
  plantSealNo: string;
  plantQrCode: string;
  referenceSealNo: string;
  referenceQrCode: string;
  tmSealNo: string;
  despatchDate: string;
  preparationDate: string;
};

export const getSampleDataSet = () => {
  return apiClient.get<any, AxiosResponse<Array<SampleDataSet>>>(
    `/getsampledataset`
  );
};
