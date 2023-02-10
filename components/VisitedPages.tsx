import React from 'react';
import tw from 'twin.macro';
import { IconLink } from '@tabler/icons';
import SparkLineOne from './Charts/SparkLineOne';
import SparkLineTwo from './Charts/SparkLineTwo';
import SparkLineThree from './Charts/SparkLineThree';
import SparkLineFour from './Charts/SparkineFour';
import SparkLineFive from './Charts/SparkLineFive';
import SparkLineSix from './Charts/SparkLineSix';

const VisitedPages = () => {
  const pages = [
    {
      page: '/',
      icon: <IconLink />,
      visitors: '4,896',
      unique: '3,654',
      rate: '82.54%',
      chart: <SparkLineOne />,
    },
    {
      page: '/form-elements.html',
      icon: <IconLink />,
      visitors: '3,652',
      unique: '3,215',
      rate: '76.29%',
      chart: <SparkLineTwo />,
    },
    {
      page: '/index.html',
      icon: <IconLink />,
      visitors: '3,256',
      unique: '2,865',
      rate: '72.65%',
      chart: <SparkLineThree />,
    },
    {
      page: '/icons.html',
      icon: <IconLink />,
      visitors: '986',
      unique: '865',
      rate: '44.89%',
      chart: <SparkLineFour />,
    },
    {
      page: '/docs/',
      icon: <IconLink />,
      visitors: '912',
      unique: '822',
      rate: '41.12%',
      chart: <SparkLineFive />,
    },
    {
      page: '/accordion.html',
      icon: <IconLink />,
      visitors: '855',
      unique: '798',
      rate: '32.65%',
      chart: <SparkLineSix />,
    },
  ];

  return (
    <Div>
      <Head>Most Visited Pages</Head>
      <table className="w-full table-auto">
        <Thead>
          <tr>
            <Tablehead>PAGE NAME</Tablehead>
            <Tablehead>VISITORS</Tablehead>
            <Tablehead>UNIQUE</Tablehead>
            <Tablehead>BOUNCE RATE</Tablehead>
          </tr>
        </Thead>
        <tbody>
          {pages.map((page) => (
            <tr
              className="border dark:border-[#243049] border-gray-200"
              key={page.page}
            >
              <TableData className="flex items-center gap-1">
                {page.page}{' '}
                <span className="inline-block text-blue-300"> {page.icon}</span>
              </TableData>
              <TableData>{page.visitors}</TableData>
              <TableData>{page.unique}</TableData>
              <TableData>{page.rate}</TableData>
              <td className=" py-3 pl-3 pr-6 min-w-fit">{page.chart}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Div>
  );
};

export default VisitedPages;
const Div = tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
h-auto
mt-4
overflow-x-scroll
md:overflow-x-hidden
col-span-2
w-full
`;
const Head = tw.p`
text-[#1d273b]
font-medium
px-6
py-4
border-b
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234]
dark:text-white
`;
const Thead = tw.thead`
text-[#616876]
text-[10px]
bg-[#f8fafc]
font-medium
border-b
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234]
text-left
`;
const Tablehead = tw.th`
py-2
pl-6
`;
const TableData = tw.td`
py-3 
px-6
`;
const Div1 = tw.div`
rounded
border
border-[#548ed2]
bg-[#dbe7f6]
px-6
py-4
mt-4
`;
const BackgroundImage = tw.div`
bg-[url('/sponsor-banner-homepage.svg')]
min-h-[316px]
bg-no-repeat
object-cover
`;
