import React from "react";

function PagesHero(props) {
  return (
    <>
      <div className="w-full bg-hero-pattern h-[26rem]">
        <div className="w-11/12 mx-auto md:flex md:flex-row md:max-w-[68rem] md:justify-between md:items-center md:translate-y-10">
          <h2 className="text-6xl font-roboto text-dark-coffee font-medium">
            {props.title}
          </h2>
          <div className="flex flex-col flex-shrink flex-wrap justify-between items-start">
            <p id="para" className="whitespace-pre-line md:mb-2">
              Nibblers agreeing calcium interspersed muddles drowning sharp
              repudiation, fiddling axiomatization unfamiliarity poorer seems
              tarry underplayed mailbox.
            </p>
            <p id="para" className="whitespace-pre-line md:mb-2">
              crushing boisterously concretion arguing swish nineties browning,
              soiling dells. Unreasonable recovery concluded introductions
              bespeak personalize.
            </p>
            <p id="para" className="text-sm whitespace-pre">
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

export default PagesHero;
