import React from "react";
import Video from "../components/Video";
import { Swiper, SwiperSlide, EffectCube } from "swiper/react";
import Carousel from "react-tiny-slider";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";

function VideoSlider() {
  return (
    <div className="" >
      <h1 className="underline decoration-hecker  text-4xl text-white mb-10 ml-8 lg:ml-20 mt-10">
        Video resources
      </h1>
      <div className="flex w-[99vw]">
        <Swiper
         modules={[Navigation, Pagination, Scrollbar]}
         spaceBetween={10}
         scrollbar={{ draggable: true }}
         breakpoints={{
           // when window width is >= 640px
           640: {
             width: 640,
             slidesPerView: 1,
           },
           // when window width is >= 768px
           768: {
             width: 768,
             slidesPerView: 2,
           },
         }}
         navigation
        >
          <SwiperSlide>
            <Video
              video_title="Passwords | Security Awareness"
              video_url="https://youtu.be/0Wd3JoUHXno"
              thumbnail_url="https://img.youtube.com/vi/0Wd3JoUHXno/sddefault.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="Data Handling | Security Awareness"
              video_url="https://youtu.be/hsNRrEnB_aM"
              thumbnail_url="https://img.youtube.com/vi/hsNRrEnB_aM/sddefault.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="Computer Theft | Security Awareness"
              video_url="https://youtu.be/QiaIL-J9Vds"
              thumbnail_url="https://img.youtube.com/vi/QiaIL-J9Vds/sddefault.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="Phishing And RansomWare| Security Awareness"
              video_url="https://youtu.be/D_yAYhjNE-0"
              thumbnail_url="https://img.youtube.com/vi/D_yAYhjNE-0/sddefault.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="Removable Media | Security Awareness"
              video_url="https://youtu.be/FRxrHduwPjY"
              thumbnail_url="https://img.youtube.com/vi/FRxrHduwPjY/sddefault.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="Internet Downloads | Security Awareness"
              video_url="https://youtu.be/7Apu1EWZPhQ"
              thumbnail_url="https://img.youtube.com/vi/7Apu1EWZPhQ/sddefault.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="WIFi | Security Awareness"
              video_url="https://youtu.be/RQttayB5ymA"
              thumbnail_url="https://img.youtube.com/vi/RQttayB5ymA/sddefault.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="How Long Should Your Password be? | Account Protection"
              video_url="https://youtu.be/4rNqh9Kpl9Q"
              thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/passwords.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="What is 2FA? | Account Protection"
              video_url="https://youtu.be/S9R5Gyr226Y"
              thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/2fa.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="What is a password manager? | Account Protection"
              video_url="https://www.youtube.com/watch?v=y4Ak2SXwVLo&list=PLIhtsJP6W5vhU7yUlGY5wgFwAlSqcq4mg&index=25&t=8s"
              thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/passwordmanager.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="Poisnous Emails | Account Protection"
              video_url="https://youtu.be/wEEHlaZXOMI"
              thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/archernews2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="What is a VPN? | Securing Home Systems"
              video_url="https://youtu.be/G4qNBCrsxmI"
              thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/vpn2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="What is a Firewall? | Securing Home Systems"
              video_url="https://youtu.be/_sSxCf5d9XQ"
              thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/firewall2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              video_title="What is a Home Router? | Securing Home Systems"
              video_url="https://youtu.be/CcuSlMsYKvY"
              thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/homerouter2.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default VideoSlider;
