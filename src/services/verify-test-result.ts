import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";

export type VerifyTestResult = {
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

export const getVerifyTestResult = (employee_id: number) => {
    return apiClient.get<any, AxiosResponse<Array<VerifyTestResult>>>(`/assignedtoqa/${employee_id}`)
}