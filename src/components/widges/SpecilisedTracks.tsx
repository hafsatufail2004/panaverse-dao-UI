"use client"
import Wraper from "@/components/shared/Wraper"
import QuarterBox from "../shared/QuarterBox"
import Image from "next/image"
// Images
import metaverse from "../../assects/images/metaverse.webp"
import AI from "../../assects/images/ai.webp"
import cloudNative from "../../assects/images/cloud.webp"
import gemo from "../../assects/images/genomics.webp"
import network from "../../assects/images/network.webp"
import ambid from "../../assects/images/ambient.webp"
import { useState } from "react"

export const programData = [
  {
    slug:"wmd",
    header:"Web 3.0 (Blockchain) and Metaverse Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse,
    quarters:[
      {
        header:"Quarter IV",
      description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      number:4
      },
      {
        header:"Quarter V",
        description:" MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      }
    ]
  },

  {
slug:"ai",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization    ",
    description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image:AI,
    quarters:[
      {
        header:"Quarter IV",
      description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      number:4
      },
      {
        header:"Quarter V",
        description:" MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      }
    ]
  },

  {
    slug:"cnc",
    header:"Cloud-Native Computing Specialization",
    description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
   image:cloudNative,
    quarters:[
      {
        header:"Quarter IV",
      description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      number:4
      },
      {
        header:"Quarter V",
        description:" MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      }
    ]
  },

  {
    slug:"aiot",
    header:"Ambient Computing and IoT Specialization",
    description:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
   image:ambid,
    quarters:[
      {
        header:"Quarter IV",
      description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      number:4
      },
      {
        header:"Quarter V",
        description:" MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      }
    ]
  },

  {
    slug:"gbs",
    header:"Genomics and Bioinformatics Specialization",
    description:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image:gemo,
    quarters:[
      {
        header:"Quarter IV",
      description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      number:4
      },
      {
        header:"Quarter V",
        description:" MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      }
    ]
  },

  {
    slug:"npas",
    header:"Network Programmability and Automation Specialization",
    description:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image:network,
    quarters:[
      {
        header:"Quarter IV",
      description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      number:4
      },
      {
        header:"Quarter V",
        description:" MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      }
    ]
  }
]


const SpecilisedTracks = () => {

const [selectedItems,setSelectedItems] = useState("wmd");
const selectedItemsData  = programData.find((item) => item.slug == selectedItems)

  return (
    <section>
        <Wraper>
            {/* Header */}
            <div>
                   <h2 className="text-3xl md:text-5xl font-semibold whitespace-pre-line ">Specialized  Tracks:</h2>
            <p className="mt-3 text-slate-600 text-md md:text-xl max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
            </div>

<div className="mt-10 flex-col-reverse lg:flex-row flex gap-x-6 gap-y-8 pl-4">
{/* Content Left */}
<div className="max-w-screen-sm md:max-w-screen-md self-start sticky top-28 shadow-xl basis-8/12 rounded-xl flex-1 border border-slate-300 py-4 px-4 md:py-8 md:px-8  ">
    <h4 className="text-teal-700 text-sm md:text-lg font-medium"> Specialized Program</h4>
    <h3 className="text-xl md:text-2xl text-gray-800 md:text-black font-bold">{selectedItemsData?.header}</h3>
<p className="text-[14px] md:text-lg text-slate-600 mt-2">{selectedItemsData?.description}.</p>
<button className="text-teal-700 text-md md:text-lg mt-4 underline flex gap-x-1 items-end">Learn More
<svg className="mb-1.5" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
    </svg>
    </button>

    <div className="flex flex-col sm:flex-row gap-4 mt-8 "> 
    {
      selectedItemsData?.quarters.map((item)=>(
        <QuarterBox
        key={item.number}
        header={item.header}
        description={item.description}
        number={item.number}
        haveBorder = {true}
        /> 
      ))
    }
    </div>
</div>

{/* Content Right */}

<div className="px-4 py-6 basis-4/12 space-y-5">

{  programData.map((item,i) =>(

  <div onClick={() => setSelectedItems(item.slug)} key={item.slug} className=" flex gap-x-4 items-center cursor-pointer">
    <div className="flex-shrink-0 h-24 w-36">
   <Image src={item.image} alt={item.header} className="h-20 md:h-24 object-cover rounded-xl hover:border-l-4 hover:border-b-4 border-[#00e5ff]"/>
  </div>
  <div>
    <h4 className="text-teal-700 font-medium text-sm md:text-lg">Specialized Tracks</h4>
    <h3 className="
    text-md md:text-xl font-semibold">{item.header}</h3>
  </div>
  </div>
     ))
}
</div>
     </div>
           </Wraper>
                </section>
  )
}

export default SpecilisedTracks