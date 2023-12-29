

import React, { useEffect } from "react";
import Typed from "typed.js";

const OScreen = ({fn1}) => {
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
          src="screens/fn1.png"
          alt="jobrebuilder"
          className=" w-full object-contain"
        />

        <div className="w-[285px] mx-auto px-2 mt-1   h-[20%] rounded-xl bg-[#EEEEEE] p-1">
            {/* <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Role Broken Down</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div> */}
          <p className="element leading-[18px] text-sm"></p>
        </div>


      

   

        
       

    

<button onClick={fn1} className="bg-[#8489FC] mt-3 w-[285px] mx-auto relative rounded-2xl px-5 py-2 text-white font-black">Next
         
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

export default OScreen;
