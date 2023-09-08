import React, {useState} from 'react';



const Nav = ()=>{

    const [nav, setNav] = useState('');



    const navOpen = ()=>{
        setNav("0%")
    }
    const navClose = ()=>{
        setNav('-999999%');

    }
    return(

        <>
         <div className="w-full flex justify-center items-center h-[70px]">
        <div className="container flex justify-between  items-center ">
            <div className="nav_left_side">
              <a href='/'>  <img src="images/logo.png" alt="logo" className="h-[45px] w-[160px]"/></a>
            </div>
               <button onClick={navOpen} className="navBtn cursor-pointer pr-[15px]">
                <img className="w-[35px] h-[20px]" src="images/navicon.png" alt="navicon" />
               </button> 
            <div style={{left:nav}} className="nav_right_side 
             w-[50%] flex justify-between items-center">
                 <button onClick={navClose} className="navclose cursor-pointer w-full "><img className="w-[45px] float-right h-[45px] rounded-full" src="images/navclose.png" alt="nav close"/></button>
                <a href="/how-it-works">How it works</a>
                <a href="/build-join">Build/Join a Business</a>
                <a href="/partnership-agreement">Partnership Agreement</a>
                <a href="/">More</a>
            </div>
            
        </div>

            
         </div>
        
        </>
    )
}


export default Nav;