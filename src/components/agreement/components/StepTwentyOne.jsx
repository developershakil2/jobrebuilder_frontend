import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepTwentyOne = ()=>{
    
     const {setProgressWidth} = useContext(ContextApi);
  

     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [tooltip2 , setToolTip2] = useState(false);
     const [yesCondition , setYes] = useState(false);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [myclass2 , setMyClass2] = useState('cborder');
   
     const [myclass4, setMyClass4] = useState('noneclass');
     const [myclass5, setMyClass5] = useState('noneclass');
  

     const [time, setTime] = useState(null);
     const [cash , setCash] = useState(null);
     const [equipment, setEquipment] = useState(null);
    
console.log(time, 'check status')
      const mclass = ()=>{
        setMyClass('cborder');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
          setMyClass2('noneclass');

      }
      const mclass1 = ()=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('cborder');
          setMyClass2('noneclass');
          setYes(false);

      }
      const mclass4 = ()=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("cborder");
        setMyClass1('noneclass');
        setMyClass2('noneclass');
        setYes(false);

      }
      const mclass5 = ()=>{
        setMyClass('noneclass');
        setMyClass2('noneclass');
        setMyClass5('cborder');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(true);
      }


     const mclass2 = ()=>{
        setMyClass2('cborder');
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(false);
     }
    

  const goBack = ()=>{

    window.history.back();
   
  }
  const timeHandler = (event)=>{
           setTime(event.target.checked);
  }
  const cashHandler = (event)=>{
    setCash(event.target.checked);
  }

  const equipHandler = (event)=>{
    setEquipment(event.target.checked)
  }

  const enterHandler2 = ()=>{
    setToolTip2(true);
  }
  const leaveHandler2 = ()=>{
    setToolTip2(false);
  }


  const enterHandler1 = ()=>{
    setToolTip1(true);
  }
  const leaveHandler1 = ()=>{
    setToolTip1(false);
  }
  const enterHandler = ()=>{
    setToolTip(true)
}
const leaveHandler = ()=>{
setToolTip(false)
}
    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">Partnership Representative</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>Who will be the partnership representative?</h3>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                          
                            <button onClick={mclass4} className={`flex ${myclass4} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}> <span className="ml-4 text-xl font-black">Partners #1</span></button>
                           
                            <button onClick={mclass2} className={`flex ${myclass2} items-center mt-4 w-full px-4 rounded-xl h-[50px] border-2`}> <span className="ml-4 text-xl font-black">Partners #2</span></button>
                            <button onClick={mclass5} className={`flex ${myclass5} items-center mt-5 w-full px-4 rounded-xl h-[50px] border-2`}> <span className="ml-4 text-xl font-black">Independent Professianal</span></button>
                            <button onClick={mclass1} className={`flex ${myclass1} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}> <span className="ml-4 text-xl font-black">Unsure/yet appointed</span></button>
                            </div>

                          
                         

                              {
                                yesCondition ?  <div className="condition_tbn mt-6 flex justify-between flex-col">
                              
                         
                               <div className="w-full p-10 shadow-xl rounded-xl">
                                    
                                    <div className="w-full mt-6">
                                    <div className="mt-2 w-full">
                                    <input className={`w-full border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Independent Professional PR:" type='text' />
                                    <span className="text-[#808080a8] text-sm">e.g. Tax attorney firm or accounting firm</span>
                                    </div>
                                          
                                    </div>
                               </div>

                               
                           </div>: ''
                              }
                          

                           
                          <div className="mt-10">
                          
                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={()=> setProgressWidth('43%')} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-22">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                              <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">Why do I need a Partnership Representative?
                               </p>
                               
                               <p onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">Why should I choose an Independent Professional?
                               </p>

                               <p onMouseEnter={enterHandler2} onMouseLeave={leaveHandler2}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What if the partnership does not appoint <br/> a Partnership Representative?
                               </p>
                                 {  
                                    tooltip ?   <div className="tipAns -left-10 absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                             If your partnership is not eligible to opt out (or chooses not to opt out) of the new tax audit rules introduced by the Federal Bipartisan Budget Act of 2015 ("the Act") then, at audit time, the IRS is entitled to treat the partnership as a single taxable entity and to deal with a single “Partnership Representative”.
The Partnership Representative is empowered to make all audit related decisions on behalf of the partnership in dealings with the IRS.
Individual partners no longer have statutory rights to be informed of dealings with the IRS – the concept of Notice Partner is eliminated.
Individual partners may no longer negotiate settlements with the IRS or make appeals against any settlement made between the IRS and the Partnership Representative.
It is therefore important that the role of the Partnership Representative and its accountability to the partners be clearly defined in your Partnership Agreement
                                    </div> : ''
                                 }

                                {  
                                    tooltip1 ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                              The Partnership Representative does not have to be one of the partners. Since the role has consequences for all partners, and the IRS is no longer obliged to notify partners individually, there could be problems in the event of unavailability or incapacity of the partner assigned the role of Partnership Representative. Some partnerships may choose to appoint a tax attorney or accounting firm to the role to ensure continuity and expertise. Note that any representative you choose must have a substantial presence in the United States.
                                    </div> : ''
                                 }

{  
                                    tooltip2 ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                            If the partnership does not designate a Partnership Representative, then, in the event of an audit, the Secretary of the Treasury (the IRS) may appoint ‘any person’ to perform the role of Partnership Representative.
                                    </div> : ''
                                 }
                           </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepTwentyOne;