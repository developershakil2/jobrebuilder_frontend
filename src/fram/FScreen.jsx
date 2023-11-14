

import React, { useEffect } from "react";
import Typed from "typed.js";

const FScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`Juice Truck in Arizona State University in the Tempe campus. Arizona is a warm place most of the year, people can use fresh healthy juices in a weather like that. ASU is one of the largest schools in the nation, nearly 80K students attend the Tempe campus. Offering fresh juices, smoothies, fruit bowls would be ideal in such a climate.Juice Truck in Arizona State University in the Tempe campus. Arizona is a warm place most of the year, people can use fresh healthy juices in a weather like that. ASU is one of the largest schools in the nation, nearly 80K students attend the Tempe campus. Offering fresh juices, smoothies, fruit bowls would be ideal in such a climate.`],
      typeSpeed: 30,
   
    });



    return () => {
      type.destroy();
   
    };
  }, []); 

  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/5.png"
          alt="jobrebuilder"
          className="h-[20%] w-full object-contain"
        />

        <div className="w-full px-2 mt-1   h-[20%] rounded-xl bg-[#EEEEEE] p-1">
            {/* <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Role Broken Down</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div> */}
          <p className="element leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/6.png"
          alt="jobrebuilder"
          className="h-[10%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default FScreen;
