import { useQuery } from "@tanstack/react-query";
import { getTmList } from "../../services";
import FinalReportBodyRow from "./components/TmBodyRow";
import TMEntryTableHead from "./TMEntryTableHead";

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
      <div className="bg-white shadow rounded-lg border border-gray-200">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto">
              <TMEntryTableHead/>
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
