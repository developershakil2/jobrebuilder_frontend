import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepEight = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [selectedState, setSelectedState] = useState('Alabama');
     const [yesCondition , setYes] = useState(true);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [myclass2 , setMyClass2] = useState('cborder');
     const [myclass3, setMyClass3] = useState('noneclass');
     const [voting, setVoting] = useState(true)
     const [time, setTime] = useState(null);
     const [cash , setCash] = useState(null);
     const [equipment, setEquipment] = useState(null);
     const [other, setOther] = useState(null);
console.log(time, 'check status')
      const mclass = ()=>{
        setMyClass('cborder');
        setMyClass1("noneclass");
        setYes(true)
      }
      const mclass1 = ()=>{
        setMyClass('noneclass');
        setMyClass1('cborder');
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
                        <h2 className="text-3xl font-black">New Partners</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>Will the partnership allow new partners to join in the future?</h3>
                        </div> 
                           <div className="condition_tbn mt-6 flex justify-around">
                            <button onClick={mclass2} className={`w-[45%] ${myclass2} shadow-xl font-black h-[39px] rounded-xl outline-none`}>Yes</button>
                            <button onClick={mclass3} className={`w-[45%] ${myclass3} shadow-xl font-black h-[39px] rounded-xl outline-none`}>No</button>
                           </div>
                        
                        {
                            voting ? <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                              
   
                            <button onClick={mclass} className={`flex my-4 items-center w-full ${myclass} px-4 rounded-xl h-[50px] border-2`}><img src="images/vote.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Unanimous vote</span></button>
              <button onClick={mclass1} className={`flex ${myclass1} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/majority.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">majority vote</span></button>
  
  
                            </div>
: ''  
                        }
                          
                         



                          <div className="mt-10">
                          
                          

                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={()=> setProgressWidth('25%')} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-9">Save And Continue </Link>
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

export default StepEight;