import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const showSidemenu = () => {
        setToggle(true)

    }
    const hideSidemenu = () => {
        setToggle(false)
    }
    return (<>
        <div className='black-overlay w-full h-full fixed duration-500 z-[999]' onClick={hideSidemenu} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden"

        }}>
            <div onClick={(e) => { e.stopPropagation(); }} className="w-[200px] md:w-[400px] bg-gray-800 h-full absolute duration-[400ms]" style={{
                right: toggle ? '0%' : '-100%'
            }}>
                <ul className='p-10 flex flex-col gap-6  text-white'>
                    <li className=' hover:text-orange-400'>Home</li>
                    <li className=' hover:text-orange-400'>Discover</li>
                    <li className=' hover:text-orange-400'>Special Deals</li>
                    <li className=' hover:text-orange-400'>Contect</li>
                    <li className='md:hidden max-sm:hover:text-orange-400'>Log In</li>
                    <li className='md:hidden max-sm:hover:text-orange-400'>sign Up</li>
                </ul>
            </div>
        </div>
        <header className='px-4 md:px-[30px] lg:px-32 md:mb-10 ' >
            <div className=' bg-white h-[100px] flex items-center justify-between text-sm font-bold max-sm:flex-row-reverse'>
                <div onClick={showSidemenu} className='text-4xl  md:text-4xl text-white bg-violet-600 rounded-lg lg:hidden'><IoReorderThree /></div>
                <div className=' flex gap-3 text-2xl font-bold  '>
                    <img src="Vector (2).png" alt="" />
                    <h2>Travlog</h2>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex gap-14  text-gray-500'>
                        <li className=' hover:text-black'>Home</li>
                        <li className=' hover:text-black'>Discover</li>
                        <li className=' hover:text-black'>Special Deals</li>
                        <li className=' hover:text-black'>Contect</li>
                    </ul>
                </div>

                <div className='max-sm:hidden lg:flex itenms-center md:flex gap-6 sm:flex  '>
                    <div className='lgme-5 mt-3 '>
                        <span >Log In</span>
                    </div>

                    <div className='text-white flex items-center justify-center bg-violet-600 w-[120px] h-12  rounded-3xl'><span>Sign Up</span></div>

                </div>
            </div>
            



        </header>
        
        
    </>
    )
}

export default Header