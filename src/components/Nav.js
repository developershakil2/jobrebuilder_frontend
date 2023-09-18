import React, {useState} from 'react';
import {Link} from 'react-router-dom';


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
              <Link to='/'>  <img src="images/logo.png" alt="logo" className="h-[45px] w-[160px]"/></Link>
            </div>
               <button onClick={navOpen} className="navBtn cursor-pointer pr-[15px]">
                <img className="w-[35px] h-[20px]" src="images/navicon.png" alt="navicon" />
               </button> 
            <div style={{left:nav}} className="nav_right_side 
             w-[50%] flex justify-between items-center">
                 <button onClick={navClose} className="navclose cursor-pointer w-full "><img className="w-[45px] float-right h-[45px] rounded-full" src="images/navclose.png" alt="nav close"/></button>
                <Link to="/how-it-works">How it works</Link>
                <Link to="/build-join">Build/Join a Business</Link>
                <Link to="/agreement">Partnership Agreement</Link>
                <Link to="/">More</Link>
            </div>
            
        </div>

            
         </div>
        
        </>
    )
}


export default Nav;