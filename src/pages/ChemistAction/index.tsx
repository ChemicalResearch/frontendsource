import { useQuery } from '@tanstack/react-query'
import { getChemistAction } from "../../services";
import ChemistActionTableHead from "../../components/ChemistActionTableHead";
import ChemistLabDetails from './Components/ChemistLabDetails';
import { useAuth } from "../../context/auth";
function ChemistAction() {
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ['chemist-actions'],
    queryFn: async () => {
      const { data } = await getChemistAction(Number(user?.employee_id));
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
                        <ChemistLabDetails key={key} jobNumber={chemist.jobNumber} qrcode={chemist.qrcode}{...lab}/>
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
