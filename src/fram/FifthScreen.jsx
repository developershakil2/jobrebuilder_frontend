

import React, { useEffect } from "react";
import Typed from "typed.js";

const FifthScreen = ({fn5}) => {
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
          src="screens/fn11.png"
          alt="jobrebuilder"
          className=" w-full object-contain"
        />

        <div className="w-[285px] mx-auto px-2 mt-1   h-[20%] rounded-xl bg-[#EEEEEE] p-1">
        <div className="w-full flex justify-between items-center">
                <span className="text-sm font-black ">Co-Founder</span>
                <span className=" text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2"><img src="screens/up.png" alt="jobrebuilder" className="w-4 h-4"/></span></span>
            </div>
          <p className="element leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/fn12.png"
          alt="jobrebuilder"
          className=" w-full object-contain"
        />
      <div className="w-[285px] flex justify-between items-center mx-auto my-3 ">
       <h3 className="text-[#8489FC] w-[70%]">Must be in Tempe, Arizona</h3>

        <button onClick={fn5} className="bg-[#13B887] rounded-lg text-white w-[25%] py-3 px-4 relative">
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

<img
          src="screens/fn13.png"
          alt="jobrebuilder"
          className=" w-full object-contain"
        />
      </div>
    </>
  );
};

export default FifthScreen;
