import React from "react";

function Video(props) {
  return (
      <div className="">
    <div class="flex flex-col items-center justify-center border border-hecker bg-black text-white w-full m-5">
      <img src={props.thumbnail_url} alt={props.video_title} className="border-2 border-hecker  " />
      <h3 className="text-xl font-semibold mt-2 ">{props.video_title}</h3>
      <a
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
          Visit
        </span>
      </a>
    </div>
    </div>
  );
}

export default Video;
