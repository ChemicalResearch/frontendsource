import { queryOptions, useQuery } from "@tanstack/react-query";
import { getSampleCollection } from "../../services";
import Collection from "./components/Collection";

export const sampleCollectionOptions = queryOptions({
  queryKey: ["sample-collection"],
  queryFn: async () => {
    const { data } = await getSampleCollection();
    return data;
  },
});

function SampleCollection() {
  const { data } = useQuery(sampleCollectionOptions);

  return (
    <div className="max-w-screen-xl">
      {data?.collectionSummaries?.map((sample) => (
        <Collection
          key={sample.jobNumber}
          unitModel={data.unitModel}
          vehicleType={data.vehicleType}
          {...sample}
        />
      ))}
    </div>
  );
}

export default SampleCollection;
