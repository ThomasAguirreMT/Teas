import React from 'react'
import CircularGallery from '../CircularGallery/CircularGallery'

const Oficina = () => {
  const items = [
    { image: new URL('../../assets/Oficina/1.jpeg', import.meta.url).href },
    { image: new URL('../../assets/Oficina/2.jpeg', import.meta.url).href },
    { image: new URL('../../assets/Oficina/3.jpeg', import.meta.url).href },
    { image: new URL('../../assets/Oficina/4.jpeg', import.meta.url).href }
  ];

  return (
    <div className='pb-8'>
        <h1 className='text-3xl font-bold text-center mt-10 mb-4'>Conoce nuestra oficina</h1>
        <div className='h-[400px] lg:h-[420px]'>
          <CircularGallery items={items} imageScale={1.5} />
        </div>
    </div>
  )
}

export default Oficina
