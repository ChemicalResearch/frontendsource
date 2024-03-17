import {Chart, ArcElement} from 'chart.js'

import { Pie } from "react-chartjs-2";

Chart.register(ArcElement);

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Pie data={data} />
    </div>
  )
}

export default Home;
