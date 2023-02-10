import React from 'react';
import tw from 'twin.macro';
import TrafficChart from './Charts/TrafficChart';

const Traffic = () => {
  return (
    <Div>
      <Head>Traffic summary</Head>
      <TrafficChart></TrafficChart>
    </Div>
  );
};

export default Traffic;

const Div = tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
px-6
py-4
mt-4
`;
const Head = tw.p`
text-gray-800
font-medium
mb-4
dark:text-white
`;
