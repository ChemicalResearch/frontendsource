import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type Collection = {
  collectionNumber: string;
  commodityName: string;
  customerName: string;
  forMonth: string;
  jobNumber: string;
  tcrcReferenceNumber: string;
  totalSampleCount: string;
};

type SampleCollectionResponse = {
  collectionSummaries: Array<Collection>;
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
type getAssignQrcode ={
  models:Array<Collection>;
  labMasters:Array<{
    id:number,
    labName:string,
    number:string
  }>
}

export const getSampleCollection = () => {
  return apiClient.get<any, AxiosResponse<SampleCollectionResponse>>(
    `/getsamplecollection`
  );
};
export const getAssignQrCode = () => {
  return apiClient.get<any, AxiosResponse<getAssignQrcode>>(
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
