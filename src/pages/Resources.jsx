import React from "react";
import Video from "../components/Video";
import Blog from "../components/Blog";
import { Swiper, SwiperSlide } from "swiper/react";

function Resources() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col w-full text-center text-white m-10">
        <h1 className="text-5xl mb-7 mt-3 underline decoration-hecker">
          Resources
        </h1>
        <form action="" className="flex items-center w-full justify-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-black border-2 border-hecker rounded-md p-3 w-1/3 text-white"
          />
          <button
            type="submit"
            className="bg-black border-2 border-hecker rounded-md h-12 w-12 text-white m-2 p-2 hover:bg-dark-hecker"
          >
            <img src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" />
          </button>
        </form>
        <div className="text-white text-center flex gap-5">
          <button className="bg-black border-2 border-hecker h-7 w-20 p-1 flex items-center justify-center hover:bg-dark-hecker">
            {" "}
            All
          </button>
          <button className="bg-black border-2 border-hecker h-7 w-20 p-1 flex items-center justify-center hover:bg-dark-hecker">
            Videos
          </button>
          <button className="bg-black border-2 border-hecker h-7 w-20 p-1 flex items-center justify-center hover:bg-dark-hecker">
            Blogs
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex"
      >
        <SwiperSlide>
          <Video
            video_title="Never Gonna Give You Up"
            video_url="https://youtu.be/dQw4w9WgXcQ"
            thumbnail_url="https:/i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blog
            blog_title="Never Gonna Give You Up"
            blog_url="https://en.wikipedia.org/wiki/Rickrolling"
            blog_img="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Video
            video_title="Never Gonna Give You Up"
            video_url="https://youtu.be/dQw4w9WgXcQ"
            thumbnail_url="https:/i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blog
            blog_title="Never Gonna Give You Up"
            blog_url="https://en.wikipedia.org/wiki/Rickrolling"
            blog_img="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Video
            video_title="Never Gonna Give You Up"
            video_url="https://youtu.be/dQw4w9WgXcQ"
            thumbnail_url="https:/i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blog
            blog_title="Never Gonna Give You Up"
            blog_url="https://en.wikipedia.org/wiki/Rickrolling"
            blog_img="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Video
            video_title="Never Gonna Give You Up"
            video_url="https://youtu.be/dQw4w9WgXcQ"
            thumbnail_url="https:/i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blog
            blog_title="Never Gonna Give You Up"
            blog_url="https://en.wikipedia.org/wiki/Rickrolling"
            blog_img="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Resources;
