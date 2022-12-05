import React from "react";
import PagesHero from "../components/PagesHero";

function About() {
  return (
    <section className="w-full py-[5.4rem] md:py-[5.2rem]">
      <PagesHero />
      <div className="grid grid-cols-2 gap-10 w-screen">
        <div>
          <h2>Passion for Quality</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id
            dolorem earum aperiam natus. Laborum sit asperiores impedit
            voluptates at.
          </p>
        </div>
        <div>
          <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
        </div>
        <div>
          <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
        </div>
        <div>
          <h2>Commitment to Craft</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id
            dolorem earum aperiam natus. Laborum sit asperiores impedit
            voluptates at.
          </p>
        </div>
        <div>
          <h2>Taste to Inspire</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id
            dolorem earum aperiam natus. Laborum sit asperiores impedit
            voluptates at.
          </p>
        </div>
        <div>
          <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
        </div>
      </div>
    </section>
  );
}

export default About;
