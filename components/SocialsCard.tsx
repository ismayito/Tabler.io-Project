import React from 'react'
import { IconCurrencyDollar } from '@tabler/icons';
import { IconShoppingCart } from '@tabler/icons';
import { IconBrandTwitter } from '@tabler/icons';
import { IconBrandFacebook } from '@tabler/icons';
import { icons } from 'react-icons/lib';
import tw from 'twin.macro';

const SocialsCard = () => {
    const categories=[
        {icon:<IconCurrencyDollar/>, title:"Sales", desc:"waiting payments", numHead:132, numBody:12},
        {icon:<IconShoppingCart/>, title:"Orders", desc:"shipped", numHead:78, numBody:32},
        {icon:<IconBrandTwitter/>, title:"Shares", desc:"today", numHead:623, numBody:16},
        {icon:<IconBrandFacebook/>,title:"Likes", desc:"today", numHead:132, numBody:21},
    ]
  return (
    <Div>
        {
            categories.map((category)=>(
                <List key={category.numBody}>
                    <Icon 
                       className={`${category.numBody===12 &&"bg-[#1E6BC4]"}
                       ${category.numBody===32 &&"bg-[#2fb344]"}
                       ${category.numBody===16 &&"bg-[#1da1F2]"}
                       ${category.numBody===21 &&"bg-[#1877f2]"}
                         `
                         }>
                       {category.icon}
                    </Icon>
                    <DivSub>
                      <Head>
                        <p>{category.numHead}</p>
                        <p>{category.title}</p> 
                       </Head> 
                      <Description>
                        <p>{category.numBody}</p>
                        <p>{category.desc}</p>
                     </Description>
                    </DivSub>
                </List>
            ))
        }
    </Div>
  )
}

export default SocialsCard;

const Div=tw.div` 
rounded
h-auto
grid 
md:grid-cols-4
gap-4
mt-4
`
const Icon=tw.div`
h-10
w-10
rounded
flex
text-white
items-center
justify-center
`
const Head=tw.div`
flex
gap-2
text-base
text-gray-900
dark:text-white
`
const Description=tw.div`
flex
gap-2
text-sm
text-gray-500
`
const DivSub=tw.div`
flex
flex-col
`
const List=tw.ul`
flex
gap-4
bg-white
dark:border-[#243049]
dark:bg-[#1a2234] 
p-4
items-center
rounded
border
border-gray-200
`