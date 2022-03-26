
import { useState } from "react";

function Quiz() {
  const quizData = [
    {
      question:
        "Which of the following should you do to restrict access to your files and devices?",
      a: "Update your software once a year.",
      b: "Share passwords only with colleagues you trust.",
      c: "Have your staff members access information via an open Wi-Fi network.",
      d: "Use multi-factor authentication.",
      correct: "d",
    },
    {
      question:
        "Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber attack. True or False?",
      a: "True",
      b: "False",
      c: "All of these",
      d: "None of these",
      correct: "a",
    },
    {
      question:
        "Which is the best answer for which people in a business should be responsible for cybersecurity?",
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
      question:
        "Which of the following is the best answer for how to secure your router?",
      a: "Change the default name and password of the router.",
      b: "Turn off the router’s remote management.",
      c: "All of the these.",
      d: "Log out as the administrator once the router is set up.",
      correct: "c",
    }, {
      question:
        "Which one of these statements is correct?",
      a: "f you get an email that looks like it’s from someone you know, you can click on any links as long as you have a spam blocker and anti-virus protection.",
      b: "You can trust an email really comes from a client if it uses the client’s logo and contains at least one fact about the client that you know to be true.",
      c: "Have your staff members access information via an open Wi-Fi network.",
      d: " If you get an email from Human Resources asking you to provide personal information right away, you should check it out first to make sure they are who they say are.      ",
      correct: "d",
    },
    {
      question:
        "An email from your boss asks for the name, addresses, and credit card information of the company’s top clients. The email says it’s urgent and to please reply right away. You should reply right away. True or False?",
      a: "True",
      b: "False",
      c: "All of these",
      d: "None of these",
      correct: "b",
    },
    {
      question:
        "You get a text message from a vendor who asks you to click on a link to renew your password so that you can log in to its website. You should:",
      a: "Reply to the text to confirm that you really need to renew your password.      ",
      b: "Pick up the phone and call the vendor, using a phone number you know to be correct, to confirm that the request is real.      ",
      c: "Click on the link. If it takes you to the vendor’s website, then you’ll know it’s not a scam.      ",
      d: "All of these.      ",
      correct: "b",
    },
    {
      question: "Email authentication can help protect against phishing attacks. True or False?",
      a: "True",
      b: "False",
      c: "All of the above",
      d: "None of these",
      correct: "a",
    },
    {
      question:
        "If you fall for a phishing scam, what should you do to limit the damage?",
      a: "Delete the phishing email.",
      b: "Unplug the computer. This will get rid of any malware.",
      c: "Change any compromised passwords.",
      d: "All of the above",
      correct: "c",
    }, {
      question:
        "Which of the following should you do to restrict access to your files and devices?",
      a: "Update your software once a year.",
      b: "Share passwords only with colleagues you trust.",
      c: "Have your staff members access information via an open Wi-Fi network.",
      d: "Use multi-factor authentication.",
      correct: "d",
    },
    {
      question:
        "A hacker locks out users and encrypts their personal computer files and data, holding it hostage until they agree to pay to the attacker. What is this practice called?",
      a: "Browser hijacker",
      b: "Ransomware",
      c: "Brute-force",
      d: "None of these",
      correct: "b",
    },
    {
      question:
        "Which is the best answer for which people in a business should be responsible for cybersecurity?",
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
      question:
        "Which of the following is the best answer for how to secure your router?",
      a: "Change the default name and password of the router.",
      b: "Turn off the router’s remote management.",
      c: "All of the these.",
      d: "Log out as the administrator once the router is set up.",
      correct: "c",
    }, {
      question:
        "Which of the following should you do to restrict access to your files and devices?",
      a: "Update your software once a year.",
      b: "Share passwords only with colleagues you trust.",
      c: "Have your staff members access information via an open Wi-Fi network.",
      d: "Use multi-factor authentication.",
      correct: "d",
    },
    {
      question:
        "Backing up important files offline, on an external hard drive or in the cloud, will help protect your business in the event of a cyber attack. True or False?",
      a: "True",
      b: "False",
      c: "All of these",
      d: "None of these",
      correct: "a",
    },
    {
      question:
        "Which is the best answer for which people in a business should be responsible for cybersecurity?",
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
    },{
      question: "Cyber criminals only target large companies.",
      a: "True",
      b: "False",
      c: "All of the above",
      d: "None of these",
      correct: "b",
    },
  ];

  const buttonclicknext = () => {
    let htmlNodes = document.getElementsByClassName("option");
    let arraybuttons = Array.from(htmlNodes)
    let isButtonClicked = arraybuttons.some((element) => element.clicked);
   
    if(currentindex < quizData.length && checkClickA || checkClickB || checkClickC || checkClickD) {
 setCurrentIndex(currentindex + 1);
 console.log("done log")
 setCurrentQuestion(quizData[currentindex].question) 
 if(valueA === answers.correct || valueB ===  answers.correct || valueC === answers.correct || valueD === answers.correct) { 
  setScore(score + 1)
 }
setCheckClickA(false)
setCheckClickB(false)
setCheckClickC(false)
setCheckClickD(false)
 setAnswers(quizData[currentindex])
    }else if(currentindex >quizData.length) {
      let fulldiv = document.querySelector(".main-div-quiz")
     fulldiv.innerHTML = `<p className="text-score">Your Score is ${score} out of ${quizData.length}</p>`
     fulldiv.classList.add("text-score")
    
    }
  }
  // const buttonclicknext = (e) => {
  //   let htmlNodes = document.getElementsByName("answer");

  //   let radioButtonsArray = Array.from(htmlNodes);
  //   //logic by rohit ser (targeted towards vaarun ser)
  //   let isAnyRadioButtonChecked = radioButtonsArray.some(
  //     (element) => element.checked
  //   );

  //   // console.log(isAnyRadioButtonChecked);//for checking , will removed once works
  //   if (currentindex < quizData.length && isAnyRadioButtonChecked) {
  //     // console.log(radioButtonsArray)//for checking , will removed once works
    
  //     let answer;
  //     htmlNodes.forEach((answer) => {
  //       if (answer.checked === isAnyRadioButtonChecked ) {
  //         answer = answer.id;
  //         // console.log(answer)
  //       }
  //     });
  //     if (answer === quizData[currentindex].correct) {
  //       // console.log("ufkc")
  //     }
  //     setCurrentIndex(currentindex + 1);
  //     setCurrentQuestion(quizData[currentindex].question);
  //     setAnswers(quizData[currentindex]);

  //   }else if(currentindex == quizData.length){
  //     setSubmitValue("Submit")
  //     setCurrentIndex(currentindex + 1);
  //   } 
  //   else if (currentindex > quizData.length ) {
  //     // console.log("doesn't work")
  //     let score = 0; //just for testing
  //    setSubmitValue("Score above")
  //     const content = document.querySelector(".all-content");
  //     content.innerHTML = `<h2 className="text-white">You answered ${score}/${quizData.length+1} questions correctly</h2>`;
  //   }
  // };
  //   const buttonclick =()=>{
  //     currentindex++
  //     setCurrentQuestion(quizData[currentindex].question)
  // console.log(currentindex)
  //   }
  const nothing = {
    a: "Click on the button to start the quiz",
    b:"Click on the button to start the quiz",
    c:"Click on the button to start the quiz",
    d:"Click on the button to start the quiz",
  }
  const [currentindex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("Nothing");
  const [submitButtonValue,setSubmitValue] = useState("Next");
  const [answers, setAnswers] = useState(nothing);
  const [score,setScore] = useState(0);
  const [valueA,setValueA] = useState("")
  const [valueB,setValueB] = useState("")
  const [valueC,setValueC] = useState("")
  const [valueD,setValueD] = useState("")
  const [checkClickA,setCheckClickA] = useState(false);
  const [checkClickB,setCheckClickB] = useState(false);
  const [checkClickC,setCheckClickC] = useState(false);
  const [checkClickD,setCheckClickD] = useState(false);
  const optionClick = (e)=>{
    // if(e.target.innerText === quizData[currentindex].a){
//  console.log(e.target.innerText === quizData[currentindex].a) 
setValueA(answers.a)
setValueB(answers.b)
setValueC(answers.c)
setValueD(answers.d)

if(valueA === e.target.innerText){
  setCheckClickA(true)
  console.log("done a ")
}else if(valueB === e.target.innerText){
  setCheckClickB(true)
  console.log("done b ")
}else if(valueC === e.target.innerText){
  setCheckClickC(true)
  console.log("done c ")
}else if(valueD === e.target.innerText){
  setCheckClickD(true)
  console.log("done d ")
}
    // }
  }
  return (
    <div className="border-hecker border main-div-quiz">
      <div className="flex justify-center text-white border-hecker ">
        <div className="text-center align-middle text-2xl">
          Quiz
        </div>
      </div>
      <div onClick={optionClick} className=" text-center pt-4 all-content option-div">
        <div onClick={optionClick} className="text-xl mb-4 mt-2 text-white">{currentQuestion}</div>
      <button onClick={optionClick} className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option" >{answers.a}</button><br/>
      <button onClick={optionClick} className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option" >{answers.b}</button><br/>
      <button onClick={optionClick} className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option" >{answers.c}</button><br/>
      <button onClick={optionClick} className="border-2 border-hecker text-white p-2 m-2 hover:bg-hecker rounded-lg hover:border-black hover:text-black option" >{answers.d}</button>
      </div>
      <div className="flex justify-center">
        <button
          id="submit" 
          className=" text-hecker max-w-sm border  border-hecker rounded-lg p-2 m-2 "
          style={{
            transform: 'skew(-4deg)'
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
