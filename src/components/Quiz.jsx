import React from "react";
import { useState } from "react";

function Quiz() {
  const quizData = [
    {
      question: "Which of the following should you do to restrict access to your files and devices?",
      a: "Update your software once a year.",
      b: "Share passwords only with colleagues you trust.",
      c: "Have your staff members access information via an open Wi-Fi network.",
      d: "Use multi-factor authentication.",
      correct: "d",
    },
    {
      question: "Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber attack. True or False?",
      a: "True",
      b: "False",
      c: "All of these",
      d: "None of these",
      correct: "a",
    },
    {
      question: "Which is the best answer for which people in a business should be responsible for cybersecurity?",
      a: "Business owners. They run the business, so they need to know cybersecurity basics and put them in practice to reduce the risk of cyber attacks.",
      b: "Managers, because they are responsible for making sure that staff members are following the right practices.",
      c: "IT specialists, because they are in the best position to know about and promote cybersecurity within a business.",
      d: "All staff members should know some cybersecurity basics to reduce the risk of cyber attacks.",
      correct: "d",
    },
    {
      question: "Cyber criminals only target large companies.",
      a: "True",
      b: "False",
      c: "All of the above",
      d: "None of these",
      correct: "b",
    },
    {
      question: "Which of the following is the best answer for how to secure your router?",
      a: "Change the default name and password of the router.",
      b: "Turn off the router’s remote management.",
      c: "All of the these.",
      d: "Log out as the administrator once the router is set up.",
      correct: "c",
    },
  ];
  const buttonclicknext = () => {
    let htmlNodes = document.getElementsByName("answer");

    let radioButtonsArray = Array.from(htmlNodes);
    //logic by rohit ser (targeted towards vaarun ser)
    let isAnyRadioButtonChecked = radioButtonsArray.some(
      (element) => element.checked
    );
    
    // console.log(isAnyRadioButtonChecked);//for checking , will removed once works
    if (currentindex < quizData.length && isAnyRadioButtonChecked) {
      // console.log(radioButtonsArray)//for checking , will removed once works
      let answer
    htmlNodes.forEach(answer => {
        if(answer.checked===isAnyRadioButtonChecked) {
          answer = answer.id
            // console.log(answer)
        }
       
    })
    if(answer === quizData[currentindex].correct) {
      // console.log("ufkc")
  }
      setCurrentIndex(currentindex + 1);
      setCurrentQuestion(quizData[currentindex].question);
      setAnswers(quizData[currentindex]);

    }else if(currentindex >= quizData.length ) {
      console.log("doesn't work")
      const content = document.querySelector(".all-content")
      content.innerHTML = "<h2>You answered ${score}/${quizData.length} questions correctly</h2>"
    }
  };
  //   const buttonclick =()=>{
  //     currentindex++
  //     setCurrentQuestion(quizData[currentindex].question)
  // console.log(currentindex)
  //   }
  const [currentindex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quizData[0].question);

  const [answers, setAnswers] = useState(quizData[currentindex]);

  return (
    <div>
      <div className="flex justify-center text-hecker">
        <div className="text-center max-w-sm border-2  p-5 pb-2 align-middle whitespace-nowrap pt-2 text-div-quiz-p ">
          Quiz Component
        </div>
      </div>
      <div className="text-hecker text-center pt-4 all-content">
        <p>{currentQuestion}</p>
        <ul className="pt-4">
          <li>
            <input type="radio" name="answer" id="b" className="answer" />
            <label  id="a_text">
              {answers.a}
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="b" className="answer" />
            <label  id="b_text">
              {answers.b}
            </label>
          </li>
          <li>
            <input type="radio" name="answer" id="b" className="answer" />
            <label  id="c_text">
              {answers.c}
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="b" className="answer" />
            <label id="d_text">
              {answers.d}
            </label>
          </li>
        </ul>
      </div>
      <div>
        <button
          id="submit"
          onClick={buttonclicknext}
          className=" text-hecker w-full pt-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
