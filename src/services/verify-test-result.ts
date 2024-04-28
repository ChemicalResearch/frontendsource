import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type VerifyTestResult = Array<{
  labHeadName: string;
  labHeadId: string;
  qrcode: string;
  jobNumber: string;
  certificateurl: string;
  labDetails: Array<{
    commodityGroupText:string;
    commodityGroupId: string;
    commodityText: string;
    commodityId: string;
    parameterText: string;
    parameterId: string;
    testmethodText: string;
    testmethodId: string;
    chemistAssignedOn: string;
    chemistActivityStatus: string;
    verificationStatus: string;
    verifiedon: string;
    chemist: string;
    qa: string;
    result: string;
    resultsubmitDate: string;
    unit: string;
    chemistAssignedDate: string;
    resultSubmitDate: string;
    verifiicationDate: string;
    assignedChemistId: string;
    assignedChemistName: string;
    assignedQAId: string;
    assignedQAName: string;
    assignedChemistStatus: string;
    assignedVerificationStatus: string;
  }>;
}>;

export const getVerifyTestResult = (employee_id: number) => {
  return apiClient.get<any, AxiosResponse<VerifyTestResult>>(
    `/assignedtoqa/${employee_id}`
  );
};
