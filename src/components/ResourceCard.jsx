import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function ResourceCard(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
   
    <div class="flex flex-col items-center justify-center border border-hecker bg-black text-white text-center w-full lg:w-[20VW] lg:h-[35vh]" data-aos="flip-up">
      <img src={props.resource_img_url} alt={props.resource_title} className="mt-4 h-[30vh] lg:h-[16vh] w-72" />
      <hr />
      <h3 className="text-md lg:text-xl font-semibold mt-2 ">{props.resource_title}</h3>
      <a
        target="_blank"
        href={props.resource_url}
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
  );
}

export default ResourceCard;
