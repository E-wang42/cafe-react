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
      <section id="section2" className="h-full">
        <div>
          <div>
            <div className="flex flex-row justify-center">
              <div className="w-3/12 h-96 bg-light-coffee">
                <div className="bg-secondary-content w-80 h-72 absolute top-24 left-56 z-10 flex flex-col justify-center items-center gap-16 rounded-lg">
                  <h2 className="text-center">
                    MORE THAN JUST COFFEE, CUP OF INSPIRATION
                  </h2>
                  <a className="btn" href="#">
                    get inspired
                  </a>
                </div>
              </div>
              <div className="md:w-8/12 h-96">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={false}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      className="w-full object-cover object-center"
                      src="https://loremflickr.com/640/360"
                      alt="hero1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://loremflickr.com/640/360" alt="hero2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://loremflickr.com/640/360" alt="hero3" />
                  </SwiperSlide>
                </Swiper>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
