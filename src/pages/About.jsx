import React from "react";
import PagesBanner from "../components/PagesBanner";

function About() {
  return (
    <>
      {/* <figure className="absolute bg-light-coffee w-full h-96 top-[125.5%] -z-10"></figure> */}
      <section className="w-full py-[5.4rem] md:py-[5.2rem]">
        <PagesBanner title="About Us" image="src/assets/aboutBanner.jpg" />
        <div className="w-11/12 py-40 flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-y-10 md:gap-y-60 gap-x-10  md:max-w-[68rem] mx-auto">
          <figure className="w-full md:hidden">
            <img
              className="w-[max(20rem,10rem)] drop-shadow-lg max-h-[25rem] shadow-2xl mx-auto z-10 translate-x-14 object-cover object-center"
              src="src/assets/barista.jpg"
              alt="barista"
            />
            <span className="bg-orange-600 bg-opacity-80 w-full h-[17rem] -mt-56 block -z-10 mx-auto sm:w-4/5 rounded-lg shadow-sm"></span>
          </figure>
          <div className="flex flex-col gap-y-2 pb-36 md:pb-0">
            <h2 className="font-roboto text-3xl md:text-4xl">
              Passion for Quality
            </h2>
            <p>
              Recompense theoretical memorize brands submarines, bootstrapped
              dulled balked spheres textually mouths unwanted specificity,
              overseeing reflection instantiations scorched count telling
              locators.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              className="max-w-[24rem] h-[30rem] object-cover object-center translate-x-28"
              src="src\assets\barista.jpg"
              alt="barista"
            />
            <span className="bg-orange-600 bg-opacity-80 w-full h-[20rem] -mt-72 block -z-10 mx-auto rounded shadow-sm"></span>
          </div>

          <figure className="w-full md:block">
            <img
              className="w-[max(20rem,10rem)] md:-translate-x-[4.5rem] drop-shadow-lg max-h-[25rem] md:max-w-[25rem] md:max-h-[28rem] shadow-2xl mx-auto z-10 -translate-x-14 object-cover object-center"
              src="src/assets/barista3.jpg"
              alt="barista"
            />
            <span className="bg-sky-600 w-full md:w-[31rem] bg-opacity-80 h-[17rem] md:h-[20rem] -mt-56 md:-mt-[18.6rem] block -z-10 mx-auto md:mx-0 sm:w-4/5 rounded shadow-sm"></span>
          </figure>
          <div className="flex flex-col gap-y-2 pb-36 md:pb-0">
            <h2 className="font-roboto text-3xl md:text-4xl">
              Commitment to Craft
            </h2>
            <p>
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
            <h2 className="font-roboto text-3xl md:text-4xl">
              Taste That Inspires
            </h2>
            <p>
              Bounded sunrise auctioneers, bacillus persuade maiden onboard
              freezes occurred series cleansing written loan, nibble spell rater
              retrospection impressionist gipsy jeeps settler convoys, sinews
              place.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              className="max-w-[24rem] h-[30rem] object-cover object-center translate-x-32"
              src="src\assets\barista2.jpg"
              alt="barista"
            />
            <span className="bg-amber-500 bg-opacity-70 w-full h-[20rem] -mt-72 block -z-10 mx-auto rounded shadow-sm"></span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-11/12 mx-auto gap-y-6 pb-10 md:max-w-[68rem]">
          <h2 className="capitalize font-roboto text-3xl text-center">
            our promise from kettle to cup
          </h2>
          <p className="text-center md:w-2/3">
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
      </section>
    </>
  );
}

export default About;
