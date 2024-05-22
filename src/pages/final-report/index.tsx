import { useQuery } from "@tanstack/react-query";
import { getFinalReport } from "../../services";
import SampleFinalReport from "./components/SampleFinalReport";

function FinalReport() {
  console.log("5");

  const { data } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const { data } = await getFinalReport();
      return data;
    },
  });
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
                    <div className="font-semibold text-left">test Report</div>
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
                {data?.map((x, k) => (
                  //  <SampleFinalReport
                  //  key={k}
                  //  row={x}
                  // />
                  <tr key={k}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{x.jrfNumber}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        <input  className="h-10 border mt-1 rounded px-4 w-full" type="text"></input>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left"> <input  className="h-10 border mt-1 rounded px-4 w-full" type="text"></input></div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left"> <input  className="h-10 border mt-1 rounded px-4 w-full" type="text"></input></div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left"></div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left"></div>
                    </td>
                    <td>
                      <button
                        disabled={false}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        Save
                      </button>
                    </td>
                  </tr>
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
