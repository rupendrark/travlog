import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";



const Destination = () => {

    const list = [
        {
            img: "/Rectangle 6.png",
            name: "Paradise Beach, Bantayan Island",
            price: "550.16",
            desc: "Rome, Italy",
            rating: "4.8"
        },
        {
            img: "/Rectangle 6 (1).png",
            name: "Ocean with full of colors",
            price: "20.99",
            desc: "Maldives",
            rating: "4.5"
        },
        {
            img: "/Rectangle 6 (2).png",
            name: "Mountain View, Above the cloud",
            price: "150.99",
            desc: "United Arab Emeries",
            rating: "5"
        }
        
        
    ]


    return (
        <div className='md:flex md:justify-center  lg:flex lg:justify-normal  flex-col lg:gap-16 py-24 px-4 md:px-[30px] lg:px-32'>
            <div className='md:flex md:flex-col lg:flex lg:flex-row lg:justify-between lg:gap-0 md:gap-6 '>
                <div className='flex flex-col gap-3 max-sm:text-center md:text-center lg:text-left'>
                    <h4 className='text-pink-500 max-sm:text-[18px] lg:text-[22px] font-bold tracking-[5px]'>TOP DESTINATION</h4>
                    <h2 className=' max-sm:text-[35px] text-[43px] font-bold'>Explore top destination</h2>
                </div>
                <div className='lg:flex lg:justify-center max-sm:flex max-sm:justify-between md:flex md:justify-between items-center gap-5 md:py-4 max-sm:py-6'>
                    <div className='max-sm:w-[60px] max-sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] bg-white flex justify-center items-center rounded-full hover:bg-violet-600 border hover:text-white text-[18px]  '>
                        <div><FaArrowLeftLong /></div>
                    </div>
                    <div className='max-sm:w-[60px] max-sm:h-[60px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] bg-white flex justify-center items-center rounded-full hover:bg-violet-600 border hover:text-white text-[18px]'>
                        <div><FaArrowRightLong /></div>
                    </div>
                </div>
            </div>
            <div className='max-sm:flex max-sm:flex-col md:flex md:justify-center lg:flex-row md:gap-4 gap-6'>
                {list.map((list)=>{
                    return (
                        <div className=' max-sm:w-[350px] md:w-[500px] lg:w-[500px] max-sm:h-[550px] lg:h-[500px] md:h-[450px] rounded-[33px] drop-shadow-2xl border  '>
                            <img src={list.img} alt="" className='w-full h-72' />
                            <div className='py-6 px-4 md:px-6 lg:px-8 flex flex-col gap-4'>
                                <div className='flex justify-between lg:text-[24px] md:text-[18px] text-[24px]'>
                                    <h2 className=' font-bold leading-8 px-3 md:p-0 '>{list.name}</h2>
                                    <h2 className='flex items-center mb-8 font-bold text-pink-500'><BsCurrencyDollar />{list.price}</h2>
                                </div>
                                <div className='lg:text-[18px] md:text-[18px] text-[24px] max-sm:px-4'>
                                    <p>{list.desc}</p>
                                    <p className='font-bold mt-6 text-orange-600 lg:text-2xl md:text-[18px] text-[24px]'>{list.rating}<FaStar className='inline mb-2 ml-2' /></p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Destination
