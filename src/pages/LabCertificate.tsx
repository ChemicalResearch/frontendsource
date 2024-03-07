const LabCertificate = () => {
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600">
        <div className="flex flex-col">
          <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Assigned QR: 123456789</h2>
              <h2 className="font-semibold text-gray-800">Despatched On: 12-December-2023 12:00:00</h2>
              <h2 className="font-semibold text-gray-800">Status: Deapatched</h2>
              {/* <div className="flex items-center justify-start mt-4">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Scan to Receive</button>
                </div> */}
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
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
                        <div className="font-semibold text-left">Chemist</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Coal</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Anthracite</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex items-center justify-start mt-5">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Certificate</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white shadow rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Assigned QR: 123456789</h2>
              <h2 className="font-semibold text-gray-800">Despatched On: 12-December-2023 12:00:00</h2>
              <h2 className="font-semibold text-gray-800">Status: Sample Preparation</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
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
                        <div className="font-semibold text-left">Chemist</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
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
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                    <tr>
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
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                    <tr>
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
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                    <tr>
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
                        <div className="text-left">Not Editable</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">Not Editable</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex items-center justify-start mt-5">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Certificate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LabCertificate;