import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
import months from './monts';
const StepTwentyOne = ()=>{
    
     const {setProgressWidth} = useContext(ContextApi);

     const [tooltip , setToolTip] = useState(false);
     const [yesCondition , setYes] = useState(false);
   
     const [selectedState, setSelectedState] = useState('january');
    

     const selectHandler = (event)=>{
      setSelectedState(event.target.value)
      setMonth(event.target.value)
    }


  const goBack = ()=>{

    window.history.back();
   
  }


  const enterHandler = ()=>{
    setToolTip(true)
}
const leaveHandler = ()=>{
setToolTip(false)
}
const [value, setValue] = useState(1);

const handleInputChange = (event) => {
  const inputValue = event.target.value;

  // Use a regular expression to allow only two digits
  const twoDigitsRegex = /^\d{0,2}$/;

  if (twoDigitsRegex.test(inputValue)) {
    setValue(inputValue);
  }
};

const [month , setMonth] = useState('january')
 const form = JSON.parse(localStorage.getItem('fm'));
console.log(month , 'month')

 const addFunc = ()=>{
  form.step21.month = month;
  form.step21.day = value || 1;


  localStorage.setItem('fm' , JSON.stringify(form))
 }



    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper  py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left relative">
                    {
                                        tooltip ?   <div className="tipAns absolute bg-white -top-[110px] w-[350px] shadow-xl p-8">
                                   The fiscal year is the accounting period for which annual financial statements are prepared. The fiscal year end is the last day of this accounting period.
                                        </div> : ''
                                     }
                        <h2 className="text-3xl font-black">Fiscal Year End</h2>
                        <div classNmae="mt-8">
                        <h3 className="text-xl font-black flex items-center">When will the partnership's fiscal year end be? <img className="w-[25px] cursor-pointer h-[25px] ml-3" onMouseEnter={enterHandler} onMouseLeave={leaveHandler} src="images/question.png" alt="question"/></h3>
                        </div> 
                         
                        
                        
                        
                         <div className="mt-[30px] flex-col relative flex selectStateWrapper">
                         <h3 className="text-[#424de3] font-black">Month:</h3>
                         <select  style={{borderBottom:'2px solid black'}} className="w-[340px] focus:border-none h-[40px] border-t-0 border-l-0 border-r-0" value={selectedState} onChange={selectHandler}>
                                 <option  value={selectedState? selectedState: 'Select State'}>{selectedState? selectedState: 'Select State'} </option>
                                 {
                                   months.map((el)=>(
                                    <option>
                                        {el}
                                    </option>
                                   ))
                                 }
                             </select>
                        
                            </div>
                     
                            <h3 className="text-[#424de3] mt-6 font-black">Day:</h3>
                          
                                                    <input
                                type="text"
                                id="twoDigitInput"
                                value={value}
                                onChange={handleInputChange}
                                className="outline-none border-b-[1px] border-[#111]"
                              />

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
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-22">Save And Continue </Link>
                             </div>
                             
                              
                          </div>
                    </div>


                    <div className="step2_right">
                           
                    </div>
            </div>
        </div>
        </>
    )
}

export default StepTwentyOne;