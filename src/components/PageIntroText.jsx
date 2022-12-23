import React from "react";

const PageIntroText = (props) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[27rem] text-center mx-auto my-24">
      <h2 className="text-md text-stone-700 font-roboto border-bottom pb-[0.1rem] uppercase">
        {props.heading}
      </h2>
      <p className="text-4xl text-light-coffee text-shadow pt-4">
        {props.message}
      </p>
    </div>
  );
};

export default PageIntroText;
