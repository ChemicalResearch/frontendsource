import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type ViewSamplePreparationResponse = Array<{
  plantId: string;
  plantName: string;
}>;

export const viewSamplePreparation = () => {
  return apiClient.get<any, AxiosResponse<ViewSamplePreparationResponse>>(
    `/viewsamplepreparation`
  );
};

export type GetSamplePreparationBody = {
  fromDate: string;
  toDate: string;
  plantId: string;
};

type GetSamplePreparationResponse = Array<{
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
}>;

export const getSamplePreparation = (body: GetSamplePreparationBody) => {
  return apiClient.post<any, AxiosResponse<GetSamplePreparationResponse>>(
    "/getsamplepreparation",
    body
  );
};
