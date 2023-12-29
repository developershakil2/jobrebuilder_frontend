

const TwelScreen = ({st12}) => {


  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/f20.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

        <img
          src="screens/f21.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />


        <div className="bg-[#D9D9D9] mt-2 rounded-2xl py-1 px-1 flex justify-between items-center">
            <div className="w-[50px] flex-col h-[50px] flex justify-center items-center">
              <img src="screens/i1.png" alt="jobrebuilder" className="w-[20px] h-[20px]"/>
              <span className="text-[12px]">Business</span>
            </div>

            <button onClick={st12} className="w-[50px] relative flex-col h-[50px] flex justify-center items-center">
              <img src="screens/i2.png" alt="jobrebuilder" className="w-[20px] h-[20px]"/>
              <span className="text-[12px]">Find</span>
              <div className="absolute f1 top-[0%] border-[1px] border-[red] right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
            </button>


            <div className="w-[50px] flex-col h-[50px] flex justify-center items-center">
              <img src="screens/i3.png" alt="jobrebuilder" className="w-[20px] h-[20px]"/>
              <span className="text-[12px]">Explore</span>
            </div>

            <div className="w-[50px] flex-col h-[50px] flex justify-center items-center">
              <img src="screens/i4.png" alt="jobrebuilder" className="w-[20px] h-[20px]"/>
              <span className="text-[12px]">Chats</span>
            </div>
            <div className="w-[50px] flex-col h-[50px] flex justify-center items-center">
              <img src="screens/i5.png" alt="jobrebuilder" className="w-[20px] h-[20px]"/>
              <span className="text-[12px]">Profile</span>
            </div>

        </div>
      </div>
    </>
  );
};

export default TwelScreen;
