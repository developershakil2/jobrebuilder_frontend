import React, {useState, useContext} from 'react';
import { ContextApi } from '../../../utilities/Context';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
function CheckoutForm({closeModal, formId}) {
  const {da} = useContext(ContextApi);
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(40)
 const [res, setRes] = useState('')
 const [payForm1, setPayform1] = useState('scale(0)');
 const [load1, setLoad1] = useState('none')

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      alert('Stripe has not yet loaded.');
      return;
    }

  
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      console.error(result.error);
      alert('Your card is invalid. Please provide a valid card to complete payment.');
      
    } else {
      const paymentMethodId = result.paymentMethod.id;

      try {
      setTimeout( async ()=>{
        const response = await axios.post('http://localhost:8000/charge', {
            amount: amount,
            paymentMethodId: paymentMethodId,
            formId:formId
          });
           if(response){
            setRes("your payment successfull now you can download your partnership agreement form Thank you for buy")
            openModal1();
           }
          console.log('Payment successful:', response.data);


      }, 2000)



  
      } catch (error) {
        console.error('Payment error:', error);
        alert("please check your card we can't process your payment")
        
      }
    }
  };
  const redirectFunc = ()=>{
    window.location.href= `/form?id=${da.userid}`
  }

  const openModal1 = ()=>{
   
    setLoad1('flex')
  setTimeout(()=>{
    setPayform1('scale(1)')
  
    setLoad1('none')
    setTimeout(()=>{
    setPayform1('scale(0)');
    closeModal()
    redirectFunc();
    },5000)
  },2000)
  
  }
  
  return (
    <div className="relative bg-white rounded-xl">


<div style={{display:load1}} className="fixed z-50 w-full h-screen top-0 left-0 bg-[#000000d5] flex justify-center items-center ">
          
          <div className="">
            <img className="w-[180px] h-[180px]" src="images/load.gif" alt="load" />
          </div>
    
     </div> 
     
     <div style={{transform:payForm1}} className="fixed z-50 w-full h-screen top-0 left-0 bg-[#0000009a] flex justify-center items-center ">
          <div className="w-[370px]  bg-white rounded-xl p-4">
          <div className="mx-auto flex justify-center items-center flex-col  w-full">
                   <img src="images/icon.png" alt="icons" className="w-20 h-16 rounded-full"/>
                   <h2 className="mt-3 mb-10 font-black text-xl">Job Rebuilder</h2>

                   <h2 className="text-xl mt-2 font-black">{res}</h2>
        </div>
          </div>
              
      </div> 




        <div className="w-full flex justify-end mt-4 pr-3">
            <button onClick={closeModal}><img className="w-[20px] h-[20px] " src="images/cross.png" alt="img"/></button>
         </div>
    <form className="shadow-xl bg-white relative rounded-lg w-[370px] mx-auto py-10 px-5" onSubmit={handleSubmit}>
         
      <div className="mx-auto flex justify-center items-center flex-col h-[80px] w-full">
                   <img src="images/icon.png" alt="icons" className="w-20 h-16 rounded-full"/>
                   <h2 className="mt-3 mb-10 font-black text-xl">Job Rebuilder</h2>
        </div>
      <label className="font-black  mt-5">
        Card Details
        <div className="mb-2 shadow-xl border-[1px] px-2 py-4 w-full"><CardElement /></div>
        <button className="outline-none border-none text-white font-black  shadow-xl bg-blue-600 px-10  py-1 " type="submit"> Pay ${amount}</button>
    
      </label>
      
      <div className="my-10"></div>
    
       <div className="absolute bottom-0 right-5">
           <img src="images/cards.png" alt="cards" className="w-[130px] object-contain  h-[90px]" />
       </div>
   
    </form>
    </div>
  );
}

export default CheckoutForm;
