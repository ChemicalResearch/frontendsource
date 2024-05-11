import { useQuery } from '@tanstack/react-query';
import { getLabHeadAssignment } from "../../services";
import Assignments from "./components/Assignments";
import { useAuth } from "../../context/auth";
const LabHeadAssignment = () => {
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ['lab-head-assignment'],
    queryFn: async () => {
      const { data } = await getLabHeadAssignment(Number(user?.employee_id));
      return data;
    }
  })

  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600">
        <div className="flex flex-col">
          {data?.map((d, k) => (
            <Assignments key={k} {...d} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default LabHeadAssignment;