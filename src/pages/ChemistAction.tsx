function ChemistAction() {
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600">
        <div className="flex flex-col">
          <div className="w-full bg-white shadow rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Assigned QR: 123456789</h2>
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
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Actions</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">Test1</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Total Moisture</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Method10</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">Draft</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="w-20 bg-white border border-gray-200 rounded-lg mx-auto" data-hs-input-number>
                          <div className="w-full flex justify-between items-center gap-x-1">
                            <div className="grow py-2 px-3">
                              <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 text-center" type="text" value="0.5" data-hs-input-number-input />
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
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">Test1</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Total Moisture</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Method10</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">Draft</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="w-20 bg-white border border-gray-200 rounded-lg mx-auto" data-hs-input-number>
                          <div className="w-full flex justify-between items-center gap-x-1">
                            <div className="grow py-2 px-3">
                              <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 text-center" type="text" value="0.5" data-hs-input-number-input />
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
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">Test1</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Total Moisture</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Method10</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">Not Started</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="w-20 bg-white border border-gray-200 rounded-lg mx-auto" data-hs-input-number>
                          <div className="w-full flex justify-between items-center gap-x-1">
                            <div className="grow py-2 px-3">
                              <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 text-center" type="text" value="0.5" data-hs-input-number-input />
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
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">Test1</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Total Moisture</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Method10</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center">Draft</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="w-20 bg-white border border-gray-200 rounded-lg mx-auto" data-hs-input-number>
                          <div className="w-full flex justify-between items-center gap-x-1">
                            <div className="grow py-2 px-3">
                              <input className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 text-center" type="text" value="0.5" data-hs-input-number-input />
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChemistAction;
