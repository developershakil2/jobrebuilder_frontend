

const FourteenScreen = ({st14}) => {





  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/f24.png"
          alt="jobrebuilder"
          className="w-full object-contain"
        />

     
       <div className="my-3 w-[285px] flex justify-between mx-auto items-center">
         <button className="w-[45%] flex justify-center items-center py-2 rounded-xl text-black bg-[#F0F0F0]"><img className=" w-5 h-5" src="screens/i4.png" alt="jobrebuilder"/> <span className="ml-2 text-[12px]">Chats</span></button>
         <button onClick={st14} className="border-[1px] flex justify-center items-center w-[50%] mx-auto bg-[#F0F0F0] relative rounded-2xl px-2 py-2 text-black "><img className=" w-5 h-5" src="screens/i6.png" alt="jobrebuilder"/> <span className="ml-2 text-[12px]">Partnership Team</span>
         
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


        

        <img
          src="screens/f25.png"
          alt="jobrebuilder"
          className="w-full object-contain"
        />
      </div>
    </>
  );
};

export default FourteenScreen;
