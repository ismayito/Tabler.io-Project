import React from 'react'
import tw from 'twin.macro'

const StorageProgressBar = () => {
    const storage=[
        {title:"Regular", space:"915MB"},
        {title:"System", space:"415MB"},
        {title:"Shared", space:"201MB"},
        {title:"Free", space:"612MB"}
    ]
  return (
    <Div>
        <Head>Using Storage <Span>6854.4 MB</Span> of 8GB</Head>
        <ProgressBar>
            <Bar style={{width:'44%'}}></Bar>
            <Bar2 style={{width:'19%'}}></Bar2>
            <Bar3 style={{width:'9%'}}></Bar3>
        </ProgressBar>
        <DivProgress>
        {
            storage.map(item=>(
                <List key={item.space}>
                    <Divstorage className={`${item.title==="Regular" && "bg-blue-600"}
                        ${item.title==="System" && "bg-[#206bc4]"}
                        ${item.title==="Shared" && "bg-[#2fb344]"}
                        ${item.title==="Free" && "bg-gray-200"}
                    `}></Divstorage>
                    <p>{item.title}</p>
                    <Space>{item.space}</Space>
                </List>
            ))
        }
        </DivProgress>
    </Div>
  )
}

export default StorageProgressBar
const Div=tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
rounded
h-auto
mt-4
px-6
py-4
`
const Head=tw.p`
font-medium
text-base
text-[#1d273b]
dark:text-white
mb-3
`
const Span=tw.span`
text-black
dark:text-white
font-bold
`
const ProgressBar= tw.div`
w-full
bg-gray-200
flex
rounded-full
h-2
dark:bg-gray-700
mb-3
`
const Bar=tw.div`
bg-blue-600 
border-l-0
h-2
rounded-r-none
rounded-full
mr-1
`
const Bar2=tw.div`
bg-[#206bc4]
border-l-0
h-2
rounded-r-none
rounded-l-none
rounded-full
mr-1
`
const Bar3=tw.div`
bg-[#2fb344]
border-l-0
h-2
rounded-r-none
rounded-l-none
rounded-full
mr-1
`
const Divstorage=tw.div`
h-3
w-3
rounded-sm
`
const List=tw.ul`
flex
gap-2
items-center
`
const DivProgress=tw.div`
flex
gap-2
`
const Title=tw.p`
`
const Space=tw.p`
text-gray-500
hidden
sm:block
md:max-[1232px]:hidden
md:max-[992px]:block
xl:max-[1280px]:hidden
xl:max-[1338px]:hidden
xl:block
`