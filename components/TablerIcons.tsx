import React from 'react';
import { IconGhost } from '@tabler/icons';
import tw from 'twin.macro';

const TablerIcons = () => {
  return (
    <Div>
      <DivBackground>
        <IconGhost size={160} className="rotate-12"></IconGhost>
      </DivBackground>
      <Content>
        <Head>Tabler Icons</Head>
        <Paragraph>
          All icons come from the Tabler Icons set and are MIT-licensed. Visit
          tabler-icons.io, download any of the 2979 icons in SVG, PNG or React
          and use them in your favourite design tools.
        </Paragraph>
        <Links href="https://tabler-icons.io/">Download icons</Links>
      </Content>
    </Div>
  );
};

export default TablerIcons;
const Div = tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
relative
overflow-hidden
rounded
h-auto
mt-4
mx-1
`;
const Content = tw.div`
flex
p-10
flex-col
`;
const Head = tw.p`
text-[#1d273b]
pb-2
text-2xl
font-medium
dark:text-white
`;
const Paragraph = tw.p`
text-[#616876]
max-w-[940px]
`;
const Links = tw.a`
mt-4
bg-[#206bc4]
hover:bg-blue-500
dark:border-[#243049]
transform 
transition
py-[7px]
rounded
border-none
text-white
font-medium
px-4
w-[150px]
`;
const DivBackground = tw.div`
absolute
bg-[#206bc4]
overflow-hidden
rounded-full
-right-[54px]
-top-[50px]
bottom-0
flex
justify-center
items-center
text-white
h-52
opacity-20
w-52
`;
