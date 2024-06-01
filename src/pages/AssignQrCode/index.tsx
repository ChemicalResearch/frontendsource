import { queryOptions, useQuery } from "@tanstack/react-query";
import { getAssignQrCode, getSamplePselection } from "../../services";
import Collection from "./components/Collection";
import { useMemo } from "react";

export const getAssignQrCodes = queryOptions({
  queryKey: ["get-assign-qr-code"],
  queryFn: async () => {
    const { data } = await getAssignQrCode();
    return data;
  },
});
export const getSamplePselectionData = queryOptions({
  queryKey: ["get-assign-qr-code"],
  queryFn: async () => {
    const { data } = await getSamplePselection();
    return data;
  },
});

function assignQr() {
  const { data } = useQuery(getSamplePselectionData);
  
  const plantModelsBydate = useMemo(() => {
    return data?.reduce((prev:any,current) => {
      return ({...prev,[current.plannedDate]:current.plantModels})
    }, {} as Record<string,{plantId: string,
    plantName: string}>);
  }, [data]);

  return (
    <div>
      <Collection plantModelsBydate={plantModelsBydate} />
    </div>
  );
}

export default assignQr;
