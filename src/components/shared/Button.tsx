import { FC } from "react"
const Button:FC<{text:string}> = (props) => {
  const {text} = props
  return (
    <button className="bg-[#00616C] text-white font-medium  px-7 py-4 rounded-full hover:scale-105 hover:shadow-lg  duration-300 text-xl">{text}</button>
  )
}

export default Button