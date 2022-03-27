import React from 'react'
import Navbar from "../components/Navbar";
import ResourceCard from '../components/ResourceCard';

function PrequisitesEthicalHacking() {
  return (
    <div> 
    <Navbar/>
    <main className="text-center flex flex-col items-center justify-content gap-10 mt-10">
        <h1 className="lg:text-7xl mb-7 mt-3 underline decoration-hecker text-xl text-white">What Are The Prequisites For Ethical Hacking?</h1>
        <a href="/cybersecurity" className="p-3 border border-hecker text-white bg-black hover:bg-dark-hecker rounded-md">Go Back</a>
        <div className="flex flex-wrap gap-10">
            <ResourceCard 
            resource_img_url = "https://img.youtube.com/vi/P2HxSzEbE9Y/sddefault.jpg"
            resource_title = "[HINDI] Hacking Se Pehle Kya Sikhe? | Pre-Requisites for learning Ethical Hacking"
            resource_url = "https://youtu.be/P2HxSzEbE9Y"
            />
            <ResourceCard 
            resource_img_url = "https://img.youtube.com/vi/RDdFtj6J7-U/sddefault.jpg"
            resource_title = "WHAT BEFORE ETHICAL HACKING??? PREREQUISITE!!!"
            resource_url = "https://youtu.be/RDdFtj6J7-U"
            />
           <ResourceCard 
            resource_img_url = "https://img.youtube.com/vi/yFC8pb2TPdc/sddefault.jpg"
            resource_title = "you need to learn HACKING RIGHT NOW!! // CEH (ethical hacking)"
            resource_url = "https://youtu.be/yFC8pb2TPdc"
            />
            <ResourceCard 
            resource_img_url = "https://img.youtube.com/vi/MspUTBYKrkM/sddefault.jpg"
            resource_title = "Roadmap For Ethical Hacking And Cybersecurity Students. What Path To Follow[HINDI]"
            resource_url = "https://youtu.be/MspUTBYKrkM"
            />
        </div>
    </main>
  </div>
  )
}

export default PrequisitesEthicalHacking