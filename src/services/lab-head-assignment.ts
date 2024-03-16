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
}

type LabHeadAssignment = {
    labHeadName: string;
    labHeadId: string;
    qrcode: string;
    jobNumber: string;
    labDetails: Array<LabDetails>;
}

type LabHeadAssignmentResponse = Array<LabHeadAssignment>

export const getLabHeadAssignment = (employee_id: number) => {
    return apiClient.get<any, AxiosResponse<LabHeadAssignmentResponse>>(`/assignedtolabhead/${employee_id}`)
}