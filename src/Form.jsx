import React, {useState, useContext} from 'react';
import { ContextApi } from './utilities/Context';

import Nav from './components/Nav';
import { Link } from 'react-router-dom';
const Form = ()=>{
    
      const {da, pdfUrl, userForm} = useContext(ContextApi);


   console.log(userForm, 'pdf')



    return(
        <>
           {
            da?.userId == null ? <div className="w-full min-h-screen flex justify-center items-center"><a href="/" className="p-4 rounded-xl text-white bg-black">please login your account</a></div>:
            <>
              <div className="w-full shadow-2xl">
          <Nav/>
          </div>
    

        <h2 className="mt-40 font-black text-center text-3xl">Partnership Agreement</h2>
        
       <a className="w-full text-center mx-auto px-10" href="/agreement">
       <div style={{letterSpacing:'2px'}}  className="w-[85%]  new_form_link py-3  rounded-xl text-3xl font-black text-white my-11 bg-[#395ef2] mx-auto">
        Start a New Partnership Agreement
        
       </div>
        </a>
      
        <div  className="w-[85%] flex flex-col justify-between items-center mx-auto ">
          
            <div className="form_link_row my-2 gap-2 flex w-full justify-between items-start ">
                 <div className="row_card flex-1 py-2 rounded-lg text-md font-black text-center bg-slate-400">
                 Company name
                 </div>
                 <div className="row_card flex-1 py-2 rounded-lg text-md font-black text-center bg-slate-400">
                    Draft/Completed
                 </div>
                 <div className="row_card flex-1 py-2 rounded-lg text-md font-black text-center bg-slate-400">
                  Created at
                 </div>
            </div>        



            {
  userForm?.map((el, indx) => {
    if (el.status === "draft") {
      return (
        <Link key={indx} to={`/step-final?id=${el._id}`} className="w-full">
          <div className="form_link_row my-2 gap-2 flex w-full justify-between items-start">
            <div className="row_card flex-1 text-[#002851] py-2 rounded-lg text-md font-black text-center bg-slate-400">
            {el.step3.business}

            </div>
            <div className="row_card flex-1 text-[#002851] py-2 rounded-lg text-md font-black text-center bg-slate-400">
              {el.status}
            </div>
            <div className="row_card flex-1 text-[#002851] py-2 rounded-lg text-md font-black text-center bg-slate-400">
              {new Date(el.createdAt).toLocaleString()}
            </div>
          </div>
        </Link>
      );
    } else {
      return(
        <Link to={`/form-agreement?id=${el._id}`} className="w-full">
        <div className="form_link_row my-2 gap-2 flex w-full justify-between items-start ">
              <div className="row_card flex-1 text-[#0F6F00] py-2 rounded-lg text-md font-black text-center bg-slate-400">
               {el.step3.business}
              </div>
              <div className="row_card flex-1 text-[#0F6F00] py-2 rounded-lg text-md font-black text-center bg-slate-400">
                {el.status}
              </div>
              <div className="row_card flex-1 text-[#0F6F00] py-2 rounded-lg text-md font-black text-center bg-slate-400">
              {new Date(el.createdAt).toLocaleString()}

              </div>
         </div> 
        </Link>
      )
    }
  })
}

          
            
        
            
        </div> 
            
            </>
           }
        </>
    )
}

export default Form;