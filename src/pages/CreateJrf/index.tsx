import { queryOptions, useQuery } from "@tanstack/react-query";
import { getJRFSelection } from "../../services";
import Collection from "./components/Collection";
import { useMemo } from "react";

export const getSamplePselectionData = queryOptions({
  queryKey: ["jrf-selection"],
  queryFn: async () => {
    const { data } = await getJRFSelection();
    return data;
  },
});

function assignQr() {
  const { data } = useQuery(getSamplePselectionData);
  const plantModelsByDespatchDate = useMemo(() => {
    return data?.reduce<
      Record<string, Array<{ plantId: string; plantName: string }>>
    >((prev: any, current) => {
      return { ...prev, [current.despatchDate]: current.plantModels };
    }, {} as Record<string, Array<{ plantId: string; plantName: string }>>);
  }, [data]);
  console.log({ plantModelsByDespatchDate });
  return (
    <div className="max-w-screen-xl">
      <Collection plantModelsByDespatchDate={plantModelsByDespatchDate} />
    </div>
  );
}

export default assignQr;
