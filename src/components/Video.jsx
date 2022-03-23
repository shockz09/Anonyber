import React from "react";

function Video(props) {
  return (
    <div class="flex flex-col items-center justify-center border border-hecker bg-black text-white w-[20VW] h-[30vh] m-10 text-center">
      <img src={props.thumbnail_url} alt={props.video_title} className="mt-4 h-[16vh] w-64" />
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
