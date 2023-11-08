import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const  StepTowel = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [yesCondition , setYes] = useState(false);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [myclass4, setMyClass4] = useState('noneclass');
     const [myclass5, setMyClass5] = useState('noneclass');
     const [s11, setS11] = useState('cborder')
     const [s112, setS112] = useState('noneclass')
     const [s113, setS113] = useState('noneclass');
     const [s114, setS114] = useState('cborder');
     const [s115, setS115] = useState('noneclass');
 
     const s1 = (e)=>{
         setS11('cborder');
         setS112('noneclass');
         setS113('noneclass');
         setMange(e.target.textContent)
     }
     const s12 = (e)=>{
        setS11('noneclass');
        setS112('cborder');
        setS113('noneclass');
        setMange(e.target.textContent)

     }
     const s13 = (e)=>{
        setS11('noneclass');
        setS112('noneclass');
        setS113('cborder');
        setMange(e.target.textContent)

     }
  

  const s14 = (e)=>{
        setS114('cborder');
        setS115('noneclass');
        setManaging(e.target.textContent)
     }
   const s15 = (e)=>{
    setS115('cborder');
    setS114('noneclass');
    setManaging(e.target.textContent)

   }

      const mclass = (e)=>{
        setMyClass('cborder');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(false);
        setAllPartners(e.target.textContent)
      }
      const mclass1 = (e)=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('cborder');
        setYes(true);
        setAllPartners(e.target.textContent)

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

  const [allPartenrs , setAllPartners] = useState('all Partner participate');
  const [manage, setMange] = useState('Partner #1');
  const [managing, setManaging] = useState('Unanimous vote of remaining partners')

  const form = JSON.parse(localStorage.getItem('fm'));
                                                            
const  addFunc = ()=>{
  form.step12.allpartners = allPartenrs;
  form.step12.manage = manage;
  form.step12.managing = managing;


     localStorage.setItem("fm", JSON.stringify(form));
     setProgressWidth('55%')
 
}

    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left w-[45%]">
                        <h2 className="text-3xl font-black">Management</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>Who will be responsible for the day-to-day management of your partnership?</h3>
                          <span className="italic text-sm">Major issues will still be determined with a vote of the partners.</span>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                            
   
                            <button onClick={mclass} className={`flex my-4 items-center w-full ${myclass} px-4 rounded-xl h-[50px] border-2`}><img src="images/el8.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">All partner participate</span></button>
                            <button onClick={mclass1} className={`flex ${myclass1} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el9.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Managing partner</span></button>
   
                          
                         
                            </div>

                          
                         
                         {
                            yesCondition ? <div className="condition_tbn mt-6 flex justify-between flex-col">
                          <h2 className="my-6 text-xl font-black">Who will be the managing partner?
                                              </h2>
                            <button onClick={s1} className={`flex ${s11} items-center w-full px-4 rounded-xl h-[50px] border-2`}> <span className="ml-4 text-xl font-black">Partner #1</span></button>
                            <button onClick={s12} className={`flex ${s112} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}> <span className="ml-4 text-xl font-black">Partner 2#</span></button>
                            <button onClick={s13} className={`flex ${s113} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><span className="ml-4 text-xl font-black">Decide on a later date</span></button>
                
                           <h2 className="my-6 text-xl font-black">Who will be the managing partner?</h2>
                            <button onClick={s14} className={`flex ${s114} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el10.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Unanimous vote of remaining partners</span></button>
                            <button onClick={s15} className={`flex ${s115} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/el11.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Majority vote of remaining partners</span></button>
               
                          
                           </div>:''
                         }

                           
                          <div className="mt-10">
                          
                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-13">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right w-[45%]">
                           <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                              <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What is a managing partner?
                               </p>
                               
                             
                              
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                         A managing partner will have an ownership interest in your partnership and is also responsible for overall management and day-to-day operations.
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

export default  StepTowel;