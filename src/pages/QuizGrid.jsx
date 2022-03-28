import QuizCard from "../components/QuizCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

function QuizGrid() {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main className="text-center text-white">
        <h1 className="underline decoration-hecker text-5xl m-24">Quizzes</h1>
        <div className="flex gap-10 items-center justify-center flex-wrap ml-16 mr-16">
          <QuizCard
            img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
            quiz_title="Quiz"
            level="Beginner"
            quiz_focus="Cyber Security"
          />
          <QuizCard
            img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
            quiz_title="Quiz"
            level="Beginner"
            quiz_focus="Cyber Security"
          />
          <QuizCard
            img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
            quiz_title="Quiz"
            level="Beginner"
            quiz_focus="Cyber Security"
          />
          <QuizCard
            img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
            quiz_title="Quiz"
            level="Beginner"
            quiz_focus="Phising and etc"
          />
          <QuizCard
            img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
            quiz_title="Quiz"
            level="Beginner"
            quiz_focus="Identify Theft"
          />
          <QuizCard
            img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
            quiz_title="Quiz"
            level="Beginner"
            quiz_focus="Identify Theft"
          />
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default QuizGrid;
