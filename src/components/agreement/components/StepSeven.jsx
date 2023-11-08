import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepSeven = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
    

  

  const goBack = ()=>{

    window.history.back();
   
  }
 
   const form = JSON.parse(localStorage.getItem('fm'));
  const daedlineFunc = (e)=>{
       form.step7.deadline = e.target.value;

       localStorage.setItem('fm', JSON.stringify(form));
       setProgressWidth('35%')
  }


  
    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">Deadline for Initial Capital Contribution</h2>
                        <div classNmae="mt-8">
                            <h3 className="text-xl font-black">When are the initial capital contributions due?</h3>
                        </div>
                          <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      

   

                          <input onChange={daedlineFunc}  type="date" className="w-full outline-none border-b-[1px] cursor-pointer "/>




                          </div>

                         



                          <div className="mt-10">
                          
                          

                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={()=> setProgressWidth('25%')} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-8">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           {/* <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                               <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What are capital contributions?
                               </p>
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                                   Capital contributions include cash, equipment, knowledge, or services. Include quantities and amounts to provide an accurate description of each member's contributions.
                                    </div> : ''
                                 }
                           </div> */}
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepSeven;