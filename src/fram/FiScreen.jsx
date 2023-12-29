


const FiScreen = ({st15}) => {
  

  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
     <div className="relative">
     <img
          src="screens/f27.png"
          alt="jobrebuilder"
          className=" w-full object-contain"
        />
        <button onClick={st15} className="absolute  flex items-center w-[120px] h-[50px] p-2 rounded-xl bg-[#0A82D7]  top-[20%] right-3">
        <div className="absolute f1 top-[0%] border-[1px] border-[red] right-0 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
       <img src="screens/i7.png" alt="jobrebuilder"/><span className="leading-[16px] text-white"> Invite to partner up</span>
        </button>
     </div>

     

        <img
          src="screens/f26.png"
          alt="jobrebuilder"
          className="w-full object-contain"
        />
      </div>
    </>
  );
};

export default FiScreen;
