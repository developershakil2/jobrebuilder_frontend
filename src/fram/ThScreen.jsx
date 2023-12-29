

const ThScreen = ({fn3}) => {
  
 


  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/fn7.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

      
<button onClick={fn3} className="bg-[#8489FC] mt-3 w-[285px] mx-auto relative rounded-2xl px-5 py-2 text-white font-black">Overview
         
         <div className="absolute f1 top-[0%] border-[1px] border-[red] right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
        </button>

      

        <img
          src="screens/f13.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />


      </div>
    </>
  );
};

export default ThScreen;
