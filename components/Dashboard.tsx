import React from 'react';
import tw from 'twin.macro';
import { AiOutlinePlus } from 'react-icons/ai';

const Dashboard = () => {
  return (
    <Div>
      <Paragraph>OVERVIEW</Paragraph>
      <Div1>
        <Heading>Dashboard</Heading>
        <DivSub>
          <Button1>New view</Button1>
          <Button2>
            <AiOutlinePlus size={20} className="inline-block"></AiOutlinePlus>
            <ButonDiv>Create new report</ButonDiv>
          </Button2>
        </DivSub>
      </Div1>
    </Div>
  );
};

export default Dashboard;

const Div = tw.div`
 md:grid
 lg:flex
 lg:flex-col
 lg:px-14
 xl:px-28
 md:max-md:px-2
 dark:bg-[#1a2234]
 pt-4
 h-auto 
 w-full 
 mx-1
 sm:mx-0
`;
const Paragraph = tw.p`
text-[10px]
font-semibold
text-gray-400
dark:text-gray-400
`;
const Div1 = tw.div`
 flex
 justify-between
 mt-1
`;
const Heading = tw.h1`
text-black
font-semibold
dark:text-white
text-xl
`;
const DivSub = tw.div`
flex
gap-2
`;
const Button1 = tw.button`
px-4
py-1
bg-gray-50
rounded
hidden
sm:max-sm:hidden 
sm:max-md:block 
md:block
text-black
border
border-gray-200
hover:bg-white
dark:text-white
dark:bg-[#1a2234]
dark:border-[#243049]
dark:hover:bg-[#1d273b]
`;

const Button2 = tw.button`
flex
gap-3
text-white
items-center
md:py-1
md:px-3
sm:px-2
sm:py-2
px-2
py-2
mr-1
bg-[#206bc4]
rounded
hover:bg-[#206bc4]
`;
const ButonDiv = tw.div`
hidden
sm:max-sm:hidden 
sm:max-md:block
md:block
`;
