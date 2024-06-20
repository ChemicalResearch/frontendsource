import { getLabactivitySamples } from "../../services/lab-activity-jrfs";
import { lazy, useState, Suspense, Fragment } from "react";
import LabActivitySampleHeadRow from "./LabActivitySampleHeadRow";
import LabActivitySampleBodyRow from "./LabActivitySampleBodyRow";
import { useQuery } from "@tanstack/react-query";

const JrfNoList = lazy(() => import("./JrfNoList"));

const LabActivity = () => {
  const [jrfNumber, setJrfNumber] = useState<string>("");
  const { data, refetch } = useQuery({
    queryKey: ["lab-activity-sample", jrfNumber],
    queryFn: async () => {
      const { data } = await getLabactivitySamples({ jrfNumber });
      return data;
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setJrfNumber((prev) => (prev === value ? "" : value));
  };

  return (
    <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-4">
        <div className="col-span-1">
          <Suspense fallback={<Fragment />}>
            <JrfNoList jrfNumber={jrfNumber} onChange={handleChange} />
          </Suspense>
        </div>
        <div className="col-span-3">
          {!!data?.length ? (
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <LabActivitySampleHeadRow />
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {data?.map((sample, key) => (
                      <LabActivitySampleBodyRow
                        key={key}
                        sample={sample}
                        refetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LabActivity;
