import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepNine = ()=>{
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
     const [voting, setVoting] = useState(true)
     const [time, setTime] = useState(null);
   

    const [month, setMonth] = useState('Three Months');
    const [condition,setCondition] = useState('Yes');



      const mclass = (e)=>{
        setMyClass('cborder');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setMonth(e.target.textContent)
      }
      const mclass1 = (e)=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('cborder');
        setMonth(e.target.textContent)
      }
      const mclass4 = (e)=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("cborder");
        setMyClass1('noneclass');
        setMonth(e.target.textContent)
      }
      const mclass5 = (e)=>{
        setMyClass('noneclass');
        setMyClass5('cborder');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(false)
        setMonth(e.target.textContent)
      }






     const mclass2 = (e)=>{
        setMyClass2('cborder');
        setMyClass3("noneclass");
        setVoting(true);
        setCondition(e.target.textContent)


     }
     const mclass3 = (e)=>{
        setMyClass2('noneclass');
        setMyClass3("cborder");
        setVoting(false);
        setCondition(e.target.textContent);

     }

     const form = JSON.parse(localStorage.getItem('fm'));

     const addFunc = ()=>{
           
        form.step9.month = month;
        form.step9.condition = condition;
        setProgressWidth('35%')
     }
    


     const enterHandler = ()=>{
         setToolTip(true)
     }
const leaveHandler = ()=>{
     setToolTip(false)
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
                        <h2 className="text-3xl font-black">Voluntary Withdrawal</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>What is the notice period required before a
                             partner can withdraw?</h3>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                              
   
                            <button onClick={mclass} className={`flex my-4 items-center w-full ${myclass} px-4 rounded-xl h-[50px] border-2`}><img src="images/3m.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Three Months</span></button>
                            <button onClick={mclass1} className={`flex ${myclass1} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/6m.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Six Months</span></button>
                            <button onClick={mclass4} className={`flex ${myclass4} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/1y.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">One Year</span></button>
                            <button onClick={mclass5} className={`flex ${myclass5} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/2y.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Tow years</span></button>
  
  
                            </div>

                          
                         


                            <div className="condition_tbn mt-6 flex justify-between flex-col">
                                <p className="py-4 text-xl font-black">Will your partnership dissolve on<br/>
withdrawal of any partner??</p>
                          <div className="flex justify-around items-center">
                          <button onClick={mclass2} className={`w-[45%] ${myclass2} shadow-xl font-black h-[39px] rounded-xl outline-none`}>Yes</button>
                            <button onClick={mclass3} className={`w-[45%] ${myclass3} shadow-xl font-black h-[39px] rounded-xl outline-none`}>No</button>
                          </div>
                           </div>
                          <div className="mt-10">
                          
                          

                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-10">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           <div className="tool-tip relative" >
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
                           </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepNine;