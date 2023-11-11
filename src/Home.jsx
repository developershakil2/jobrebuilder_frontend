import Contact from "./components/Contact";
import FourthSec from "./components/FourthSec";
import Nav from "./components/Nav";
import SecondSec from "./components/SecondSec";
import ThirdSec from "./components/ThirdSec";
import axios from 'axios'
import { Link } from "react-router-dom";
import React , {useContext, useEffect, useState} from 'react';
import { ContextApi } from "./utilities/Context";
const Home = ()=>{
const {openModal, Login,loginDetails, setOpenModal, openModal1, setOpenModal1, openModal2, setOpenModal2} = useContext(ContextApi);


const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [conPass, setConPass] = useState('');
const [phone, setPhone] = useState("");
const [loginEmail, setLoginEmail] = useState('');
const [loginPass, setLoginPass] = useState(''); 
const [um, setUm] = useState('');
const [resendPhone , setResendPhone] = useState('');
const [er, setEr] = useState(null);
const codata = localStorage.getItem("userData");
const da = JSON.parse(codata)
console.log(da, "user")

const signin_ = ()=>{
    setOpenModal('scale(1)');
    setOpenModal1("scale(0)");
}
const signup_ = ()=>{
  setOpenModal("scale(0)");
  setOpenModal1('scale(1)');
}

const signUp = async ()=>{
     try{

               const ph = JSON.stringify(phone)
               localStorage.setItem("userPhone", ph);
         
            if(pass !== conPass){
              setUm("your password mis match")
            }else{
               const userData = {
                    email:email,
                    password:pass,
                    authType:'local', 
                    phoneNumber:phone
               }
             const response = await  axios.post("https://jobrebuilder.onrender.com/register-user", userData);
            
             if(response){
                console.log(response.data);
               setUm(response.data)
                setEmail('');
                setConPass('');
                setPass("");
                setPhone("");
                setOpenModal1('scale(0)')
                setOpenModal2("scale(1)")
              
              
             }else{
               alert("something went wront please try again")
             }
            }
            
           


     } catch (error) {
          if (error.response && error.response.status === 400) {
             setOpenModal1('scale(0)');
             setOpenModal2('scale(1)');
             setUm('your gmail or phone already registered with us');
             setEr(error.response.status)
          } else {
             console.error('Error during POST request:', error);
          }
       }
}

 useEffect(()=>{
     const getPhone = localStorage.getItem("userPhone");
     const userPhone = JSON.parse(getPhone);
     setResendPhone(userPhone);
 },[signUp])

const resend = async ()=>{
     try{
     
          const response = await axios.post(`https://jobrebuilder.onrender.com/resend/${resendPhone}`)
              if(response.status == 200){
               setOpenModal2("scale(1)")
                setUm(response.data)
              }else{
               alert("something went wrong")
              }
     }catch(error){
          alert("something went wrong ")
     }
}





    return(
        <>
       <Nav/>



       <div style={{transform:openModal2}} className="main_login_form  h-screen flex justify-center items-center fixed top-0 left-0">
                <div className="w-[500px] relative bg-white rounded-md h-[400px] flex-col flex justify-center items-center login_form p-9">
                       <img src="images/icon.png" alt="icon" className="w-[80px] h-[60px]"/>
                        
                        <div className="login_form_input_wrapper  flex justify-center items-center flex-col mt-3 w-[60%]">
                                <button onClick={()=> setOpenModal2('scale(0)')} className="absolute top-[5%] right-[5%]"><img src="images/cross.png" alt="cross" className="w-[20px] h-[20px]"/></button>
                              
                                <p className="text-center text-xl text-black font-black my-3">
                                   {um}
                                </p>
                       
   
                          
                              <div className="login_input_wrapper my-3 relative w-full h-[40px]  flex justify-between items-center rounded-sm">
                                
                                   <button onClick={signup_} className="w-[45%] bg-[#3087E1] font-black text-white outline-none px-4  h-full" >Go back</button>
                                 {
                                   er != ''? "":  <button onClick={resend} className="w-[48%] border-[2px] border-[#3087E1] font-black text-black outline-none px-4  h-full" >Send Again</button>
                            
                                 }
                              </div>


                        </div>
                </div>
          </div>






       <div style={{transform:openModal1}} className="main_login_form  h-screen flex justify-center items-center fixed top-0 left-0">
                <div className="w-[500px] relative bg-white rounded-md h-[600px] flex-col flex justify-center items-center login_form p-9">
                       <img src="images/icon.png" alt="icon" className="w-[80px] h-[60px]"/>
                        
                        <div className="login_form_input_wrapper  flex justify-center items-center flex-col mt-3 w-[60%]">
                                <button onClick={()=> setOpenModal1('scale(0)')} className="absolute top-[5%] right-[5%]"><img src="images/cross.png" alt="cross" className="w-[20px] h-[20px]"/></button>
                                 <h2 style={{color:'#3087E1'}} className="text-[35px] font-[700] text-[#3087E1}">Sign Up</h2>
                                <p className="text-center text-red-600 font-black my-3">
                                    {um}
                                </p>
                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                <label className="absolute -top-[10px] px-4 left-2 text-xs bg-white">email address</label>
                                   <input onChange={(e)=> setEmail(e.target.value)} className="w-full outline-none  h-full px-4"  placeholder="Enter Email" type='email'/>
                              </div>

                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                <label className="absolute -top-[10px] left-2 text-xs bg-white px-4">password</label>
                                   <input onChange={(e)=> setPass(e.target.value)} className="w-full outline-none px-4  h-full"  placeholder="Enter Password" type='password'/>
                              </div>

                              
                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                <label className="absolute -top-[10px] left-2 text-xs bg-white px-4">Conform password</label>
                                   <input onChange={(e)=> setConPass(e.target.value)} className="w-full outline-none px-4  h-full"  placeholder="Re-Enter Password" type='password'/>
                              </div>

                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                <label className="absolute -top-[10px] left-2 text-xs bg-white px-4">US Phone number</label>
                                   <input onChange={(e)=> setPhone(e.target.value)} className="w-full outline-none px-4  h-full"  placeholder="Etner Number" type='number'/>
                              </div>

                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                
                                   <button onClick={signUp} className="w-full bg-[#3087E1] font-black text-white outline-none px-4  h-full" >Sign Up</button>
                              </div>

                              <h4 className="text-center flex items-center "> Already have an account? <button onClick={signin_} className="ml-2 font-black text-blue-600"> Login</button></h4>


                        </div>
                </div>
          </div>







          
          <div style={{transform:openModal}} className="main_login_form  h-screen flex justify-center items-center fixed top-0 left-0">
                <div className="w-[500px] relative bg-white rounded-md h-[500px] flex-col flex justify-center items-center login_form p-9">
                       <img src="images/icon.png" alt="icon" className="w-[80px] h-[60px]"/>
                        
                        <div className="login_form_input_wrapper  flex justify-center items-center flex-col mt-3 w-[60%]">
                                <button onClick={()=> setOpenModal('scale(0)')} className="absolute top-[5%] right-[5%]"><img src="images/cross.png" alt="cross" className="w-[20px] h-[20px]"/></button>
                                 <h2 style={{color:'#3087E1'}} className="text-[35px] font-[700] text-[#3087E1}">Login</h2>
                              
                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                <label className="absolute -top-[10px] px-4 left-2 text-xs bg-white">email address</label>
                                   <input value={loginEmail} onChange={(e)=> setLoginEmail(e.target.value)} className="w-full outline-none  h-full px-4"  placeholder="Enter Email" type='email'/>
                              </div>

                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                <label className="absolute -top-[10px] left-2 text-xs bg-white px-4">password</label>
                                   <input value={loginPass} onChange={(e)=> setLoginPass(e.target.value)} className="w-full outline-none px-4  h-full"  placeholder="Enter Password" type='password'/>
                              </div>

                              <div className="login_input_wrapper my-3 relative w-full h-[40px] border-[1px] border-[#111] rounded-sm">
                                
                                   <button onClick={()=>Login(loginEmail, loginPass)} className="w-full bg-[#3087E1] font-black text-white outline-none px-4  h-full" >Log In</button>
                              </div>

                              <h4 className="text-center flex items-center "> Don't have an account? <button onClick={signup_} className="ml-2 font-black text-blue-600"> Register</button></h4>


                        </div>
                </div>
          </div>







       <div className="h-[120vh] w-full  hero">
        <div className="hero_wrap container mx-auto flex justify-between items-start pt-10">
            <div className="w-[49%] mt-[140px] hero_left flex justify-evenly items-start ">
                       <div className="hero_icon_wrapper">
                        <img src="images/hero_icon.png" alt="icon"/>
                       </div>
                     <div className="hero_text_wraper ml-4 ">
                      
                           <div className="hero_title_wrap">
                           <div className="mobile_hero_icon_wrapper">
                        <img src="images/hero_icon.png" alt="icon"/>
                       </div>
                     <h1 className="leading-[87px] text-[64px] text-white">Job Rebuilder</h1>
                           </div>

                      <p className=" text-[30px] mb-10 text-white leading-[51px] font-[800]">
                      Rebuild Your Career with Confidence.
                      <br className="home_p_br"/>
                        Find Your Ideal Business Partner.
                        </p>

                     <a  href="/#build" className="w-[170px] how-it-work h-[65px] px-8 py-4 rounded-xl bg-white ">
                         How it works
                     </a>
                     <div className="app_border mb-[100px]"></div>

                     <div className="mobile_app_links">
                         <a href="/">
                            <img className="w-[180px] h-[70px]" src="images/playstore.png" alt="palystore"/>
                         </a>
                         <a href="/">
                              <img className="w-[194px] -ml-2 h-[70px]" src="images/appstore.png" alt="appstore"/>
                            </a> 
                     </div>
                     </div>
            </div>

            <div className="hero_right mt-[140px]">
                
                  <div className="mobile_fram">
                

                      <div id="first_inner" className="first_inner pb-5 relative mx-auto bg-[#8489FC]">
                          <div className="bg-[#fff] rounded-full w-[45px] flex items-center justify-center h-[45px]">
                            <img src="images/innericon1.png" alt="icons" className="w-[30px] bimg1 h-[30px]" />
                          </div>
                           <div className="inner_text_contents">
                           <h2 className="font-black text-white text-sm  mt-2">Find Business Partners</h2>
                           <p className="text-white leading-[15px] mb-4 font-[400] text-[12px]">- Break down your idea
                            <br/>
                            - Build a team 
                            <br/>
                          - Find business partners
                          <br/>
                          - Raise funds (coming soon)
                          <br/> - Hire an expert (coming soon)
                             </p>       
                             <div calssName="w-[100px] bottom-[10px] right-[10px] h-[100px] absolute">
                                  <img src="images/innericons1.png"  alt="inner icon" className="w-[100px] bimg absolute bottom-[10px] right-[10px] h-[100px]"/>
                             </div>
                          <Link className="text-[#8489FC] bg-white font-black py-2 px-8 rounded-xl" to="/">Start</Link>
                          <div className="mb-3"></div>
                           </div>
                      </div>




                      <div className="first_inner pb-5 shadow-xl mt-3 relative mx-auto bg-[#fff]">
                          <div className="bg-[#8489FC] rounded-full w-[45px] flex items-center justify-center h-[45px]">
                            <img src="images/innericon2.png" alt="icons" className="w-[30px] bimg1 h-[30px]" />
                          </div>
                           <div className="inner_text_contents">
                           <h2 className="font-black text-black text-sm  mt-2">Join a Business as a Partner</h2>
                           <p className="text-black leading-[15px] mb-4 font-[400] text-[12px]">
                           - Work for equity
                           <br/>
                          - Work as a freelancer  
                          <br/>
                             (Coming Soon)

                             </p>       
                             <div calssName="w-[100px] bottom-[10px] right-[10px] h-[100px] absolute">
                                  <img src="images/innericons2.png"  alt="inner icon" className="w-[100px] bimg absolute bottom-[10px] right-[10px] h-[100px]"/>
                             </div>
                          <Link className="text-[#fff] bg-[#8489FC] font-black py-2 px-8 rounded-xl" to="/">Start</Link>
                          <div className="mb-3"></div>
                           </div>
                      </div>





                      <div className="first_inner pb-5 shadow-xl mt-3 relative mx-auto bg-[#0A82D7]">
                          <div className="bg-[#fff] rounded-full w-[45px] flex items-center justify-center h-[45px]">
                            <img src="images/innericon3.png" alt="icons" className="w-[30px] bimg1 h-[30px]" />
                          </div>
                           <div className="inner_text_contents">
                           <h2 className="font-black text-white text-sm  mt-2">Invest</h2>
                           <p className="text-white leading-[15px] mb-4 font-[400] text-[12px]">
                           - Invest in innovative startups
                           <br/>
                           - Invest in early-stage ventures   
                           <br/>
                          - Support new businesses



                             </p>       
                             <div calssName="w-[100px]  bottom-[10px] right-[10px] h-[100px] absolute">
                                  <img src="images/innericons3.png"  alt="inner icon" className="w-[100px] bimg absolute bottom-[10px] right-[10px] h-[100px]"/>
                             </div>
                          <Link className="text-[#111] bg-[#fff] font-black py-2 px-3 text-sm rounded-xl flex justify-center items-center" to="/"><img src="images/lock.png" alt="lock" className="lock_img w-[10px] h-[10px]"/>  Coming Soon</Link>
                          <div className="mb-3"></div>
                           </div>
                      </div>






                  </div>












           
                 <div className="m_mobile_app_links">
                         <a href="/">
                            <img className="w-[180px] android h-[70px]" src="images/playstore.png" alt="palystore"/>
                         </a>
                         <a href="/">
                              <img className="w-[194px] apple -ml-2 h-[70px]" src="images/appstore.png" alt="appstore"/>
                            </a> 
                     </div>
            </div>
        </div>

       </div>

       <SecondSec/>
        <ThirdSec/>
        <FourthSec/>
        <Contact/>
        </>
    )
}


export default Home;