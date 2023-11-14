import React, { useEffect } from "react";
import Typed from "typed.js";

const FiveScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`Expecting to share vision, work hours, initial expenses with Co-Founder.
      Expected work: helping out in general aspects of the business, such as finding a truck, equipment, remodeling the truck, stocking up fruit/vegetable.
      All work will be divided between myself and you.
      `],
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
          src="screens/s6.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Role Broken Down</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element leading-[18px] text-sm"></p>
        </div>


      

   

        
       

        

        <img
          src="screens/s7.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default FiveScreen;
