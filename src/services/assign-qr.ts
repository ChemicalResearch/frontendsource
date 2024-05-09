import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type Model = {
  qrcode: string;
  image: string;
  despatchDate: string;
  type: string;
  tcrcSampleId: string;
  tcrcQrCode: string;
  plantQrCode: string;
  refereeQrCode: string;
  tcrcSealNo: string;
  plantSealNo: string;
  refereeSealNo: string;
  tmSealNo: string;
  jrfNumber: string;
  preparationDate: string;
  tcrcQrImageUrl: string;
  plantQrImageUrl: string;
  refereeQrImageUrl: string;
  jobNumber: string;
  tcrcReferenceNumber: string;
  plannedPrepDate: string;
  collectionSystemId: string;
  plant: string;
  vehicleType: string;
  vehicleNumber: string;
  createdBy: string;
  labNumber: string;
};

type AssignQrcode = {
  models: Array<Model>;
  labMasters: Array<{
    id: number;
    labName: string;
    number: string;
  }>;
};


export const getAssignQrCode = () => {
  return apiClient.get<any, AxiosResponse<AssignQrcode>>(
    `/getsamplepreparation`
  );
};
