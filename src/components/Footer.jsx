import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row px-4 md:px-[30px] lg:px-32 '>
            <div className='flex flex-col gap-10 w-full lg:w-[50%] pe-5'>
                <div className=' flex gap-3 text-2xl font-bold  '>
                    <img src="Vector (2).png" alt="" />
                    <h2>Travlog</h2>
                </div>
                <h2 className='text-[18px] lg:text-[24px] font-[200px] text-gray-600'>Country to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</h2>
                <div className='mt-4'>
                    <img src="Frame 72.png" alt="" />
                </div>

            </div>
            <div className='flex flex-col lg:flex-row max-sm:gap-[20px] md:gap-40 lg:gap-16 w-full lg:w-[50%] lg:ms-16 lg:mt-0 md:mt-16 max-sm:mt-10'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6'>
                    <h2 className='font-bold text-[22px]'>Company</h2>
                    <p className='text-[18px] text-gray-600 font-semibold'>About</p>
                    <p className='text-[18px] text-gray-600 font-semibold'>Career</p>
                    <p className='text-[18px] text-gray-600 font-semibold'>Mobile</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6'>
                    <h2 className='font-bold text-[22px]'>Contect</h2>
                    <p className='text-[18px] text-gray-600 font-semibold'>Why Travlog?</p>
                    <p className='text-[18px] text-gray-600 font-semibold'>Partner with us</p>
                    <p className='text-[18px] text-gray-600 font-semibold'>FAQ's</p>
                    <p className='text-[18px] text-gray-600 font-semibold'>Blog</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6'>
                    <h2 className='font-bold text-[22px]'>Meet Us</h2>
                    <p className='text-[18px] text-gray-600 font-semibold'>+00 92123456789</p>
                    <p className='text-[18px] text-gray-600 font-semibold'>info@travlog.com</p>
                    <p className='text-[18px] text-gray-600 font-semibold'>205. R Street, New York BD23200</p>
                </div>

            </div>
        </div>
    )
}

export default Footer