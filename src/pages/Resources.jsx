import React from "react";
import Search from "../components/Search";
import VideoSlider from "../components/VideoSlider" 
import BlogSlider from "../components/BlogSlider" 
import "swiper/css";

function Resources() {
  return (
    <div> 
      <Search />
      <VideoSlider />
      <BlogSlider />
    </div>
  );
}
export default Resources;
