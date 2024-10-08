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

type SubmitSamplePreparationBody = {
  jobNumber: string;
  despatchDate: string;
  collectionSystemId: string;
  commodity: string;
  labNumber: string;
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
  createdBy: string;
};

export const submitSamplePreparation = (body: SubmitSamplePreparationBody) => {
  return apiClient.post("/submitpreparation", body);
};

type plantModels = {
  plantId: string;
  plantName: string;
};
type getSamplePselection = [
  {
    plannedDate: string;
    plantModels: Array<plantModels>;
  }
];
export const getSamplePselection = (params: any) => {
  return apiClient.get<any, AxiosResponse<getSamplePselection>>(
    `/getsamplepselection`,
    { params }
  );
};

type GetsamplepreparationlistParams = {
  plantId: string;
  plannedPrepDate: string;
};

export type SamplePreparation = {
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

export type GetsamplepreparationlistResponse = Array<SamplePreparation>;

export const getsamplepreparationlist = (
  body: GetsamplepreparationlistParams
) => {
  return apiClient.get<any, AxiosResponse<GetsamplepreparationlistResponse>>(
    "/getsamplepreparationlist",
    {
      params: body,
    }
  );
};
