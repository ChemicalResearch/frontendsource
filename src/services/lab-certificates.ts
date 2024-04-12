import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type LabDetails = {
    commodityGroupText: string;
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
}

export type LabCertificates = Array<{
    labHeadName: string;
    labHeadId: string;
    qrcode: string;
    jobNumber: string;
    certificateurl: string;
    labDetails: Array<LabDetails>;
}>

export const getCertificate = () => {
    return apiClient.get<any, AxiosResponse<LabCertificates>>(`/getCertificate`)
}
