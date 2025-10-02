import React from 'react'

function HeroImage() {
  return (
    <div className='flex justify-end h-56 md:h-full'>
       <img className='w-full md:w-[20rem] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg' src={'./src/assets/card.jpg'} alt="heroImage" />
    </div>
  )
}

export default HeroImage