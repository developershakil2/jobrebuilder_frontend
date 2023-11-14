


const FirstScreenPart = ({StartDemo, nextDemo})=>{

    return(
        <>
            <div id="first_inner" className="first_inner pb-5 relative mx-auto bg-[#8489FC]">
                    <div className="bg-[#fff] rounded-full w-[45px] flex items-center justify-center h-[45px]">
                      <img src="images/innericon1.png" alt="icons" className="w-[30px] bimg1 h-[30px]" />
                    </div>
                     <div className="inner_text_contents">
                     <h2 className="font-black text-white text-sm  mt-2">Find Business Partners</h2>
                     <p className="text-white leading-[15px] mb-4 font-[400] text-[12px]">- Break down your idea
                      <br/>
                      - Build a team 
                      <br/>
                    - Find business partners
                    <br/>
                    - Raise funds (coming soon)
                    <br/> - Hire an expert (coming soon)
                       </p>       
                       <div calssName="w-[100px] bottom-[10px] right-[10px] h-[100px] absolute">
                            <img src="images/innericons1.png"  alt="inner icon" className="w-[100px] bimg absolute bottom-[10px] right-[10px] h-[100px]"/>
                       </div>
                    <button onClick={StartDemo} className="text-[#8489FC] bg-white font-black py-2 px-8 rounded-xl" >Start</button>
                    <div className="mb-3"></div>
                     </div>
                </div>

                <div className="first_inner pb-5 shadow-xl mt-3 relative mx-auto bg-[#fff]">
                    <div className="bg-[#8489FC] rounded-full w-[45px] flex items-center justify-center h-[45px]">
                      <img src="images/innericon2.png" alt="icons" className="w-[30px] bimg1 h-[30px]" />
                    </div>
                     <div className="inner_text_contents">
                     <h2 className="font-black text-black text-sm  mt-2">Join a Business as a Partner</h2>
                     <p className="text-black leading-[15px] mb-4 font-[400] text-[12px]">
                     - Work for equity
                     <br/>
                    - Work as a freelancer  
                    <br/>
                       (Coming Soon)

                       </p>       
                       <div calssName="w-[100px] bottom-[10px] right-[10px] h-[100px] absolute">
                            <img src="images/innericons2.png"  alt="inner icon" className="w-[100px] bimg absolute bottom-[10px] right-[10px] h-[100px]"/>
                       </div>
                    <button onClick={nextDemo} className="text-[#fff] bg-[#8489FC] font-black py-2 px-8 rounded-xl" >Start</button>
                    <div className="mb-3"></div>
                     </div>
                </div>

                <div className="first_inner pb-5 shadow-xl mt-3 relative mx-auto bg-[#0A82D7]">
                    <div className="bg-[#fff] rounded-full w-[45px] flex items-center justify-center h-[45px]">
                      <img src="images/innericon3.png" alt="icons" className="w-[30px] bimg1 h-[30px]" />
                    </div>
                     <div className="inner_text_contents">
                     <h2 className="font-black text-white text-sm  mt-2">Invest</h2>
                     <p className="text-white leading-[15px] mb-4 font-[400] text-[12px]">
                     - Invest in innovative startups
                     <br/>
                     - Invest in early-stage ventures   
                     <br/>
                    - Support new businesses



                       </p>       
                       <div calssName="w-[100px]  bottom-[10px] right-[10px] h-[100px] absolute">
                            <img src="images/innericons3.png"  alt="inner icon" className="w-[100px] bimg absolute bottom-[10px] right-[10px] h-[100px]"/>
                       </div>
                    <button className="text-[#111] bg-[#fff] font-black py-2 px-3 text-sm rounded-xl flex justify-center items-center" ><img src="images/lock.png" alt="lock" className="lock_img w-[10px] h-[10px]"/>  Coming Soon</button>
                    <div className="mb-3"></div>
                     </div>
                </div>
        </>
    )
}


export default FirstScreenPart;