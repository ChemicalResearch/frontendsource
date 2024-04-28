import { getVerifyTestResult } from "../services";
import { useQuery } from "@tanstack/react-query";

function TestResult() {
  const { isPending, error, data } = useQuery({
    queryKey: ["verify-test-result"],
    queryFn: async () => {
      const { data } = await getVerifyTestResult(201572);
      return data;
    },
  });

  console.log({ isPending, error, data });
  return (
    <div>
      {data?.map((result, key) => (
        <section key={key} className="antialiased bg-gray-100 text-gray-600">
          <div className="flex flex-col">
            <div className="w-full bg-white shadow rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">
                  Assigned QR: {result.qrcode}
                </h2>
                <h2 className="font-semibold text-gray-800">
                  Assigned On: 12-December-2023 12:00:00
                </h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Commodity Group
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Commodity
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Parameters
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Test Mehod
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Status
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Verified by
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-right">Result</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Actions
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {result.labDetails.map((lab, key) => (
                        <tr key={key}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{lab.commodityGroupText}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{lab.commodityText}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{lab.parameterText}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{lab.testmethodText}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-center">1</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left"></div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-right">{lab.result}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Save
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default TestResult;
