import React, {createContext, useState} from 'react';


export const ContextApi = createContext();

const ContextComponent = ({children})=>{
  
      
    const [progressWidth, setProgressWidth] = useState('10%')
  

    return(
        <>
        <ContextApi.Provider value={{setProgressWidth, progressWidth}}>
           {children}
        </ContextApi.Provider>
       
        </>
    )

}



export default ContextComponent