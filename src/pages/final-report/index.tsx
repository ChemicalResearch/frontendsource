import { useQuery, queryOptions } from "@tanstack/react-query";
import { getFinalReport } from "../../services";
import FinalReportBodyRow from "./components/FinalReportBodyRow";

export const finalReportsOptions = queryOptions({
  queryKey: ["final-reports"],
  queryFn: async () => {
    const { data } = await getFinalReport();
    return data;
  },
});

function FinalReport() {
  const { data, isLoading } = useQuery(finalReportsOptions);
  if(isLoading) return "Loading..."
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-white shadow rounded-lg border border-gray-200">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Jrf Number</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      Lab Report Number
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Report Number</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      Lab Report Date
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">test Report</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">gcv Report</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">ACtion</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {data?.map((report, key) => (
                  <FinalReportBodyRow key={key} report={report} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalReport;
