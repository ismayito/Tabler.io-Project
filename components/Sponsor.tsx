import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

const Sponsor = () => {
  return (
    <Div>
      <Link className='w-full' href="https://github.com/sponsors/codecalm" >
        <BackgroundImage></BackgroundImage>
      </Link>
    </Div>
  )
}

export default Sponsor

const Div=tw.div`
rounded
border
border-[#548ed2]
bg-[#dbe7f6]
md:max-[992px]:max-w-md
py-4
mt-4
`
const BackgroundImage=tw.div`
bg-[url('/sponsor-banner-homepage.svg')]
min-h-[316px]
bg-no-repeat
bg-center
bg-contain
object-contain
`


