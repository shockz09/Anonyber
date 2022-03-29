import React from 'react'
import Quiz from "../Quiz"
import Navbar from "../Navbar";
function Quiz1() {
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
          correct: "d",
        },
      ];
      return (
        <div>
          <Navbar />
            <Quiz quizData={quizData} />
        </div>
      )
}

export default Quiz1;