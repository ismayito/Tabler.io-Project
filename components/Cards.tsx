import React from 'react'
import ActiveUsers from './ActiveUsers'
import NewClients from './NewClients'
import RevenueCard from './RevenueCard'
import ReviewCard from './RevenueCard'
import SalesCard from './SalesCard'
import SocialsCard from './SocialsCard'
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
md:grid-cols-4
gap-4
`