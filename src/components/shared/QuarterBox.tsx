import { FC } from "react"

interface IProps{
header:string;
description:string;
number:number;
haveBorder?:boolean
}

const QuarterBox:FC<IProps> = ({header,description,number,haveBorder = true}) => {
  return (
   <div className={`shadow-xl rounded-xl md:w-4/12 relative px-8 py-16 flex flex-1 flex-col justify-center ${haveBorder === true ? "border":""}`}>
<h4 className="font-bold text-md md:text-lg">{header}</h4>
<p className="mt-2 text-slate-600 z-0">{description}</p>
<div className="absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-10">{number}</div>

 </div>)
  
}

export default QuarterBox