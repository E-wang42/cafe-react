import React from "react";

function HomeCards(props) {
  return (
    <div className="h-96 w-96 bg-light-coffee flex-col ">
      <div>
        <img src={props.img} alt="homeCard" />
      </div>
      <div>
        <h2 className="text">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div>
        <a href="#" className="btn bg">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default HomeCards;
