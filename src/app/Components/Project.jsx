'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Project = () => {
  const [projects, setProjects] = useState([
    {
      name: "Fully Fuctional Servixc Center",
      title: "Servixc Center",
      img: "servix.png",
      tech: ["laravel", "bootstrap","mysql"]
    },
    {
      name: "Fully Fuctional Resturent",
      title: "Resturent",
      img: "resturent.png",
      tech: ["laravel", "tailwind","mysql"]
    },


  ]);

  return (

    <>
      <div className="container mt-5 mt-lg-4 mt-md-4 text-center">
        <span className="text-5xl font-bold px-1 py-1 border-b-8 border-orange-500 font-poppins opacity-100">
          My Projects
        </span>

        <div className='row mt-5 lg:flex md:flex'>
          <div className="lg:w-1/3 md:w-1/3 flex items-center justify-center">
            <Image width={500} height={100} src="/Thesis.gif" alt="" className='dark:hidden' />
            <Image width={500} height={100} src="/Thesis_1.gif" alt="" className='dark:flex hidden' />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 my-4'>
            {projects.map((project, i) => (
              <div>
                <span className="text-slate-400 hidden md:block typing">{project.name}</span>
                <div className='p-2 border'>
                  <img alt="" src={`./IMG/${project.img}`} className="border-b border-black w-[450px] h-[220px] justify-items-center" />
                  <span className=" text-lg font-bold">{project.title}</span>
                  <div className='text-center'>
                    {
                      project.tech.map((t, i) => {
                        return <img alt="" key={t + i} src={`./IMG/${t}.png`} className="w-5 md:w-7 lg:w-10 mx-2 my-2 inline-block" />
                      })
                    }
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className='border-2 border-slate-700 mt-5'></div>
    </>
  )
}

export default Project