import Nav from './Nav';
import {Link} from 'react-router-dom'
import React , {useContext, useState} from 'react';
import { ContextApi } from '../utilities/Context';
import { AgreementCat } from './AgreementCat';
import CatHead from './CateHead';
const AgreementForm = ()=>{

  const {da, setOpenModal, setCat, setOpenModal1} = useContext(ContextApi);

      const [modal, setModal] = useState('none');
     const [img , setImg] = useState(null)
     const [linkId, setLinkId] = useState('')

   const [category, setCategory] = useState('');
   
       
        setCat(category)
     const catSelector = (event, id) => {
           if(da?.userId == null){
            setCategory("please login your account or create an account ");
            setModal("flex");
           }else if(da?.isVerified ==  false){
            setCategory("please verifiy your account we've sent verification link to your email");
            setModal("flex");
           }else{
            setCategory(event.target.textContent);
            setModal("flex");
            const selectedObject = AgreementCat.find((el) => el.id === parseInt(id));
            setLinkId(selectedObject.id);
            if (selectedObject) {
              const imgKey = `img${selectedObject.id}`;
              setImg(selectedObject[imgKey]);
            }
           }
};

    return(


        <>
            <Nav/>
            
         <div className="w-full relative flex justify-start flex-col items-center">
          <CatHead/>

          <div onClick={()=> da == null ? '': setModal("none")} style={{display:modal}} id="cat_mes_desk" className="cat_message_wrap w-full h-[700px] absolute top-0 left-0 z-20 bg-[#000000cd] flex justify-center items-center flex-col">
                          <div className="w-[350px] h-[350px] bg-white  p-5 rounded-xl">
                           {
                            da == null ?  <h2 className="text-xl mt-20 text-center font-black text-[#f44545]">{category}</h2> : <>  <h3 className="text-black font-black text-2xl text-center">You have Selected </h3>
                            <img src={img } alt={img} className="w-[100px] mx-auto h-[100px]"/></>
                           }
                          {
                            da == null ? '' :   <h2 className="text-4xl text-center font-black text-[#5f4efa]">{category}</h2>
                          }
                            <div className="flex justify-between mt-10 w-full items-center">
                        {
                          da == null ? 
                          <>
                           <button onClick={()=> setOpenModal('scale(1')} className="px-[30px] rounded-xl py-3 font-black text-white bg-black">Sign In</button>
                           <button onClick={()=> setOpenModal1('scale(1')} className="px-[30px] rounded-xl py-3 font-black text-white bg-black">Sign Up</button>
                          </>
                          :<>        <button className="px-[30px] rounded-xl py-3 font-black text-white bg-black">Okay</button>
                          <Link to={`/agreement-0`} className="px-[30px] rounded-xl py-3 font-black text-white bg-black">Save and continue</Link></>
                        }
                            </div>
                          </div>
              </div>

           


              <div className="mt-3  w-full justify-start items-start">

                     <div className="w-[70%] shadow-xl  bg-[#d0cdcd]  mx-auto rounded-lg p-5 form_category_wrap">
                        <h1 className="text-2xl my-3 font-black text-black">In which industry will your partnership operate?</h1>
                  
                         <h2 className="text-4xl font-black text-[#5f4efa]"><span className="mr-4 text-black font-black text-3xl">You Have Selected</span>{category ? category :'0'}</h2>
                 
                        <div className="flex relative justify-between flex-wrap items-center">
                        <div onClick={()=> setModal("none")} style={{display:modal}} id="cat_mes" className="cat_message_wrap w-full h-[700px] absolute top-0 left-0 z-20 bg-[#000000cd] flex justify-center items-center flex-col">
                          <div className="w-[350px] h-[350px] bg-white  p-5 rounded-xl">
                            <h3 className="text-black font-black text-2xl text-center">You have Selected </h3>
                            <img src={img } alt={img} className="w-[100px] mx-auto h-[100px]"/>
                            <h2 className="text-4xl text-center font-black text-[#5f4efa]">{category}</h2>
                            <div className="flex justify-between mt-10 w-full items-center">
                            <button className="px-[30px] rounded-xl py-3 font-black text-white bg-black">Okay</button>
                               <Link to="/agreement-0" className="px-[30px] rounded-xl py-3 font-black text-white bg-black">Save and continue</Link>
                            </div>
                          </div>
              </div>


  {AgreementCat &&
    AgreementCat.map((element, indx) => (
      <div
        key={indx}
        tabindex="0" 
        className={`catcard catcard1 transition-[5s] relative w-[150px] h-[150px] cursor-pointer m-3 p-5 rounded-xl shadow-lg`}
      >
        <img src={element.img} alt="f1" className="w-[80px] z-0 h-[80px]" />
        
        <h2 className="leading-[20px] font-black">{element.name}</h2>
        <div
          onClick={(event)=> catSelector(event, element.id)}
          className="absolute z-10 top-0 left-0 w-full h-full"
        >
          <h2 className="leading-[20px] hidden font-black">
          {element.name}
          </h2>
        </div>
      </div>
    ))}      
</div>

<div className="btn_group my-5 flex justify-start items-center ">
<Link to={`/agreement-0`}  className="p-5 mr-3 rounded-xl bg-black text-white my-10">Save and Continue</Link>

</div>
                              

                     </div>
             </div>
         </div>

        
        </>
    )
}


export default AgreementForm;