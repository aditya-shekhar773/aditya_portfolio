'use client'
import Image from 'next/image';

const Contact = () => {


  return (

    <>
      <div className="container mt-5 mt-lg-4 mt-md-4 text-center">
        <div className="Toastify"></div>
        <span className="text-4xl font-bold px-1 my-0 border-b-8 border-orange-500 font-poppins opacity-100">Get In Touch</span>
        <div className='row mt-5 lg:flex md:flex'>
          <div className="lg:w-1/3 md:w-1/3 flex items-center justify-center">
            <Image width={500} height={100} src="/Touch.gif" alt="" className='dark:hidden' />
            <Image width={500} height={100} src="/Touch_1.gif" alt="" className='dark:flex hidden' />
          </div>
          <div className="lg:w-2/3 md:w-2/3 md:mt-5 lg:mt-5 mt-5 md:gap-2 lg:gap-2 md:p-4 lg:p-4 gap-4 ">
            <p className="mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left font-sarif font-semibild text-base lg:text-lg md:text-lg">Fill up the form below to contact me in a very simple way and I will reply to you ASAP. You can also contact me at <span className="badge bg-gray-300 text-black font-light small font-mono px-2 py-2 rounded-lg">adityashekhar.773@gmail.com</span></p>
            <div className="flex flex-col lg:flex-row  md:flex-row w-full gap-5 mt-5">
              <input type="text" placeholder="Enter your name" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
              <input type="text" placeholder="Enter your email" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
            </div>
            <textarea rows={5} cols={7} placeholder="Enter your message" className="rounded-lg form-control font-light text-sm bg-gray-200 font-poppins mt-3 w-full p-4"></textarea>
            <button className="btn bg-black text-white px-2 py-2 w-full rounded-lg font-semibold font-poppins mt-3"><span>Send Message</span></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact