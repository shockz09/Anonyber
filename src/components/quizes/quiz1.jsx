import React from 'react'

function quiz1() {
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
        },
        {
          question: "Which one of these statements is correct?",
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
          a: "lel ",
          b: "kek",
          c: "mhm",
          d: "sup",
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
        },
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
          question: "Cyber criminals only target large companies.",
          a: "True",
          b: "False",
          c: "All of the above",
          d: "None of these",
          correct: "b",
        },
      ];
      return (
        <div>
            <Quiz quizData={quizData} />
        </div>
      )
}

export default quiz1;