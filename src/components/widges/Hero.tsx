import Wraper from "@/components/shared/Wraper"
import Image from "next/image"
import HeroPoster from '@/assects/images/hero-poster.png'
import Button from "@/components/shared/Button"
const Hero=()=> {
  return (
    <section>
        <Wraper>
            <div className="flex flex-col md:flex-row items-center">
                {/* left side */}
<div className="flex-1">
<h4 className="text-teal-700 font-semibold text-md md:text-lg ">Presidential Initiative of Artifical Intelligence and Computing (PIAIC)</h4>
<h1 className=" mt-2 text-3xl md:text-5xl font-semibold md:text-gray-900 text-black">Certified Web 3.0 and Metaverse Developer</h1>
<p className="mt-6  text-slate-600 text-sm md:text-xl">
A One and Quarter Years Panaverse Dao Earn as you Learn Program Getting Ready  for New Generation of Internet 
</p>
<p className=" mt-4 md:mt-2 text-slate-600 text-sm md:text-xl">
Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
 </p>
 <div className="mt-4 md:mt-6 ">
  <Button text={"Learn More"}/>
 </div>

</div>

 {/* Right side */}
 <div className="flex-1 mt-16 md:mt-0">
 <Image src={HeroPoster} alt="Hero-Poster" height={750} width={750}/>
                </div>

 </div>
        </Wraper>
    </section>
  )
}

export default Hero