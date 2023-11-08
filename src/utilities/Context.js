import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';


export const ContextApi = createContext();

const ContextComponent = ({children})=>{
   const [progressWidth, setProgressWidth] = useState('10%')
       
   const [openModal, setOpenModal] = useState('scale(0)')
   const [openModal1, setOpenModal1] = useState('scale(0)')
   const [openModal2, setOpenModal2] = useState("scale(0)");
   const [loginDetails, setLoginDetails] = useState('');

   const [addPartnerName, setAddPartnerName] = useState('');
   const [addPartnerAddress, setAddPartnerAddress] = useState('')
   const [addPartnerType, setAddPartnerType] = useState('Individual')
   const codata = localStorage.getItem("userData");
   const da = JSON.parse(codata)

   const fm = localStorage.getItem("fm");
  //**form steps start here *//

 const [step1, setStep1] = useState(fm?.step1);

 const [step2, setStep2] = useState(fm?.step2)




  //**form steps end here */







const [ cat, setCat] = useState('')



   const [partners, setPartners] = useState([{
    fullName:'',
    address:'',
    partnerType:''
   }]);


   const [partnerDetails, setPartnerDetails] = useState({
        user:`${da?.userId}`,
        category:`${cat}`,
         partnerDetails:{
            step1:{
                state:'', 
                address:''
              },
              step2:{
                startDate:'',
                endDate:''
              },
              step3:{
                partnerDescription:'',
                partnerName:''
              },
              step4:{
                partners:{
                    partners
                }
                
              },
              step5:{
                typeEffort:{
                    web:'',
                    amount:0
                },
                cash:0,
                equipment:{
                    equipment:'',
                    eValue:0
                },
                others:{
                    loan:'',
                    lValue:'',
                }
              }
         }
   })
   
   const Login = (loginEmail, loginPass)=>{

    const logData = {
         email:loginEmail,
         password:loginPass
    }
    axios.post("http://localhost:8000/get-user", logData)
    .then((res) => {
      if (res.status === 404 || res.status === 401) {
        if (res.data && res.data.error) {
          alert(res.data.error);
        } else {
          alert('Password, email, or user not registered');
        }
      } else if (res.status === 200) {
        setLoginDetails(res.data.message);
  
        const data = {
          email: res.data.message.email,
          phone: res.data.message.phoneNumber,
          userId: res.data.message._id,
          form: res.data.message.form,
          isVerified: res.data.message.isVerified
        };
  
        const jsondata = JSON.stringify(data);
        localStorage.setItem("userData", jsondata);
  
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  
    

}


const handleDownload = async (formId) => {
  try {

    const apiUrl = `http://localhost:8000/live-form/${formId}`;
    const response = await axios.get(apiUrl, {
      responseType: 'blob', // Set the response type to 'blob' for binary data (PDF).
    });

    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'agreement_form.pdf';
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
};

const [pdfUrl, setPdfUrl] = useState('');
const [userForm, setUserForm] = useState([]);

useEffect(() => {
  const apiUrl = `http://localhost:8000/get-form/${da?.userId}`;

  axios
    .post(apiUrl)
    .then((response) => {
      response.data.forEach((el) => {
        if (el.status === 'draft') {
          setPdfUrl(el);
          return;
        }
      });
    })
    .catch((error) => {
      console.error('Error fetching form:', error);
    });

    axios.post(apiUrl)
    .then((res) => {
      setUserForm(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });






}, []);


    return(
        <>
        <ContextApi.Provider value={{
            handleDownload, pdfUrl, userForm,
            addPartnerName, setAddPartnerName,
            addPartnerAddress, setAddPartnerAddress,
            addPartnerType,
            setAddPartnerType,
          step1, setStep1, step2, setStep2, 
      
          cat, openModal2,da, setCat, loginDetails, Login, setOpenModal2, setProgressWidth, progressWidth, openModal, setOpenModal, openModal1, setOpenModal1}}>
        
           {children}
        </ContextApi.Provider>
       
        </>
    )

}



export default ContextComponent