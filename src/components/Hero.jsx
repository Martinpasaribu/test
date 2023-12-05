import React from 'react'
// import Typed from 'react-typed';
import logo from '../assets/Logo_main.png';

const Hero = () => {
  return (
    <div className="text-white">
    
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-xl text-[#05386b] font-bold p-2' > Welcome To My Website</p>
        
        <img className='sm:hidden max-w-[150px] mx-auto' src={logo} alt='/' />
        <h1 className='invisible sm:visible md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'> Mar-Tec</h1>
            <div className='flex justify-center items-center'>
            <p className='md:text-3xl sm:text-4xl text-xl font-bold '> Fast, Flexible Use</p> 
           

            
            </div>
            <p className='md:text-xl sm:text-1xl  font-bold text-gray-500'> Mengembangkan Ilmu Teknologi yang ada sekarang dengan cara berfikir Komputasional</p>
            <button className='bg-[#05386b]  text-[#edf5e1] w-[200px] rounded-md font-bold my-6 mx-auto py-3'> Ayo Mulai</button>
            </div>
    </div>
  )
}

export default Hero