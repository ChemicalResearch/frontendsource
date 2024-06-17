import { useQuery } from "@tanstack/react-query";
import { getTmList } from "../../services";
import FinalReportBodyRow from "./components/TmBodyRow";

function Tm() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tms"],
    queryFn: async () => {
      const { data } = await getTmList();
      return data;
    },
  });
  if (isLoading) return "Loading...";
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-white shadow rounded-lg border border-gray-200">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">TCRC QR Code</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">TM Seal No.</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">TM Entry Date</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">TM Value</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">ACtion</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {data?.map((tm, key) => (
                  <FinalReportBodyRow key={key} tm={tm} refetch={refetch} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tm;
