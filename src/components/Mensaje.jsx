import React from 'react'

export const Mensaje = () => {
  return (
    <div className='bg-white w-full text-gray-600'>
        <h2 className='text-center mb-11 pt-10 text-5xl'>UNETE</h2>
        <div className='flex  justify-center items-center px-22 pb-10'>
            <img src="./arnold.jpg" alt="" className='w-96' />
            <div className='ml-6'>
            <h2 className='m text-3xl'>En Be fit te ofrecemos variedad de membresía que se adaptan a tus necesidades y objetivos!</h2>
            <span className='text-orange-500 text-4xl'>-Arnold</span>
            </div>
        </div>
        <div className='flex  justify-center items-center px-22 pb-10'>
            <div className='mr-6'>
            <h2 className=' text-3xl'>Be fit es el lugar que me hizo lo que soy actualmente</h2>
            <span className='text-orange-500 text-4xl'>-Cbum</span>
            </div>
            <img src="./cbum.jpg" alt="" className='w-96' />
           
        </div>
    </div>
  )
}


