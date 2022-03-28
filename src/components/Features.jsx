import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import {Link} from "react-router-dom"


  

function Features() {
    useEffect(() => {
        AOS.init({
            duration:1000
        });
      }, []);
  return (
    <section className="text-white text-center lg:pl-16 mb-[15vh] lg:pr-16 m-2 lg:m-5"  id="#feature">
        <h2 className="underline decoration-hecker text-5xl mb-[5vh]">Features</h2>
        <section className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 gap-5 text-left">
            <section className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10  p-2 rounded-lg " data-aos="flip-up">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/video-playlist.png" alt="Videos Icon" />
                <p className="text-lg">Hand Picked, Easy to understand short videos and blogs for you to be cyber aware.</p>
                <Link to="/resources" className="border border-hecker p-2 hover:bg-dark-hecker m-3" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </Link>
            </section>
            <section data-aos="flip-up" className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10 p-2 rounded-lg">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/quiz.png" alt="Quiz Icon" />
                <p className="text-lg">Hand picked quizzes to test your knowledge</p>
                <Link to="/quiz" className="border border-hecker p-2 hover:bg-dark-hecker  m-3" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </Link>
            </section>
            <section data-aos="flip-up" className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10  p-2 rounded-lg">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/teamwork.png" alt="Community Icon" />
                <p className="text-lg">A Discord Community of like minded peers where you can have your doubts cleared easily.</p>
                <Link to="/discord" className="border border-hecker p-2 hover:bg-dark-hecker  m-3" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </Link>
            </section>
            <section data-aos="flip-up" className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10  p-2 rounded-lg h-auto">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/e-learning.png" alt="E learning Icon" />
                <p className="text-lg">A Bonus Section That Explores How You Can Learn Ethical Hacking So That You Can Take Your Cyber  Knowledge To New Heights</p>
                <Link to="/cybersecurity" className="border border-hecker p-2 hover:bg-dark-hecker m-5" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </Link>
            </section>
        </section>
    </section>
  )
}

export default Features
