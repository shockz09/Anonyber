import QuizCard from "../components/QuizCard";

import React from "react";

function QuizGrid() {
  return (
    <main className="text-center text-white">
      <h1 className="underline decoration-hecker text-5xl m-24">Quizzes</h1>
      <div className="flex gap-10 items-center justify-center flex-wrap ml-16 mr-16">
        <QuizCard
          img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
          quiz_title="Quiz"
          level="Beginner"
          quiz_focus="Basic Level CSS"
        />
        <QuizCard
          img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
          quiz_title="Quiz"
          level="Beginner"
          quiz_focus="Basic Level CSS"
        />
        <QuizCard
          img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
          quiz_title="Quiz"
          level="Beginner"
          quiz_focus="Basic Level CSS"
        />
        <QuizCard
          img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
          quiz_title="Quiz"
          level="Beginner"
          quiz_focus="Basic Level CSS"
        />
        <QuizCard
          img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
          quiz_title="Quiz"
          level="Beginner"
          quiz_focus="Basic Level CSS"
        />
        <QuizCard
          img_src="https://codingal.s3.amazonaws.com/media/quizcontest/thumbnail/2021/12/24/27.png"
          quiz_title="Quiz"
          level="Beginner"
          quiz_focus="Basic Level CSS"
        />
      </div>
    </main>
  );
}

export default QuizGrid;
