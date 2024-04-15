import { apiClient } from "../config/api-client";

type ChemistActionBody = {
   jobNumber: string;
   qrcode: string;
   commodityId: string;
   parameterId: string;
   testMethodId: string;
   testResult: string;
   unitId: string;
   unitText: string;
   flag: string;
}

export const submitChemistAction = async (body: ChemistActionBody) => {
    return apiClient.post('/submitchemist', body)
        .then(({ data }) => data);
}
