import React from 'react'
import tw from 'twin.macro';
import Link from 'next/link';
import {RiArrowDropDownLine} from "react-icons/ri"
import { IconMinus } from '@tabler/icons';
import LastDays from './LastDays';
import RevenueChart from './RevenueChart';
import ClientsChart from './ClientsChart';

const NewClients = () => {
  return (
    <Div>
        <Div1>
            <Title>NEW CLIENTS</Title>
            <LastDays></LastDays>
        </Div1>
        <Content>
            <Paragraph1> 6782</Paragraph1>
            <DivContent>
             <p>0%</p>
             <IconMinus  className='h-5 w-5'></IconMinus>
            </DivContent>
        </Content>
        <ClientsChart></ClientsChart>
    </Div>
  )
}

export default NewClients;

const Div=tw.div`
bg-white
border
border-gray-200
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
`
const DivContent=tw.div`
flex
text-[#f59f00]
text-sm
gap-1
items-center
`
