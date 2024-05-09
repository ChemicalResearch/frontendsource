import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type CollectionSummry = {
  jobNumber: string;
  collectionNumber: string;
  commodityName: string;
  customerName: string;
  totalSampleCount: string;
  forMonth: string;
  tcrcReferenceNumber: string;
};

type SampleCollectionResponse = {
  collectionSummaries: Array<CollectionSummry>;
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

export const getSampleCollection = () => {
  return apiClient.get<any, AxiosResponse<SampleCollectionResponse>>(
    `/getsamplecollection`
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
  startTime: string;
  endTime: string;
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
