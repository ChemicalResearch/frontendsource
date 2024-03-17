import { useQuery } from "@tanstack/react-query";
import { getSampleCollection } from "../services";
import { useMemo } from "react";

function SampleCollection() {
  const { data } = useQuery({
    queryKey: ["sample-collection"],
    queryFn: async () => {
      const { data } = await getSampleCollection();
      return data;
    }
  })

  const renderVehicleTypes = useMemo(() => data?.vehicleType?.map((vehicle) => <option key={vehicle.number} value={vehicle.number}>{vehicle.name}</option>)
    , [data?.vehicleType])

  return (
    <div>
      {data?.collectionSummaries?.map((sample) => (
        <section key={sample.jobNumber} className="antialiased bg-gray-100 text-gray-600">
          <div className="flex flex-col">
            <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Job Number: {sample.jobNumber}</h2>
                <h2 className="font-semibold text-gray-800">Commodity Name: {sample.commodityName}</h2>
                <h2 className="font-semibold text-gray-800">Customer Name: {sample.customerName}</h2>
                <h2 className="font-semibold text-gray-800">Total Sample Count: {sample.totalSampleCount}</h2>
                <div className="flex items-center gap-4 mb-2">
                  <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Vehicle Type</label>
                  </div>
                  <div>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      {renderVehicleTypes}
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Vehicle Number</label>
                  </div>
                  <div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-2">
                  <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Quantity</label>
                  </div>
                  <div>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-2">
                  <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Unit</label>
                  </div>
                  <div>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      {renderVehicleTypes}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 items-start">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Submit</button>
                </div>
                <div className="flex flex-col gap-2 mt-4 items-start">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Generate QR</button>
                </div>
                <h2 className="font-semibold text-gray-800">Vehicle No: ABC-abc-1234</h2>
                <h2 className="font-semibold text-gray-800">QR Code: 97761231111089236</h2>
              </header>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default SampleCollection;
