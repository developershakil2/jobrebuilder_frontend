import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepNineteen = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
   
     const [s11, setS11] = useState('cborder')
     const [s112, setS112] = useState('noneclass')
     const [s113, setS113] = useState('noneclass')
   
     const s1 = (e)=>{
         setS11('cborder');
         setS112('noneclass');
         setS113('noneclass');
         setCompension(e.target.textContent)
     }
     const s12 = (e)=>{
        setS11('noneclass');
        setS112('cborder');
        setS113('noneclass');
        setCompension(e.target.textContent)
     }
     const s13 = (e)=>{
        setS11('noneclass');
        setS112('noneclass');
        setS113('cborder');
        setCompension(e.target.textContent)
     }



     const enterHandler = ()=>{
         setToolTip(true)
     }
const leaveHandler = ()=>{
     setToolTip(false)
}

  const goBack = ()=>{

    window.history.back();
  }
 
  const [compension, setCompension] = useState('Yes')
  const form = JSON.parse(localStorage.getItem("fm"))
      
   const addFunc = ()=>{
       form.step19.compension = compension;
  
       localStorage.setItem("fm", JSON.stringify(form));
       setProgressWidth('92%')
   }
  

    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left w-[50%]">

                                   {
                                        tooltip ?   <div className="tipAns absolute bg-white   w-[350px] shadow-xl p-8">
                                     Time and effort are non-monetary contributions given by a member, in lieu of cash equity. Put a value on this partner's time and effort spent in developing the business and provide details of the benefits to the partnership.
                                        </div> : ''
                                     }

                        <h2 className="text-3xl font-black">Partner Compensation</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black flex items-center`}>Will the partners be allowed to receive compensation for work they do for the partnership?
                           <img className="w-[25px] cursor-pointer h-[25px] ml-3" onMouseEnter={enterHandler} onMouseLeave={leaveHandler} src="images/question.png" alt="question"/>
                             </h3>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                            
                            </div>

                            <div className="condition_tbn mt-6 flex justify-between flex-col">
                            <button onClick={s1} className={`flex ${s11} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/ok.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Yes</span></button>
                            <button onClick={s12} className={`flex ${s112} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/no.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">No</span></button>
                            <button onClick={s13} className={`flex ${s113} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/beware.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Do not include in the contract</span></button>
                          
                           </div>
                          <div className="mt-10">
                          
                           
                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-20">Save And Continue </Link>
                             </div>
                              </div>
                    </div>


                    <div className="step2_right">
                           {/* <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                              <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">Why are there different voting requirements?
                               </p>
                               
                              
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[340px] w-[350px] shadow-xl p-8">
                           Some business decisions can substantially change the nature of your business, sometimes bringing unanticipated risk to your minority partners.
                           <br/>
                           
                            If applicable to your situation, protections for your minority partners can be included in your Partnership Agreement by requiring a unanimous vote on important decisions.
                            <br/>
                            Keep in mind that requiring unanimous consent also means that each of your partners can veto any decision.
                                    </div> : ''
                                 }

{  
                                 
                                 }
                           </div> */}
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepNineteen;