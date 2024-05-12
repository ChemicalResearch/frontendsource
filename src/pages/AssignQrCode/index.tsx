import { queryOptions, useQuery } from "@tanstack/react-query";
import { getAssignQrCode,getSamplePselection } from "../../services";
import Collection from "./components/Collection";

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
  console.log({data})
  return (
    <div className="max-w-screen-xl">
      {/* {data?.models?.map((model) => (
        <Collection key={model.jobNumber} model={model} labMasters={data.labMasters}/>
      ))} */}
     <Collection samples={data} />
    </div>
  );
}

export default assignQr;
