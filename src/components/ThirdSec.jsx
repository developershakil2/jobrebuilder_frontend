



const ThirdSec = ()=> {


    return(
        <>
             <div className="w-full flex justify-center items-center relative -mt-[60px]  third_sec ">
                 <div className="handshake_wrap h-[371px] w-[305px] absolute left-0 top-[90px] z-10">
                    <img src="images/handsake.png" alt="handsake" className="w-full h-full" />
                 </div>

                 <div className="third_texts_content flex justify-center items-center flex-col w-full">
                    <h2 className="text-[59px] font-[700] leading-[80px] text-[#3D3A6D]">Partnership Agreement</h2>
                    <div className="third_text_content_inner w-[640px]">
                          <p className="font-[400] px-[20px] mb-[60px] mt-3 leading-[33.85px] text-[26px]">
                          Our customizable partnership agreement is drafted by multiple business partnership attorneys. It clearly outlines the terms, roles, and duties of each partner, and details on how to resolve future disputes in the best efficient way. 
                        Our affordable partnership agreement costs $40 
                        Try it before you buy it!
                          </p>

                          <div className="flex started_btn justify-center items-center">
                          <a href="/" className="rounded-xl text-white font-black px-[34px] py-[18px] bg-[#928CFF]">
                            Get Started
                          </a>
                          </div>
                    </div>

                 </div>
             </div>

             <div className="dashed_wrap relative mt-10 w-full h-[220px]">
                <div className="buisiness_plan flex justify-center items-center flex-col mt-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" >
                    <h2 className="text-[#1D81CE] font-[700] leading-[80px] text-[59px] mt-[45px]">Business Plan Guide</h2>

                    <button className="bg-[#1D81CE] rounded-xl px-[80px] py-[14px] text-[22px] font-[700] text-white">Download</button>
                </div>
                  <img src="images/dashed.png" alt="dashed" className="w-full dash_img h-[230px]"  />
                    <img src="images/pen.png" alt="pen" className="absolute pen left-6 -top-[20px] w-[260px] h-[260px]" />
             </div>
      
        </>
    )
}

export default ThirdSec;