

import React, { useEffect } from "react";
import Typed from "typed.js";

const SevScreen = ({fn7}) => {
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
          src="screens/fn14.png"
          alt="jobrebuilder"
          className="h-[20%] w-full object-contain"
        />
         <div className="w-[285px] mx-auto px-2 mt-1   h-[20%] rounded-xl bg-[#EEEEEE] p-1">
         <div className="w-full flex justify-between items-center">
                <span className="text-md font-black ">Description</span>
                <span className=" text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2"></span></span>
            </div>
          <p className="element leading-[18px] text-sm"></p>
        </div>
 <img
          src="screens/fn15.png"
          alt="jobrebuilder"
          className="h-[20%] w-full object-contain"
        />
        <div className="w-[285px] mx-auto px-2 mt-1   h-[20%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-md font-black "> Partnership Details</span>
                <span className=" text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2"></span></span>
            </div>
          <p className="element1 leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/fn16.png"
          alt="jobrebuilder"
          className="h-[10%] w-full object-contain"
        />

<button onClick={fn7} className="bg-[#8489FC] w-[285px] mx-auto relative rounded-2xl px-5 py-2 text-white font-black">Start Partnership
         
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

export default SevScreen;
