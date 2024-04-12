import { useQuery } from '@tanstack/react-query';
import { getLabHeadAssignment } from "../../services";
import Assignments from "./components/Assignments";

const LabHeadAssignment = () => {
  const { data } = useQuery({
    queryKey: ['lab-head-assignment'],
    queryFn: async () => {
      const { data } = await getLabHeadAssignment(1);
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