import React from "react";

function HomeCards(props) {
  return (
    <div className="p-8 max-w-[32rem] bg-light-coffee flex-col flex gap-y-6 mb-16 md:mb-0">
      <div>
        <img
          className="w-full h-80 object-cover object-center"
          src={props.img}
          alt="homeCard"
        />
      </div>
      <div>
        <h2 className="font-roboto text-2xl uppercase">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div>
        <a href="#" className="yellowBtn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default HomeCards;
