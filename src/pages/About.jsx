import React from "react";
import PagesHero from "../components/PagesHero";

function About() {
  return (
    <>
      {/* <figure className="absolute bg-light-coffee w-full h-96 top-[125.5%] -z-10"></figure> */}
      <section className="w-full py-[5.4rem] md:py-[5.2rem]">
        <PagesHero />
        <div className="w-11/12 py-48 flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-y-24 md:gap-y-96 gap-x-10 md:max-w-[68rem] mx-auto">
          <div className="block md:hidden">
            <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
          </div>
          <div className="flex flex-col gap-y-2 pb-12">
            <h2 className="font-roboto text-3xl md:text-4xl">
              Passion for Quality
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
          <div>
            <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
          </div>
          <div className="flex flex-col gap-y-2 pb-12">
            <h2 className="font-roboto text-3xl md:text-4xl">
              Commitment to Craft
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              id dolorem earum aperiam natus. Laborum sit asperiores impedit
              voluptates at.
            </p>
          </div>

          <div className="block md:hidden">
            <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
          </div>
          <div className="flex flex-col gap-y-2 pb-12">
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
          <video className="w-full" playsInline autoPlay muted loop>
            <source src="src/assets/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default About;
