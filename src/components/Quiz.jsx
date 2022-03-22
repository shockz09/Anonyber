import React from 'react'
import {useState} from 'react'

function Quiz() {
  const quizData = [
    {
        question: "is mmh good dev",
        a: "he sucks hmm",
        b: "he sucks",
        c: "he sucks",
        d: "he good",
        correct: "d",
    },
    {
      question: "is me good dev",
        a: "he sucks",
        b: "he sucks",
        c: "he sucks",
        d: "he good",
        correct: "d",
    },
    {
      question: "is hmm good dev",
        a: "he sucks",
        b: "he sucks",
        c: "he sucks",
        d: "he good",
        correct: "d",
    },
    {
      question: "is hmm good dev",
        a: "he sucks",
        b: "he sucks",
        c: "he sucks",
        d: "he good",
        correct: "d",
    },
  {
    question: "is smh good dev",
    a: "he sucks",
    b: "he sucks",
    c: "he sucks",
    d: "he good",
    correct: "d",
  }
  
  ]
  const buttonclicknext = ()=>{
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    if(currentindex<quizData.length && radioButtons.checked) {
      setCurrentIndex(currentindex+1)
      setCurrentQuestion(quizData[currentindex].question)
      setAnswers(quizData[currentindex])
    }else if(!radioButtons.checked){
     alert("please select an answer")
    }
    else{
      alert("xd ")
    }
  }
//   const buttonclick =()=>{
//     currentindex++
//     setCurrentQuestion(quizData[currentindex].question)
// console.log(currentindex)
//   }
    const [currentindex,setCurrentIndex]=useState(0)
  const [currentQuestion,setCurrentQuestion] = useState(quizData[0].question)

  const [answers,setAnswers] = useState(quizData[currentindex])
  
 
  return (
    <div>
    <div className="flex justify-center text-hecker">
       <div className="text-center max-w-sm border-2  p-5 pb-2 align-middle whitespace-nowrap pt-2 text-div-quiz-p ">
         Quiz Component
        </div>
   
    </div>
    <div className="text-hecker text-center pt-4 ">
      <p>{currentQuestion}</p>
      <ul className="pt-4">
        <li>
        <input type="radio" name="answer" id="b" class="answer"/>
          <label for="a" id="a_text">{answers.a}</label>
        </li>

        <li>
          <input type="radio" name="answer" id="b" class="answer"/>
          <label for="b" id="b_text">{answers.b}</label>
        </li>
        <li>
        <input type="radio" name="answer" id="b" class="answer"/>
          <label for="c" id="c_text">{answers.c}</label>
        </li>

        <li>
        <input type="radio" name="answer" id="b" class="answer"/>
          <label for="d" id="d_text">{answers.d}</label>
        </li>

     
      </ul>
      </div>
      <div>
      <button  id="submit" onClick={buttonclicknext} className=" text-hecker w-full pt-4">Submit</button>
      </div>
      </div>
  )
}

export default Quiz