'use client'
import Image from 'next/image';

const Company = () => {


  return (
    <>
      <div className="container mt-10 text-center">
        <span className="lg:text-5xl md:text-5xl text-3xl font-bold px-1 py-1 border-b-8 border-orange-500 font-poppins">
          My Work History
        </span>
        <div className='row mt-0 lg:flex md:flex'>
          <div className="lg:w-2/5 md:w-2/5 mx-auto items-center justify-center">
            <Image src="/Firmware.gif" width={350} height={100} alt="my work history" className='dark:hidden' />
            <Image src="/aditya.gif" width={350} height={100} alt="my work history" className='dark:flex hidden' />
          </div>
          <div className="lg:w-3/5 md:w-3/5 flex items-center justify-center mt-4">
            <div className="bg-gray-200 flex rounded-md shadow-sm p-2 w-full md:w-96">
              <div className="w-1/3">
                <Image src="/Company.gif" width={100} height={100} alt="my work history" className='bg-gray-200 rounded-lg dark:hidden' />
                <Image src="/adi.gif" width={100} height={100} alt="my work history" className='bg-gray-200 rounded-lg dark:flex hidden' />
              </div>
              <div className="w-2/3">
                <p className='lg:text-lg md:text-lg  text-base font-medium md:font-semibold lg:font-semibold font-serif dark:text-black'>Bharat Software Pvt. Ltd.</p>
                <span className='text-sm lg:text-base md:text-base font-medium lg:font-semibold md:font-semibold font-serif dark:text-black'>Role: Backend Developer</span>
                <p className='text-sm font-normal lg:font-semibold md:font-semibold font-serif dark:text-black'>22 May 2023 to Present</p>
                <p className='text-sm font-normal lg:font-semibold md:font-semibold font-serif dark:text-black'>Place: New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-2 border-slate-700 mt-5'></div>
    </>
  )
}

export default Company