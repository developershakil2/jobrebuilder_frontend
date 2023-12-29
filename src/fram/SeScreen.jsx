

const SeScreen = ({st17})=>{

  return(
      <>
        <div className="screen_wrapper relative  mx-auto flex-col flex justify-center mt-10 w-full">
    
         
          <img src="screens/f28.png" alt="jobrebuilder" className="w-[100%] h-[70%] inner_frame z-[1] object-contain  mx-auto"/>
          
           <button onClick={st17} className="w-[285px] mx-auto rounded-xl text-white py-3 bg-[#8489FC] relative">Send
           
           <div className="absolute f1 top-[0%] border-[1px] border-[red] right-0 w-[40px] flex justify-center items-center h-[40px] rounded-full">
          <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
            <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
            <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

            </div>
            </div>
          </div>
       </div>
           </button>
        </div>
      </>
  )
}


export default SeScreen;