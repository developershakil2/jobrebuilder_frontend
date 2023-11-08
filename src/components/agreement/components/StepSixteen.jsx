import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';


const StepSixteen = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [selectedState, setSelectedState] = useState('Alabama');
     const [yesCondition , setYes] = useState(true);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [time, setTime] = useState(null);
     const [cash , setCash] = useState(null);
     const [cash1 , setCash1] = useState(null);
     const [cash2 , setCash2] = useState(null);
     const [cash3 , setCash3] = useState(null);
     const [cash4 , setCash4] = useState(null);
     const [equipment, setEquipment] = useState(null);
     const [other, setOther] = useState(null);
console.log(time, 'check status')
 
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
           setV1(event.target.value)
  }
  const cashHandler = (event)=>{
    setCash(event.target.checked);
    setV2(event.target.value)

  }
  const cashHandler1 = (event)=>{
    setCash1(event.target.checked);
    setV3(event.target.value)

  }
  const cashHandler2 = (event)=>{
    setCash2(event.target.checked);
    setV4(event.target.value)

  }
  const cashHandler3 = (event)=>{
    setCash3(event.target.checked);
    setV5(event.target.value)

  }

  const cashHandler4 = (event)=>{
    setCash4(event.target.checked);
    setV6(event.target.value)

  }
  const equipHandler = (event)=>{
    setEquipment(event.target.checked)
    setV7(event.target.value)

  }
const otherHandler = (event)=>{
    setOther(event.target.checked);
    setV8(event.target.value)

}

const [v1, setV1] = useState(null);
const [v2, setV2] = useState(null);
const [v3, setV3] = useState(null);
const [v4, setV4] = useState(null);
const [v5, setV5] = useState(null);
const [v6, setV6] = useState(null);
const [v7, setV7] = useState(null);
const [v8, setV8] = useState(null);

const [va, setVa] = useState("");
const [va2, setVa2] = useState('')
const [va3, setVa3] = useState('');
const [va4, setVa4] = useState('')

const form = JSON.parse(localStorage.getItem('fm'));




const addFunc = ()=>{
   
  form.step16.v1 = v1+"_"+va;
  form.step16.v2 = v2+"_"+va2;
  form.step16.v3 = v3;
  form.step16.v4 = v4;
  form.step16.v5 = v5+"_"+va3;
  form.step16.v6 = v6;
  form.step16.v7 = v7+"_"+va4;
  form.step16.v8 = v8;

    localStorage.setItem("fm",JSON.stringify(form));
    setProgressWidth('78%')
  
 }


    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">Unanimous Consent</h2>
                        <div classNmae="mt-8">
                            <h3 className="text-xl font-black">Which decisions will require the consent of all partners?</h3>
                        </div>
                          <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      

                            <div className="w-full flex items-center ">
                            <input  value="Assuming new debts over a certain amount" checked={time} onChange={timeHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Assuming new debts over a certain amount.</h2>
                            </div>


                        <div style={{display:time? 'flex': 'none'}} className="check_wrapper flex-col my-4">


                                        <input onChange={(e)=> setVa(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Single liability expense limit:" type='Number' />
                                        <span className="text-[#808080a8] text-sm">e.g. $25,000</span>
                         
                        </div>




                        <div className="w-full my-4 flex items-center ">
                            <input value='Assuming new expenses over a certain amount.' checked={cash} onChange={cashHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Assuming new expenses over a certain amount. </h2>
                            </div>

                            <div style={{display:cash? 'flex': 'none'}} className="check_wrapper flex-col my-1">
                   

                            <input onChange={(e)=> setVa2(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Single transaction expense limit:" type='text' />
                            <span className="text-[#808080a8] text-sm">e.g. $25,000</span>
                
                    </div>



                    <div className="w-full  flex items-center ">
                            <input value="Decisions affecting the unusual use or lending of partnership equipment" checked={cash1} onChange={cashHandler1} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Decisions affecting the unusual use or lending of partnership equipment. </h2>
                    </div>
                    <div className="w-full my-3 flex items-center ">
                            <input value="Assigning company check signatories" checked={cash2} onChange={cashHandler2} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Assigning company check signatories</h2>
                    </div>

                            {/* <div style={{display:cash1? 'flex': 'none'}} className="check_wrapper flex-col my-1">
                   

                            <input className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Single transaction expense limit:" type='text' />
                            <span className="text-[#808080a8] text-sm">e.g. $25,000</span>
                
                    </div> */}



                    <div className="w-full  flex items-center ">
                            <input value="Selling a partnership asset over a certain value." checked={equipment} onChange={equipHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Selling a partnership asset over a certain value. </h2>
                            </div>

                            <div style={{display:equipment? 'flex': 'none'}} className="check_wrapper flex-col my-4">
                   
                       

                                        <input onChange={(e)=> setVa3(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="$ Fair market value limit" type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. $25,000</span>
                         
                        </div>



                        <div className="w-full my-3 flex items-center ">
                            <input value="Assigning company check signatories" checked={cash3} onChange={cashHandler3} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Assigning company check signatories</h2>
                    </div>






                        <div className="w-full my-3 flex items-center ">
                            <input value="Hiring new employees where salary is over a certain amount." checked={other} onChange={otherHandler} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Hiring new employees where salary is over a certain amount. </h2>
                            </div>

                            <div style={{display:other? 'flex': 'none'}} className="check_wrapper flex-col my-4">
                                        <input onChange={(e)=> setVa4(e.target.value)} className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="$ Annual salary limit:" type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. $25,000</span>
                         
                        </div>



                        <div className="w-full my-3 flex items-center ">
                                   <input value="Firing employees" checked={cash4} onChange={cashHandler4} type="checkbox" className="w-[20px] h-[20px]"/> <h2 className="ml-3 flex items-center ">Firing employees</h2>
                        </div>
                        </div>
                      <div className="mt-10">
                          
                            <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={()=>addFunc()} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-17">Save And Continue </Link>
                             </div>
                        </div>
                    </div>


                    <div className="step2_right">
                           <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                               <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">Why require unanimous consent?
                               </p>

                               <p onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What is meant by 'releasing partnership claims'?
                               </p>
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                                   Some types of business decisions involve significant new risk. To protect the interests of all partners, some of your business decisions should require the consent of all partners.
                                    </div> : ''
                                 }

                                 {
                                      tooltip1 ?   <div className="tipAns absolute bg-white -top-[140px] w-[350px] shadow-xl p-8">
                                    Sometimes it becomes apparent that money owed to your partnership will never be collected in full. But, a waiver or release of any significant debt owed to your partnership should be agreed to by all partners.
                                                   </div> : ''
                                 }
                           </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepSixteen;