import { getDashboardData } from "../services";
import { useQuery } from "@tanstack/react-query";
import Charts from "../components/Charts";

function Home() {
  const { data, isPending } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const { data } = await getDashboardData();
      return data;
    },
  });

  if (isPending) return "Loading...";
  return (
    <div className="flex flex-wrap gap-10">
      {data
        ? Object.values(data).map((chart, key) => (
            <div key={key} className="flex max-w-[600px] bg-white rounded-xl py-10 px-10">
              <Charts chart={chart} />
            </div>
          ))
        : null}
    </div>
  );
}

export default Home;
