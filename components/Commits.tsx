import React from 'react';
import tw from 'twin.macro';
import { commit } from './model/CommitData';
import Image from 'next/image';

const Commits = () => {
  return (
    <Div>
      <Header>
        <User>
          <Head>USER</Head>
        </User>
        <Commit>
          <Head>COMMIT</Head>
          <Head className="pr-[60px]">DATE</Head>
        </Commit>
      </Header>
      {commit.map((item) => (
        <List key={item.id}>
          <DivIcon>
            {item.icon === 'text' ? (
              <div className="flex items-center text-xs justify-center">
                {item.text}
              </div>
            ) : (
              <Image
                className="rounded-md"
                width={32}
                height={32}
                src={item.icon}
                alt="img"
              ></Image>
            )}
          </DivIcon>
          <Content>
            <Paragraph className="text-[#1d273b] dark:text-white truncate sm:block">
              {item.head}
            </Paragraph>
            <Paragraph className="text-[#616876] text-[16px]">
              {item.date}
            </Paragraph>
          </Content>
        </List>
      ))}
    </Div>
  );
};

export default Commits;
const Div = tw.div`
flex
flex-col
`;
const Header = tw.div`
flex
gap-6
bg-[#f8fafc]
dark:bg-[#1a2234] 
dark:border-[#243049]
border-b
border-[#e6e7e9]
px-6
`;
const User = tw.div`
pt-2
pb-3
`;
const Commit = tw.div`
flex
justify-between
w-full
items-center
pt-2
pb-3
`;
const Head = tw.p`
text-[#616876]
text-xs
`;
const DivIcon = tw.div`
bg-[#f1f5f9]
rounded-md
border
border-gray-200
dark:border-[#243049]
items-center
flex
justify-center
text-[#616876]
h-8
w-8
dark:bg-[#1a2234] 
`;
const List = tw.ul`
flex
pl-6
py-3
border-b
border-[#e6e7e9]
dark:border-[#243049]
gap-6
text-[16px]
`;

const Content = tw.div`
flex
w-full
justify-between
truncate
pr-6
`;
const Paragraph = tw.p`

`;
