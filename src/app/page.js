'use client'
import Hero from './Components/Hero';
import Education from './Components/Education';
import Company from './Components/Company';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Skill from './Components/Skill';

export default function Home() {

  return (
    <>
      <div onContextMenu={(e) => { e.preventDefault(); return false; }} className="w-full items-center justify-between md:p-24 lg:p-24 p-5">
        <Hero />
        <Education />
        <Skill/>
        <Company />
        <Project />
        <Contact />
      </div>
    </>
  )
}
