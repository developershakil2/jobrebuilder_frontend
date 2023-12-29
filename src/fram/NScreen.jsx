

const NScreen = ({fn9})=>{

  return(
      <>
        <div className="screen_wrapper relative  mx-auto flex-col flex justify-center mt-10 w-full">
    
         
          <img src="screens/f29.png" alt="jobrebuilder" className="w-[100%] h-[70%] inner_frame z-[1] object-contain  mx-auto"/>
          
           <button onClick={fn9} className="w-[50%] ml-[20px] rounded-lg text-white py-2 bg-[#0A82D7] font-[600] relative">February 2024
           
           <div className="absolute f1 top-[0%] border-[1px] border-[red] right-0 w-[40px] flex justify-center items-center h-[40px] rounded-full">
          <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
            <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
            <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

            </div>
            </div>
          </div>
       </div>
           </button>

                   
          <img src="screens/f30.png" alt="jobrebuilder" className="w-[100%] h-[70%] inner_frame z-[1] object-contain  mx-auto"/>
          
        </div>
      </>
  )
}


export default NScreen;