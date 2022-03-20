import React from 'react'

function Features() {
  return (
    <section className="text-white text-center pl-16 pr-16 m-5">
        <h2 className="underline decoration-hecker text-5xl mb-5">Features</h2>
        <section className="flex gap-8 items-center justify-center">
            <section className="border border-hecker text-center flex flex-col items-center justify-start h-64 w-64 p-2">
                <img src="https://img.icons8.com/ios-glyphs/68/26e07f/video-playlist.png" alt="Videos Icon" />
                <p>Hand picked easy to understand, short videos which educate you about various cyber attacks</p>
            </section>
            <section className="border border-hecker text-center flex flex-col items-center justify-start h-64 w-48 p-2">
                <img src="https://img.icons8.com/ios-glyphs/68/26e07f/quiz.png" alt="Quiz Icon" />
                <p>Hand picked quizzes to test your knowledge</p>
            </section>
            <section className="border border-hecker text-center flex flex-col items-center justify-start h-64 w-48 p-2">
                <img src="https://img.icons8.com/ios-glyphs/68/26e07f/teamwork.png" alt="Community Icon" />
                <p>A Discord Community of like minded peers where you can have your doubts cleared easily.</p>
            </section>
            <section className="border border-hecker text-center flex flex-col items-center justify-start h-64 w-48 p-2">
                <img src="https://img.icons8.com/ios-glyphs/68/26e07f/e-learning.png" alt="E learning Icon" />
                <p>A Bonus Section That Explores How You Can Learn Ethical Hacking So That You Can Take Your Cyber  Knowledge To New Heights</p>
            </section>
        </section>
    </section>
  )
}

export default Features