import { useQuery } from "@tanstack/react-query";
import { getLabHeadInProgress } from "../../services";

function LabHeadProgress() {
  const { data } = useQuery({
    queryKey: ['lab-head-progress'],
    queryFn: async () => {
      const { data } = await getLabHeadInProgress();
      return data;
    }
  })
  return (
    <div className="flex flex-col gap-4">
      {data?.map((x, k) => (
        <div key={k} className="w-full bg-white shadow rounded-lg border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Assigned QR: {x.qrcode}</h2>
            <h2 className="font-semibold text-gray-800">Assigned On: 12-December-2023 12:00:00</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Test Details</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Commodity Group</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Commodity</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Parameters</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Test Mehod</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Status</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Result</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {x.labDetails.map((d, k) => (
                    <tr key={k}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800"></div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{d.commodityGroupText}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{d.commodityText}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{d.parameterText}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{d.testmethodText}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{d.verificationStatus}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">{d.result}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LabHeadProgress;
