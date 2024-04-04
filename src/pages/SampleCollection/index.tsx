import { useQuery } from "@tanstack/react-query";
import { getSampleCollection } from "../../services";
import { useMemo } from "react";
import Collection from "./components/Collection";

function SampleCollection() {
    const { data } = useQuery({
        queryKey: ["sample-collection"],
        queryFn: async () => {
            const { data } = await getSampleCollection();
            return data;
        }
    })

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
