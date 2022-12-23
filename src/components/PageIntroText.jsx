import React from "react";

const PageIntroText = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-sm text-black font-roboto border-bottom">
        {props.title}
      </h2>
      <p className="text-lg text-light-coffee text-shadow">{props.message}</p>
    </div>
  );
};

export default PageIntroText;
