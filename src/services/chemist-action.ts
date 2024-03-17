import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type ChemistAction = {
    id: number;
    sampleQr: number;
    chemist: number;
    chemistAssignedOn: string;
    commodityGrp: number;
    commodity: number;
    parameter: number;
    testMethod: number;
    result: number;
    resultUnit: number;
    resultSubmitDate: string;
    status: number;
    verifiedBy: number;
    verificationStatus: number;
    verifiedOn: string;
    commodityGrpName: string;
    commodityName: string;
    parameterName: string;
    methodName: string;
    unitName: string;
    statusName: string;
    verificationStatusDsc: string;
}

export const getChemistAction = async (employee_id: number) => {
    return apiClient.get<any, AxiosResponse<Array<ChemistAction>>>(`/assignedtochemist/${employee_id}`)
}