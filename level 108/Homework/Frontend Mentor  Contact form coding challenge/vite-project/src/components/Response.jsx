import React from 'react'
const Response = () => {
  return (
    <div className="font-Karla bg-Dark-grey w-container mx-auto my-5 p-6 rounded-2xl md:w-half lg:w-DesktopContainer md:mx-auto max-w-screen-sm md:mt-3 lg:mt-4 xl:mt-5">
          <div className="pb-2 flex flex-row justify-start items-center">
            <img src={alertImage}></img>
            <h1 className="pl-3 text-White font-bold text-2xl">Message Sent!</h1>
          </div>
          <p className="text-White text-left font-lighter opacity-70">Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  )
}

export default Response