import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const  StepTwenty = ()=>{
  const {setProgressWidth} = useContext(ContextApi);
     const [tooltip , setToolTip] = useState(false);
     const [tooltip1 , setToolTip1] = useState(false);
     const [yesCondition , setYes] = useState(false);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [myclass4, setMyClass4] = useState('noneclass');
     const [myclass5, setMyClass5] = useState('noneclass');
    
     const [s114, setS114] = useState('cborder');
     const [s115, setS115] = useState('noneclass');
   
   
    
  
     const s14 = (e)=>{
        setS114('cborder');
        setS115('noneclass');
        setEvery(e.target.textContent)
     }
   const s15 = (e)=>{
    setS115('cborder');
    setS114('noneclass');
    setEvery(e.target.textContent)

   }

      const mclass = (e)=>{
        setMyClass('cborder');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(false);
        setTex(e.target.textContent)
      }
      const mclass1 = (e)=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('cborder');
        setYes(true);
        setTex(e.target.textContent)

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

  const [tex, setTex] = useState("Yes every year if eligible");
  const [every, setEvery] = useState("Yes in every case")
  const form = JSON.parse(localStorage.getItem('fm'));

  const addFunc = ()=>{
       form.step20.tex = tex;
       form.step20.everycase = every;
        
       localStorage.setItem("fm", JSON.stringify(form));
       setProgressWidth('95%')
  }


 


    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left w-[45%]">
                        <h2 className="text-3xl font-black">Tax Elections</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>Will the partnership elect out of the unified audit rules?</h3>
               
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                            
   
                            <button onClick={mclass} className={`flex my-4 items-center w-full ${myclass} px-4 rounded-xl h-[50px] border-2`}> <img  src="images/el13.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Yes every year if eligible</span></button>
                            <button onClick={mclass1} className={`flex ${myclass1} items-center w-full px-4 rounded-xl h-[50px] border-2`}> <img  src="images/el14.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">The partnership will decide annually</span></button>
   
                          
                         
                            </div>

                          
                         
                         {
                            yesCondition ? <div className="condition_tbn mt-6 flex justify-between flex-col">
                      
                           <h2 className="my-6 text-xl font-black">Will the partnership pass any assessed liability to its partners?</h2>
                            <button onClick={s14} className={`flex ${s114} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/ok.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Yes in every case</span></button>
                            <button onClick={s15} className={`flex ${s115} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/individual.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">The partnership will decide in each case</span></button>
               
                          
                           </div>:''
                         }

                           
                          <div className="mt-10">
                          
                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-21">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right w-[45%]">
                    <div className="tool-tip relative" >
                              <h2 className="text-3xl font-black ">Frequently Asked Questions</h2>
                              <p onMouseEnter={enterHandler} onMouseLeave={leaveHandler}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">Do the unified audit rules apply to my partnership?
                             </p>
                              <p onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1}  className="hover:underline text-xl font-black mt-9 hover:cursor-pointer text-[#458eee]">What does passing assessed liability mean?
                             
                               </p>
                               
                              
                                 {  
                                    tooltip ?   <div className="tipAns absolute bg-white -top-[40px] w-[350px] shadow-xl p-8">
These rules are designed to facilitate the IRS in auditing and taxing large partnerships as a single entity and apply to all partnerships by default in any given tax year.

Partnerships which have 100 or fewer partners, and are not multi-tiered (i.e. which have no partners which are themselves partnerships, LLCs or trusts) are eligible to elect out of the application of the rules on an annual basis on the partnership return.

Partnerships which have elected out are not treated as taxable entities so the IRS would have to audit each partner individually.   </div> : ''
                                 }

{            
  tooltip1 ?   <div className="tipAns -left-[200px] z-10 absolute bg-white -top-[40px] w-[350px] shadow-xl p-8">
If your partnership is not eligible, or chooses not to elect out of the new partnership audit rules, then the partnership is treated as a taxable entity and, in the event of an audit, the liability for an assessed underpayment is imposed at partnership level.

Instead of the partnership paying the tax directly at the highest marginal rate it may elect to have each partner assessed for their share of the tax adjustment. This option is particularly relevant when partners have joined or left the partnership between the year reviewed in the audit and the year in which the adjustment is paid. The individual partners may in this way take advantage of individual tax rates and benefits at the cost of a higher administrative burden.

There is a strict deadline of 45 days from the notice of final partnership adjustment to make this election so the partnership may wish to make the election mandatory by setting out this policy in the Partnership Agreement. If this suits your partnership select ‘Yes, in every case.’

If you would prefer your Partnership Agreement to remain silent on this election select ‘The partnership will decide in each case  </div> : ''
                                 
                                 }
                           </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default  StepTwenty;