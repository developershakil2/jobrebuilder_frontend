import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepFive = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [selectedState, setSelectedState] = useState('Alabama');
     const [yesCondition , setYes] = useState(true);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
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
    setProgressWidth('25%')
    window.history.back();
   
  }
  const timeHandler = (event)=>{
           setTime(event.target.checked);
           if(event.target.checked == true){
            setV1(event.target.value)
           }
  }
  const cashHandler = (event)=>{
    setCash(event.target.checked);
    if(event.target.checked == true){
      setV2(event.target.value)
     }
  }

  const equipHandler = (event)=>{
    setEquipment(event.target.checked);
    if(event.target.checked == true){
      setV3(event.target.value)
     }
  }
const otherHandler = (event)=>{
    setOther(event.target.checked);
    if(event.target.checked == true){
      setV4(event.target.value)
     }
}
 
const [v1, setV1] = useState('');
const [v2, setV2] = useState('');
const [v3, setV3] = useState('');
const [v4, setV4] = useState('')


const [b1, setB1] = useState(0);
const [b2, setB2] = useState(0);
const [b3, setB3] = useState(0);
const [b4, setB4] = useState(0);

const [d1, setD1] = useState('');
const [d2, setD2] = useState('');
const [d3, setD3] = useState('');



   const form = JSON.parse(localStorage.getItem('fm'))
   const total = parseInt(b1) + parseInt(b2) + parseInt(b3) + parseInt(b4);


   const addFunc = ()=>{
       form.step5.time = v1+'_'+b1+"_"+d1;
       form.step5.cash = v2+'_'+b2;
       form.step5.equipment = v3+"_"+b3+"_"+d2;
       form.step5.others = v4+"_"+b4+"_"+d3;
       form.step5.value = total

       localStorage.setItem('fm', JSON.stringify(form))
   }
 


    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">First Partner's Capital Contributions</h2>
                        <div classNmae="mt-8">
                            <h3 className="text-xl font-black">What is this partner contributing to the partnership?</h3>
                        </div>
                          <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                          {
                                        tooltip1 ?   <div className="tipAns absolute bg-white -top-[220px] w-[350px] shadow-xl p-8">
                                     Time and effort are non-monetary contributions given by a member, in lieu of cash equity. Put a value on this partner's time and effort spent in developing the business and provide details of the benefits to the partnership.
                                        </div> : ''
                                     }

                            <div className="w-full flex items-center ">
                            <input value="Time & Effort" checked={time} onChange={timeHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Time and effort <img className="w-[25px] cursor-pointer h-[25px] ml-3" onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1} src="images/question.png" alt="question"/></h2>
                            </div>


                        <div style={{display:time? 'flex': 'none'}} className="check_wrapper flex-col my-4">
                        <h4>Describe how the time and effort will be spent:</h4>
                            <input onChange={(e)=> setD1(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`}  type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. Website design, creation and maintenance</span>
                         

                                        <input onChange={(e)=> setB1(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="$ Value" type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. $50,000</span>
                         
                        </div>




                        <div className="w-full my-4 flex items-center ">
                            <input checked={cash} onChange={cashHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Cash </h2>
                            </div>

                            <div style={{display:cash? 'flex': 'none'}} className="check_wrapper flex-col my-1">
                   

                   <input onChange={(e)=> setB2(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="$ Amount" type='text' />
                   <span className="text-[#808080a8] text-sm">e.g. $50,000</span>
    
                    </div>




                    <div className="w-full  flex items-center ">
                            <input checked={equipment} onChange={equipHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">equipment </h2>
                            </div>

                            <div style={{display:equipment? 'flex': 'none'}} className="check_wrapper flex-col my-4">
                        <h4>What equipment was contributed?
                                 </h4>
                            <input onChange={(e)=> setD2(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`}  type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. Computers, printers, telephones, and office desks</span>
                         

                                        <input onChange={(e)=> setB3(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="$ Value" type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. $50,000</span>
                         
                        </div>





                        <div className="w-full my-3 flex items-center ">
                            <input checked={other} onChange={otherHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Other </h2>
                            </div>

                            <div style={{display:other? 'flex': 'none'}} className="check_wrapper flex-col my-4">
                        <h4>What equipment was contributed?
                                 </h4>
                            <input onChange={(e)=> setD3(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`}  type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. Computers, printers, telephones, and office desks</span>
                         

                                        <input onChange={(e)=> setB4(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="$ Value" type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. $50,000</span>
                         
                        </div>


                          </div>

                         








                          <div className="mt-10">
                             <h4 className="text-2xl font-black ">Total Value of Contributions: ${total}
                              </h4>
                             
                          

                             <div className="my-[30px]">
                                 <Link  onClick={goBack} to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-6">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                               <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What are capital contributions?
                               </p>
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                                   Capital contributions include cash, equipment, knowledge, or services. Include quantities and amounts to provide an accurate description of each member's contributions.
                                    </div> : ''
                                 }
                           </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepFive;