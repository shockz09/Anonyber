import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Team() {
  return (
    <section className="p-10 flex flex-col items-center justify-center gap-10 text-center" id="team">
       <h2 className="underline decoration-hecker text-5xl mb-5 text-white">Our Team</h2>
      <div className="flex lg:flex-row flex-col gap-10 items-center justify-center text-center lg:text-left lg:items-none lg:justify-none" data-aos="fade-right">
        <img src="https://i.ibb.co/gzw87p1/ansh-anonyber.jpg" className=" border border-hecker h-[150px] w-[240]"  />
        <div className="text-white">
          <h2 className="text-3xl lg:mb-4  text-green-500 ">Ansh Mamgain</h2>
          <p> Ansh Mamgain is a 15 year old boy from Delhi obsessed with tech.<br/>
            He is fluent in many languages and has 2+ years of wrok experiance with Full Stack Web Development<br/>
            vel perspiciatis quam quae vitae reprehenderit earum ullam!</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row-reverse items-center justify-center text-center lg:text-right lg:items-none lg:justify-none" data-aos="fade-left">
        <img src="kdhc" className="border border-hecker h-48 w-48"  />
        <div className="text-white">
          <h2 className="text-3xl lg:mb-8  text-green-500 ">Vaarun Sinha</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci laudantium <br/>
            nihil incidunt aperiam obcaecati sequi rem nisi iure ea omnis temporibus, <br/>
            vel perspiciatis quam quae vitae reprehenderit earum ullam!</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 items-center justify-center text-center lg:text-left lg:items-none lg:justify-none" data-aos="fade-right">
        <img src="kdhc" className="border border-hecker h-48 w-48"  />
        <div className="text-white">
          <h2 className="text-3xl lg:mdb-8  text-green-500 ">Rohit Mishra</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed adipisci laudantium <br/>
            nihil incidunt aperiam obcaecati sequi rem nisi iure ea omnis temporibus, <br/>
            vel perspiciatis quam quae vitae reprehenderit earum ullam!</p>
        </div>
      </div>

    </section>
    
  )
}

export default Team;