import React, { useEffect } from "react";
import Typed from "typed.js";

const SevenScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`Partner is expected to contribute according to the the partnership agreement.`],
      typeSpeed: 30,
   
    });


    const type1 = new Typed('.element1', {
        strings:[`Partner will own their completed work in case of a disagreement.`]
        ,typeSpeed:30
    })
   
    const type2 = new Typed('.element2',{
        strings:[`Each task completed will be evaluated to the current market price to distribute equity in the future.`],

typeSpeed:30
    })


    const type3 = new Typed('.element3',{
        strings:[`All completed work must stay in the business as the first option in case of a disagreement. `],
        typeSpeed:30
    })

   const type4 = new Typed('.element4', {
    strings:[`If a partner decides to leave, they will be compensated for the work they completed according to their agreed cost.`],
    typeSpeed:35
   })

  const type5 = new Typed('.element5',{
    strings:[`Using Job Rebuilder as a mediator.Using Job Rebuilder as a mediator.`],
    typeSpeed:35
  })
 const type6 = new Typed('.element6',{
    strings:[`Partnership agreement must be discussed and signed by all partners.`],
    typeSpeed:30
 })

    return () => {
      type.destroy();
      type1.destroy();
      type2.destroy();
      type3.destroy();
      type4.destroy();
      type5.destroy();
      type6.destroy();
    };
  }, []); 

  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/s9.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Description</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element leading-[18px] text-sm"></p>
        </div>


        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Market Recharch</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element1 leading-[18px] text-sm"></p>
        </div>


        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Compitition</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element2 leading-[18px] text-sm"></p>
        </div>

        
        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Aditional Details</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element3 leading-[18px] text-sm"></p>
        </div>


        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Expenses</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element4 leading-[18px] text-sm"></p>
        </div>

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Total Budget</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element5 leading-[18px] text-sm"></p>
        </div>

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Vision Projection</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element6 leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/s10.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default SevenScreen;
