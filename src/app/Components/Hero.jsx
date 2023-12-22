'use client'
import React from 'react'
import Image from 'next/image';
// import 'animate.css';

const Hero = () => {
    const openPDF = () => {
        const pdfPath = './assets/resume.pdf';

        window.open(pdfPath, '_blank');
    };
    const initiatePhoneCall = () => {
        const phoneNumber = '+917739628691';
        window.open(`tel:${phoneNumber}`);
    };

    return (
        <>
            <div className="container">
                <div className="row mt-0 lg:flex md:flex">
                    <div className="lg:w-7/12 md:w-7/12">
                        <p className="mb-2 font-mono text-lg text-md font-bold" >Hi, I am</p>
                        <p className="lg:text-5xl md:text-5xl text-3xl font-bold mt-2 font-serif ">Aditya Shekhar</p>
                        <p className="lg:text-xl md:text-xl font-mono text-sm mt-2 text-slate-400">&lt;An amateur developer./&gt;</p>
                        <p className="lead  text-2xl d-none d-md-block mt-3 font-sarif text-slate-500">
                            I am a developer-cum-student with specialization in <span className="">Web/App development</span>.
                            <span className='text-slate-300'> Not really</span> Skilled in <span className="font-semibold text-blue-600" >Python</span> and <span className="text-slate-300">really</span> good in <span className="font-semibold text-orange-400">Javascript</span> '&amp;' <span className="font-semibold text-blue-400" >NextJs</span>.
                        </p>
                        <div className="flex sm:spaxe-x-0 mt-2 lg:gap-2 gap-1">
                            <pre className="mb-0 text-medium" >Connect with me :</pre>
                            <section class="flex justify-center items-center">
                                <a
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
                                </a>
                            </section>
                            <section class="flex justify-center items-center">
                                <a
                                    href="https://wa.me/+917739628691" class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                    <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                                        Watsaap
                                    </span>
                                </a>
                            </section>
                            <section class="flex justify-center items-center">
                                <a
                                    href="https://www.instagram.com/adityashekhar_773"
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                    <span
                                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                    >
                                        Linkend
                                    </span>
                                </a>
                            </section>
                            <section class="flex justify-center items-center">
                                <a
                                    href="https://www.instagram.com/adityashekhar_773"
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-5 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    <span
                                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                    >
                                        Instagram
                                    </span>
                                </a>
                            </section>
                        </div>
                        <div className="flex justify-content-center justify-content-md-start mt-4">
                            <button onClick={() => openPDF()} className="p-2 px-2 py-2 bg-black text-white rounded-lg">
                                GET RESUME
                            </button>
                            <button onClick={initiatePhoneCall} className="ml-4 font-xl px-2 py-2 rounded-lg  bg-slate-300 hover:bg-black hover:text-white">
                                Contact me
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-5/12 md:w-5/12 object-fit-contain">
                        <div className='lg:-mt-12 md:-mt-12'>
                            <Image width={500} height={100} src="/coding.gif" alt="" className="dark:hidden h-full" />
                            <Image width={500} height={100} src="/coding_1.gif" alt="" className="dark:flex hidden h-full" />
                        </div>
                    </div>
                </div>

                <p className="lg:text-5xl md:text-5xl font-bold text-center mt-5 pt-lg-5 pt-md-5 font-monoc">Let's give you some details.</p>
                <div className="text-center mt-5">
                    <button className="px-3 py-3 bg-slate-200 rounded-full"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg></button>
                </div>
            </div>
            <div className='border-2 border-slate-700 mt-5'></div>
        </>
    )
}

export default Hero