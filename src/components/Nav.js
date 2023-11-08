 import {Link} from 'react-router-dom';
import React, {useContext,useState, useEffect} from 'react';
import { ContextApi } from '../utilities/Context';
import axios from 'axios' 

const Nav = ()=>{
const {openModal, Login,loginDetails, setOpenModal, openModal1, setOpenModal1, openModal2, setOpenModal2} = useContext(ContextApi);

const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [conPass, setConPass] = useState('');
const [phone, setPhone] = useState("");
const [loginEmail, setLoginEmail] = useState('');
const [loginPass, setLoginPass] = useState(''); 
const [um, setUm] = useState('');
const [resendPhone , setResendPhone] = useState('');

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
             const response = await  axios.post("http://localhost:8000/register-user", userData);
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
       


     }catch(error){
          console.log(error)
     }
}

 useEffect(()=>{
     const getPhone = localStorage.getItem("userPhone");
     const userPhone = JSON.parse(getPhone);
     setResendPhone(userPhone);
 },[signUp])

const resend = async ()=>{
     try{
     
          const response = await axios.post(`http://localhost:8000/resend/${resendPhone}`)
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








    const [nav, setNav] = useState('');



    const navOpen = ()=>{
        setNav("0%")
    }
    const navClose = ()=>{
        setNav('-999999%');

    }

const logout = ()=>{
    localStorage.clear();
    window.location.reload()
}


    return( 

        <>
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
                                   <button onClick={resend} className="w-[48%] border-[2px] border-[#3087E1] font-black text-black outline-none px-4  h-full" >Send Again</button>
                            
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












         <div id="nav" className="w-full flex justify-center items-center h-[70px]">
        <div className="container flex justify-between  items-center ">
            <div className="nav_left_side">
              <Link to='/'>  <img src="images/logo.png" alt="logo" className="h-[45px] w-[160px]"/></Link>
            </div>

                {
                    da?.email ? <Link to={`/form?id=${da.userId}`} className="font-black text-xl ">
                   Hi {da.email.split("@")[0]}
                </Link>:""
                }

               <button onClick={navOpen} className="navBtn cursor-pointer pr-[15px]">
                <img className="w-[35px] h-[20px]" src="images/navicon.png" alt="navicon" />
               </button> 
            <div style={{left:nav}} className="nav_right_side 
             w-[50%] flex justify-between items-center">
                 <button onClick={navClose} className="navclose cursor-pointer w-full "><img className="w-[45px] float-right h-[45px] rounded-full" src="images/navclose.png" alt="nav close"/></button>
                <Link to="/">How it works</Link>
                <a href="/#build">Build/Join a Business</a>
                <Link to="/agreement">Partnership Agreement</Link>
                <Link className="relative more_link" to="/">More
                      <div className="extra_links absolute">
                         <Link to="/">Business Plan Guide</Link>
                         <a href="/#vision">Our Vision</a>
                         <a href="/#contact">Contact Us</a>
                          
                          <div className="w-full h-[2px] bg-[#111] my-3"></div>
                         {
                            da?.userId == null ? <>  <button onClick={()=> setOpenModal1('scale(1)')} className="outline-none text-black font-black w-full text-start">Sign Up</button>
                            <button onClick={()=> setOpenModal('scale(1)')} className="outlin-none text-black w-full text-start font-black">Sign In</button>
                        </>: <button onClick={logout} className="font-black py-3 text-lg">Log Out</button>
                         }
                      </div>
                </Link>
            </div>
            
        </div>

            
         </div>
        
        </>
    )
}


export default Nav;