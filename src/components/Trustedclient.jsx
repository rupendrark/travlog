import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const Trustedclient = () => {
    return (
        <div className='px-4 md:px-[30px] lg:px-32'>
            <div className='text-center '>
                <h3 className='text-pink-500 text-[22px] font-bold tracking-[6px]'>TESTIMONIALS</h3>
                <h2 className='text-[45px] font-bold'>Trust our clients</h2>
            </div>
            <div className='flex justify-between mt-16'>
                <div className='max-sm:w-[60px] max-sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] bg-white flex justify-center items-center rounded-full hover:bg-violet-600 border hover:text-white text-[18px] mt-20 max-sm:hidden '>
                    <div><FaArrowLeftLong /></div>
                </div>
                <div className='flex flex-col gap-8 items-center'>
                    <div><img src="Ellipse 22.png" alt="" /></div>
                    <h2 className='text-orange-600 text-3xl font-bold max-sm:text-center'>Mark Smith <span className='text-gray-800 text-2xl font-bold'>/ Travel Enthusiast</span></h2>
                    <div className='flex gap-5 text-3xl text-yellow-500'>
                        <div><FaStar /></div>
                        <div><FaStar /></div>
                        <div><FaStar /></div>
                        <div><FaStar /></div>
                        <div><FaStar /></div>
                    </div>
                </div>
                <div className='max-sm:w-[60px] max-sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] bg-white flex justify-center items-center rounded-full hover:bg-violet-600 border hover:text-white text-[18px] mt-20 max-sm:hidden '>
                    <div><FaArrowRightLong /></div>
                </div>
                
            </div>
            <div className='text-[21px] text-gray-600 font-semibold lg:text-center mt-14 lg:px-40  mb-40 text-center '><p>Country to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p></div>
        </div>
    )
}

export default Trustedclient