import React from 'react'
import Quiz from "../Quiz" 
 
function Quiz5() {
    const quizData = [
        {
          question:
            "Which of the following is ONE sign of possible identity theft?",
          a: "If you lose your wallet.",
          b: "If you can't find your credit card.",
          c: "If you see your sister steal your debit card.",
          d: "Withdrawals from your bank account that you can't explain.",
          correct: "d",
        },
        {
          question: "How many people have experienced Identity Theft in the past?",
          a: "13-14.4 million.",
          b: "16 million",
          c: "5 million",
          d: "10 million",
          correct: "a",
        },
        {
          question:
            "How do people commit identity theft? What do they need to do in order to succeed on committing identity theft?",
          a: "The fraud has to stalk the victim and steal their wallet.",
          b: "The thief needs to kidnap them and convince them to share their personal information.",
        c: "The thief needs to obtain personally identifying information from the victim and gain more common knowledge about them.",
        d: "All of these",  
        correct: "b",
        },
        {
          question:
            "What is one of the MOST absolute common types of identity theft that is used? HINT: (video)",
          a: "Robbery",
          b: "Phishing",
          c: "Fraud",
          d: "Criminal",
          correct: "b",
        },
        {
          question:
            " What is Phishing?",
          a: "Where a fraudster impersonates a trusted individual or entity, and asks the victim for sensitive info.",
          b: "When a burglar threatens you.",
          c: "When a family member or friend steals one of your belongings without asking.",
          d: " When you feel somebody is watching you.",
          correct: "a",
        },
        
      ];
      return (
        <div>
            <Quiz quizData={quizData} />
        </div>
      )
}

export default Quiz5