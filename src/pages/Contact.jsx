import React from "react";
import PagesHero from "../components/PagesHero";

function Contact() {
  return (
    <section className="text-gray-400 bg-pastel-coffee body-font relative py-[5.4rem] md:py-[5.2rem]">
      <PagesHero />
      <div className="w-11/12 md:max-w-[68rem] px-5 md:px-0 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-light-coffee rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* -- insert maps here -- */}
          <div className="bg-dark-coffee relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-pink-400 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-black font-roboto text-2xl mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-black">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-dark-coffee rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-dark-coffee rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-dark-coffee rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="yellowBtn text-xl">BUTTON</button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
