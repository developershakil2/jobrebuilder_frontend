
import React, {useState, useContext} from 'react';

import { ContextApi } from '../utilities/Context';
const PartnerCard = ({addPartner})=>{
 
      const {setAddPartnerType, addPartnerName, setAddPartnerName, addPartnerAddress, setAddPartnerAddress} = useContext(ContextApi);




    const [myclass, setMyClass] = useState('cborder');
    const [myclass1, setMyClass1] = useState('noneclass');
    const [myclass2, setMyClass2] = useState('noneclass');
    

      



     const mclass = (e)=>{
       setMyClass('cborder');
       setMyClass1("noneclass");
       setMyClass2('noneclass');
      
       const text = e.target.textContent;
       setAddPartnerType(text)
      
     }
     const mclass1 = (e)=>{
       setMyClass('noneclass');
       setMyClass1('cborder');
       setMyClass2('noneclass');
       const text = e.target.textContent;
       setAddPartnerType(text)
     };

     const mclass2 = (e)=>{
       setMyClass('noneclass');
       setMyClass1('noneclass');
       setMyClass2('cborder')
       const text = e.target.textContent;
       setAddPartnerType(text)
     }

   

    return(
        <div className="partenr_details_card my-4 w-full flex-col flex shadow-2xl justify-center items-center p-6">
        <h2 className="py-5 font-black w-full text-start text-xl">Add Partners</h2>
        <h3 className="text-xl font-black text-start w-full">Type:</h3>
            <button onClick={mclass} className={`flex my-4 items-center w-full ${myclass} px-4 rounded-xl h-[50px] border-2`}><img src="images/individual.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Individual</span></button>
            <button onClick={mclass1} className={`flex ${myclass1} items-center w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/handshake.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">Partnership, Trust or LLC</span></button>
            <button onClick={mclass2} className={`flex ${myclass2} items-center mt-4 w-full px-4 rounded-xl h-[50px] border-2`}><img  src="images/building.png" lat="ok" className="w-[40px] h-[40px] rounded-full" /> <span className="ml-4 text-xl font-black">corporation</span></button>


        <div className="mt-2 w-full">
        <input value={addPartnerName} onChange={(e)=>setAddPartnerName(e.target.value)} className={`w-full border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Full Name:" type='text' />
        <span className="text-[#808080a8] text-sm">ee.g. Faisal</span>
        </div>

        <div className="mt-2 w-full">
        <input value={addPartnerAddress} onChange={(e)=> setAddPartnerAddress(e.target.value)} className={`w-full border-[black]  focus:outline-none mt-5 border-t-0 borfer-l-0 border-r-0 border-b-[2px]`} placeholder="Address:" type='text' />
        <span className="text-[#808080a8] text-sm">e.g. Street, City, State ZIP Code</span>
        </div>
 

        <button onClick={addPartner} className="hover:underline bg-black text-white mt-7 w-[200px]
                           outline-none  rounded-xl"><span className="text-xl">+ </span>Add Partner</button>

        </div>

    )
}


export default PartnerCard ;