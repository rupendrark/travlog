import React from 'react'

const ServiceArea = () => {

  const dat = [
    {
      img: "/destination 1.png",
      name: "Best Tour Guide",
      desc: "What looked like a small patch of purple grass, above five feet."
    },
    {
      img: "/booking 1.png",
      name: "Easy Booking",
      desc: "Square, was moving across the sand in their direction."
    },
    {
      img: "/cloudy 1.png",
      name: "Weather Forecast",
      desc: "What looked like a small patch of purple grass, above five feet."
    },
    {
      img: "/cloudy 1.png",
      name: "Weather Forecast",
      desc: "What looked like a small patch of purple grass, above five feet."
    },





  ]
  return (<>
    <div className='text-center mb-5'>
      <h3 className='text-pink-500 text-[20px] font-bold'>Our Services</h3>
      <p className='text-[32px] font-bold mb-9'>Lorem ipsum dolor sit <br /> amet consectetur.</p>
    </div>

    <div className='w-full h-auto  px-4 md:px-[30px] lg:px-32 max-sm:flex-col lg:flex mt-5 '>


      {
        dat.map((dat) => {
          return (
            <div className='w-full lg:w-full flex max-sm:flex-col md:flex lg:flex md:gap-4 lg:gap-1 lg:justify-center items-center  '>
              <div className='md:p-14 lg:px-[20px] lg:h-[315px]  bg-white  max-sm:w-[360px] lg:w-[300px]  h-[443px] md  rounded-3xl flex flex-col justify-center items-center max-sm:gap-0 md:gap-16 lg:gap-6 border max-sm:mt-6'>
                <img src={dat.img} alt="" />
                <div className='flex flex-col gap-[1rem] md:gap-8 lg:gap-2'>
                  <h2 className='font-bold text-[23px] text-center '>{dat.name}</h2>
                  <p className=' text-[20px] font-[450] text-center text-gray-600 '>{dat.desc}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  </>
  )
}

export default ServiceArea