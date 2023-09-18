import React, {useContext} from 'react';
import { ContextApi } from '../utilities/Context';


const  CatHead = ()=>{

    const {progressWidth} = useContext(ContextApi)

    return(
        <>
            <div className="w-full bg-black">
                <diiv className=" py-5 flex-col h-[200px] flex justify-center items-center">
                     <h2 className="text-2xl font-black text-white "> PARTNERSHIP AGREEMENT</h2>
                <div className="w-[80%] cat_title_wrapper mx-auto flex-wrap flex justify-between items-center h-[100px]">
                    <h2 className="text-white mx-3 my-3 font-black">Partnership Details</h2>
                    <h2 className="text-white mx-3 my-3 font-black">Partners</h2>
                    <h2 className="text-white mx-3 my-3 font-black">Management </h2>
                    <h2 className="text-white mx-3 my-3 font-black">Accounting</h2>
                    <h2 className="text-white mx-3 my-3 font-black">Final Details</h2>
                    <h2 className="text-white mx-3 my-3 font-black">Print & Download</h2>
                </div>
                <div className="progress h-[10px] w-[80%] relative mx-auto bg-white">
                    <div style={{width:progressWidth}} className="progress_inner absolute left-0  h-[10px] top-0 bg-[#5f4efa]"></div>
                </div>
                </diiv>
             
              </div>
              </>
    )
}


export default CatHead;