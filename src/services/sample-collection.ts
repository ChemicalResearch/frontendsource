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

type SampleCollectionResponse = {
  collectionSummaries: Array<Model>;
  vehicleType: Array<{
    number: string;
    name: string;
  }>;
  unitModel: Array<{
    identifier: string;
    name: string;
    selected: boolean;
  }>;
};
type AssignQrcode = {
  models: Array<Model>;
  labMasters: Array<{
    id: number;
    labName: string;
    number: string;
  }>;
};

export const getSampleCollection = () => {
  return apiClient.get<any, AxiosResponse<SampleCollectionResponse>>(
    `/getsamplecollection`
  );
};

export const getAssignQrCode = () => {
  return apiClient.get<any, AxiosResponse<AssignQrcode>>(
    `/getsamplepreparation`
  );
};

type SubmitSampleCollectionBody = {
  jobNumber: string;
  collectionNumber: string;
  vehicleTypeNumber: string;
  rakeType: string;
  noOfWagon: string;
  vehicleNumber: string;
  quantity: string;
  unitNumber: string;
  createdBy: string;
  tcrcSampleId: string;
  plannedPrepDate: string;
  startTime: Date | null;
  endTime: Date | null;
  mineText: string;
  wagonModels?: [
    {
      wagonNumber: string;
      quantity: string;
    }
  ];
};

export const submitSampleCollection = (body: SubmitSampleCollectionBody) => {
  return apiClient.post<
    any,
    AxiosResponse<{
      jobNumber: string;
      totalCollectionNumber: number | null;
      imageUrl: string;
    }>
  >("/submitcollection", body);
};
