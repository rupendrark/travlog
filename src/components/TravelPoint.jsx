import React from 'react'

const TravelPoint = () => {

  const data = [
    {
      no: "500+",
      desc: "Holiday Package"
    },
    {
      no: "100",
      desc: "Luxury Hotel"
    },
    {
      no: "7",
      desc: "Premium Airlines"
    },
    {
      no: "2k+",
      desc: "Happy Costomer"
    },

  ]
  return (<>
    <div className='flex flex-col-reverse md:flex md:flex-col-reverse lg:flex-row px-4 md:px-[30px] lg:px-32 mb-24'>
      <div className='w-full lg:w-[40%]  px-4'>
        <div className='lg:flex lg:flex-col lg:justify-normal lg:items-start  md:flex md:flex-col md:justify-center md:items-center gap-2 pe-8 max-sm:mt-12 md:mt-16 '>
          <h3 className='text-pink-500 font-bold lg:text-2xl md:text-2xl text-[18px] tracking-[4px] lg:text-left text-center max-sm:pb-3'>TRAVEL POINT</h3>
          <h2 className='lg:text-[45px] md:text-[45px] text-[25px] font-bold lg:text-left text-center max-sm:pb-3'>We helping you find your dream location</h2>
          <p className='lg:text-[19px] md:text-[19px] text-[16px] text-gray-600 text-center lg:text-left md:px-8 lg:px-0'>Country to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>
        <div className='flex flex-wrap gap-8 mt-6'>

          {
            data.map((data) => {
              return (
                <div className='flex justify-center items-center md:w-[300px] md:h-[200px] lg:w-[200px] lg:h-[100px] w-[400px] h-[150px] rounded-3xl border '>
                  <div className='flex flex-col justify-center text-center  gap-3'>
                    <h2 className='text-4xl font-bold text-orange-500'>{data.no}</h2>
                    <p className='text-xl font-semibold'>{data.desc}</p>
                  </div>
                </div>
              )

            })
          }
        </div>

      </div>
      <div className='w-full lg:w-[60%]  bg-white '>
        <img src="Group 9238.png" alt="" className='   ' />

      </div>
    </div>

  </>
  )
}

export default TravelPoint