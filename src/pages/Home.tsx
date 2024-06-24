// import { getDashboardData } from "../services";
// import { useQuery } from "@tanstack/react-query";
// import Charts from "../components/Charts";

function Home() {
  // const { data, isPending } = useQuery({
  //   queryKey: ["dashboard"],
  //   queryFn: async () => {
  //     const { data } = await getDashboardData();
  //     return data;
  //   },
  // });

  // if (isPending) return "Loading...";
  // return (
  //   <div className="flex flex-wrap gap-10">
  //     {data
  //       ? Object.values(data).map((chart, key) => (
  //           <div key={key} className="flex max-w-[600px] bg-white rounded-xl py-10 px-10">
  //             <Charts chart={chart} />
  //           </div>
  //         ))
  //       : null}
  //   </div>
  // );
  return (
    <iframe
      className="fixed top-0 left-0 right-0 bottom-0 h-full mt-[90px] ml-[255px] w-iframe"
      src="https://lookerstudio.google.com/embed/reporting/df3d3d07-699f-4562-830b-b177bf636cc8/page/bk23D"
      sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    ></iframe>
  );
}

export default Home;
