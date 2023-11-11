import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import axios from 'axios'
import Nav from '../../Nav';
const  StepTwentyTow = ()=>{
  const {setProgressWidth, da} = useContext(ContextApi);

     const [s114, setS114] = useState('cborder');
     const [s115, setS115] = useState('noneclass');
     const [s116, setS116] = useState('cborder');
     const [s117, setS117] = useState('noneclass');
     const [payForm1, setPayform1] = useState('scale(0)');
     const [load1, setLoad1] = useState('none')
    const [resp, setResp] = useState("")

    
  
     const s14 = (e)=>{
        setS114('cborder');
        setS115('noneclass')
        ; setPresentative1(e.target.textContent)
     }
   const s15 = (e)=>{
    setS115('cborder');
    setS114('noneclass')
    ; setPresentative1(e.target.textContent)

   }

   const s16 = (e)=>{
        setS116('cborder');
        setS117('noneclass')
        ; setPresentative2(e.target.textContent)

   }
   const s17 = (e)=>{
    setS116('noneclass');
    setS117('cborder');
    ; setPresentative2(e.target.textContent)

}
   
  
  const goBack = ()=>{
    window.history.back();
  }
 

  const form = JSON.parse(localStorage.getItem("fm"))
   const [presentative1, setPresentative1]  = useState('majority vote')
   const [presentative2, setPresentative2]  = useState('majority vote')

   
  const addFunc = ()=>{
    form.step22.presentative1 = presentative1;
    form.step22.presentative2 = presentative2;

    localStorage.setItem('fm', JSON.stringify(form))

    setTimeout(()=>{
      saveForm()
    }, 6000);

  }
const formData = JSON.parse(localStorage.getItem('fm'));

console.log(formData, 'form')
const redirectFunc = ()=>{
  setProgressWidth('100%')
  window.location.href= `/form?id=${da.userid}`
}
const saveForm = async () => {
  const response = await axios.post('https://jobrebuilder.onrender.com/agreement-post', formData);
  if(response){
    setResp(response.data)
    openModal1()
   localStorage.removeItem('fm');
  
   setTimeout(()=>{
    redirectFunc();
    setPayform1('scale(0)')
   },4000)
  }
  console.log(response);
}


const openModal1 = ()=>{
  setLoad1('flex')
setTimeout(()=>{
  setPayform1('scale(1)')
setLoad1('none')
},2000)

}


 
 
    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">

        <div style={{display:load1}} className="fixed w-full h-screen top-0 left-0 bg-[#000000d5] flex justify-center items-center ">
          
          <div className="">
            <img className="w-[180px] h-[180px]" src="images/load.gif" alt="load" />
          </div>
    
     </div> 
     
     <div style={{transform:payForm1}} className="fixed z-30 w-full h-screen top-0 left-0 bg-[#0000009a] flex justify-center items-center ">
          <div className="w-[370px]  bg-white rounded-xl p-4">
          <div className="mx-auto flex justify-center items-center flex-col  w-full">
                   <img src="images/icon.png" alt="icons" className="w-20 h-16 rounded-full"/>
                   <h2 className="mt-3 mb-10 font-black text-xl">Job Rebuilder</h2>

                   <h2 className="text-xl mt-2 font-black">{resp}</h2>
        </div>
          </div>
              
      </div> 



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
                                 <Link onClick={addFunc} className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-final">Save And Continue </Link>
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