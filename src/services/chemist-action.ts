import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

type Unit = {
    identifier: string;
    name: string;
    selected: boolean;
}

export type LabDetails = {
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
    resultsubmitDate: string
    unit: Array<Unit>;
    chemistAssignedDate: string;
    resultSubmitDate: string;
    verifiicationDate: string;
}
export type ChemistAction = {
    labHeadName: string;
    labHeadId: string;
    qrcode: string;
    jobNumber: string;
    labDetails: Array<LabDetails>
}

export const getChemistAction = async (employee_id: number) => {
    return apiClient.get<any, AxiosResponse<Array<ChemistAction>>>(`/assignedtochemist/${employee_id}`)
}