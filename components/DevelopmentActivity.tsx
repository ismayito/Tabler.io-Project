import React from 'react';
import tw from 'twin.macro';
import DevelopmentChart from './Charts/DevelopmetChart';
import EarningsChart from './Charts/EarningsChart';
import Commits from './Commits';

export const DevelopmentActivity = () => {
  return (
    <Div>
      <Head>Development activity</Head>
      <EarningsChart></EarningsChart>
      <DevelopmentChart></DevelopmentChart>
      <Commits></Commits>
    </Div>
  );
};

const Div = tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
pt-4
mt-4
pb-0
mb-0
`;
const Head = tw.p`
px-6
font-medium
pb-4
`;
