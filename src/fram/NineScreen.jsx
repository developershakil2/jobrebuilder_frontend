import { useEffect } from "react";
import Typed from "typed.js";

const NineScreen = ({st9}) => {
  
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`Juice Truck in Arizona State University in the Tempe campus. Arizona is a warm place most of the year, people can use fresh healthy juices in a weather like that. ASU is one of the largest schools in the nation, nearly 80K students attend the Tempe campus. Offering fresh juices, smoothies, fruit bowls would be ideal in such a climate.
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
          src="screens/f14.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

      
<button onClick={st9} className="bg-[#8489FC] mt-3 w-full text-start  relative  px-5 py-2 text-white font-black flex justify-start items-center"><img className="mr-2 h-[20px] w-[20px]" src="screens/nav.png" alt="jobrebuilder"/> Overview
         
         <div className="absolute f1 top-[0%] border-[1px] border-[red] left-32 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
        </button>

      
        <div className="w-[285px] mx-auto px-2 mt-3  h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between mb-1 items-center">
                <span className="text-xs ">Description</span>
                <span className=""><span className="mb-2 font-black"><img className="w-[15px] h-[15px]" src="screens/up.png" alt='jobrebuilder'/></span></span>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
          <p className="element leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/f15.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />


      </div>
    </>
  );
};

export default NineScreen;
