import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type InsertLabDetails = {
    labHeadName: string;
    labHeadId: string;
    qrcode: string;
    jobNumber: string;
    commodityText: string;
    commodityId: string;
    parameterText: string;
    parameterId: string;
    testmethodText: string;
    testmethodId: string;
    chemistAssignedOn: string;
    chemistName: string;
    // chemistNumber: string;
    qaNumber: string;
    qaName: string;
    result: string;
    resultsubmitDate: string;
    unit: string;
}

type LabHeadAssignmentBody = {
    insertLabDetails: Array<InsertLabDetails>
}

export const submitLabHeadAssignment = async (body: LabHeadAssignmentBody) => {
    return apiClient.post<any, AxiosResponse<LabHeadAssignmentBody>>('/submitlabhead', body)
        .then(({ data }) => data);
}
