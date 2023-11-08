import React, {useState, useContext} from 'react';
import { ContextApi } from './utilities/Context';
import Nav from './components/Nav';
import { Link } from 'react-router-dom';
const FormAgreement = ()=>{
    
  
  const {da, pdfUrl, handleDownload } = useContext(ContextApi);


   const params = new URLSearchParams(window.location.search);

   const formId = params.get('id')
    

    return(
        <>
      
      {
        da?.userId == null ? <div className="w-full min-h-screen flex justify-center items-center"><a href="/" className="p-4 rounded-xl text-white bg-black">please login your account</a></div>:
        <>
             <div className="w-full shadow-2xl">
          <Nav/>
          </div>
    

       


          {
        formId ?  <h2 className="mt-20 font-black text-center text-3xl">Your Partnership Agreement Form Is Ready To Download</h2>
        : ''
       }
      
      
 
  {
    formId ? <>
       <div className="flex form_price_wrapper w-[70%] mx-auto justify-between items-start">
       <h2 className="mt-2 font-black w-full text-center">Your Partnership Agreement Form, crafted to your unique needs, is now at your fingertips. Download and formalize your partnership with ease.</h2>
{/* 
       <Link to="/edit" className="px-16 rounded-md bg-[#7E7E7E] py-3 text-white font-black text-xl">Edit</Link>
      */}
     </div>

     {
      formId ?    <div className="mt-5 mb-32 flex justify-center items-center">
      <button onClick={()=>handleDownload(formId)} className="px-40 py-4 rounded-lg text-white bg-[#3087E1] font-black">Download Now</button>
     </div>: ''
     }
        

        <div className="flex form_price_wrapper mb-4 w-[70%] mx-auto py-4 justify-start items-center">
          <p className="font-black">This is a partnership agreement template (tool) that allows you to enter your own information based on your own risks. By using this partnership agreement you’re accepting our Terms of Use, Disclaimer, Privacy Policy and Editorial Policy. </p>
        </div>

    </>:''
  }







        

       
         </>
      }
            
        </>
    )
}

export default FormAgreement;