import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepThree = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [selectedState, setSelectedState] = useState('Alabama');
     const [yesCondition , setYes] = useState(true);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');


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

    window.history.back();
   
  }
    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">Partnership Business and Name</h2>
                        <div classNmae="mt-8">
                            <h3 className="text-xl font-black">What kind of professional service does the partnership offer?</h3>
                        </div>
                          <div className="mt-[30px] flex-col flex selectStateWrapper">

                            <input className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Business Description:" type='text' />
                                        <span className="text-[#808080a8] text-sm">e.g. Bookkeeping services</span>
                          </div>

                          <div className="mt-10">
                             <h4 className="text-2xl font-black ">Do you want to add the partnership's name now or write it later?</h4>
                             
                             <div className="mt-10">
                                 <button onClick={mclass} className={`flex my-4 items-center w-[280px] ${myclass} px-4 rounded-xl h-[50px] border-2`}><img src="images/ok.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">yes add now</span></button>
                                 <button onClick={mclass1} className={`flex ${myclass1} items-center w-[280px] px-4 rounded-xl h-[50px] border-2`}><img  src="images/no.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">No write it later</span></button>
                                 {
                                     yesCondition ?      <div className="mt-10 flex relative flex-col">
                                     {
                                        tooltip1 ?   <div className="tipAns absolute bg-white -top-[190px] w-[350px] shadow-xl p-8">
                                      It is recommended you carry out a business name search when choosing a name for your partnership to avoid confusion with any similarly named business in your industry.
                                        </div> : ''
                                     }
                                        <h4 className="flex ">What is the partnership's name? <img className="w-[25px] cursor-pointer h-[25px] ml-3" onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1} src="images/question.png" alt="question"/></h4>
                                        <input className={`w-[350px] border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Partnership Name:" type='text' />
                                        <span className="text-[#808080a8] text-sm">ee.g. Smith Jones & Associates</span>
                                     </div> : ''
                                 }
                            


                             </div>

                             <div className="my-[30px]">
                                 <Link  onClick={[goBack , setProgressWidth('10%')]} to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={()=> setProgressWidth('25%')} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-4">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           {/* <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                               <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What if the partnership is not yet registered?
                               </p>
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[100px] w-[350px] shadow-xl p-8">
                                    If your partnership's business is not yet registered, choose the state where you intend to register.
                                    </div> : ''
                                 }
                           </div> */}
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepThree;