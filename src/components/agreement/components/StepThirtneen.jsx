import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepThirteen = ()=>{
     const [tooltip , setToolTip] = useState(false);
     const {setProgressWidth} = useContext(ContextApi)
     const [s11, setS11] = useState('cborder')
     const [s112, setS112] = useState('noneclass')
     const [s113, setS113] = useState('noneclass')
   
     const s1 = (e)=>{
         setS11('cborder');
         setS112('noneclass');
         setS113('noneclass');
        setVote(e.target.textContent)

     }
     const s12 = (e)=>{
        setS11('noneclass');
        setS112('cborder');
        setS113('noneclass');
        setVote(e.target.textContent)

     }
     const s13 = (e)=>{
        setS11('noneclass');
        setS112('noneclass');
        setS113('cborder');
        setVote(e.target.textContent)
     }



   


    


     const enterHandler = ()=>{
         setToolTip(true)
     }
const leaveHandler = ()=>{
     setToolTip(false)
}
 

const  [vote , setVote] = useState('An equal vote for each partner');

const form = JSON.parse(localStorage.getItem('fm'));

const addFunc = ()=>{
  
  form.step13.voting = vote;

  localStorage.setItem('fm', JSON.stringify(form));
  setProgressWidth('62%')
}

const goBack = ()=>{
  window.history.back()
}




    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">Voting Requirements</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>How will partnership votes be determined?

                             </h3>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                            
                            </div>

                          
                         


                            <div className="condition_tbn mt-6 flex justify-between flex-col">
                            <button onClick={s1} className={`flex ${s11} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/equal.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">An equal vote for each partner</span></button>
                            <button onClick={s12} className={`flex ${s112} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/chart.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">In proportion to capital contributions</span></button>
                            <button onClick={s13} className={`flex ${s113} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/percentage.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">In proportion to profit share</span></button>
                          
                           </div>
                          <div className="mt-10">
                          
                          

                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-14">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           <div className="tool-tip relative" >
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
                           </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepThirteen;