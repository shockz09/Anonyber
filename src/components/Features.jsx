import React from 'react'

function Features() {
  return (
    <section className="text-white text-center pl-16 pr-16 m-5" id="#feature">
        <h2 className="underline decoration-hecker text-5xl mb-5">Features</h2>
        <section className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 gap-5 text-left">
            <section className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10  p-2 rounded-lg ">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/video-playlist.png" alt="Videos Icon" />
                <p className="text-lg">Hand picked easy to understand, short videos which educate you about various cyber attacks</p>
                <a href="/resources" className="border border-hecker p-2 hover:bg-dark-hecker m-3" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </a>
            </section>
            <section className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10 p-2 rounded-lg">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/quiz.png" alt="Quiz Icon" />
                <p className="text-lg">Hand picked quizzes to test your knowledge</p>
                <a href="/quiz" className="border border-hecker p-2 hover:bg-dark-hecker  m-3" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </a>
            </section>
            <section className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10  p-2 rounded-lg">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/teamwork.png" alt="Community Icon" />
                <p className="text-lg">A Discord Community of like minded peers where you can have your doubts cleared easily.</p>
                <a href="/discord" className="border border-hecker p-2 hover:bg-dark-hecker  m-3" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </a>
            </section>
            <section className="border-2 border-hecker text-center flex flex-col items-center justify-center gap-10  p-2 rounded-lg h-auto">
                <img src="https://img.icons8.com/ios-glyphs/100/26e07f/e-learning.png" alt="E learning Icon" />
                <p className="text-lg">A Bonus Section That Explores How You Can Learn Ethical Hacking So That You Can Take Your Cyber  Knowledge To New Heights</p>
                <a href="/learn-ethical-hacking" className="border border-hecker p-2 hover:bg-dark-hecker m-5" style={{
                        transform: 'skew(-10deg)'
                    }}>
                    <span style={{
                        transform: 'skew(10deg)'
                    }}>Know More</span>
                    </a>
            </section>
        </section>
    </section>
  )
}

export default Features
