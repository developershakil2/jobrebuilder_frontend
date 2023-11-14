import React, { useEffect } from "react";
import Typed from "typed.js";

const EightScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`Goal is to find a partner by the end of this month.
      This milestone tasks:
      Post the business on Job Rebuilder.
      Chat with potential candidates.
      Discuss partnership terms with potential partner in person.
      Make the partnership agreement and sign it.Goal is to find a partner by the end of this month.
      This milestone tasks:
      Post the business on Job Rebuilder.
      Chat with potential candidates.
      Discuss partnership terms with potential partner in person.
      Make the partnership agreement and sign it.`],
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
          src="screens/s12.png"
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


      

   

        
       

        

        <img
          src="screens/s11.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default EightScreen;
