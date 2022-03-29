import React from 'react'
import Quiz from "../Quiz"
import Navbar from "../Navbar";
function Quiz2() {
    const quizData = [
        {
          question: "Which one of these statements is correct?",
          a: "If you get an email that looks like it’s from someone you know, you can click on any links as long as you have a spam blocker and anti-virus protection.",
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
            "Email authentication can help protect against phishing attacks. True or False?",
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
        },
        {
          question:
            "Which of the following should you do to restrict access to your files and devices?",
          a: "Update your software once a year.",
          b: "Share passwords only with colleagues you trust.",
          c: "Have your staff members access information via an open Wi-Fi network.",
          d: "Use multi-factor authentication.",
          correct: "d",
        }
      ];
      return (
        <div>
          <Navbar />
            <Quiz quizData={quizData} />
        </div>
      )
}

export default Quiz2