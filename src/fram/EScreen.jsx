

import React, { useEffect } from "react";
import Typed from "typed.js";

const EScreen = ({fn8}) => {
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
      <div className="screen_wrapper relative mx-auto flex-col flex justify-center mt-10 w-full">
      
      <div className="absolute h-full w-full bg-[#00000076] top-0 left-0 z-10 flex justify-center items-center">
              <div className="rounded-xl bg-[#fff] w-[90%] mx-auto p-5">
                    <h3 className="leading-[21px] font-black text-md text-center">
                    Congratulations! Your partnership is saved in the Records.
Make sure to document all contributions in the Records.
                    </h3>
                    <div className="btn_wrappr_mobile_screen w-full flex items-center justify-between  mt-9">
                      <button  className="py-3 px-5 rounded-lg bg-[#7B7B7B] text-[12px] w-[48%] text-white relative">Close
                
                      </button>
                      <button onClick={fn8} className="py-3 px-5 w-[48%] rounded-lg bg-[#8489FC] text-[12px] text-white relative">Records
                      <div className="absolute f1 top-0 border-[1px] border-[red] right-0 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
                      </button>
                    </div>
                </div>
           </div>
         
      
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
