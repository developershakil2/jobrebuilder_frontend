import React, { useEffect } from "react";
import Typed from "typed.js";

const FourScreen = ({st4}) => {
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
          src="screens/f5.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

        <div className="w-[285px] mx-auto px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between mb-1 items-center">
                <span className="text-xs ">Role Broken Down</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          <p className="element leading-[18px] text-sm"></p>
        </div>


        

        <img
          src="screens/f6.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />


<button  className="bg-[#f2efef] w-[285px] mx-auto relative rounded-2xl px-5 py-2">
   Save and Exit
  </button>
<button onClick={st4} className="bg-[#8489FC] mt-3 w-[285px] mx-auto relative rounded-2xl px-5 py-2 text-white font-black">Next
         
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

export default FourScreen;
