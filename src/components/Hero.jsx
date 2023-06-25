import React from 'react'

import {styles} from '../styles';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center mt-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className="w-4 h-4 rounded-full bg-[#915eff]"/> */}
          {/* <div className="w-1 sm:h-80 h-40 violet-gradient"/> */}
        </div>
      <div >
        <h1 className={`${styles.heroHeadText}
        text-white mt-10`}> Hi, I'm Sinjini! 
        </h1>
        <p className={`${styles.heroSubText} mt-3 text-white-100 `}>
          A Web developer based out of Assam, India <br />
          and 
             a final-year BTech CSE Student
          {/* <span className="text-[#915eff]">
          Final year B-Tech student 
          </span> */}
          
        </p >
      </div>
      </div>
    </section>
  )
}

export default Hero