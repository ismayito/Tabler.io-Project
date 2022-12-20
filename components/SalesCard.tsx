import React from 'react'
import tw from 'twin.macro';
import Link from 'next/link';
import {RiArrowDropDownLine} from "react-icons/ri"
import { IconTrendingUp } from '@tabler/icons';
import LastDays from './LastDays';

const SalesCard = () => {
  return (
    <Div>
        <Div1>
            <Title>SALES</Title>
            <LastDays></LastDays>
        </Div1>
        <Content>
            <Paragraph1> 75%</Paragraph1>
        </Content>
        <Rate>
            <Conversion>Conversion rate</Conversion>
            <ConversionSubDiv>
              <p>7%</p>
              <IconTrendingUp  className='h-5 w-5'></IconTrendingUp>
            </ConversionSubDiv>
        </Rate>
        <ProgressBar>
          <Bar style={{width:'75%'}}></Bar>
        </ProgressBar>

    </Div>
  )
}

export default SalesCard;

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
const Links=tw.a`
`
const Divsub=tw.div`
flex
hover:underline
items-center
text-[#616876]
text-base
`
const Content=tw.div`
flex
`
const Paragraph1=tw.p`
font-medium
text-2xl
text-gray-900
dark:text-white
mb-4
`
const Rate= tw.div`
flex
justify-between
items-center
mb-2
`
const Conversion=tw.p`
text-gray-800
font-normal
dark:text-white
text-sm
`
const ConversionSubDiv=tw.div`
flex
text-[#2fb344]
text-sm
gap-1
items-center
`

const ProgressBar= tw.div`
w-full
bg-gray-200
rounded-full
h-1.5
dark:bg-gray-700

`
const Bar=tw.div`
bg-blue-600 
h-1
rounded-full
dark:bg-blue-500
`