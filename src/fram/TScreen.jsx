



const TScreen = ({fn2})=>{

    return(
        <>
          <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
            <img src="screens/fn2.png" alt="jobrebuilder" className="w-[100%] inner_frame z-[1] object-contain h-[90%] mx-auto"/>
                <div className="w-full h-270px flex justify-between items-start">
                  <button onClick={fn2} className="w-[220px] outline-none relative pl-5 h-full">
                    <img src="screens/fn6.png" alt="jobrebuilder" />
                    <img src="screens/fn5.png" alt="jobrebuilder" />

                    <div className="absolute f1 top-[0%] border-[1px] border-[red] right-2 w-[40px] flex justify-center items-center h-[40px] rounded-full">
            <div className="w-[30px] f2 h-[30px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[20px] f3 h-[20px] rounded-full border-[1px] flex justify-center items-center border-[red] ">
              <div className="w-[10px] f4 h-[10px] rounded-full border-[1px] flex justify-center items-center border-[red] ">

              </div>
              </div>
            </div>
         </div>


                  </button>
                  <button className="w-[130px] outline-none relative  h-full">
                    <img src="screens/fn4.png" alt="jobrebuilder" />
                
                  </button>
                </div>
            <img src="screens/fn3.png" alt="jobrebuilder" className="w-[100%] inner_frame z-[1] object-contain h-[90%] mx-auto"/>
          </div>
        </>
    )
}


export default TScreen;