import React from "react";

function QuizCard(props) {
  return (
    <div class="flex flex-col text-white bg-black rounded-md border border-hecker hover:border-dark-hecker hover:shadow-md duration-200 cursor-pointer">
      <div class="relative">
        <img
          alt={props.quiz_title}
          class="rounded-t-md object-cover w-full h-56 lazyloaded"
          src={props.img_src}
        />
        <p class="bg-black rounded-t-md mx-6 px-2 absolute bottom-0 left-0">
          Q: 5
        </p>
      </div>
      <div class="flex flex-col items-start p-8 space-y-2">
        <h2 class="text-lg font-600">{props.quiz_title}</h2>
        <div class="flex space-x-1 items-center flex-wrap text-sm">
          <p class="bg-grey-200 border border-grey-400 rounded-md px-2 my-1">
            {props.quiz_focus}
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-5 stroke-0 text-grey-800"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
          <div class="flex space-x-2">
            <img src="https://fastly.codingal.com/images/quizzes/beginner-level.svg" />
            <span>{props.level} level</span>
          </div>
          <button class="p-3 border border-hecker text-white hover:bg-dark-hecker active:bg-hecker">
            Play now
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
