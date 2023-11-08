import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
const StepEighteen = ()=>{
    
     const {setProgressWidth} = useContext(ContextApi);
  
     const [yesCondition , setYes] = useState(false);
     const [myclass, setMyClass] = useState('cborder');
     const [myclass1, setMyClass1] = useState('noneclass');
     const [myclass2 , setMyClass2] = useState('cborder');
   
     const [myclass4, setMyClass4] = useState('noneclass');
     const [myclass5, setMyClass5] = useState('noneclass');
  
      const mclass4 = (e)=>{
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("cborder");
        setMyClass1('noneclass');
        setMyClass2('noneclass');
        setYes(false);
        setAll(e.target.textContent)

      }
      const mclass5 = (e)=>{
        setMyClass('noneclass');
        setMyClass2('noneclass');
        setMyClass5('cborder');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(true);
  setAll(e.target.textContent)

      }


     const mclass2 = (e)=>{
        setMyClass2('cborder');
        setMyClass('noneclass');
        setMyClass5('noneclass');
        setMyClass4("noneclass");
        setMyClass1('noneclass');
        setYes(false);
  setAll(e.target.textContent)

     }
    

  const goBack = ()=>{

    window.history.back();
   
  }


const [all, setAll] = useState('each partner will receive an equal share')
const [pa1, setPa1] = useState('');
const [pa2, setPa2] = useState('')
const form = JSON.parse(localStorage.getItem('fm'));

const addFunc = ()=>{

    form.step18.all = all+"_"+pa1+"_"+pa2;
  

   localStorage.setItem("fm", JSON.stringify(form))

}
    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left">
                        <h2 className="text-3xl font-black">Profit and Loss</h2>
                        <div classNmae="mt-8">
                            <h3 className={`text-xl font-black`}>How will profits and losses be distributed among the partners?</h3>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                      
                          
                            <button onClick={mclass4} className={`flex ${myclass4} items-center w-full px-4 my-4 rounded-xl h-[50px] border-2`}><img  src="images/equal.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">each partner will receive an equal share</span></button>
                            <button onClick={mclass5} className={`flex ${myclass5} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/percentage.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">each partner will receive a fixed share</span></button>
                            <button onClick={mclass2} className={`flex ${myclass2} items-center mt-4 w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/chart.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">In proportion to capital contributions</span></button>
  
  
                            </div>

                          
                         

                              {
                                yesCondition ?  <div className="condition_tbn mt-6 flex justify-between flex-col">
                                <p className="py-4 text-xl font-black">What is each partner's share of profit or loss?</p>
                         
                               <div className="w-full p-10 shadow-xl rounded-xl">
                                    <p>Partner #1</p>
                                    <div className="w-[300px] mt-6">
                                    <div className="mt-2 w-full">
                                    <input onChange={(e)=>setPa1(e.target.value)} className={`w-full border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="percent:" type='text' />
                                    <span className="text-[#808080a8] text-sm">e.g. 40</span>
                                    </div>
                                          
                                    </div>
                               </div>



                               <div className="w-full p-[60px] shadow-xl rounded-xl">
                                    <p>Partner #2</p>
                                    <div className="w-[300px] mt-6">
                                    <div className="mt-2 w-full">
                                    <input onChange={(e)=>setPa2(e.target.value)} className={`w-full border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Dissolution percent:" type='text' />
                                    <span className="text-[#808080a8] text-sm">e.g. 40</span>
                                    </div>
                                          
                                    </div>
                               </div>

                                

                                <h2 className="text-red-600 font-black text-xl mt-10">
                                Remember: The total for all partners should equal 100.00%</h2>
                           </div>: ''
                              }
                          

                           
                          <div className="mt-10">
                          
                             <div className="my-[30px]">
                                 <Link  onClick={goBack } to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-19">Save And Continue </Link>
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

export default StepEighteen;