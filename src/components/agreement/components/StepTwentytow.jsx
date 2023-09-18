import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const  StepTwentyTow = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [selectedState, setSelectedState] = useState('Alabama');
     const [yesCondition , setYes] = useState(false);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [myclass2 , setMyClass2] = useState('cborder');
     const [myclass3, setMyClass3] = useState('noneclass');
     const [myclass4, setMyClass4] = useState('noneclass');
     const [myclass5, setMyClass5] = useState('noneclass');
     const [s11, setS11] = useState('cborder')
     const [s112, setS112] = useState('noneclass')
     const [s113, setS113] = useState('noneclass');
     const [s114, setS114] = useState('cborder');
     const [s115, setS115] = useState('noneclass');
     const [s116, setS116] = useState('cborder');
     const [s117, setS117] = useState('noneclass');
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
  
     const s14 = ()=>{
        setS114('cborder');
        setS115('noneclass')
     }
   const s15 = ()=>{
    setS115('cborder');
    setS114('noneclass');
   }

   const s16 = ()=>{
        setS116('cborder');
        setS117('noneclass');
   }
   const s17 = ()=>{
    setS116('noneclass');
    setS117('cborder');
}
      const mclass = ()=>{
        setMyClass('cborder');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(false)
      }
      const mclass1 = ()=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('cborder');
        setYes(true)
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
                    <div className="step1_left w-[45%]">
                        <h2 className="text-3xl font-black">Representative Accountability</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>How will the partnership approve general decisions of the partnership representative?</h3>
                            
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                         <button onClick={s14} className={`flex ${s114} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el10.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">majority vote</span></button>
                           
                          
                         <button onClick={s15} className={`flex ${s115} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/el11.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">unanimous vote</span></button>
                         
                            </div>

                          
                                           
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                         <h3 className={`text-xl mb-5 font-black`}>How will the partnership approve tax settlements proposed by the partnership representative?</h3>
                            
                         <button onClick={s16} className={`flex ${s116} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/el10.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">majority vote</span></button>
                           
                          
                         <button onClick={s17} className={`flex ${s117} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/el11.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">unanimous vote</span></button>
                         
                            </div>

                         
                       
                          
                           
                           

                           
                          <div className="mt-10">
                          
                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={()=> setProgressWidth('60%')} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-18">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right w-[45%]">
                    {/* <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                              <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What are financial decisions?
                               </p>
                               
                              
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                                    Financial decisions include distribution of profits, allocation of losses, and other financial matters the partners have to decide on.   </div> : ''
                                                 
                                 }
                           </div> */}
                    </div>
            </div>
        </div>
        </>
    )
}

export default  StepTwentyTow;