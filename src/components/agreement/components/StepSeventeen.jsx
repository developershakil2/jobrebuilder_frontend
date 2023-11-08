import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const  StepSeventeen = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);


     const [s114, setS114] = useState('cborder');
     const [s115, setS115] = useState('noneclass');
    
   
  
     const s14 = (e)=>{
        setS114('cborder');
        setS115('noneclass');
        setVote(e.target.textContent)
     }
   const s15 = (e)=>{
    setS115('cborder');
    setS114('noneclass');
    setVote(e.target.textContent)

   }

    

  const [vote, setVote] = useState('majority vote')
  const form = JSON.parse(localStorage.getItem('fm'));

  const addFunc = ()=>{
    form.step17.vote = vote;

    localStorage.setItem("fm", JSON.stringify(form));
    setProgressWidth('83%')
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

    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left w-[45%]">
                        <h2 className="text-3xl font-black">Financial Decisions</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>What vote will be required to make financial decisions?</h3>
                            
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                         <button onClick={s14} className={`flex ${s114} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el10.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">majority vote</span></button>
                           
                          
                         <button onClick={s15} className={`flex ${s115} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/el11.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">unanimous vote</span></button>
               
                            
                      
      
                          
                         
                            </div>

                          
                         
                       
                          
                           
                           

                           
                          <div className="mt-10">
                          
                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-18">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right w-[45%]">
                    <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                              <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What are financial decisions?
                               </p>
                               
                              
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
     Financial decisions include distribution of profits, allocation of losses, and other financial matters the partners have to decide on.   </div> : ''
                                                 
                                 }
                           </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default  StepSeventeen;