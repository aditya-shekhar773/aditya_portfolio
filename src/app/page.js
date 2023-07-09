import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full bg-white items-center justify-between lg:p-24 p-5">

      <div className="container">
        <div className="row mt-0 lg:flex">
          <div className="lg:w-7/12">
            <p className="mb-2 font-mono text-lg font-bold" >Hi, I am</p>
            <p className="lg:text-5xl text-3xl font-bold mt-2">Aditya Shekhar</p>
            <p className="lg:text-xl font-mono text-sm mt-2 text-slate-400">&lt;An amateur developer./&gt;</p>
            <p className="lead  text-2xl d-none d-md-block mt-3 font-sans text-slate-500">
              I am a developer-cum-student with specialization in <span className="text-black">Web/App development</span>.
              <span className='text-slate-300'> Not really</span> Skilled in <span className="font-semibold text-blue-600" >Python</span> and <span className="text-slate-300">really not</span> good in <span className="font-semibold text-orange-400">Javascript</span> &amp; <span className="font-semibold text-blue-400" >PHP</span>.
            </p>
            <div className="flex sm:spaxe-x-0 mt-2">
              <pre className="mb-0 text-medium" >Connect with me :</pre>
              <a className="" href="https://github.com/aditya-shekhar773"><svg xmlns="http://www.w3.org/2000/svg" className=" ml-4 mt-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
              <a className="" href="https://wa.me/+917739628691"><svg xmlns="http://www.w3.org/2000/svg" className=" ml-4 mt-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg></a>
              <a className="" href="https://www.instagram.com/adityashekhar_773"><svg xmlns="http://www.w3.org/2000/svg" className=" ml-4 mt-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a><a className="" href=""></a>
              <a className="" href="https://www.instagram.com/adityashekhar_773"><svg xmlns="http://www.w3.org/2000/svg" className=" ml-4 mt-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg></a>
            </div>
            <div className="flex justify-content-center justify-content-md-start mt-4">
              <a href="" target="_blank" rel="noreferrer" className="p-2 px-2 py-2 bg-black text-white rounded-lg" >GET RESUME</a>
              <button className="ml-4 font-xl px-2 py-2 rounded-lg bg-slate-300 hover:bg-black hover:text-white" >CHECK BLOGS</button>
            </div>
          </div>

          <div className="lg:w-5/12 object-fit-contain">
            <div className='lg:-mt-12'>
              <Image width={500} height={100} src="/coding.gif" alt="" className=" h-full" />
            </div>
          </div>
        </div>

        <p className="lg:text-5xl font-bold text-center mt-5 pt-lg-5 font-monoc">Let's give you some details.</p>
        <div className="text-center mt-5">
          <button className="px-3 py-3 bg-slate-200 rounded-full"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg></button>
        </div>
      </div>
      <div className='border-2 border-slate-400 mt-5'></div>


      <div className="container text-center lg:mt-24 mt-10">
        <span className="text-5xl font-bold border-b-8 border-orange-500 font-poppins opacity-100">About Me</span>
        <div className="flex flex-col lg:flex-row mt-5 ">
          <div className="lg:w-1/3 mx-auto lg:p-20">
            <Image src="/adi.jpg" alt="my pic" width={200} height={50} className="rounded-full " />
          </div>
          <div className="lg:w-2/3 mt-4 lg:mt-10 flex flex-col items-center">
            <p className="text-xl text-center lg:text-left mt-4 font-medium font-sans">
              I am pursuing under graduation in BCA and I am a web developer with experience in freelance and internship.
              I have built several different projects that include famous technologies like
              <span className="font-semibold text-teal-500">
                &nbsp;Python (Django &amp; FastAPI),
                JavaScript (Vanilla JS, ReactJS &amp; React Native), and PHP
              </span>.
              Currently, I am expanding my knowledge in
              <span className="text-teal-500">&nbsp; Ethical Hacking</span>.

              <span className='mt-5 text-xl'>Here are some techs I know and have worked in:</span>
            </p>
            <div className="flex flex-wrap lg:justify-start mt-4 lg:gap-4 gap-2">
              <div className="w-[45%] lg:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Javascript</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans ">Python</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">ReactJs</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Django</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">FastAPI</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Laravel</span>
                </div>
              </div>
              <div className="w-[45%] lg:w-1/5">
                <div className="rounded-xl shadow-sm py-2 px-5 p-5 bg-gray-300">
                  <span className="block text-center font-sans">Nodejs</span>
                </div>
              </div>
            </div>
            <p className='mt-5 text-xl font-sans font-bold '>and many more...</p>
          </div>
        </div>
      </div>
      <div className='border-2 border-slate-400 mt-5'></div>

      <div className="container mt-5 mt-lg-4 text-center">
        <span className="lg:text-5xl text-3xl font-bold px-1 py-1 border-b-8 border-orange-500 font-poppins">
          My Work History
        </span>
        <div className="lg:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="lg:w-1/3 mx-auto items-center justify-center">
            <Image src="/Firmware.gif" width={500} height={100} alt="my work history" className=' h-full w-full'/>
          </div>
          <div className="lg:w-2/3 flex items-center justify-center mt-4">
            <div className="bg-gray-200 rounded-md shadow-sm p-4 w-full md:w-96">
              <div className="animate-pulse">
                <p className="placeholder-h1 rounded-lg w-3/4 h-12"></p>
              </div>
              <p className="mt-4">
                <span className="placeholder-h2 inline-block w-2/4 h-8 rounded-lg mb-2"></span>
                <span className="placeholder-h2 inline-block w-1/4 h-8 rounded-lg mb-2 ml-2"></span>
                <span className="placeholder-h2 inline-block w-1/5 h-8 rounded-lg mb-2 ml-2"></span>
              </p>
              <div className="animate-pulse">
                <p className="placeholder-h1 rounded-lg w-3/4 h-12"></p>
              </div>
              <p className="mt-4">
                <span className="placeholder-h2 inline-block w-2/4 h-8 rounded-lg mb-2"></span>
                <span className="placeholder-h2 inline-block w-1/4 h-8 rounded-lg mb-2 ml-2"></span>
                <span className="placeholder-h2 inline-block w-1/5 h-8 rounded-lg mb-2 ml-2"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='border-2 border-slate-400 mt-5'></div>

      <div className="container mt-5 mt-lg-4 text-center">
        <span className="text-5xl font-bold px-1 py-1 border-b-8 border-orange-500 font-poppins opacity-100">
          My Projects
        </span>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="lg:w-1/3 flex items-center justify-center">
            <Image width={500} height={100} src="/Thesis.gif" alt="" className=" h-full" />
          </div>
          <div className="lg:w-2/3 flex items-center justify-center mt-4">
            <div className="w-full lg:flex text-center text-lg-start gap-2">
              <div className="bg-gray-200 rounded-md shadow-sm p-4 w-full lg:w-1/2">
                fdgfdgfdgfdg
              </div>
              <div className="bg-gray-200 rounded-md shadow-sm p-4 w-full lg:w-1/2">
                fdgfdgdf
              </div>


              <div className="text-center text-lg-end">
                <button className="font-semibold rounded-md border-0 py-3 px-2 my-2 bg-black text-white text-center font-poppins">
                  Check GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}
