import { useQuery } from "@tanstack/react-query";
import { getLabactivityJrfs } from "../../services/lab-activity-jrfs";






function labActivity() {

  // const [data, setData] = useState<GetJRFListResponse>();
  const { data } = useQuery({
    queryKey: ['lab-head-progress'],
    queryFn: async () => {
      const { data } = await getLabactivityJrfs();
      return data;
    }
  })
   return (
      <div className="w-full bg-white shadow rounded-lg border border-gray-200 mb-5 p-16">
        
        {data?.length ? (
          <div className="mt-10">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        JRF No.
                      </div>
                    </th>
                    {/* <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Download Document
                      </div>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data?.map((row, key) => (
                    <tr key={key}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {row.jrfNumber}
                          </div>
                        </div>
                      </td>
                      {/* <td>
                        <a
                          href={row.jrfUrl}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none w-[120px]"
                          download
                        >
                          Download
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
  );
};

export default labActivity;
