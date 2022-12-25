import React from 'react'
import dynamic from 'next/dynamic'; 
import tw from 'twin.macro';
import { ApexOptions } from "apexcharts";
import { IconTrendingUp } from '@tabler/icons';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function EarningsChart() {
    const options:ApexOptions={
        chart: {
            type: "radialBar",
      			fontFamily: 'inherit',
      			height: 40,
      			width: 40,
      			animations: {
      				enabled: false
      			},
      			sparkline: {
      				enabled: true
      			},
        },
       
        tooltip: {
        enabled:false
    },
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: '75%'
            },
            track: {
                margin: 0
            },
            dataLabels: {
                show: false
            }
        }
    },
    colors: ["#206bc4"],
}
   const series= [35]
  return (
    <Div>
      <Chart options={options} series={series} type="radialBar" height={40} width={40}></Chart>
      <DivEarnings>
        <Head>Today&apos;s Earnings:$4262.40</Head>
       <Paragraph><IconTrendingUp className='h-4 w-4 text-[#2fb344]  inline-block'>
        </IconTrendingUp><span className=''>+5% more than yesterday</span>
       </Paragraph> 
      </DivEarnings>
    </Div>
  )
  }

  const Div=tw.div`
  mb-0 
  px-4
  flex
  gap-2
  `
  const DivEarnings=tw.div`
  flex
  flex-col
  items-center
  justify-start
  `
  const Head=tw.p`
  p-0
  `
  const Paragraph=tw.p`
  text-[#616876]

  `
