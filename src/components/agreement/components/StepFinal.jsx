import React, {useState, useContext, useEffect} from 'react';
import { ContextApi } from '../../../utilities/Context';
import {Elements , CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import CatHead from '../../CateHead';
import Nav from '../../Nav';
import CheckoutForm from './CheckoutForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

const stripePromise = loadStripe('pk_live_51Mnsr6FcWHZ3o6rDphpNVOhK6TSBWWMIj8PLIY72s3JdPVSBJVzhgsccAs6xtFpTpETzNUpuPQTLVcT9yMDI9w7x00DWftgh78')
const  StepFinal = ()=>{
  const { da, pdfUrl} = useContext(ContextApi);

   const [payForm, setPayform] = useState('scale(0)');
   const [load, setLoad] = useState('none')
 

  const openModal = ()=>{
        setLoad('flex')
    setTimeout(()=>{
        setPayform('scale(1)')
      setLoad('none')
    },4000)

  }
  const closeModal = ()=>{
    setPayform('scale(0)')
    }



  
  
  
  const params = new URLSearchParams(window.location.search);

  const formId = params.get('id')





 

    return(
        <>
           <Nav/>
               
               {
                pdfUrl.status == 'draft'? <>
                
        {
        da?.userId == null ? <div className="w-full min-h-screen flex justify-center items-center"><a href="/" className="p-4 rounded-xl text-white bg-black">please login your account</a></div>:
        <>
           

  



           <div style={{display:load}} className="fixed w-full h-screen top-0 left-0 bg-[#000000d5] flex justify-center items-center ">
          
                <div className="">
                  <img className="w-[180px] h-[180px]" src="images/load.gif" alt="load" />
                </div>
          
           </div> 




         <div style={{transform:payForm}} className="fixed w-full h-screen top-0 left-0 bg-[#0000009a] flex justify-center items-center ">
          
         <Elements stripe={stripePromise} >
      <CheckoutForm closeModal={closeModal} formId={formId}/>
    </Elements>
          </div> 

       {
        pdfUrl ?  <h2 className="mt-20 font-black text-center text-3xl">Your Partnership Agreement Form Is Ready</h2>
        : ''
       }
      
        {
  pdfUrl ? (
   <div className="w-[95%] flex justify-center items-center mx-auto">
       <Link className="w-[280px] px-10 py-3 rounded-lg  mx-auto my-6 text-center bg-black text-white" to={`/form?id=${da?.userId}`}>
       <span>  {pdfUrl.step3.business}</span>

    </Link>
   </div>
  ) : <h2 className="text-center w-full text-xl">You Don't have any drafted Forms start a new form</h2>
}

 
  {
    pdfUrl ? <>
       <div className="flex form_price_wrapper w-[70%] mx-auto justify-between items-start">
       <h2 className="mt-2 font-black w-full text-center">Unlock the potential of your dreams with our professionally crafted forms, available at an unbeatable price of just $40. Your tailored solution is now within reach, empowering you to streamline your processes and achieve your goals. Don't miss this opportunity – invest in your success today</h2>
{/* 
       <Link to="/edit" className="px-16 rounded-md bg-[#7E7E7E] py-3 text-white font-black text-xl">Edit</Link>
      */}
     </div>

     <div className="mt-5 mb-32 flex justify-center items-center">
      <button onClick={openModal} className="px-40 py-4 rounded-lg text-white bg-[#3087E1] font-black">Buy Now $40</button>
     </div>
        

        <div className="flex form_price_wrapper mb-4 w-[70%] mx-auto py-4 justify-start items-center">
          <p className="font-black">This is a partnership agreement template (tool) that allows you to enter your own information based on your own risks. By using this partnership agreement you’re accepting our Terms of Use, Disclaimer, Privacy Policy and Editorial Policy. </p>
        </div>

    </>:''
  }



         </>
      }




      
                </>:
                ""
               }
        </>
    )
}

export default  StepFinal;