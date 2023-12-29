

const FiveScreen = ({st5}) => {





  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/f7.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

     
       <div className="my-3 w-[285px] flex justify-between mx-auto items-center">
         <button className="w-[45%] py-2 rounded-xl text-white bg-[#8489FC]">Team Roles</button>
         <button onClick={st5} className="border-[1px] w-[50%] mx-auto relative rounded-2xl px-2 py-2 text-black ">Partnership Team
         
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
          src="screens/f8.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default FiveScreen;
