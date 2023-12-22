'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Skill = () => {
    const [skills, setSkills] = useState([
        { name: "HTML", img: "html.png" },
        { name: "CSS", img: "css.png" },
        { name: "JS", img: "js.png" },
        { name: "Jquery", img: "jquery.png" },
        { name: "PHP", img: "php.png" },
        { name: "MySql", img: "mysql.png" },
        { name: "PostMan", img: "postman.png" },
        { name: "Bootstrap", img: "bootstrap.png" },
        { name: "Tailwind", img: "tailwind.png" },
        { name: "Laravel", img: "laravel.png" },
        { name: "Vue JS", img: "vuejs.png" },
        { name: "React Js", img: "reactjs.png" },
        { name: "Next Js", img: "next.png" }
    ]);

    

    return (
        <>
            <div className="container text-center lg:mt-10 md:mt-24 mt-10">
                <span className="text-5xl font-bold border-b-8 border-orange-500 font-poppins opacity-100">Skill</span>
                <div className="mt-5 ">
                    <div className="mt-4 lg:mt-10 md:mt-10 flex flex-col items-center">
                        <div className='grid w-full fadein h-5/6 grid-cols-2 md:grid-cols-5 items-center place-content-center place-items-center gap-2 md:gap-5'>
                            {
                            skills.map((skill, i) => (
                                <div key={i} className='h-[130px] w-[130px]  rotaters  hover:bg-[rgb(0,0,0,0.6)] relative rounded-full border-2 border-sky-400'>
                                <div className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
                                    <img alt="" src={`./IMG/${skill.img}`} className="   w-20 h-20 ml-5  justify-items-center" />
                                    <p className='text-black lg:ml-5  dark:text-white hidden md:block cursor-default'>{skill.name}</p>
                                </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                </div>
            </div>

            <div className='border-2 border-slate-700 mt-5'></div>
        </>
    )
}

export default Skill