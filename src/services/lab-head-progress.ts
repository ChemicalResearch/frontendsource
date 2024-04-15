import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type Chemist = {
    employeeid: number;
    name: string;
}

type QualityAnalyst = {
    employeeid: number;
    name: string;
}

type LabDetails = {
    commodityGroupText: string;
    commodityGroupId: number;
    commodityText: string;
    commodityId: number;
    parameterText: string;
    parameterId: number;
    testmethodText: string;
    testmethodId: number;
    chemistAssignedOn: string;
    chemistActivityStatus: string;
    verificationStatus: string;
    verifiedon: string;
    chemist: Array<Chemist>;
    qa: Array<QualityAnalyst>;
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
}

export type LabHeadInProgress = {
    labHeadName: string;
    labHeadId: string;
    qrcode: string;
    jobNumber: string;
    certificateurl: string;
    labDetails: Array<LabDetails>;
}

export const getLabHeadInProgress = () => {
    return apiClient.get<any, AxiosResponse<Array<LabHeadInProgress>>>('/getanalysisprogress')
}