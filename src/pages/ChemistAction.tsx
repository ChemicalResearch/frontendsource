import { useQuery } from '@tanstack/react-query'
import { getChemistAction } from "../services";
import ChemistActionTableHead from "../components/ChemistActionTableHead";

function ChemistAction() {
  const { data } = useQuery({
    queryKey: ['chemist-actions'],
    queryFn: async () => {
      const { data } = await getChemistAction(201571);
      return data;
    }
  })

  return (
    <div>
      {data?.map((chemist) => (
        <section key={chemist.jobNumber} className="antialiased bg-gray-100 text-gray-600 mb-5">
          <div className="flex flex-col">
            <div className="w-full bg-white shadow rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Assigned QR: {chemist.qrcode}</h2>
                <h2 className="font-semibold text-gray-800">Assigned On: 12-December-2023 12:00:00</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <ChemistActionTableHead />
                    <tbody className="text-sm divide-y divide-gray-100">
                      {chemist.labDetails?.map((lab, key) => (
                        <tr key={key}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Details</div>
                          </td>
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
                            <div className="text-center">{lab.verificationStatus}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="w-20 bg-white border border-gray-200 rounded-lg mx-auto" data-hs-input-number>
                              <div className="w-full flex justify-between items-center gap-x-1">
                                <div className="grow py-2 px-3">
                                  <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 text-center" type="text" value={lab.result ?? ""} data-hs-input-number-input />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center justify-center">
                              <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Draft</button>
                              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Complete</button>
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
  )
}

export default ChemistAction;
