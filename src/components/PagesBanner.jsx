import React from "react";

function PagesBanner(props) {
  return (
    <>
      <div className="w-full bg-hero-pattern h-[26rem]">
        <div className="w-11/12 mx-auto md:flex md:flex-row md:max-w-[68rem] md:justify-center md:items-center md:translate-y-12">
          <h2 className="text-6xl mb-2 md:text-8xl font-cormorant text-dark-coffee font-medium w-full pt-4 md:pt-0">
            {props.title}
          </h2>
          <div className="flex flex-col flex-shrink flex-wrap justify-between items-start">
            <p className="whitespace-pre-line leading-relaxed md:leading-7 md:mb-2 text-black font-roboto">
              Nibblers agreeing calcium interspersed muddles drowning sharp
              repudiation, fiddling axiomatization unfamiliarity poorer seems
              tarry underplayed mailbox.
            </p>
            <p className="text-sm md:text-base leading-relaxed md:leading-7 whitespace-pre-line md:mb-2 text-black font-roboto">
              crushing boisterously concretion arguing swish nineties browning,
              soiling dells. Unreasonable recovery concluded introductions
              bespeak personalize.
            </p>
            <p className="text-xs md:text-sm whitespace-pre text-black font-roboto">
              At tempore repudiandae sunt itaque sed impedit deserunt ullam
              laboriosam
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto md:max-w-[68rem] h-72 z-10 -mt-36">
        <img
          className="h-full w-full object-cover object-center rounded"
          src={props.image}
          alt="pagesheroimage"
        />
      </div>
    </>
  );
}

export default PagesBanner;
