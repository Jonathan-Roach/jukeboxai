import React from 'react'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className='w-screen h-screen bg-linear-to-br from-orange-900 to-orange-500'>
        <NavBar/>
        <div className='flex flex-col h-2/3 w-full items-center justify-center'>
        <h1 className="w-1/2 text-center text-white font-bold text-6xl my-5" style={{lineHeight:'1.2'}}>Your Music, Your Sound, Made by AI in seconds</h1>
        <form className='w-1/3'>
            <input placeholder="🎙️ Type your music idea here..." type="text" className='bg-gray-900 opacity-70 text-lg text-white outline-none border-gray-700 border-[1px] rounded-xl my-5 w-full h-auto p-4'/>
        </form>
        </div>
    </div>
  )
}

export default Hero