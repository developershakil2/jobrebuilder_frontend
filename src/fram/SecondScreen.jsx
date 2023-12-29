import React , {useState} from "react";


const SecondScreen = ({st2})=>{


    const [close, setClose] = useState('none')

    const lastCall = ()=>{
      setClose('none')
      st2()
    }

    return(
        <>
          <div className="w-[325px] relative mx-auto flex justify-start items-center flex-col h-[100%]">
          
          
            <div style={{display:close}}  className=" absolute w-full h-full flex items-center justify-center top-0 left-0 z-10 bg-[#00000076]">
            <div className="w-[285px] h-[230px] p-1 my-3 rounded-md bg-[#fff]">
               <div className="w-full h-[30px] flex justify-between items-start">
                  <span className="text-xs text-[#888]">Description</span>
                  <button onClick={lastCall} className="outline-none border-none relative w-[30px] h-[30px]">
                  <div className="absolute f1 -top-[10px] border-[1px] border-[red] -right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              
              </div>
              </div>
            </div>
         </div>
         <span className="text-xl absolute -top-[0px] right-0 font-black rounded-full w-[20px] h-[20px] flex justify-center items-center border-[1px] border-[#888]"><span className=" text-[#888]">x</span></span>
                  </button>
               </div>
               <div className="w-full h-[1px] bg-white"></div>
               <div className="w-[285px] h-[230px] p-3">
                <ul>
                  <li>• What problem is your product/service solving?</li>
                  <li>• Describe the specific needs of your customer’s problem and how your product/service solves it.</li>
                </ul>
               </div>

            </div>
            </div>
          
            <img src="screens/f2.png" alt="jobrebuilder" className="w-[100%] z-[1] object-contain  mx-auto"/>
            <div className="w-[285px] h-[230px] p-3 my-3 rounded-md bg-[#eeeeee]">
               <div className="w-full h-[30px] flex justify-between items-start">
                  <span className="text-xs text-[#888]">Description</span>
                  <button onClick={()=>setClose('flex')} className="outline-none border-none relative w-[30px] h-[30px]">
                  <div className="absolute f1 -top-[10px] border-[1px] border-[red] -right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              
              </div>
              </div>
            </div>
         </div>
         <span className="text-xl absolute -top-[0px] right-0 font-black rounded-full w-[20px] h-[20px] flex justify-center items-center border-[1px] border-[#888]"><span className="-mt-2 text-[#888]">...</span></span>
                  </button>
               </div>
               <div className="w-full h-[1px] bg-white"></div>
               <div className="w-[285px] h-[230px]"></div>

            </div>





            <div className="w-[285px] h-[230px] p-3 my-3 rounded-md bg-[#eeeeee]">
               <div className="w-full h-[30px] flex justify-between items-start">
                  <span className="text-xs text-[#888]">Market Research</span>
                  <button  className="outline-none border-none relative w-[30px] h-[30px]">
      
                   <span className="text-xl absolute -top-[0px] right-0 font-black rounded-full w-[20px] h-[20px] flex justify-center items-center border-[1px] border-[#888]"><span className="-mt-2 text-[#888]">...</span></span>
                  </button>
               </div>
               <div className="w-full h-[1px] bg-white"></div>
               <div className="w-[285px] h-[230px]"></div>
            </div>


            <div className="w-[285px] h-[230px] p-3 my-3 rounded-md bg-[#eeeeee]">
               <div className="w-full h-[30px] flex justify-between items-start">
                  <span className="text-xs text-[#888]">Competition</span>
                  <button  className="outline-none border-none relative w-[30px] h-[30px]">
      
                   <span className="text-xl absolute -top-[0px] right-0 font-black rounded-full w-[20px] h-[20px] flex justify-center items-center border-[1px] border-[#888]"><span className="-mt-2 text-[#888]">...</span></span>
                  </button>
               </div>
               <div className="w-full h-[1px] bg-white"></div>
               <div className="w-[285px] h-[230px]"></div>

            </div>
            <div className="w-[285px] h-[230px] p-3 my-3 rounded-md bg-[#eeeeee]">
               <div className="w-full h-[30px] flex justify-between items-start">
                  <span className="text-xs text-[#888]">Additional Details</span>
                  <button  className="outline-none border-none relative w-[30px] h-[30px]">
      
                   <span className="text-xl absolute -top-[0px] right-0 font-black rounded-full w-[20px] h-[20px] flex justify-center items-center border-[1px] border-[#888]"><span className="-mt-2 text-[#888]">...</span></span>
                  </button>
               </div>
               <div className="w-full h-[1px] bg-white"></div>
               <div className="w-[285px] h-[230px]"></div>

            </div>
            <div className="w-[285px] h-[230px] p-3 my-3 rounded-md bg-[#eeeeee]">
               <div className="w-full h-[30px] flex justify-between items-start">
                  <span className="text-xs text-[#888]">Expenses</span>
                  <button  className="outline-none border-none relative w-[30px] h-[30px]">
      
                   <span className="text-xl absolute -top-[0px] right-0 font-black rounded-full w-[20px] h-[20px] flex justify-center items-center border-[1px] border-[#888]"><span className="-mt-2 text-[#888]">...</span></span>
                  </button>
               </div>
               <div className="w-full h-[1px] bg-white"></div>
               <div className="w-[285px] h-[230px]"></div>

            </div>
            <div className="w-[285px] h-[230px] p-3 my-3 rounded-md bg-[#eeeeee]">
               <div className="w-full h-[30px] flex justify-between items-start">
                  <span className="text-xs text-[#888]">Vision/Projections</span>
                  <button  className="outline-none border-none relative w-[30px] h-[30px]">
      
                   <span className="text-xl absolute -top-[0px] right-0 font-black rounded-full w-[20px] h-[20px] flex justify-center items-center border-[1px] border-[#888]"><span className="-mt-2 text-[#888]">...</span></span>
                  </button>
               </div>
               <div className="w-full h-[1px] bg-white"></div>
               <div className="w-[285px] h-[230px]"></div>

            </div>

            <img src="screens/f3.png" alt="jobrebuilder" className="w-[100%] z-[1] object-contain  mx-auto"/>

            
          </div>
        </>
    )
}


export default SecondScreen;