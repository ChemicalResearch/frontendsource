import { useQuery } from "@tanstack/react-query";
import { getCertificate } from "../services";


function getFileNameFromUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname;
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    return fileName;
  } catch (error) {
    console.error('Error parsing URL:', error);
    return Date.now() + ".jpg";
  }
}


const LabCertificate = () => {
  const { data } = useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      const { data } = await getCertificate();
      return data;
    }
  })

  const handleDownload = (url: string) => () => {
    fetch(url) // Replace with the URL of your image
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob], { type: "application/octetstream" }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', getFileNameFromUrl(url)); // Set the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  }
  return (
    <div className="flex flex-col gap-8">
      {data?.map((certificate, key) => (
        <div key={key} className="w-full bg-white shadow rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Assigned QR: {certificate.qrcode}</h2>
            <h2 className="font-semibold text-gray-800">Despatched On: 12-December-2023 12:00:00</h2>
            <h2 className="font-semibold text-gray-800">Status: Sample Preparation</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
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
                  {certificate.labDetails.map((details, key) => (
                    <tr key={key}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{details.commodityText}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{details.parameterText}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{details.testmethodText}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{details.chemist}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-start mt-5">
                <button type="button" onClick={handleDownload(certificate.certificateurl)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Certificate</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LabCertificate;