import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import fb from "../assets/socials/facebook.svg";
import ig from "../assets/socials/instagram.svg";
import tw from "../assets/socials/twitter.svg";
import yt from "../assets/socials/youtube.svg";

function Footer() {
  return (
    <footer className="text-gray-400 bg-dark-coffee body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:justify-between">
        <div className="w-60 flex flex-col flex-shrink-0 mx-auto md:mx-0 text-center md:mt-0 mt-10 md:flex-row">
          <Link className="mx-auto md:mx-0 mb-4 md:mb-0" to="/">
            <img
              className="rounded-full w-10 h-10 bg-light-coffee p-1 object-cover object-center text-center"
              src={logo}
              alt="logo"
            />
          </Link>
          <div className="flex flex-col w-48 mx-auto mb-4">
            <span className="text-xl font-cormorant font-bold">
              Panda Coffee House
            </span>
            <p className="mt-2 text-xs text-gray-500 mb-4">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
            <div className="flex flew-row mx-auto gap-x-4 justify-center items-center">
              <img
                className="w-5 h-5 white-filter hover:-translate-y-1 hover:transition-all cursor-pointer"
                src={tw}
                alt="twitter"
              />
              <img
                className="w-5 h-5 white-filter hover:-translate-y-1 hover:transition-all cursor-pointer"
                src={fb}
                alt="facebook"
              />
              <img
                className="w-5 h-5 white-filter hover:-translate-y-1 hover:transition-all cursor-pointer"
                src={ig}
                alt="instagram"
              />
              <img
                className="w-5 h-5 white-filter hover:-translate-y-1 hover:transition-all cursor-pointer"
                src={yt}
                alt="youtube"
              />
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              company
            </h2>
            <ul className="list-none mb-10">
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Our People
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Code of Ethics
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              shop
            </h2>
            <ul className="list-none mb-10">
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Whole Bean
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Panda Swag
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Current Offers
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
              find more
            </h2>
            <ul className="list-none mb-10">
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  Find Us
                </Link>
              </li>
              <li>
                <Link to="/404" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-stone-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            2022 Panda Productions LTD
          </p>
          <Link
            to="/404"
            className="text-gray-500 ml-1 md:ml-14 text-sm text-center"
            rel="noopener noreferrer"
          >
            Privacy Policy | Terms and Conditions | Cookie Policy
          </Link>
          <span
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start cursor-pointer"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8284 12.7071L16.2426 11.2929L12 7.05027L7.75739 11.2929L9.1716 12.7071L12 9.87869L14.8284 12.7071Z"
                fill="currentColor"
              />
              <path
                d="M14.8284 16.9497L16.2426 15.5355L12 11.2929L7.75739 15.5355L9.1716 16.9497L12 14.1213L14.8284 16.9497Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
