import React from "react";
import Search from "../components/Search";
import VideoSlider from "../components/VideoSlider" 
import BlogSlider from "../components/BlogSlider" 
import "swiper/css";
import Footer from "../components/Footer";


function Resources() {
  return (
    <div className="h-[100vh]" > 
      <Search />
      <VideoSlider />
      <BlogSlider />
      <Footer />
    </div>
  );
}
export default Resources;
