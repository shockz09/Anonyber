import React from 'react'


function quiz6() {
    const quizData = [
        {
          question:
            "What is Identity Theft?",
          a: "When one of your friends ask to borrow your password.",
          b: "When you give your password to a person who needs it.",
          c: "When an unauthorized person uses your personal information to gain your identity.",
          d: "When your teacher gives you permission to use her email password.",
          correct: "c",
        },
        {
          question: "What are ALL the types of Identity Theft?",
          a: "Financial and Synthetic.",
          b: "Financial, Medical, Criminal, Child, and Synthetic.",
          c: "Financial and Child.",
          d: "Child and Criminal.",
          correct: "b",
        },
        {
          question:
            "How can we prevent Identity Theft?",
          a: "By looking at websites on Identity Theft that provide checklist that will provide guidance for you through the recovery process of it.",
          b: "By looking at websites that provide optional passwords.",
          c: "By asking your friend for a strong password idea.",
          d: "By looking at websites that offer you brand new e-mail options.",
          correct: "a",
        },
        {
          question:
            "What is ONE thing you can do if your identity is stolen?",
          a: "Tell them to go away.",
          b: "Give them your credit information so they can leave you alone.",
          c: "Find the fraud online and confront them about it.",
          d: "Freeze your credit.",
          correct: "d",
        },
        {
          question:
            "What is ONE reason why people commit Identity Theft?",
          a: "To steal your car.",
          b: "To apply for credits.",
          c: "To rob your home.",
          d: "To track you down.",
          correct: "b",
        },
        
      ];  
      return (
        <div>
            <Quiz quizData={quizData} />
            {/* < quizData={quizData} /> */}
        </div>
      )
}

export default quiz6