import React from "react";
import PagesHero from "../components/PagesHero";

function About() {
  return (
    <>
      {/* <figure className="absolute bg-light-coffee w-full h-96 top-[125.5%] -z-10"></figure> */}
      <section className="w-full py-[5.4rem] md:py-[5.2rem]">
        <PagesHero />
        <div className="w-11/12 py-40 flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-y-10 md:gap-y-96 gap-x-10 md:max-w-[68rem] mx-auto">
          <figure className="w-full md:hidden">
            <img
              className="w-[max(20rem,10rem)] drop-shadow-lg max-h-[25rem] shadow-2xl mx-auto z-10 translate-x-14 object-cover object-center"
              src="src\assets\barista.png"
              alt="barista"
            />
            <span className="bg-orange-600 bg-opacity-80 w-full h-[17rem] -mt-56 block -z-10 mx-auto sm:w-4/5 rounded-lg shadow-sm"></span>
          </figure>
          <div className="flex flex-col gap-y-2 pb-36">
            <h2 className="font-roboto text-3xl md:text-4xl">
              Passion for Quality
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id dolorem earum aperiam natus. Laborum sit asperiores impedit
              voluptates at.
            </p>
          </div>

          <figure className="w-full md:block">
            <img
              className="w-[max(20rem,10rem)] drop-shadow-lg max-h-[25rem] shadow-2xl mx-auto z-10 -translate-x-14 object-cover object-center"
              src="src/assets/barista3.jpg"
              alt="barista"
            />
            <span className="bg-sky-600 w-full bg-opacity-80 h-[17rem] -mt-56 block -z-10 mx-auto sm:w-4/5 rounded-lg shadow-sm"></span>
          </figure>

          <div className="flex flex-col gap-y-2 pb-36">
            <h2 className="font-roboto text-3xl md:text-4xl">
              Commitment to Craft
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id dolorem earum aperiam natus. Laborum sit asperiores impedit
              voluptates at.
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
          <div className="flex flex-col gap-y-2 pb-8">
            <h2 className="font-roboto text-3xl md:text-4xl">
              Taste That Inspires
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id dolorem earum aperiam natus. Laborum sit asperiores impedit
              voluptates at.
            </p>
          </div>
          <div className="hidden md:block">
            <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
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
