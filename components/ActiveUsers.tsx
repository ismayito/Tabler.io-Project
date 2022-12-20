import React from 'react'
import tw from 'twin.macro';
import Link from 'next/link';
import {RiArrowDropDownLine} from "react-icons/ri"
import { IconTrendingUp } from '@tabler/icons';
import LastDays from './LastDays';
import ActiveChart from './ActiveChart';

const ActiveUsers = () => {
  return (
    <Div>
        <Div1>
            <Title>ACTIVE USERS</Title>
            <LastDays></LastDays>
        </Div1>
        <Content>
            <Paragraph1> 2986</Paragraph1>
            <DivContent>
             <p>4%</p>
             <IconTrendingUp  className='h-5 w-5'></IconTrendingUp>
            </DivContent>
        </Content> 
        <ActiveChart></ActiveChart>
    </Div>
  )
}

export default ActiveUsers;

const Div=tw.div`
bg-white
border
border-gray-100
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
h-auto
px-6
py-4
`
const Div1= tw.div`
flex
justify-between
items-center
`
const Title=tw.p`
text-[10px]
text-[#616876]
font-medium
`

const Content=tw.div`
flex
justify-items-start
items-center 
gap-1 
`
const Paragraph1=tw.p`
font-medium
flex
text-2xl
text-gray-900
dark:text-white
// mb-4
`
const DivContent=tw.div`
flex
text-[#2fb344]
text-sm
gap-1
items-center
`
