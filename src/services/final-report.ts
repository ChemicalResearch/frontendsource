import { AxiosResponse } from "axios";
import { apiClient } from "../config/api-client";


export type FinalReport = Array<{
    jrfNumber: string;
    labReportnumber: string;
    reportNumber: string;
    labReportDate: string;
    testReport: string;
    gcvReport: string;
}>

export const getFinalReport = () => {
    return apiClient.get<any, AxiosResponse<FinalReport>>(`/getfinalreport`)
}
