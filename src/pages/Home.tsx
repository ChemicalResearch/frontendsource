import Chart from 'react-apexcharts';

const options = {
  labels: ['Job Completed', 'Sampling In Progress', 'Analysis In Progress']
}
const series = [30, 5, 10];


function Home() {
  return (
    <div>
      <Chart options={options} series={series} type="pie" width="380" />
    </div>
  )
}

export default Home;
