import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Mission() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="text-white text-center  mb-[15vh] lg:mt-[0vh] " data-aos="fade-down" id="Mission" >

        <h2 className="underline decoration-hecker text-center text-5xl mb-16">Our Mission</h2>
        <p className="text-2xl">
          In the recent Covid-19 pandemic, dependency  on internet and technology
          has increased <br/>  substantially so has  the number  of cyber crimes.
          <br />
          <br />
          It is really alarming that most of the people   don’t know how to protect
          themselves <br/>  from    these  cyber crimes, and many fall into these   scams and
          lose their hard earned money etc..
          <br />
          <br />
          It is our mission to increase cyber awareness  around
          the globe, <br/> preventing many people  from falling into these scams.
        </p>
    </section>
  );
}

export default Mission;
