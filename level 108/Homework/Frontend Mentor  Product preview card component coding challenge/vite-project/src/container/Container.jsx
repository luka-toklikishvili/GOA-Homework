import React from 'react'
import HeroImage from './HeroImage'
import Content from './Content'


function Container() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 py-8 mt-20 md:mt-16 w-[80%] mx-auto">
        <div className="hero-image">
            <HeroImage/>
        </div>
        <div className="content bg-[#fff] w-full md:w-[20rem] rounded-b-lg md:rounded-none md:rounded-r-lg">
            <Content></Content>
        </div>
    </div>
  )
}

export default Container