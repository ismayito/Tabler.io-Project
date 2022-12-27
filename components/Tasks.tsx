import React from 'react'
import tw from 'twin.macro'
import { IconCalendar } from '@tabler/icons';
import { IconCheck } from '@tabler/icons';
import { IconMessage } from '@tabler/icons';
import Link from 'next/link';
import Image from 'next/image';

const Tasks = () => {
const tasks=[
 {input:<Input type='checkbox' checked />,link1:"Extend the data model.",dateIcon:<IconCalendar/>,date:" August 05, 2021",checkIcon:<IconCheck/>, link2:"2/7",messageIcon:<IconMessage/>,link3:"3",ImgIcon:"/000m.jpg"},
 {input:<Input type='checkbox'/>, initials:"JL",link1:"Verify the event flow.",dateIcon:<IconCalendar/>,date:"January 01, 2019",checkIcon:<IconCheck/>, link2:"3/10",messageIcon:<IconMessage/>,link3:"6",ImgIcon:"text"},
 {input:<Input type='checkbox'/>,link1:"Database backup and maintenance",dateIcon:<IconCalendar/>,date:"December 28, 2018",checkIcon:<IconCheck/>, link2:"0/6",messageIcon:<IconMessage/>,link3:"1",ImgIcon:"/002m.jpg"},
 {input:<Input type='checkbox' checked/>,link1:"Identify the implementation team.",dateIcon:<IconCalendar/>,date:"November 11, 2020",checkIcon:<IconCheck/>, link2:" 6/10",messageIcon:<IconMessage/>,link3:"12",ImgIcon:"/003m.jpg"},
 {input:<Input type='checkbox' />,link1:"Define users and workflow",dateIcon:<IconCalendar/>,date:" November 14, 2021",checkIcon:<IconCheck/>, link2:"3/7",messageIcon:<IconMessage/>,link3:"5",ImgIcon:"/000f.jpg"},
 {input:<Input type='checkbox' checked/>,link1:"Check Pull Requests",dateIcon:<IconCalendar/>,date:"February 11, 2021",checkIcon:<IconCheck/>, link2:"2/9",messageIcon:<IconMessage/>,link3:"3",ImgIcon:"/001f.jpg"}
]
  return (
    <Div>
        <Head>Tasks</Head>
        <table className='w-full table-auto'>
        <tbody>
            {
                tasks.map(item=>(
                    <tr className='border dark:border-[#243049] border-gray-200 py-3' key={item.link1}>
                        <td className='pl-6'>{item.input}</td>
                        <td><Links href="/#">{item.link1}</Links></td>
                        <TableData><Span>{item.dateIcon}</Span>{item.date}</TableData>
                        <TableData ><Span>{item.checkIcon}</Span><Links>{item.link2}</Links></TableData>
                        <TableData><Span>{item.messageIcon}</Span><Links>{item.link3}</Links></TableData>
                        <td className='pr-6'>
                            {item.ImgIcon==="text"?
                            <div
                            className='flex justify-center text-[11.8px] text-[#616876] items-center w-8 h-8 bg-gray-300 rounded'>
                            {item.initials}</div>:
                            <Image className='rounded'  width={32} height={32} src={`${item.ImgIcon}`} alt="icon-img"></Image>}
                        </td>
                    </tr>
                )) 
            }
        </tbody>
        </table>
    </Div>
  )
}

export default Tasks

const Div=tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
h-auto
mt-4
md:mt-0
w-full
col-span-2
overflow-scroll
md:overflow-hidden
`
const Head=tw.p`
text-[#1d273b]
font-medium
px-6
py-4
border-b
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234]
dark:text-white
`
const Input=tw.input`
mt-2
w-4
h-4
dark:bg-[#1a2234] 
py-1
focus:ring 
rounded-xl 
focus:ring-blue-100
`
const Links=tw.a`
hover:underline
`
const TableData=tw.td`
align-middle
py-4
text-[#616876]
`
const Span=tw.span`
inline-block
mr-1
align-middle 
`