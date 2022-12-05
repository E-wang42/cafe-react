import React from "react";

const MenuCards = (props) => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <img src="src/assets/pic.png" alt="menuDrink" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-purple-500 inline-flex items-center">
                  Learn More
                  <span>➡</span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 flex-shrink-0">
                <img src="src/assets/pic.png" alt="menuDrink" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="mt-3 text-purple-500 inline-flex items-center">
                  Learn More
                  <span>➡</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>CARD TITLE</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            tenetur facere, in inventore fuga expedita.
          </p>
          <button>ORDER</button>
        </div>
      </div> */}
    </div>
  );
};

export default MenuCards;
