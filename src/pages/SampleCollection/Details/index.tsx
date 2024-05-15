import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSampleCollectionDetails } from "../../../services";

function SampleCollectionDetails() {
  const { tcrcReferenceNumber } = useParams();
  const { data } = useQuery({
    queryKey: ["sample-colletion-details"],
    queryFn: async () => {
      const { data } = await getSampleCollectionDetails(
        tcrcReferenceNumber as string
      );
      return data;
    },
  });
  return (
    <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    TCRC Reference No.
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">TCRC Sample Id</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Customer</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Commodity</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Planned Preparation Date
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">RR No.</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Quantity</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Source</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Start Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">End Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">
                    Go to Preparation
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {data?.map((d, k) => (
                <tr key={k}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      {tcrcReferenceNumber}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      {d.tcrcSampleId}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">{d.customerText}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">{d.commodityText}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      {d.plannedPrepDate}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">RR No.</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">{d.quantity}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Source</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">{d.startTime}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">{d.endTime}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">
                      Go to Preparation
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SampleCollectionDetails;
