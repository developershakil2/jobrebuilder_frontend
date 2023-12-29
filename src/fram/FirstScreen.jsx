import React, { useEffect } from "react";
import Typed from "typed.js";

const FirstScreen = ({st1}) => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`I have been in management roles for about 15 years. I have managed a retail store, two restaurants, one coffee shop. 
      Very excited to take this big step in creating my own business, hoping to find enthusiastic people who wanna join me in this great venture.
      I’ve always been passionate about making the best juices/smoothies. 
      I’m very easy to work with and it’s important for me to find people who are easy to work with :)`],
      typeSpeed: 30,
    
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

        <div className="w-[285px] p-[11px] my-[10px] mx-auto  h-[40%] rounded-xl bg-[#eeeeee]">
          <p className="element leading-[18px] text-[13px]"></p>
        </div>

        <button onClick={st1} className="bg-[#8489FC] w-[285px] mx-auto relative rounded-2xl px-5 py-2 text-white font-black">Next
         
         <div className="absolute f1 top-[0%] border-[1px] border-[red] right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
        </button>
      </div>
    </>
  );
};

export default FirstScreen;
