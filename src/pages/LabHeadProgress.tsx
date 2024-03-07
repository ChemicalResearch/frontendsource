function LabHeadProgress() {
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
                        <div className="text-center">60</div>
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
                        <div className="text-center">60</div>
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
                        <div className="text-center">60</div>
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
                        <div className="text-center">60</div>
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

export default LabHeadProgress;
