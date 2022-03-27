import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="" data-aos="flip-up">
      <div className="flex flex-col items-center justify-center border border-hecker bg-black text-white text-center lg:w-[20vw] lg:h-[40vh] mt-10">
        <img
          className="border-3 border-hecker h-[16vh] w-72"
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
<<<<<<< HEAD
            Visit Blog
          </span>
        </a>
=======
            <span
              style={{
                transform: "skew(10deg)",
              }}
            >
              Read Blog
            </span>
          </a>
        </div>
>>>>>>> 1082ec97ebc8eb66fa882dc20dcf251cb9eee01f
      </div>
    </div>
  );
}

export default Blog;
