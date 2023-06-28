import Wraper from "@/components/shared/Wraper"
import Button from "@/components/shared/Button"
import QuarterBox from "@/components/shared/QuarterBox"

const CoreTracksData = [
{  
  header:"Quarter I",
description:"CS-101:Object-Oriented Programming using TypeScript",
number:1,
},
{  
  header:"Quarter II",
description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
number:2,
},
{  
  header:"Quarter III",
description:"$-101:Dollar Making Bootcamp -Full- Stack Template and API Product Development",
number:3,
},

]
const CoreTracks = () => {
    const header = "Core Courses \n (Common in All Specializations):"
  return (
    <section className="mt-16 lg:mt-28">
 <Wraper>
  <div className="max-w-screen-md">
   <h4 className="text-teal-700 font-semibold text-md md:text-lg ">Program of Studies</h4>

    <h2 className="text-3xl md:text-5xl font-semibold whitespace-pre-line ">{header}</h2>

     <p className="mt-3 text-slate-600 text-[14px] md:text-xl">Every participant of the program will start by completing the following three core courses.</p>

     <div className="mt-6">
<Button text="Enroll Now"/>
     </div>

   </div>
   {/* Boxes */}
   <div className="my-10 md:my-20 flex gap-x-8 gap-y-6 flex-col md:flex-row min-w-fit">

{
  CoreTracksData.map((item,i)=>(
<QuarterBox
key={item.number}
 header={item.header}
  description={item.description} 
  number={i+1}/>
  ))
}

   </div>
   </Wraper>
    </section>
  )
}

export default CoreTracks