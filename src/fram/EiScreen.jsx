

const SeScreen = ({st18})=>{

  return(
      <>
        <div className="screen_wrapper relative  mx-auto flex-col flex justify-center mt-10 w-full">
    
        <div className="absolute h-full w-full bg-[#00000076] top-0 left-0 z-10 flex justify-center items-center">
              <div className="rounded-xl bg-[#fff] w-[90%] mx-auto p-5">
                    <h3 className="leading-[21px] font-black text-md text-center">
                    Invitation has been sent! It’ll automatically be saved in the Records once it’s accepted.
                    </h3>
                    <div className="btn_wrappr_mobile_screen w-full flex items-center justify-between  mt-9">
                      <button  className="py-3 px-5 rounded-lg bg-[#7B7B7B] text-[12px] w-[48%] text-white relative">Close
                
                      </button>
                      <button onClick={st18} className="py-3 px-5 w-[48%] rounded-lg bg-[#8489FC] text-[12px] text-white relative">Records
                      <div className="absolute f1 top-0 border-[1px] border-[red] right-0 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>
                      </button>
                    </div>
                </div>
           </div>
         
          <img src="screens/f28.png" alt="jobrebuilder" className="w-[100%] h-[70%] inner_frame z-[1] object-contain  mx-auto"/>
          
           <button onClick={st18} className="w-[285px] mx-auto rounded-xl text-white py-3 bg-[#8489FC] relative">Send
           
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