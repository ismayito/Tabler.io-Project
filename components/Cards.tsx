import React from 'react'
import ActiveUsers from './ActiveUsers'
import NewClients from './NewClients'
import RevenueCard from './RevenueCard'
import SalesCard from './SalesCard'

import tw from 'twin.macro'

const Cards = () => {
  return (
    <Div>
      <SalesCard></SalesCard>
      <RevenueCard></RevenueCard>
      <NewClients></NewClients>
      <ActiveUsers></ActiveUsers>
    </Div>
  )
}

export default Cards

const Div=tw.div`
flex
flex-col
md:grid
md:max-[991px]:grid-cols-2
md:grid-cols-4
gap-4
mx-1
lg:mx-0
`