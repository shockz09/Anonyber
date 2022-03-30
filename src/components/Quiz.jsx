import { useState } from "react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Quiz({quizData}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const buttonclicknext = () => {
   
    if (
      currentindex < quizData.length   && (checkClickA || checkClickB || checkClickC || checkClickD)
    ) {
      setCurrentIndex(currentindex + 1);
      setCurrentQuestion(quizData[currentindex].question);
      setAnswers(quizData[currentindex]);
      setCheckClickA(false);
      setCheckClickB(false);
      setCheckClickC(false);
      setCheckClickD(false);
     
       if(answervalue === quizData[currentindex -1][quizData[currentindex -1].correct]){
        setScore(score + 1);
        console.log("sup")
       }
    } else if (currentindex === quizData.length ) {
      if(answervalue === quizData[currentindex -1][quizData[currentindex -1].correct]){
        setScore(score + 1);
        console.log("sup")
      }
      let fulldiv = document.querySelector(".main-div-quiz");
      fulldiv.innerHTML = `<p className="text-score">Your Score is ${score} out of 5</p>
     <button className="btn-score" href="#">Go Back</button>`;
      fulldiv.classList.add("text-score");
    }else if(currentindex < quizData.length + 1   && (checkClickA || checkClickB || checkClickC || checkClickD)){
      setCurrentIndex(currentindex + 1);
      setCheckClickA(false);
      setCheckClickB(false);
      setCheckClickC(false);
      setCheckClickD(false);
      if(answervalue === quizData[currentindex -1][quizData[currentindex -1].correct]){
        setScore(score + 1);
      }
    }
  };
  const [currentindex, setCurrentIndex] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(quizData[currentindex -1].question);
  const [answers, setAnswers] = useState(quizData[currentindex - 1]);
  const [score, setScore] = useState(0);
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const [answervalue,setAnswervalue] = useState("");
  const [valueD, setValueD] = useState("");
  const [checkClickA, setCheckClickA] = useState(false);
  const [checkClickB, setCheckClickB] = useState(false);
  const [checkClickC, setCheckClickC] = useState(false);
  const [checkClickD, setCheckClickD] = useState(false);
  
  const optionClick = (e) => {
    
    setValueA(answers.a);
    setValueB(answers.b);
    setValueC(answers.c);
    setValueD(answers.d);
    setAnswervalue(e.target.innerText);
    if (valueA === answervalue) {
      setCheckClickA(true);
    } else if (valueB === answervalue) {
      setCheckClickB(true);
    } else if (valueC === answervalue) {
      setCheckClickC(true);
    } else if (valueD === answervalue) {
      setCheckClickD(true);
    }
    
  };
  return (
    <div className="border-hecker border main-div-quiz">
      <div className="flex justify-center text-white border-hecker ">
        <div className="text-center align-middle text-2xl">Quiz</div>
      </div>
      <div
        onClick={optionClick}
        className=" text-center pt-4 all-content option-div"
      >
        <div onClick={optionClick} className="text-xl mb-4 mt-2 text-white">
          {currentQuestion}
        </div>
        <button
          onClick={optionClick}
          className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option"
        >
          {answers.a}
        </button>
        <br />
        <button
          onClick={optionClick}
          className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option"
        >
          {answers.b}
        </button>
        <br />
        <button
          onClick={optionClick}
          className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option"
        >
          {answers.c}
        </button>
        <br />
        <button
          onClick={optionClick}
          className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option"
        >
          {answers.d}
        </button>
      </div>
      <div className="flex justify-center">
        <button
          id="submit"
          className=" text-hecker max-w-sm border  border-hecker rounded-lg p-2 m-2 "
          style={{
            transform: "skew(-4deg)",
          }}
          onClick={buttonclicknext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Quiz;