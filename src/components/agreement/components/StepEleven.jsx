import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepEleven = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [selectedState, setSelectedState] = useState('Alabama');
     const [yesCondition , setYes] = useState(true);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [myclass2 , setMyClass2] = useState('cborder');
     const [myclass3, setMyClass3] = useState('noneclass');
     const [myclass4, setMyClass4] = useState('noneclass');
     const [myclass5, setMyClass5] = useState('noneclass');
     const [s11, setS11] = useState('cborder')
     const [s112, setS112] = useState('noneclass')
     const [s113, setS113] = useState('noneclass')
     const [voting, setVoting] = useState(true)
     const [time, setTime] = useState(null);
     const [cash , setCash] = useState(null);
     const [equipment, setEquipment] = useState(null);
     const [other, setOther] = useState(null);

     const s1 = ()=>{
         setS11('cborder');
         setS112('noneclass');
         setS113('noneclass');
     }
     const s12 = ()=>{
        setS11('noneclass');
        setS112('cborder');
        setS113('noneclass');
     }
     const s13 = ()=>{
        setS11('noneclass');
        setS112('noneclass');
        setS113('cborder');
     }



      const mclass = ()=>{
        setMyClass('cborder');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
      }
      const mclass1 = ()=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('cborder');
      }
      const mclass4 = ()=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("cborder");
        setMyClass1('noneclass');
      }
      const mclass5 = ()=>{
        setMyClass('noneclass');
        setMyClass5('cborder');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(false)
      }






     const mclass2 = ()=>{
        setMyClass2('cborder');
        setMyClass3("noneclass");
        setVoting(true);
     }
     const mclass3 = ()=>{
        setMyClass2('noneclass');
        setMyClass3("cborder");
        setVoting(false);
     }

    


     const enterHandler = ()=>{
         setToolTip(true)
     }
const leaveHandler = ()=>{
     setToolTip(false)
}
  const selectHandler = (event)=>{
    setSelectedState(event.target.value)
  }
  const enterHandler1 = ()=>{
    setToolTip1(true);
  }
  const leaveHandler1 = ()=>{
    setToolTip1(false);
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
const otherHandler = (event)=>{
    setOther(event.target.checked);
}


    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">Partner Meetings</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>When will regular meetings be held?
</h3>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                              {
                                       tooltip1 ?   <div className="tipAns absolute bg-white top-[30px] w-[350px] shadow-xl p-8">
                                      A special meeting, outside of the times the partners normally meet, may be needed from time to time to discuss urgent or important partnership business.
                                             </div> : ''
                              }
   
                            <button onClick={mclass} className={`flex my-4 items-center w-full ${myclass} px-4 rounded-xl h-[50px] border-2`}><img src="images/el1.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Only as required</span></button>
                            <button onClick={mclass1} className={`flex ${myclass1} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el2.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Weekly</span></button>
                            <button onClick={mclass4} className={`flex ${myclass4} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/el3.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Monthly</span></button>
                            <button onClick={mclass5} className={`flex ${myclass5} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el4.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Quarterly</span></button>
                          
                            <h2 className="ml-3 flex items-center mt-10 text-xl font-black ">Who can request a special meeting?  <img className="w-[25px] cursor-pointer h-[25px] ml-3" onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1} src="images/question.png" alt="question"/></h2>
                           
                            </div>

                          
                         


                            <div className="condition_tbn mt-6 flex justify-between flex-col">
                            <button onClick={s1} className={`flex ${s11} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/individual.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Any Partner</span></button>
                            <button onClick={s12} className={`flex ${s112} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/majority.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Majority of partners</span></button>
                            <button onClick={s13} className={`flex ${s113} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el7.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Do not specify</span></button>
                          
                           </div>
                          <div className="mt-10">
                          
                          

                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={()=> setProgressWidth('43%')} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-12">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           {/* <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                              <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">Why are there limits on partner withdrawal?
                               </p>
                               
                               <p onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What happens when the partnership dissolves?
                               </p>
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                               All partners are important to your partnership. The Partnership Agreement should include terms and conditions that protect your partnership from the unexpected withdrawal of a partner.
                                    </div> : ''
                                 }

{  
                                    tooltip1 ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                              On dissolution of your partnership, the affairs of the partnership must be wound up, assets liquidated, debts paid, and the surplus divided equally among your partners. If there are only two partners and one wants to leave then your partnership must dissolve.
                                    </div> : ''
                                 }
                           </div> */}
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepEleven;