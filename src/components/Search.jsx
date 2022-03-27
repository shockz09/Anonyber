import Navbar from "../components/Navbar";
import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


function Search() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    <header>
      <Navbar />
      <div className="flex items-center justify-center flex-col w-[99vw] text-center text-white lg:m-10 mb-10 " data-aos="zoom-out-up">
        <h1 className="lg:text-7xl mb-7 mt-3 underline decoration-hecker text-5xl">
          Resources
        </h1>
        <form action="" className="flex items-center w-[99vw] justify-center" data-aos="fade-right">
          <input
            type="text"
            placeholder="Search"
            className="bg-black border-2 border-hecker rounded-md p-3 lg:w-1/3 w-1/2text-white"
          />
          <button
            type="submit"
            className="bg-black border-2 border-hecker rounded-md h-12 w-12 text-white m-2 p-2 hover:bg-dark-hecker"
          >
            <img src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" />
          </button>
        </form>
        <div className="text-white text-center flex gap-5 mt-5" data-aos="fade-right">
          <button className="bg-black border-2 border-hecker h-7 w-20 p-1 flex items-center justify-center hover:bg-dark-hecker">
            <a href="/resources"> All</a>
          </button>
          <button className="bg-black border-2 border-hecker h-7 w-20 p-1 flex items-center justify-center hover:bg-dark-hecker">
            <a href="/resources/video"> Videos</a>
          </button>
          <button className="bg-black border-2 border-hecker h-7 w-20 p-1 flex items-center justify-center hover:bg-dark-hecker">
            <a href="/resources/blog"> Blogs</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Search;
