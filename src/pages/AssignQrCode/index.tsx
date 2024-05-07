import { queryOptions, useQuery } from "@tanstack/react-query";
import { getAssignQrCode } from "../../services";
import Collection from "./components/Collection";

export const getAssignQrCodes = queryOptions({
    queryKey: ["get-assign-qr-code"],
    queryFn: async () => {
        const { data } = await getAssignQrCode();
        return data;
    }
})

function assignQr () {
    const { data } = useQuery(getAssignQrCodes)
    return (
        <div className="max-w-screen-xl">
            {data?.collectionSummaries?.map((sample) => (
                <Collection key={sample.jobNumber} {...sample} />
            ))}
        </div>
    )
}

export default assignQr;
