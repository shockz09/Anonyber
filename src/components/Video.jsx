import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Video(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      class="flex flex-col items-center justify-center border border-hecker bg-black text-white text-center lg:w-[20VW] lg:h-[40vh]"
      data-aos="flip-up"
    >
      <img
        src={props.thumbnail_url}
        alt={props.video_title}
        className="mt-4 h-[16vh] w-72"
      />
      <hr />
      <h3 className="text-xl font-semibold mt-2 ">{props.video_title}</h3>
      <a
        target="_blank"
        href={props.video_url}
        className="border-2 border-hecker p-2 m-4 mt-3 hover:bg-dark-hecker"
        style={{
          transform: "skew(-10deg)",
        }}
      >
        <span
          style={{
            transform: "skew(10deg)",
          }}
        >
          Watch
        </span>
      </a>
    </div>
  );
}

export default Video;
