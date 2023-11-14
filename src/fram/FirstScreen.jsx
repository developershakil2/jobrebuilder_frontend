import React, { useEffect } from "react";
import Typed from "typed.js";

const FirstScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`I have been in management roles for about 15 years. I have managed a retail store, two restaurants, one coffee shop. 
      Very excited to take this big step in creating my own business, hoping to find enthusiastic people who wanna join me in this great venture.
      I’ve always been passionate about making the best juices/smoothies. 
      I’m very easy to work with and it’s important for me to find people who are easy to work with :)`],
      typeSpeed: 30,
      backSpeed: 40,
      loop:Infinity,
    });

    return () => {
      type.destroy();
    };
  }, []); 

  return (
    <>
      <div className="screen_wrapper mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/ff.png"
          alt="jobrebuilder"
          className="h-[50%] w-full object-contain"
        />

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#ffffff9f]">
          <p className="element leading-[18px] text-sm"></p>
        </div>

        <button className="bg-[#8489FC] w-full rounded-2xl px-5 py-2 text-white font-black">Next</button>
      </div>
    </>
  );
};

export default FirstScreen;
