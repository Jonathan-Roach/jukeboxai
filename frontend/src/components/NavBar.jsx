import React from 'react'

const NavBar = () => {
  return (
    <nav className="w-full top-0 left-0 bg-transparent">
            <div className="mx-auto text-md text-white">
                <div className="flex justify-between items-center py-3 px-0 sm:px-10">

                    {/*Logo */}
                    <div className='group'>
                        <a href="/" className="flex items-center">
                        <svg className="h-10 w-10 mr-2 fill-white" fill="#none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,7 L12,5 C15.8659932,5 19,8.13400675 19,12 L17,12 C17,9.23857625 14.7614237,7 12,7 Z M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z"/>
                            </svg>
                        <span className="text-2xl font-bold">Jukebox.<span className='group-hover:text-orange-300'>ai</span></span>
                        </a> 
                    </div>
 

                    {/* Primary Navigation Bar */}
                    <div className="hidden md:flex space-x-1 items-center font-semibold">
                        <a href="" className="flex pr-5 space-x-1 items-center">
                            <span>About Us</span>
                            
                        
                        </a>
                        <div className='flex flex-row justify-between gap-3'>
                        <a href="/signin" className="border-1 border-white rounded py-1 px-4">Sign in</a>
                        <a href="/signup" className="bg-white text-black rounded py-1 px-4">Sign up</a>
                        </div>
                    </div>

                    {/* Mobile Hamburger*/}

                    

                </div>
            </div>

        </nav>
  )
}

export default NavBar