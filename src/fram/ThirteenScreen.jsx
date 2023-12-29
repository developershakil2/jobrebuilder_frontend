

const ThirteenScreen = ({st13}) => {


    return (
      <>
        <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
          <img
            src="screens/f22.png"
            alt="jobrebuilder"
            className="h-[30%] w-full object-contain"
          />
        
         
          <button onClick={st13} className="outline-none relative">
          <img
            src="screens/sp.png"
            alt="jobrebuilder"
            className="h-[30%] w-full object-contain"
          />

<div className="absolute f1 top-[20%] border-[1px] border-[red] left-[50%] w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
          </button>
          
  
          <img
            src="screens/f23.png"
            alt="jobrebuilder"
            className=" w-full object-contain"
          />
        </div>
      </>
    );
  };
  
  export default ThirteenScreen;
  