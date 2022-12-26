import React, { useRef } from "react";
import PageIntroText from "../components/PageIntroText";
import PagesBanner from "../components/PagesBanner";
import { motion, useInView } from "framer-motion";

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

function About() {
  const viewRef = useRef(null);
  const viewRef1 = useRef(null);
  const viewRef2 = useRef(null);
  const viewRef3 = useRef(null);
  const viewRef4 = useRef(null);
  const viewRef5 = useRef(null);
  const isInView = useInView(viewRef, { once: true, amount: "0.6" });
  const isInView1 = useInView(viewRef1, { once: true, amount: "0.6" });
  const isInView2 = useInView(viewRef2, { once: true, amount: "0.6" });
  const isInView3 = useInView(viewRef3, { once: true, amount: "0.6" });
  const isInView4 = useInView(viewRef4, { once: true, amount: "0.6" });
  const isInView5 = useInView(viewRef5, { once: true, amount: "0.6" });

  return (
    <motion.section
      variants={containerVariants}
      initial="start"
      animate="middle"
      exit="end"
      transition={{ duration: 0.75 }}
      className="w-full py-[5.4rem] md:py-[5.2rem]"
    >
      <PagesBanner title="Brewed With Integrity" image="src/assets/about.png" />
      <PageIntroText
        heading="our process"
        message="From Bean to Brew, for the Perfect Cup."
      />
      <div className="w-11/12 pb-60 pt-28 flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-y-10 md:gap-y-60 gap-x-10  md:max-w-[68rem] mx-auto">
        <figure className="w-full md:hidden">
          <img
            className="w-[max(20rem,10rem)] drop-shadow-lg max-h-[25rem] shadow-2xl mx-auto z-10 translate-x-14 object-cover object-center"
            src="src/assets/barista.jpg"
            alt="barista"
          />
          <span className="bg-orange-600 bg-opacity-80 w-full h-[17rem] -mt-56 block -z-10 mx-auto sm:w-4/5 rounded-lg shadow-sm"></span>
        </figure>
        <div className="flex flex-col gap-y-2 pb-36 md:pb-0">
          <h2
            ref={viewRef}
            className={`w-full font-roboto text-3xl md:text-4xl text-light-coffee text-shadow ${
              isInView && "textAnimate"
            }`}
          >
            Passion for Quality
          </h2>
          <p className="pt-4 leading-relaxed">
            Recompense theoretical memorize brands submarines, bootstrapped
            dulled balked spheres textually mouths unwanted specificity,
            overseeing reflection instantiations scorched count telling
            locators.
          </p>
        </div>
        <div
          ref={viewRef3}
          className={`hidden md:block ${isInView3 && "rotate-in"}`}
        >
          <img
            className="max-w-[24rem] h-[30rem] object-cover object-center translate-x-40 shadow-2xl drop-shadow-lg"
            src="src\assets\barista.jpg"
            alt="barista"
          />
          <span className="bg-orange-600 bg-opacity-80 w-full h-[20rem] -mt-72 block -z-10 mx-auto rounded shadow-sm"></span>
        </div>

        <div
          ref={viewRef4}
          className={`w-full md:block ${isInView4 && "rotate-in"}`}
        >
          <img
            className="w-[max(20rem,10rem)] md:-translate-x-[4.5rem] drop-shadow-lg max-h-[25rem] md:max-w-[25rem] md:max-h-[28rem] shadow-2xl mx-auto z-10 -translate-x-14 object-cover object-center"
            src="src/assets/barista3.jpg"
            alt="barista"
          />
          <span className="bg-sky-600 w-full md:w-[31rem] bg-opacity-80 h-[17rem] md:h-[20rem] -mt-56 md:-mt-[18.6rem] block -z-10 mx-auto md:mx-0 sm:w-4/5 rounded shadow-sm"></span>
        </div>
        <div className="flex flex-col gap-y-2 pb-36 md:pb-0">
          <h2
            ref={viewRef1}
            className={`font-roboto text-3xl md:text-4xl text-light-coffee text-shadow ${
              isInView1 && "textAnimate"
            }`}
          >
            Commitment to Craft
          </h2>
          <p className="pt-4 leading-relaxed">
            Ceremonially scuttled ferried relativistically freezes splintered
            cards bugled, owe proved reputes earners sinning disguises
            stomaching memoryless motion, tachometers.
          </p>
        </div>

        <div className="w-full md:hidden">
          <img
            className="w-[max(20rem,10rem)] max-h-[25rem] drop-shadow-lg shadow-2xl mx-auto z-10 translate-x-14 object-cover object-center"
            src="src/assets/barista2.jpg"
            alt="barista"
          />
          <span
            id="backdrop"
            className="bg-amber-500 bg-opacity-70 w-full h-[17rem] -mt-56 block -z-10 mx-auto sm:w-4/5 rounded-lg shadow-sm"
          ></span>
        </div>
        <div className="flex flex-col gap-y-2 pb-8 md:pb-0">
          <h2
            ref={viewRef2}
            className={`font-roboto text-3xl md:text-4xl text-light-coffee text-shadow ${
              isInView2 && "textAnimate"
            }`}
          >
            Taste That Inspires
          </h2>
          <p className="pt-4 leading-relaxed">
            Bounded sunrise auctioneers, bacillus persuade maiden onboard
            freezes occurred series cleansing written loan, nibble spell rater
            retrospection impressionist gipsy jeeps settler convoys, sinews
            place.
          </p>
        </div>
        <div
          ref={viewRef5}
          className={`hidden md:block ${isInView5 && "rotate-in"}`}
        >
          <img
            className="max-w-[24rem] h-[30rem] object-cover object-center translate-x-32 shadow-2xl drop-shadow-2xl"
            src="src\assets\barista2.jpg"
            alt="barista"
          />
          <span className="bg-amber-500 bg-opacity-70 w-full h-[20rem] -mt-72 block -z-10 mx-auto rounded shadow-sm"></span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-11/12 mx-auto gap-y-6 pb-10 md:max-w-[68rem]">
        <h2 className="capitalize font-roboto text-3xl text-center text-shadow text-light-coffee">
          our promise to you
        </h2>
        <p className="text-center md:w-2/3 leading-relaxed">
          Gratefulness taxes cliche, misses mentionable walled wakening cop
          indemnity posing includes offices lag, arrows weasels mindfully
          comprehension slumber sixpence ranges caters, semiconductors rump
          belted. Redeem bound arch shrubbery shoals soon synergistic, convoys
          reeled babies sixteenth. Regulators reticulating calculation
          overlooked, abating tendencies readability sketched cogent.
        </p>
        <video
          className="w-full rounded shadow-2xl drop-shadow-lg"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="src/assets/video.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>
  );
}

export default About;
