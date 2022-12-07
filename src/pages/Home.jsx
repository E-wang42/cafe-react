import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "../assets/hero1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import HomeCards from "../components/HomeCards";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section id="section2" className="h-full py-[5.4rem] md:py-[5.2rem]">
        <div className="w-full flex flex-col md:flex-row justify-center">
          <div className="hidden w-full h-36 md:h-[36rem] bg-hero-pattern md:block">
            <div className="bg-light-coffee w-24 h-64 absolute top-24 right-24 z-10 flex flex-col justify-center items-center gap-16 rounded-lg">
              <h2 className="text-center">
                MORE THAN JUST COFFEE, CUP OF INSPIRATION
              </h2>
              <a className="yellowBtn" href="#">
                get inspired
              </a>
            </div>
          </div>
          <div className="md:w-8/12 w-full h-[36rem]">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide id="slide1">
                <img src="src/assets/hero1.jpg" alt="hero1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="src/assets/hero2.jpg" alt="hero2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="src/assets/hero3.jpg" alt="hero3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full h-36 md:h-[36rem] bg-hero-pattern md:hidden">
          <div className="bg-light-coffee w-44 h-64 z-10 flex flex-col justify-center items-center gap-16 rounded-lg">
            <h2 className="text-center">
              MORE THAN JUST COFFEE, CUP OF INSPIRATION
            </h2>
            <a className="yellowBtn" href="#">
              get inspired
            </a>
          </div>
        </div>
        {/* <h1
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-6xl font-serif text-dark-coffee"
          id="heading"
        >
          Panda Coffee House
        </h1> */}
        <section className="max-w-[68rem] mx-auto grid place-items-center py-14">
          <div className="md:inline-grid md:grid-cols-2 gap-6 grid-rows-2 max-w-full sm:flex sm:flex-col">
            <HomeCards
              img="src\assets\coldbrew.jpg"
              title="TITLE HERE"
              desc="WOEIFJ:OWIEJFOISDJOFJWE"
              button="CLICK THIS BUTTON"
            />
            <HomeCards
              img="src\assets\coldbrew.jpg"
              title="TITLE HERE"
              desc="WOEIFJ:OWIEJFOISDJOFJWE"
              button="CLICK THIS BUTTON"
            />
            <HomeCards
              img="src\assets\coldbrew.jpg"
              title="TITLE HERE"
              desc="WOEIFJ:OWIEJFOISDJOFJWE"
              button="CLICK THIS BUTTON"
            />
            <HomeCards
              img="src\assets\coldbrew.jpg"
              title="TITLE HERE"
              desc="WOEIFJ:OWIEJFOISDJOFJWE"
              button="CLICK THIS BUTTON"
            />
          </div>
        </section>
        <div className="mb-14 mx-auto h-44 gap-2 flex flex-col md:flex-row justify-center items-center bg-stone-400 max-w-[66rem] px-8 rounded">
          <div className="flex flex-col md:mr-auto">
            <h2 className="text-2xl text-center font-roboto capitalize md:text-start">
              never miss an offer
            </h2>
            <p className="text-center">
              Sign up for our newletter and receive 15% off on your next order
            </p>
          </div>
          <input
            className="w-80 h-10 bg-white rounded indent-4 outline-none"
            type="text"
            name="email"
            placeholder="enter e-mail..."
          />
          <a className="yellowBtn" href="#">
            SIGN UP
          </a>
        </div>
        <div>
          <img
            className="max-w-[24rem]"
            src="src\assets\pic.png"
            alt="mobile"
          />
          <div>
            <h2 className="text-2xl font-roboto">
              Download the App and earn points towards your next order
            </h2>
            <div>
              <img
                className="max-w-[13rem] cursor-pointer"
                src="src\assets\appstore.png"
                alt="appstore"
              />
              <img
                className="max-w-[16rem] cursor-pointer"
                src="src\assets\playstore.png"
                alt="playstore"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
