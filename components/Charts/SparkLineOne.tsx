import React from 'react'
import dynamic from 'next/dynamic'; 
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function SparkLineOne() {
    const options:ApexOptions={
        chart: {
                type: "line",
      			fontFamily: 'inherit',
      			height: 24,
      			animations: {
      				enabled: false
      			},
      			sparkline: {
      				enabled: true
      			},
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            width: 2,
            lineCap: "round",
        },
        colors: ['#206bc4'],
    }
   const series= [{
    data: [17, 24, 20, 10, 5, 1, 4, 18, 13]
}]
  return (
    <div  className="mb-0 w-16">
      <Chart options={options} series={series} type="line" height={24}></Chart>
    </div>
  )
  }
 