



const T10Screen = ({fn10})=>{

  return(
      <>
        <div className="w-full h-[95%] flex-col flex justify-center items-center">
          <img src="screens/f31.png" alt="jobrebuilder" className="w-[90%] rounded-tl-full rounded-tr-full inner_frame z-[1] object-contain h-[90%] mx-auto"/>
          

           <button onClick={fn10} className="bg-black  text-white font-black text-center w-[285px] mx-auto py-3 mt-5 rounded-lg relative">Go Back
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


export default T10Screen;