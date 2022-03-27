import React from "react";
import Blog from "../components/Blog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";

function BlogSlider() {
  return (
    <div className="">
      <h1 className="underline decoration-hecker text-4xl text-white  mt-10    ml-8 lg:ml-20">
        Blog Resources
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
            <Blog
              blog_title="How To Protect Yourself From Phishing?"
              blog_url="https://support.microsoft.com/en-us/windows/protect-yourself-from-phishing-0c7ea947-ba98-3bd9-7184-430e1f860a44 "
              blog_img="https://antivirusjar.com/wp-content/uploads/2019/10/phising-scam.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blog
              blog_title="Phishing | Government Advisary"
              blog_url="https://www.ncsc.gov.uk/guidance/phishing         "
              blog_img="https://www.ncsc.gov.uk/images/Phishing-vector%20-%20Copy.png?mpwidth=545&mlwidth=737&twidth=961&dwidth=635&dpr=1&width=1920"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Blog
              blog_title="How to Keep Your Credentials safe. "
              blog_url="https://digitalguardian.com/blog/101-data-protection-tips-how-keep-your-passwords-financial-personal-information-safe"
              blog_img="https://twelvesec.com/wp-content/uploads/2021/03/data-protection.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blog
              blog_title="Online Safety Guidelines | Cyber Crime Dvision India"
              blog_url="https://www.cybercrime.gov.in/Webform/Crime_OnlineSafetyTips.aspx"
              blog_img="https://i.ibb.co/Hn2zf9p/caaution.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blog
              blog_title="Online Gaming Scams during Pandemic. How to Stay Safe"
              blog_url="https://www.kaspersky.co.in/resource-center/threats/coronavirus-gaming-scams"
              blog_img="https://www.kaspersky.co.in/content/en-in/images/repository/isc/2020/covidgaming1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blog
              blog_title="Online Scams Advisory For Students | ISEA"
              blog_url="https://infosecawareness.in/concept/student/online-scams"
              blog_img="https://infosecawareness.in/concept/index.php?img=Student-brand1202"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blog
              blog_title="Online Scams Advisory For Women | ISEA"
              blog_url="https://infosecawareness.in/concept/women?lang=en"
              blog_img="https://infosecawareness.in/concept/index.php?img=Woment-brand1256"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Blog
              blog_title="9 Instagram Scams You Need To Avoid"
              blog_url="https://finance.yahoo.com/news/9-instagram-scams-avoid-192650720.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAD4BQBXheyCQHg47OvGQUbyv0Ah9wc0wfz3SPgUgwf4fO57IQwsW9r3KGrD2jOpQaYwfeUNbiOdtebc_7vqlmWlNHSqDs1bHElldfZy91ASus7wi0LClv5afyBSWTlDfrvK0kgaR9Mys0bT1ibyw5eDyw2Cj49PEHgchx3f-1yBX"
              blog_img="https://www.metacompliance.com/wp-content/uploads/2021/01/Instagram-scams.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default BlogSlider;
