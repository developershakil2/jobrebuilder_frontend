

import React, { useEffect } from "react";
import Typed from "typed.js";

const OScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`I have been in management roles for about 7 years. I have managed a chain restaurant and a bike rental shop. 
      I’m very adaptable, flexible. Hoping to find a great business to join and use my skills to grow.
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
          src="screens/1.png"
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
          src="screens/2.png"
          alt="jobrebuilder"
          className="h-[10%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default OScreen;
