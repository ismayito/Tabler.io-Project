import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function ActiveChart() {
  const options: ApexOptions = {
    chart: {
      fontFamily: 'inherit',
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },

    tooltip: {
      theme: 'dark',
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      type: 'datetime',
    },

    yaxis: {
      labels: {
        padding: 4,
      },
    },
    labels: [
      '2020-06-21',
      '2020-06-22',
      '2020-06-23',
      '2020-06-24',
      '2020-06-25',
      '2020-06-26',
      '2020-06-27',
      '2020-06-28',
      '2020-06-29',
      '2020-06-30',
      '2020-07-01',
      '2020-07-02',
      '2020-07-03',
      '2020-07-04',
      '2020-07-05',
      '2020-07-06',
      '2020-07-07',
      '2020-07-08',
      '2020-07-09',
      '2020-07-10',
      '2020-07-11',
      '2020-07-12',
      '2020-07-13',
      '2020-07-14',
      '2020-07-15',
      '2020-07-16',
      '2020-07-17',
      '2020-07-18',
      '2020-07-19',
      '2020-07-20',
    ],
    colors: ['#206bc4'],
    legend: {
      show: false,
    },
  };
  const series = [
    {
      name: 'Profits',
      data: [
        37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67,
      ],
      tooltip: {
        theme: 'dark',
      },
    },
  ];
  return (
    <div className="mb-0">
      <Chart options={options} series={series} type="bar" height={40}></Chart>
    </div>
  );
}
