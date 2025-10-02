import React from 'react'


function Content() {
  return (
     <div className="content-container p-8">
         <h4 className='text-customDarkGrayBlue text-[1.1rem] font-semibold tracking-widest font-customMonto mb-4'>PERFUME</h4>
         <h1 className='w-4/4 md:w-3/4 text-2xl md:text-3xl font-bold font-customFraunce'>Gabrielle Essence Eau De Parfum</h1>
         <p className='my-5'>
            A floral, solar and voluptuous interpretation composed by 
            Olivier Palge, Perfumer creator for the house of CHANEL.
         </p>

         <div className="price flex items-center flex-wrap">
            <span className='font-customFraunce font-semibold text-customDarkCyan text-3xl'>$149.99</span>
            <span className='ms-8'><strike>$169.99</strike></span>
         </div>

         


         <button className='w-full mt-12 p-3 bg-customDarkCyan font-semibold text-[#fff] flex justify-center items-center hover:bg-customDarkBlue'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-2">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
            Add to Cart
         </button>

     </div>
  )
}

export default Content