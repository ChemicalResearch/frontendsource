import { queryOptions, useQuery } from "@tanstack/react-query";
import { getSampleCollection } from "../../services";
import { useMemo } from "react";
import Collection from "./components/Collection";

export const sampleCollectionOptions = queryOptions({
    queryKey: ["sample-collection"],
    queryFn: async () => {
        const { data } = await getSampleCollection();
        return data;
    }
})

function SampleCollection() {
    const { data } = useQuery(sampleCollectionOptions)

    const renderVehicleTypes = useMemo(() => data?.vehicleType?.map((vehicle) => <option key={vehicle.number} value={vehicle.number}>{vehicle.name}</option>)
        , [data?.vehicleType])

    return (
        <div>
            {data?.collectionSummaries?.map((sample) => (
                <Collection key={sample.jobNumber} {...sample} />
            ))}
        </div>
    )
}

export default SampleCollection;
