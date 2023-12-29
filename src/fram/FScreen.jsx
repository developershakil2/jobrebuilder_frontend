

import React, { useEffect } from "react";
import Typed from "typed.js";

const FScreen = ({fn4}) => {
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
          src="screens/fn8.png"
          alt="jobrebuilder"
          className="w-full object-contain"
        />
        <div className="w-[285px] flex justify-between items-center mx-auto my-3 ">
        <img
          src="screens/fn9.png"
          alt="jobrebuilder"
          className=" w-[70%] object-contain"
        />

        <button onClick={fn4} className="bg-[#13B887] rounded-lg text-white w-[25%] py-3 px-4 relative">
          Apply

          <div className="absolute f1 top-[0%] border-[1px] border-[red] right-0 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
        </button>
        </div>
<button  className="bg-[#8489FC]  my-5 w-full text-start  relative  px-5 py-2 text-white font-black flex justify-start items-center"><img className="mr-2 h-[20px] w-[20px]" src="screens/nav.png" alt="jobrebuilder"/> Overview
    
         </button>
        <div className="w-[285px] mx-auto px-2 mt-1   h-[20%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-sm font-black ">Description</span>
                <span className=" text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2"><img src="screens/up.png" alt="jobrebuilder" className="w-4 h-4"/></span></span>
            </div>
          <p className="element leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/fn10.png"
          alt="jobrebuilder"
          className=" w-full object-contain"
        />
      </div>
    </>
  );
};

export default FScreen;
