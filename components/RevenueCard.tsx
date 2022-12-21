import React from 'react'
import tw from 'twin.macro';
import Link from 'next/link';
import {RiArrowDropDownLine} from "react-icons/ri"
import { IconTrendingUp } from '@tabler/icons';
import LastDays from './LastDays';
import AreaChart from './ActiveChart';
import RevenueChart from './RevenueChart';
const RevenueCard = () => {
  return (
    <Div>
        <Div1>
            <Title>REVENUE</Title>
            <LastDays></LastDays>
        </Div1>
        <Content>
            <Paragraph1> $4,300</Paragraph1>
            <DivContent>
             <p>8%</p>
             <IconTrendingUp  className='h-5 w-5'></IconTrendingUp>
            </DivContent>
        </Content>
        <RevenueChart></RevenueChart>
    </Div>
  )
}

export default RevenueCard;
const Div=tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
h-auto
pt-4
`
const Div1= tw.div`
flex
justify-between
items-center
px-6
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
px-6
`
const Paragraph1=tw.p`
font-medium
flex
text-2xl
text-gray-900
dark:text-white
`
const DivContent=tw.div`
flex
text-[#2fb344]
text-sm
gap-1
items-center
`
