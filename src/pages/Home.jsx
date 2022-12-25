import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import HomeCards from "../components/HomeCards";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const containerVariants = {
  start: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  middle: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  end: {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
};

function Home() {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true, amount: 0.5 });

  return (
    <motion.section
      variants={containerVariants}
      initial="start"
      animate="middle"
      exit="end"
      transition={{ duration: 0.75 }}
      id="section2"
      className="h-full py-[4.3rem] md:py-[5.2rem]"
    >
      <div className="w-full flex flex-col md:flex-row justify-center">
        <div className="hidden w-full md:h-[32rem] bg-hero-pattern md:block">
          <div className="bg-light-coffee w-[22rem] h-96 absolute top-36 left-72 z-10 flex flex-col justify-center items-center gap-y-14 rounded-lg p-10">
            <h2 className="text-center capitalize font-roboto text-white text-3xl leading-relaxed">
              more than just coffee, it's your cup of inspiration.
            </h2>
            <Link to="/menu" className="yellowBtn">
              Get Inspired →
            </Link>
          </div>
        </div>
        <div className="md:w-8/12 w-full h-[26rem] md:h-[32rem]">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="carouselImage"
                src="src/assets/hero1.jpg"
                alt="hero1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="carouselImage"
                src="src/assets/hero2.jpg"
                alt="hero2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="carouselImage"
                src="src/assets/hero3.jpg"
                alt="hero3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full h-80 bg-hero-pattern md:hidden py-8">
        <div className="bg-light-coffee p-6 ml-8 w-60 h-64 z-10 flex flex-col justify-center items-center gap-y-12 rounded-lg">
          <h2 className="text-center capitalize font-roboto text-white text-xl">
            more than just coffee, it's your cup of inspiration.
          </h2>
          <a className="yellowBtn capitalize" href="#">
            get inspired →
          </a>
        </div>
      </div>

      <section className="w-11/12 md:max-w-[68rem] mx-auto grid md:place-items-center py-14">
        <div className="md:inline-grid md:grid-cols-2 md:gap-16 grid-rows-2 w-full flex flex-col justify-center items-center">
          <HomeCards
            img="src\assets\coffeepour.jpg"
            title="TITLE HERE"
            desc="Epoch operations bogus, streamlining morrow shelf maples courtiers meditates divers entrance fleas, actinium rapids repairer keen sleepers unrestrictedly perceptually punish, floater hounds coastal."
            button="CLICK THIS BUTTON →"
          />
          <HomeCards
            img="src\assets\findtrue.png"
            title="discover taste true to you"
            desc="Blazers artifact nationally wastefulness than resisting alcove whisked actuator, societies merger heathen appertains unties reaper antiquity resenting waltz, pressure marshals acne jig optionally. "
            button="Discover More →"
          />
          <HomeCards
            img="src\assets\teas.jpg"
            title="shop tea"
            desc="Unending driver relationship twilight, masturbates growling fate stragglers atypically lightness compartmentalized, indices powdered crochet havoc smokers shortcut airstrips figurative, concentrators."
            button="All Tea →"
          />
          <HomeCards
            img="src\assets\beans.jpg"
            title="shop coffee"
            desc="Terminating impetuously epidemics amplify recesses atypically lightness compartmentalized banish, mistakion combinations armstrong inserted sneeze achievements signers."
            button="All Coffee →"
          />
        </div>
      </section>

      <div className="mb-14 rounded mx-auto h-44 gap-2 flex flex-col md:flex-row justify-center items-center bg-dark-coffee max-w-[68rem] px-8">
        <div className="flex flex-col justify-center md:mr-auto">
          <h2 className="text-2xl text-center font-roboto capitalize md:text-start text-white">
            never miss an offer
          </h2>
          <p className="text-center text-white">
            Sign up for our newletter and receive 15% off on your next order
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
          <input
            className="w-80 h-10 bg-white rounded indent-4 outline-none"
            type="text"
            name="email"
            placeholder="enter e-mail..."
          />
          <a className="yellowBtn w-24 text-center" href="#">
            SIGN UP
          </a>
        </div>
      </div>

      <div className="md:pb-8 md:mt-64 rounded-lg max-w-[68rem] mx-auto flex md:flex-row justify-center items-center text-center bg-light-coffee">
        <div
          ref={viewRef}
          className={`hidden md:block md:w-full ${isInView ? "bounce" : null}`}
        >
          <img
            className="hidden w-64 md:block -mt-64 mx-auto -rotate-6"
            src="src\assets\mockup.png"
            alt="mobile"
          />
        </div>

        <div className="p-8 flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-4xl font-roboto text-white capitalize md:text-start leading-tight">
            Download the App and earn points towards your next order
          </h2>
          <div className="flex flex-row">
            <img
              className="max-w-[14rem] h-[3.8rem] cursor-pointer mt-3"
              src="src\assets\appstore.png"
              alt="appstore"
            />
            <img
              className="max-w-[13.5rem] h-[5.5rem] cursor-pointer"
              src="src\assets\playstore.png"
              alt="playstore"
            />
          </div>
          <p className="text-white text-sm md:text-start">
            Apple and the Apple logo are trademarks of Apple Inc., registered in
            the U.S. and other countries. App Store is a service mark of Apple
            Inc. Google Play is a trademark of Google Inc. Terms apply.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
