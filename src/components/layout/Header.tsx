import Link from 'next/link'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Wraper from '@/components/shared/Wraper'

const Header = () => {
 
  return ( 
  <header className='sticky top-0 z-10 bg-white'>
 
    <Wraper>
  <div className='flex justify-between py-4 items-center'>
         {/* Logo*/}
         <div>
   {/* <h2 className='text-xl font-bold '>   Panavers Dao</h2> */}
<Image src={Logo} alt='Panaverse Doa logo' height={70} width={80}/>
         </div>
   {/*Navigation Bar */}
      <ul className='flex space-x-8 text-sm md:text-[18px]  items-center'>
        <li><Link href={'/'}>Home</Link></li>
        <div className='flex flex-1 items-center'>
        <li><Link href={'/courses'}>Courses</Link></li>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="h-7 w-7 text-gray-700 group-hover:text-primary mt-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg>
        </div>   
      </ul>
      </div>
      </Wraper>
 </header>
  )
}

export default Header