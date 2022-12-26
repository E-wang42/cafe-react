import React from "react";
import { Link } from "react-router-dom";

export const ThreeColumn = (props) => {
  return (
    <Link to={props.to} className="max-w-[21rem] mb-8">
      <figure className="w-full flex flex-col justify-center items-center">
        <img
          className="w-full object-cover object-center rounded-sm mb-6 ring-1 ring-dark-coffee"
          src={props.img}
          alt="captionImage"
        />
        <figcaption className="font-roboto text-xl uppercase text-dark-coffee">
          {props.caption}
        </figcaption>
        <p className="font-mono italic text-light-coffee">{props.para}</p>
      </figure>
    </Link>
  );
};
