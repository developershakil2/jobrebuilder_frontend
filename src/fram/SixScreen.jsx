import React, { useEffect, useState } from "react";
import Typed from "typed.js";

const SixScreen = ({st6}) => {
  const [dnone, setDnone] = useState('none');
  const [dnone1, setDnone1] = useState('flex')
  const startTyping = ()=>{
    setDnone('flex')
    setDnone1('none')
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
  }
  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/f9.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />
         <button onClick={startTyping} className="border-[1px] w-[90%]  bg-[#13B887] mx-auto relative rounded-2xl my-4 px-2 py-2 text-white ">Use our recommended terms
         <div style={{display:dnone1}} className="absolute f1 top-[0%] border-[1px] border-[red] right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
        </button>

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
          src="screens/f10.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

<button onClick={st6} className="bg-[#8489FC] mt-2 w-[285px] mx-auto relative rounded-2xl px-5 py-2 text-white font-black">Next
         
         <div style={{display:dnone}} className="absolute f1 top-[0%] border-[1px] border-[#0A82D7] right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[#0A82D7] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[#0A82D7] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[#0A82D7] ">

              </div>
              </div>
            </div>
         </div>
        </button>
      </div>
    </>
  );
};

export default SixScreen;
