'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Project = () => {
  const [projects, setProjects] = useState([
    {
      name: "Fully Fuctional Spotify Clone",
      video: "./videos/spotify_clone2.mp4",
      link: "https://youtu.be/uVPqC_N0b3o",
      tech: ["reactjs", "tailwind"]
    },
    {
      name: "Transport Software",
      video: "./videos/transport_software2.mp4",
      link: "https://youtu.be/3XCtpurfo_o",
      tech: ["laravel", "vuejs"]
    },
    {
      name: "Goods Pickup Request Portal",
      video: "./videos/pickup.png",
      isImg: true,
      link: "#",
      tech: ["html", "js", "php"]
    },
    {
      name: "News Caliber",
      video: "./videos/news_caliber2.mp4",
      link: "https://youtu.be/8rUh4gBMMII",
      tech: ["reactjs", "tailwind"]
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
              <div
                key={i}
                onClick={() => window.open(project.link)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.open(project.link);
                  }
                }}
                className="cursor-pointer relative p-2 hover:bg-[rgb(0,0,0,0.2)] smoothify"
                role="button"
                tabIndex={0}
              >
                <span className="text-slate-400 hidden md:block typing">{project.name}</span>
                <div>
                  {project.isImg ? (
                    <img
                      alt={`Thumbnail for ${project.name}`}
                      src={project.video}
                      className="w-[400px] fadein"
                    />
                  ) : (
                    <video
                      autoPlay={false}
                      onMouseOver={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                      muted
                      loop
                      className="w-[400px] fadein"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )}

                  <div className="text-center">
                    {project.tech.map((t, j) => (
                      <img
                        key={t + j}
                        alt={`${t} logo`}
                        src={`./IMG/${t}.png`}
                        className="w-5 md:w-7 lg:w-10 mx-2 my-2 inline-block"
                      />
                    ))}
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