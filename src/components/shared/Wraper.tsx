import {FC} from 'react'
import * as React from 'react';
const Wraper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-4'>
        {children}

    </div>
  )
}

export default Wraper