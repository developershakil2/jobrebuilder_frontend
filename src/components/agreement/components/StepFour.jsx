import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { Link } from 'react-router-dom';
import CatHead from '../../CateHead';
import Nav from '../../Nav';
import PartnerCard from '../../PartnerCard';
const StepFour = ()=>{

    const {addPartnerType, addPartnerName, addPartnerAddress, setAddPartnerName, setAddPartnerAddress} = useContext(ContextApi);

     



     const [tooltip1 , setToolTip1] = useState(false);
     const [addp, setAddp] = useState([]);
     console.log(addp, 'aray of user')
     


     const addPartner = () => {
      if (addPartnerName !== "" || addPartnerAddress !== "") {
        const newPartner = { name: addPartnerName, address: addPartnerAddress, type: addPartnerType };
        if (newPartner.name !== "" || newPartner.address !== "") {
          setAddp([...addp, newPartner]);
    
          const localForm = JSON.parse(localStorage.getItem('fm'));
    
          localForm.step4.push(newPartner); 
          localStorage.setItem('fm', JSON.stringify(localForm));
        } else {
          alert("Please give your partner details");
        }
      } else {
        alert("Please give your partner details");
      }
    }
    
  const enterHandler1 = ()=>{
    setToolTip1(true);
  }
  const leaveHandler1 = ()=>{
    setToolTip1(false);
  }
  const goBack = ()=>{
    window.history.back()
  }



   
    return(
        <>
           <Nav/>
        <CatHead/>
        <div className="w-full ">
            <div className="inner_wrapper py-7 flex justify-between items-center px-5 w-[80%] mx-auto">
                    <div className="step1_left relative">
                    {
                                        tooltip1 ?   <div className="tipAns absolute bg-white -top-[110px] w-[350px] shadow-xl p-8">
                                     A partner can be an individual person, a corporation, an LLC (limited liability company), a Trust, or another partnership.
                                        </div> : ''
                                     }
                        <h2 className="text-3xl font-black">Partner Details</h2>
                        <div classNmae="mt-8">
                            <h3 className="text-xl font-black flex items-center">Who are the partners entering this agreement? <img className="w-[25px] cursor-pointer h-[25px] ml-3" onMouseEnter={enterHandler1} onMouseLeave={leaveHandler1} src="images/question.png" alt="question"/></h3>
                        </div>
                          <div className="mt-[30px] flex-col flex selectStateWrapper">
                          
                          <PartnerCard addPartner={addPartner}/>
                           {/* {partners} */}
                        <div className="flex items-center ">   <h3 className="font-black text-xl ">You Added Total Partners  </h3>    <h2 className="font-black text-xl "> {" : "} {addp.length >=1 ?  addp.length.toString(): ''}</h2></div>
                         
                                     
                          </div>

                          <div className="mt-10">
                          

                             <div className="my-[30px]">
                           
                                 <Link onClick={goBack} to="" className="px-[30px] py-3 bg-black text-white">Back </Link>
                                 <Link className="px-[20px] ml-3 py-3 bg-black text-white" to="/step-5">Save And Continue </Link>
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

export default StepFour;