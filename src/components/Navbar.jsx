import React from 'react'

const Navbar = () => {
    return (
        <nav className='px-4 md:px-[30px] lg:px-32 mt-10 '>
            <div className='flex flex-col-reverse items-center lg:flex-row justify-center lg:items-center'>

                <div className='text-center lg:text-left w-full lg:w-[50%] mb-[200px] '>

                    <div className='flex justify-center lg:justify-normal lg:flex gap-2   md:mt-10 max-sm:mt-10 '>
                        <p className='text-pink-500 font-bold text-sm bg-purple-200 p-[4px] rounded-md'>Explore the world!</p>
                        <img src="Vector.png" alt="" className='object-contain' />
                    </div>
                    <div className='text-[30px] md:text-[45px] font-bold lg:text-[60px] leading-tight mt-6'>
                        <h2>Travel  <span className='text-pink-500'> top destination </span>of the world</h2>

                    </div>
                    <div className='text-[12px] md:text-[18px] text-gray-500 font-semibold lg:text-[18px] mt-6'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, optio? Quisquam, aspernatur explicabo autem sit aut sapiente eum recusandae, at ducimus, temporibus officiis aperiam molestiae. </p>
                        <p className='pt-2'>Lorem ipsum,<b> dolor sit amet consectetur</b> adipisicing elit. Minus, optio? Quisquam,  </p>

                    </div>
                    <div className='flex flex-col gap-4  md:flex-row  justify-center md:gap-6  lg:justify-start lg:flex lg:gap-6 mt-12'>
                        <span className='text-white flex items-center justify-center bg-violet-800  md:w-[140px] lg:w-[140px] h-12  rounded-3xl'>Get Started</span>
                        <span className='text-black flex items-center justify-center bg-white md:w-[180px] lg:w-[180px] h-12  rounded-3xl border: border-gray-300 border: border-[.5px] font-bold'><img src="play-circle.5 1.png" alt="" className='me-2' /> Watch Demo</span>
                    </div>
                </div>
                <div className='w-full lg:w-[50%]  flex flex-col justify-center items-center '>
                    <div>
                        <img src="layer.png" alt="" className='w-[350px] h-[7pc] absolute left-1 top-[120px]   md:w-[670px] md:h-[260px]  md:absolute md:left-auto right-[13rem] md:top-[100px] flex justify-center lg:w-[700px] lg:h-auto lg:absolute lg:bottom-[300px] lg:top-auto lg:left-[700px] lg:right-10 -z-50' />

                    </div>
                    <div>
                        <img src="Frame 15.png" alt="" className='max-sm:w-[250px] max-sm:mb-auto  lg:w-[450px] lg:mb-44 lg:ml-16' />
                    </div>


                </div>
            </div>



        </nav>
    )
}

export default Navbar