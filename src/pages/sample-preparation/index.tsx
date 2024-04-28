import { queryOptions, useQuery } from "@tanstack/react-query";
import { getSamplePreparation } from "../../services";
import SamplePreparationRow from "./components/SamplePreparationRow";
import Datepicker, {
  DateType,
  DateValueType,
} from "react-tailwindcss-datepicker";
import { useState } from "react";

export const samplePreparationOptions = queryOptions({
  queryKey: ["sample-preparation"],
  queryFn: async () => {
    const { data } = await getSamplePreparation();
    return data.models;
  },
});

function SamplePreparation() {
  const { data } = useQuery(samplePreparationOptions);

  const [value, setValue] = useState<{
    startDate: DateType;
    endDate: DateType;
  }>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue as any);
  };

  return (
    <div>
      {data?.map((preparation) => (
        <section
          key={preparation.jobNumber}
          className="antialiased bg-gray-100 text-gray-600"
        >
          <div className="flex flex-col">
            <div className="w-full bg-white shadow rounded-sm border border-gray-200 mb-10 px-8 py-10">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-2">
                  <h2 className="font-semibold text-gray-800">
                    Job Number: {preparation.jobNumber}
                  </h2>
                </div>
                <div className="md:col-span-2">
                  <h2 className="font-semibold text-gray-800">
                    Collection Number: {preparation.collectionNumber}
                  </h2>
                </div>
                <div className="md:col-span-2">
                  <h2 className="font-semibold text-gray-800">
                    Commodity: {preparation.commodity}
                  </h2>
                </div>
                <div className="md:col-span-2">
                  <h2 className="font-semibold text-gray-800">
                    Customer: {preparation.customer}
                  </h2>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="email">Start Date</label>
                  <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    useRange={false}
                    asSingle={true}
                    displayFormat={"DD-MM-YYYY"}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">End Date</label>
                  <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    useRange={false}
                    asSingle={true}
                    displayFormat={"DD-MM-YYYY"}
                  />
                </div>
              </div>
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">
                  Preparation Models:
                </h2>

                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              qrcode
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">image</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">type</div>
                          </th>
                          {/* <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Despatch Date</div>
                          </th> */}
                          {/* <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Lab</div>
                          </th> */}
                          {/* <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">Actions</div>
                          </th> */}
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {preparation?.preparationModels?.map((model, key) => (
                          <SamplePreparationRow
                            key={key}
                            jobNumber={preparation.jobNumber}
                            collectionNumber={preparation.collectionNumber}
                            commodity={preparation.commodity}
                            {...model}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 items-start">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Scan QR
                  </button>
                </div>
                <h2 className="font-semibold text-gray-800">
                  QR Code: 97761231111089236
                </h2>
                <h2 className="font-semibold text-gray-800">
                  Barcode: ABC-abc-1234
                </h2>
              </header>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default SamplePreparation;
