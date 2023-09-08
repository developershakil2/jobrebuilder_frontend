import Contact from "./components/Contact";
import FourthSec from "./components/FourthSec";
import Nav from "./components/Nav";
import SecondSec from "./components/SecondSec";
import ThirdSec from "./components/ThirdSec";

const Home = ()=>{


    return(
        <>
       <Nav/>
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

                     <a  href="/how-it-works" className="w-[170px] how-it-work h-[65px] px-8 py-4 rounded-xl bg-white ">
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
                 <img src="images/phone.png" alt="phone" className="h-[750px]  w-[400px]" />
           
           
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