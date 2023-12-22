'use client'
import Image from 'next/image';
import React, { useState } from 'react'
// import HistoryRow from './HistoryRow';

const Education = () => {

    const [mode, setMode] = useState("education");

    const [education, setEducation] = useState([
        {
            title: "Bachelors of Computer Applications",
            year: "2020-2023",
            from: 'Purnea College Purnea, Bihar'
        },
        {
            title: "12th BSEB, 82.4%",
            year: "2020",
            from: 'R.K.K College Purnea (Bihar)'
        },
        {
            title: "10th BSEB, 74.2%",
            year: "2018",
            from: 'L.H.S School Palasi Patagna Araria (Bihar)'
        }
    ]);

    const [internship, setInternship] = useState([
        {
            title: "Junior Web Developer",
            year: "May 2023 - Present",
            from: 'Bharat Software, New Delhi , Pitampua'
        }
    ]);

    return (
        <>
            <div className='container text-center lg:mt-10'>
                <span className="text-5xl font-bold border-b-8 border-orange-500 font-poppins opacity-100">Education</span>
            </div>
            <div className="container">
                <div className="flex flex-col md:flex-row lg:flex-row mt-5 ">
                    <div className="lg:w-1/3 md:w-1/3 mx-auto md:p-20 lg:p-20">
                        <Image src="/adi.jpg" alt="my pic" width={200} height={50} className="rounded-full" />
                    </div>
                    <div className="lg:w-2/3 md:w-2/3 flex flex-col ">
                        <div className=''>
                            <h1 className='text-2xl font-semibold font-serif '>Education</h1>
                            <div className='mt-2 p-5'>
                                <div className='justify-between items-center flex'>   
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>Bachelors of Computer Applications</h1>
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>2019 - 2022</h1>
                                </div>
                                <p className='border-b-2 text-base lg:text-lg font-serif'>Purena University (Purea College Purnea) </p>
                                <div className='justify-between items-center flex mt-2'>   
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>12th BSEB, 82.3%</h1>
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>2017 - 2019</h1>
                                </div>
                                <p className='border-b-2 text-base lg:text-lg font-serif'>Ram Kisun Kaushalya Mahavidyalaya, Purnea</p>
                                <div className='justify-between items-center flex mt-2'>   
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>10th BSEB, 79.3%</h1>
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>2016 - 2017</h1>
                                </div>
                                <p className='border-b-2 text-base lg:text-lg font-serif'>+2 L.S.HIGH SCHOOL PALASI PATEGNA, ARARIA</p>
                            </div>

                        </div>
                        <div className=''>
                            <h1 className='text-2xl font-semibold font-serif'>Internship</h1>
                            <div className='p-5'>
                                <div className='justify-between items-center flex mt-2'>   
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>Junior Web Developer</h1>
                                    <h1 className='font-serif text-base lg:text-lg font-medium'>May 2022 - Present</h1>
                                </div>
                                <p className='border-b-2 text-base lg:text-lg font-serif'>Bharat Software Pvt. Ltd, New Delhi (Pitampura)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-2 border-slate-700 mt-5'></div>
        </>
    )
}

export default Education