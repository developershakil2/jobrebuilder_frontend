

import React, { useEffect } from "react";
import Typed from "typed.js";

const EScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`Expecting to share vision, work hours, initial expenses with Co-Founder.
      Expected work: helping out in general aspects of the business, such as finding a truck, equipment, remodeling the truck, stocking up fruit/vegetable.
      All work will be divided between myself and you.
      `],
      typeSpeed: 30,
   
    });

    const type1 = new Typed('.element1', {
        strings: [`Jesse and I (Mark) Have met on Saturday and discussed about the business aspects. We met on Monday and worked on the partnership agreement details.
        `],
        typeSpeed: 30,
     
    })



    return () => {
      type.destroy();
      type1.destroy();
   
    };
  }, []); 

  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/11.png"
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
          src="screens/12.png"
          alt="jobrebuilder"
          className="h-[20%] w-full object-contain"
        />
        <div className="w-full px-2 mt-1   h-[20%] rounded-xl bg-[#EEEEEE] p-1">
            {/* <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Role Broken Down</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div> */}
          <p className="element1 leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/13.png"
          alt="jobrebuilder"
          className="h-[10%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default EScreen;
