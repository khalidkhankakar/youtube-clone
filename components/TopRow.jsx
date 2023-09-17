import { Button_Array } from '@/utils'
import React from 'react'

const TopRow = () => {
  return (
<div className='flex z-50 pb-4 bg-white'>
        {
            Button_Array.map((e,index)=>{
                return <button key={index}  className='bg-gray-100 mx-2 text-black py-1 px-3 rounded-lg text-lg'>
                {e}
              </button>
            })}
             </div>
  )
}

export default TopRow