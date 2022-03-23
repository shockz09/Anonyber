import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Blog(props) {
  return (
   
      <div className="">
        <div className="flex flex-col items-center justify-center border border-hecker bg-black text-white text-center w-[20VW] h-[35vh]">
          <img
            className="border-2 border-hecker mt-4 h-[16vh] w-72"
            src={props.blog_img}
            alt={props.blog_title}
          />
          <h3 className="text-xl font-semibold m-2">{props.blog_title}</h3>
          <a
            href={props.blog_url}
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
              Visit Blog
            </span>
          </a>
        </div>
      </div>
    
  );
}

export default Blog;
