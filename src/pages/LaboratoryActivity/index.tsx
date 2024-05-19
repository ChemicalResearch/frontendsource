import { useQuery } from "@tanstack/react-query";
import {
  getLabactivityJrfs,
  getLabactivitySamples,
  GetLabactivitySamplesResponse,
} from "../../services/lab-activity-jrfs";
import { useCallback, useEffect, useState } from "react";
import LabActivitySampleHeadRow from "./LabActivitySampleHeadRow";
import LabActivitySampleBodyRow from "./LabActivitySampleBodyRow";

const LabActivity = () => {
  const { data } = useQuery({
    queryKey: ["laboratory-activity"],
    queryFn: async () => {
      const { data } = await getLabactivityJrfs();
      return data;
    },
  });

  const [jrfNumber, setJrfNumber] = useState<string>("");
  const [samples, setSamples] = useState<GetLabactivitySamplesResponse>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setJrfNumber((prev) => (prev === value ? "" : value));
  };

  const getSamples = useCallback(async () => {
    if (!jrfNumber) {
      setSamples([]);
      return;
    }
    try {
      const { data } = await getLabactivitySamples({ jrfNumber });
      setSamples(data);
    } catch (e) {
    } finally {
    }
  }, [jrfNumber]);

  useEffect(() => {
    getSamples();
  }, [getSamples]);

  return (
    <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-4">
        <div className="col-span-1">
          <div className="font-semibold text-left mb-2">JRF No. ALIVE</div>
          <ul>
            {data?.map((x, key) => (
              <li key={key}>
                <label className="flex items-center font-medium text-gray-800 cursor-pointer">
                  {x.jrfNumber}
                  <input
                    type="checkbox"
                    value={x.jrfNumber}
                    checked={jrfNumber === x.jrfNumber}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 ml-2 cursor-pointer"
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          {!!samples?.length ? (
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <LabActivitySampleHeadRow />
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {samples?.map((sample, key) => (
                      <LabActivitySampleBodyRow key={key} sample={sample} />
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
