import Wraper from "../shared/Wraper"
import Image from "next/image"
import outcomePoster from "../../assects/images/outcome-poster.webp"

const ProgramOutcome = () => {

const outcomePoint = [
    "Product Ownership","Freelacing","Global Marketing by Panaverse DAO","Boosting Economy."
]

  return (
  <section className="mt-16 md:mt-28">
        <Wraper>
              <div className="flex flex-col-reverse md:flex-row md:gap-x-8 items-center ">
        {/* Left Image */}
        <div className="md:flex-1 py-6 md:py-0">
            <Image src={outcomePoster} alt="Program Outcome" height={600} width={600}/>
        </div>

        {/* Right content */}
<div className="md:flex-1">

<h2 className="font-semibold text-3xl md:text-5xl ">The Outcome for Participants of the Program</h2>
<p className="mt-6  text-slate-700 text-[14px] md:text-lg">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports</p>

<div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
    {
        outcomePoint.map((items,i) => (
            <div key={i} className="flex items-center gap-x-2">

 <svg width="64" height="57" className="flex-shrink-0" viewBox="0 0 64 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="57" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use href="#image0_1_2" transform="scale(0.015625 0.0175439)"/>
</pattern>
<image id="image0_1_2" width="64" height="57" href="data:image/png;base64,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"/>
</defs>
</svg>
<h3 className="font-italic text-md md:font-medium md:text-lg">{items}</h3>
                </div>
        ))
    }
</div>

</div>
         </div>
    </Wraper>
</section>
  )
}

export default ProgramOutcome