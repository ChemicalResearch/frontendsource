import { useState } from 'react';
import Chart from 'react-apexcharts'

const options = {
  labels: ['Job Completed', 'Sampling In Progress', 'Analysis In Progress']
}
const series = [30, 5, 10];


function Home() {
  const [charts] = useState([
    {
        "type": "piechart",
        "description": "Total Count",
        "values": [
            {
                "value": "30",
                "text": "Job Completed"
            },
            {
                "value": "5",
                "text": "Sampling In Progress"
            },
            {
                "value": "10",
                "text": "Analysis In Progress"
            }
        ]
    }
])
  return (
    <div>
      <Chart options={options} series={series} type="pie" width="380" />
    </div>
  )
}

export default Home;
