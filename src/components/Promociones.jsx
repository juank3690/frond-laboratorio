import React from 'react'

 export const Promociones = () => {
  return (
    <div className="bg-slate-200 z-20 ml-6 absolute top-44 left-10 w-5/6 ">
      <h1 className='text-center text-3xl mb-10 text-orange-400'>Promociones</h1>
      <ul className='text-center'>
        <li className='mb-3'>Primer mes 50% de descuento</li>
        <li className='mb-3'>paga 2 meses y lleva una semana extra</li>
        <li className='mb-3'>solo los viernes 5.000 el dia</li>
        <li className='mb-3'>si vienes con un amigo cada uno 50.000 el mes</li>
        
      </ul>
      <h1 className='text-center text-3xl mb-10 text-orange-400'>Niveles de membresia</h1>
      <ul className='text-center'>
      <li className='mb-3'><span className='text-orange-400 font-bold'>Membresía nivel 1:</span>acceso a nuestras instalaciones los 30 dias del mes en nuestro horario de atención
      </li>
      <li className='mb-3'><span className='text-orange-400 font-bold'>Membresía nivel 2:</span>los entrenadores estarán contigo y te daran feedback sobre tus rutinas y entrenamientos, incluye las membresías anteriores</li>
      <li className='mb-3'><span className='text-orange-400 font-bold'>Membresía nivel 3:</span>nuestros entrenadores crearan una rutina personalizada para ti, incluye las membresías anteriores</li>
      <li className='mb-3'><span className='text-orange-400 font-bold'>Membresía nivel 4:</span>los entrenadores te crearan una dieta personalizada basada en tu objetivo, incluye todo lo anterior</li>
      <img src="homero1.gif" alt="" className='mx-auto pb-2 rounded-md' />
      
     

      </ul>
    </div>
  )
}


