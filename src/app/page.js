'use client'
import Image from 'next/image'

export default function Home() {

    const openPDF = () => {
      const pdfPath = './assets/resume.pdf';

      window.open(pdfPath, '_blank');
    };
    const initiatePhoneCall = () => {
      const phoneNumber = '+917739628691';
      window.open(`tel:${phoneNumber}`);
    };
  return (
    <div className="w-full items-center justify-between md:p-24 lg:p-24 p-5">

      <div className="container">
        <div className="row mt-0 lg:flex md:flex">
          <div className="lg:w-7/12 md:w-7/12">
            <p className="mb-2 font-mono text-lg text-md font-bold" >Hi, I am</p>
            <p className="lg:text-5xl md:text-5xl text-3xl font-bold mt-2 font-serif">Aditya Shekhar</p>
            <p className="lg:text-xl md:text-xl font-mono text-sm mt-2 text-slate-400">&lt;An amateur developer./&gt;</p>
            <p className="lead  text-2xl d-none d-md-block mt-3 font-sarif text-slate-500">
              I am a developer-cum-student with specialization in <span className="text-black">Web/App development</span>.
              <span className='text-slate-300'> Not really</span> Skilled in <span className="font-semibold text-blue-600" >Python</span> and <span className="text-slate-300">really</span> good in <span className="font-semibold text-orange-400">Javascript</span> '&amp;' <span className="font-semibold text-blue-400" >NextJs</span>.
            </p>
            <div className="flex sm:spaxe-x-0 mt-2 lg:gap-2 gap-1">
              <pre className="mb-0 text-medium" >Connect with me :</pre>
              <section class="flex justify-center items-center">
                <button
                  href="https://github.com/aditya-shekhar773" class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                  <svg
                    class="lg:w-5 w-4"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span
                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    GitHub
                  </span>
                </button>
              </section>
              <section class="flex justify-center items-center">
                <button
                  href="https://wa.me/+917739628691" class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Watsaap
                  </span>
                </button>
              </section>
              <section class="flex justify-center items-center">
                <button
                  href="https://www.instagram.com/adityashekhar_773"
                  class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                  <span
                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    Linkend
                  </span>
                </button>
              </section>
              <section class="flex justify-center items-center">
                <button
                  href="https://www.instagram.com/adityashekhar_773"
                  class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  <span
                    class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    Instagram
                  </span>
                </button>
              </section>
            </div>
            <div className="flex justify-content-center justify-content-md-start mt-4">
              <button onClick={() => openPDF()}className="p-2 px-2 py-2 bg-black text-white rounded-lg">
              GET RESUME
              </button>
              <button onClick={initiatePhoneCall} className="ml-4 font-xl px-2 py-2 rounded-lg  bg-slate-300 hover:bg-black hover:text-white">
                Contact me
              </button>
            </div>
          </div>

          <div className="lg:w-5/12 md:w-5/12 object-fit-contain">
            <div className='lg:-mt-12 md:-mt-12'>
              <Image width={500} height={100} src="/coding.gif" alt="" className=" h-full" />
            </div>
          </div>
        </div>

        <p className="lg:text-5xl md:text-5xl font-bold text-center mt-5 pt-lg-5 pt-md-5 font-monoc">Let's give you some details.</p>
        <div className="text-center mt-5">
          <button className="px-3 py-3 bg-slate-200 rounded-full"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg></button>
        </div>
      </div>
      <div className='border-2 border-slate-700 mt-5'></div>

      <div className="container text-center lg:mt-24 md:mt-24 mt-10">
        <span className="text-5xl font-bold border-b-8 border-orange-500 font-poppins opacity-100">About Me</span>
        <div className="flex flex-col md:flex-row lg:flex-row mt-5 ">
          <div className="lg:w-1/3 md:w-1/3 mx-auto md:p-20 lg:p-20">
            <Image src="/adi.jpg" alt="my pic" width={200} height={50} className="rounded-full " />
          </div>
          <div className="lg:w-2/3 md:w-2/3 mt-4 lg:mt-10 md:mt-10 flex flex-col items-center">
            <p className="text-xl text-center lg:text-left md:text-left mt-4 font-medium font-sans">
              I am complete  graduation in BCA and I am a web developer with experience  and internship. I have built several different projects that include famous technologies like
              <span className="font-semibold text-teal-500">
                &nbsp;Php (Laravel &amp; LiveWire),
                JavaScript (Vanilla JS, ReactJS &amp; NextJs), and Python
              </span>.
              Currently, I am expanding my knowledge in
              <span className="text-teal-500">&nbsp; Ethical Hacking</span>.

              <span className='mt-5 text-xl'>Here are some techs I know and have worked in:</span>
            </p>
            <div className="flex flex-wrap lg:justify-start md:justify-start mt-4 lg:gap-4 md:gap-4 gap-2">
              <div className="w-[45%] lg:w-1/5 md:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Laravel</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5 md:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans ">NextJs</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5 md:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Php</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5 md:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">NodeJs</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5 md:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">FastAPI</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5 md:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Django</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5 md:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Python</span>
                </div>
              </div>
            </div>
            <p className='mt-5 text-xl font-sans font-bold '>and many more...</p>
          </div>
        </div>
      </div>
      <div className='border-2 border-slate-700 mt-5'></div>

      <div className="container mt-10 text-center">
        <span className="lg:text-5xl md:text-5xl text-3xl font-bold px-1 py-1 border-b-8 border-orange-500 font-poppins">
          My Work History
        </span>
        <div className='row mt-0 lg:flex md:flex'>
          <div className="lg:w-2/5 md:w-2/5 mx-auto items-center justify-center">
            <Image src="/Firmware.gif" width={350} height={100} alt="my work history" className='' />
          </div>
          <div className="lg:w-3/5 md:w-3/5 flex items-center justify-center mt-4">
            <div className="bg-gray-200 flex rounded-md shadow-sm p-2 w-full md:w-96">
              <div className="w-1/3">
                <Image src="/Company.gif" width={100} height={100} alt="my work history" className='bg-gray-200 rounded-lg' />
              </div>
              <div className="w-2/3">
                <p className='lg:text-lg md:text-lg  text-base font-medium md:font-semibold lg:font-semibold font-serif'>Bharat Software Pvt. Ltd.</p>
                <span className='text-sm lg:text-base md:text-base font-medium lg:font-semibold md:font-semibold font-serif'>Role: Backend Developer</span>
                <p className='text-sm font-normal lg:font-semibold md:font-semibold font-serif'>22 May 2023 to Present</p>
                <p className='text-sm font-normal lg:font-semibold md:font-semibold font-serif'>Place: New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-2 border-slate-700 mt-5'></div>

      <div className="container mt-5 mt-lg-4 mt-md-4 text-center">
        <span className="text-5xl font-bold px-1 py-1 border-b-8 border-orange-500 font-poppins opacity-100">
          My Projects
        </span>

        <div className='row mt-5 lg:flex md:flex'>
          <div className="lg:w-1/3 md:w-1/3 flex items-center justify-center">
            <Image width={500} height={100} src="/Thesis.gif" alt="" />
          </div>
          <div className="lg:w-2/3 md:w-2/3 lg:mt-5 md:mt-5 md:gap-2  lg:gap-2 md:p-4 lg:p-4 gap-4 ">
            <div className='w-full lg:flex md:flex gap-1'>
              <div className='lg:w-1/2 md:w-1/2 md:h-72 lg:h-48   bg-slate-300 rounded-lg p-5'>
                <p className='text-xl font-serif font-bold'><u>Servix Center</u></p>
                <p className='mt-2 font-serif text-start'>The servix center that can be handle service provideLaptop, Computer ans Accessories, with a real time function made using laravel MySql. It support admin, Staff authentication</p>
                <p className='text-right lg:mt-1 md:mt-1 -mt-3'><a className="text-sm bg-black text-white px-2 py-2 p-2 rounded-lg" href="https://github.com/aditya-shekhar773/servix">GitHub</a></p>
              </div>
              <div className='lg:w-1/2 md:w-1/2  lg:h-48 md:h-72 bg-slate-300 rounded-lg p-5 lg:mt-0 md:mt-0 mt-2'>
                <p className='text-xl font-serif font-bold'><u>Coaching Website</u></p>
                <p className='mt-2 font-serif text-start'>The code of this website is written in  CorePhp, MySql, Html5, Tilwindcss ans full functional. It support authentication</p>
                <p className='text-right lg:mt-6 md:mt-16'><a className="text-sm bg-black text-white px-2 py-2 p-2 rounded-lg" href="https://github.com/aditya-shekhar773/cws">GitHub</a></p>
              </div>
            </div>
            <div className='w-full lg:flex md:flex gap-1 mt-2'>
              <div className='lg:w-1/2 md:w-1/2 h-48  bg-slate-300 rounded-lg p-5'>
                <div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-2 lg:p-2 dark:border-gray-700">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-center md:mt-6 lg:mt-6 mt-2 space-x-3">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div className='lg:w-1/2 md:w-1/2 h-48  bg-slate-300 rounded-lg p-5 md:mt-0 lg:mt-0 mt-2'>
                <div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-2 lg:p-2 dark:border-gray-700">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-center md:mt-6 lg:mt-6 mt-2 space-x-3">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div>
                      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-end md:text-end mt-5 sm:mt-5">
              <a href='https://github.com/aditya-shekhar773' className="font-semibold rounded-md border-0 py-3 px-2 my-2 bg-black text-white text-center font-poppins">
                Check GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='border-2 border-slate-700 mt-5'></div>

      <div className="container mt-5 mt-lg-4 mt-md-4 text-center">
        <div className="Toastify"></div>
        <span className="text-4xl font-bold px-1 my-0 border-b-8 border-orange-500 font-poppins opacity-100">Get In Touch</span>
        <div className='row mt-5 lg:flex md:flex'>
          <div className="lg:w-1/3 md:w-1/3 flex items-center justify-center">
            <Image width={500} height={100} src="/Touch.gif" alt="" />
          </div>
          <div className="lg:w-2/3 md:w-2/3 md:mt-5 lg:mt-5 mt-5 md:gap-2 lg:gap-2 md:p-4 lg:p-4 gap-4 ">
            <p className="mb-4 lg:mb-0 md:mb-0 text-center lg:text-left md:text-left font-sarif font-semibild text-base lg:text-lg md:text-lg">Fill up the form below to contact me in a very simple way and I will reply to you ASAP. You can also contact me at <span className="badge bg-gray-300 text-black font-light small font-mono">adityashekhar.773@gmail.com</span></p>
            <div className="flex flex-col lg:flex-row  md:flex-row w-full gap-5 mt-5">
              <input type="text" placeholder="Enter your name" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
              <input type="text" placeholder="Enter your email" className="rounded-xl form-control lg:py-5 md:py-5 py-3 font-light text-sm bg-gray-200 font-poppins md:w-1/2 lg:w-1/2 p-2" />
            </div>
            <textarea rows={5} cols={7} placeholder="Enter your message" className="rounded-lg form-control font-light text-sm bg-gray-200 font-poppins mt-3 w-full p-4"></textarea>
            <button className="btn bg-black text-white px-2 py-2 w-full rounded-lg font-semibold font-poppins mt-3"><span>Send Message</span></button>
          </div>
        </div>

      </div>

    </div>
  )
}
