import React,{useState} from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from "@react-jvectormap/world";
import { Alldata } from '../model/MapData';
import tw from 'twin.macro';
export default function Map() {
  return (
    <Div>
          <Head>Locations</Head>
         <DivMap>
            <VectorMap map={worldMill}
                       backgroundColor="transparent"
                       regionStyle = {{
                        initial: {
                            fill: '#f1f5f9',
                            stroke: '#e6e7e9',
                            strokeWidth: 2,
                        }
                    }}
                    zoomOnScroll={false}
                    series={
                        {regions:[
                            {values:Alldata,
                            attribute:"fill",
                            scale:["#ffffff","#206bc4"]
                        }
                        ]}
                    }
            />
        </DivMap>
       
    </Div>
  )
}

const Div=tw.div`
bg-white
border
border-gray-200
dark:border-[#243049]
dark:bg-[#1a2234] 
px-6
py-4
h-auto
w-auto
mt-4
`
const Head=tw.p`
text-gray-800
font-medium
mb-4
dark:text-white
`
const DivMap=tw.div`
flex
justify-center
items-center
h-60
w-auto
`