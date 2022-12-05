import React from "react";

function About() {
  return (
    <section className="grid grid-cols-2 gap-10 w-screen py-[5.4rem] md:py-[5.2rem]">
      <div>
        <h2>Our Passion for Quality</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id
          dolorem earum aperiam natus. Laborum sit asperiores impedit voluptates
          at.
        </p>
      </div>
      <div>
        <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
      </div>
      <div>
        <h2>TITLE TWO HERE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id
          dolorem earum aperiam natus. Laborum sit asperiores impedit voluptates
          at.
        </p>
      </div>
      <div>
        <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
      </div>
      <div>
        <h2>TITLE THREE HERE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id
          dolorem earum aperiam natus. Laborum sit asperiores impedit voluptates
          at.
        </p>
      </div>
      <div>
        <img className="h-24 w-24" src="src/assets/pic.png" alt="barista" />
      </div>
    </section>
  );
}

export default About;
