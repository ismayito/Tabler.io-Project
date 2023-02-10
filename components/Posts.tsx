import React from 'react';
import Image from 'next/image';
import tw from 'twin.macro';
import { post } from './model/PostsData';
import { BiRadioCircle } from 'react-icons/bi';

const Posts = () => {
  return (
    <Div>
      {post.map((item) => (
        <List key={item.head}>
          <Icon>
            {item.icon === 'text' ? (
              <div className="flex items-center justify-center">
                {item.text}
              </div>
            ) : (
              <Image
                className="rounded-md"
                width={40}
                height={40}
                src={item.icon}
                alt="img"
              ></Image>
            )}
          </Icon>
          <div className="flex flex-col w-full truncate">
            <DivContent>
              <div className="flex justify-start text-[16px] truncate  dark:text-white">
                {item.name === 'Mallory Hulme' ? (
                  <Paragraph>
                    It is{' '}
                    <span className="text-black font-medium dark:text-white ">
                      {item.name}
                    </span>{' '}
                    <span>`s &nbsp;</span>
                  </Paragraph>
                ) : (
                  <Paragraph>{item.name} &nbsp;</Paragraph>
                )}
                {<p>{item.head} &nbsp;</p>}
                {
                  <p className="text-black font-medium dark:text-white">
                    {item.text === 'JL' ? (
                      <span>&quot;{item.lew}&quot;</span>
                    ) : (
                      ''
                    )}
                    <span className="font-normal truncate">{item.post1}</span>
                  </p>
                }
                {
                  <Paragraph>
                    {item.name === 'Dunn Slane' ? (
                      <span className="truncate">&quot;{item.well}&quot;</span>
                    ) : (
                      ''
                    )}
                  </Paragraph>
                }
                {<Paragraph className="truncate">{item.mng}</Paragraph>}
                {<Paragraph className="truncate">{item.nametwo}</Paragraph>}
                {<Paragraph className="truncate">{item.kel}</Paragraph>}
                {<Paragraph className="truncate">{item.wiki}</Paragraph>}
                {
                  <Paragraph className="truncate">
                    {item.haskel}
                    <span className="font-normal"> {item.from} </span>
                    {item.open}
                    <span className="font-normal"> {item.to} </span>
                    {item.closed}
                  </Paragraph>
                }
                {<Paragraph className="truncate">{item.lorry}</Paragraph>}
                {<Paragraph className="truncate">{item.sunny}</Paragraph>}
                {
                  <Paragraph>
                    {' '}
                    {item.dollar}
                    <span className="font-normal truncate"> {item.geofry}</span>
                  </Paragraph>
                }
                {<Paragraph className=" truncate">{item.birth}</Paragraph>}
                {<Paragraph className=" truncate">{item.avian}</Paragraph>}
                {<Paragraph className=" truncate">{item.arlie}</Paragraph>}
              </div>
              {item.id === 'id' ? (
                <div className="justify-end">
                  {item.id === 'id' ? (
                    <BiRadioCircle
                      size={8}
                      className="inline-block right-0 bg-blue-500 rounded-full text-blue-500"
                    ></BiRadioCircle>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
            </DivContent>
            <p className="text-[#616876] text-[14px] mt-[0]">{item.day}</p>
          </div>
        </List>
      ))}
    </Div>
  );
};

export default Posts;
const Div = tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
mt-4
px-6
py-4
h-[448px]
overflow-x-hidden
scroll-m-0
`;
const Icon = tw.div`
bg-[#f1f5f9]
rounded-md
border
border-gray-200
dark:border-[#243049]
items-center
flex
justify-center
text-[#616876]
h-10
w-10
dark:bg-[#1a2234] 
`;
const List = tw.ul`
flex
gap-4
items-center
py-4
border-b
border-gray-200
dark:border-[#243049]
`;
const DivContent = tw.div`
flex
justify-between
items-center
`;
const Paragraph = tw.p`
text-black 
font-medium
dark:text-white
`;
