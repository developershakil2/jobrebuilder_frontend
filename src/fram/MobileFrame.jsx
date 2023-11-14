
import React, { useEffect, useRef, useState } from 'react';
import FirstScreenPart from "./FirestScreenPart";
import FirstScreen from "./FirstScreen";
import FourScreen from "./FourScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FiveScreen from './FiveScreen';
import SixScreen from './SixScreen';
import SevenScreen from './SevenScreen';
import EightScreen from './EightScreen';
import NineScreen from './NineScreen';
import TenScreen from './TenScreen';
import ElevenScreen from './ElevenScreen';
import TwelScreen from './TwelScreen';
import ThirteenScreen from './ThirteenScreen';
import FourteenScreen from './FourteenScreen';
import FiScreen from './FiScreen';
import SiScreen from './SiScreen';
import SeScreen from './SeScreen';
import EiScreen from './EiScreen';
import NiScreen from './Niscreen';
import TwScreen from './TwScreen';
import TOScreen from './TOScreen';
import OScreen from './OScreen';
import TScreen from './TScreen';
import ThScreen from './ThScreen';
import FScreen from './FScreen';
import FifthScreen from './FifthScreen';
import SScreen from './SScreen';
import SevScreen from './SevScreen';
import EScreen from './EScreen';
import NScreen from './NScreen';
import T10Screen from './T10Screen';
import E11Screen from './E11Screen';

const MobileFrame = ()=>{

  const scrollUseRef = useRef(null);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const components = [
    FirstScreenPart,
    FirstScreen,
    SecondScreen,
   
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentComponentIndex < components.length - 1) {
        setCurrentComponentIndex(currentComponentIndex + 1);
      } else {
  
        setCurrentComponentIndex(0);
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentComponentIndex]);

  useEffect(() => {
    if (scrollUseRef.current) {
      scrollUseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentComponentIndex]);


 const [c1, setC1] = useState(true)
 const [c2, setC2] = useState(false)
 const [c3, setC3] = useState(false)
 const [c4, setC4] = useState(false)
 const [c5, setC5] = useState(false)
 const [c6, setC6] = useState(false)
 const [c7, setC7] = useState(false)
 const [c8, setC8] = useState(false)
 const [c9, setC9] = useState(false)
 const [c10, setC10] = useState(false)
 const [c11, setC11] = useState(false)
 const [c12, setC12] = useState(false)
 const [c13, setC13] = useState(false)
 const [c14, setC14] = useState(false)
 const [c15, setC15] = useState(false)
 const [c16, setC16] = useState(false)
 const [c17, setC17] = useState(false)
 const [c18, setC18] = useState(false)
 const [c19, setC19] = useState(false)
 const [c20, setC20] = useState(false)
 const [c21, setC21] = useState(false)
 const [c22, setC22] = useState(false)





 const [n1, setN1] = useState(false)
 const [n2, setN2] = useState(false)
 const [n3, setN3] = useState(false)
 const [n4, setN4] = useState(false)
 const [n5, setN5] = useState(false)
 const [n6, setN6] = useState(false)
 const [n7, setN7] = useState(false)
 const [n8, setN8] = useState(false)
 const [n9, setN9] = useState(false)
 const [n10, setN10] = useState(false)
 const [n11, setN11] = useState(false)

 const StartDemo = ()=>{
 
   setTimeout(()=>{
    setC2(true);
    setC1(false);


    setTimeout(()=>{
      setC3(true);
      setC2(false);
      setC1(false);

      setTimeout(()=>{
        setC4(true);
        setC3(false);
        setC2(false);
        setC1(false);

        setTimeout(()=>{
          setC5(true);
          setC4(false);
          setC3(false);
          setC2(false);
          setC1(false);

          setTimeout(()=>{
            setC6(true);
            setC5(false);
            setC4(false);
            setC3(false);
            setC2(false);
            setC1(false);

            setTimeout(()=>{
              setC7(true);
              setC6(false);
              setC5(false);
              setC4(false);
              setC3(false);
              setC2(false);
              setC1(false);

              setTimeout(()=>{
                setC8(true);
                setC7(false);
                setC6(false);
                setC5(false);
                setC4(false);
                setC3(false);
                setC2(false);
                setC1(false);

                setTimeout(()=>{
                  setC9(true);
                  setC8(false);
                  setC7(false);
                  setC6(false);
                  setC5(false);
                  setC4(false);
                  setC3(false);
                  setC2(false);
                  setC1(false);

                  setTimeout(()=>{
                    setC10(true);
                    setC9(false);
                    setC8(false);
                    setC7(false);
                    setC6(false);
                    setC5(false);
                    setC4(false);
                    setC3(false);
                    setC2(false);
                    setC1(false);

                    setTimeout(()=>{
                      setC11(true);
                      setC10(false);
                      setC9(false);
                      setC8(false);
                      setC7(false);
                      setC6(false);
                      setC5(false);
                      setC4(false);
                      setC3(false);
                      setC2(false);
                      setC1(false);

                      setTimeout(()=>{
                        setC12(true);
                        setC11(false);
                        setC10(false);
                        setC9(false);
                        setC8(false);
                        setC7(false);
                        setC6(false);
                        setC5(false);
                        setC4(false);
                        setC3(false);
                        setC2(false);
                        setC1(false);

                        setTimeout(()=>{
                          setC13(true);
                          setC12(false);
                          setC11(false);
                          setC10(false);
                          setC9(false);
                          setC8(false);
                          setC7(false);
                          setC6(false);
                          setC5(false);
                          setC4(false);
                          setC3(false);
                          setC2(false);
                          setC1(false);

                          setTimeout(()=>{
                            setC14(true);
                            setC13(false);
                            setC12(false);
                            setC11(false);
                            setC10(false);
                            setC9(false);
                            setC8(false);
                            setC7(false);
                            setC6(false);
                            setC5(false);
                            setC4(false);
                            setC3(false);
                            setC2(false);
                            setC1(false)
                           },3000);

                           setTimeout(()=>{
                            setC15(true);
                            setC14(false);
                            setC13(false);
                            setC12(false);
                            setC11(false);
                            setC10(false);
                            setC9(false);
                            setC8(false);
                            setC7(false);
                            setC6(false);
                            setC5(false);
                            setC4(false);
                            setC3(false);
                            setC2(false);
                            setC1(false);

                            setTimeout(()=>{
                              setC16(true);
                              setC15(false);
                              setC14(false);
                              setC13(false);
                              setC12(false);
                              setC11(false);
                              setC10(false);
                              setC9(false);
                              setC8(false);
                              setC7(false);
                              setC6(false);
                              setC5(false);
                              setC4(false);
                              setC3(false);
                              setC2(false);
                              setC1(false);

                              setTimeout(()=>{
                                setC17(true);
                                setC16(false);
                                setC15(false);
                                setC14(false);
                                setC13(false);
                                setC12(false);
                                setC11(false);
                                setC10(false);
                                setC9(false);
                                setC8(false);
                                setC7(false);
                                setC6(false);
                                setC5(false);
                                setC4(false);
                                setC3(false);
                                setC2(false);
                                setC1(false);

                                setTimeout(()=>{
                                  setC18(true);
                                  setC17(false);
                                  setC16(false);
                                  setC15(false);
                                  setC14(false);
                                  setC13(false);
                                  setC12(false);
                                  setC11(false);
                                  setC10(false);
                                  setC9(false);
                                  setC8(false);
                                  setC7(false);
                                  setC6(false);
                                  setC5(false);
                                  setC4(false);
                                  setC3(false);
                                  setC2(false);
                                  setC1(false);

                                  setTimeout(()=>{
                                    setC19(true);
                                    setC18(false);
                                    setC17(false);
                                    setC16(false);
                                    setC15(false);
                                    setC14(false);
                                    setC13(false);
                                    setC12(false);
                                    setC11(false);
                                    setC10(false);
                                    setC9(false);
                                    setC8(false);
                                    setC7(false);
                                    setC6(false);
                                    setC5(false);
                                    setC4(false);
                                    setC3(false);
                                    setC2(false);
                                    setC1(false);

                                    setTimeout(()=>{
                                      setC20(true);
                                      setC19(false);
                                      setC18(false);
                                      setC17(false);
                                      setC16(false);
                                      setC15(false);
                                      setC14(false);
                                      setC13(false);
                                      setC12(false);
                                      setC11(false);
                                      setC10(false);
                                      setC9(false);
                                      setC8(false);
                                      setC7(false);
                                      setC6(false);
                                      setC5(false);
                                      setC4(false);
                                      setC3(false);
                                      setC2(false);
                                      setC1(false);

                                      setTimeout(()=>{
                                        setC21(true);
                                        setC20(false);
                                        setC19(false);
                                        setC18(false);
                                        setC17(false);
                                        setC16(false);
                                        setC15(false);
                                        setC14(false);
                                        setC13(false);
                                        setC12(false);
                                        setC11(false);
                                        setC10(false);
                                        setC9(false);
                                        setC8(false);
                                        setC7(false);
                                        setC6(false);
                                        setC5(false);
                                        setC4(false);
                                        setC3(false);
                                        setC2(false);
                                        setC1(false);


                                        setTimeout(()=>{
                                          setC22(true);
                                          setC21(false);
                                          setC20(false);
                                          setC19(false);
                                          setC18(false);
                                          setC17(false);
                                          setC16(false);
                                          setC15(false);
                                          setC14(false);
                                          setC13(false);
                                          setC12(false);
                                          setC11(false);
                                          setC10(false);
                                          setC9(false);
                                          setC8(false);
                                          setC7(false);
                                          setC6(false);
                                          setC5(false);
                                          setC4(false);
                                          setC3(false);
                                          setC2(false);
                                          setC1(false)
                                         },3000)
                                       },3000)
                                     },3000)
                                   },3000)
                                 },3000)
                               },3000)
                             },3000)
                           },3000)
                         },3000)
                       },3000)
                     },3000)
                   },3000)
                 },6000)
               },3000)
             },8000)
           },10000)
         },3000)
       },3000)
     },10000)
   },100)

 
 }


 const nextDemo = ()=>{
  setC1(false);
  setN1(true);

  setTimeout(()=>{
    setN2(true)
    setN1(false);
    setC1(false);

    setTimeout(()=>{
      setN3(true)
      setN2(false)
      setN1(false);
      setC1(false);

      setTimeout(()=>{
        setN4(true);
        setN3(false);
        setN2(false)
        setN1(false);
        setC1(false);
       
        setTimeout(()=>{
          setN5(true);
          setN4(false);
          setN3(false);
          setN2(false)
          setN1(false);
          setC1(false);
         
          setTimeout(()=>{
            setN6(true);
            setN5(false);
            setN4(false);
            setN3(false);
            setN2(false)
            setN1(false);
            setC1(false);
           
            setTimeout(()=>{
              setN7(true);
              setN6(false);
              setN5(false);
              setN4(false);
              setN3(false);
              setN2(false)
              setN1(false);
              setC1(false);
             
              setTimeout(()=>{
                setN8(true);
                setN7(false);
                setN6(false);
                setN5(false);
                setN4(false);
                setN3(false);
                setN2(false)
                setN1(false);
                setC1(false);
               
                setTimeout(()=>{
                  setN9(true);
                  setN8(false);
                  setN7(false);
                  setN6(false);
                  setN5(false);
                  setN4(false);
                  setN3(false);
                  setN2(false)
                  setN1(false);
                  setC1(false);
                 
                  setTimeout(()=>{
                    setN10(true);
                    setN9(false);
                    setN8(false);
                    setN7(false);
                    setN6(false);
                    setN5(false);
                    setN4(false);
                    setN3(false);
                    setN2(false)
                    setN1(false);
                    setC1(false);
                   
                    setTimeout(()=>{
                      setN11(true);
                      setN10(false);
                      setN9(false);
                      setN8(false);
                      setN7(false);
                      setN6(false);
                      setN5(false);
                      setN4(false);
                      setN3(false);
                      setN2(false)
                      setN1(false);
                      setC1(false);
                     
                      
                    },3000)
                  },3000)
                },3000)
              },3000)
            },3000)
            
          },3000)
        },3000)
      },3000)
     
    },3000)
   
  },3000)
   
 }






    return(
        <>
        
     <div className="mobile_frame_wrapper  bg-[#fff] w-[80%] relative rounded-[80px]">
     <div className="mobile_fram absolute top-0 left-0">

     {/* {components.map((Component, index) => (
            <div key={index} style={{ display: index === currentComponentIndex ? 'block' : 'none' }}>
              <Component />
            </div>
          ))} 
                 */}
                {
          c1 == true ? 
        <FirstScreenPart StartDemo={StartDemo} nextDemo={nextDemo}/>
               :''
                }                 
               {
                c2 == true ? <FirstScreen/>:''
               }
               {
                c3 == true ? <SecondScreen/>:''
               }
               {
                c4 == true ? <ThirdScreen/>:''
               }
               {
                c5 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
                <FourScreen/>
                </div>:''
               }

              {
                c6 == true ?  <div  className="scrollable overflow-y-scroll h-[95%]">
                <FiveScreen/>
                </div>:''
              }
              {
                c7 == true ? <SixScreen/>:''
              }

                {
                  c8 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
                  <SevenScreen/>
                  </div>:''
                }

              {
                c9 == true ?  <div  className="scrollable overflow-y-scroll h-[95%]">
                <SevenScreen/>
                </div>:''
              }
               {
                c10 == true ? <NineScreen/>:''
               }

               {
                c11 == true ? <TenScreen/>:''
               }
              {
                c12  == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
                <ElevenScreen/>
                              </div>:''
              }

            {
              c13 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
              <TwelScreen/>
               
                             </div>:''
            }

             {
              c14 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
            
              <ThirteenScreen/>
                
                  </div>:''
             }

           {
            c15 == true ? <FourteenScreen/>:''
           }
           {
            c16 == true ? <FiScreen/>:''
           }
          {
            c17 == true ? <SiScreen/>:''
          }
         {
          c18 == true ? <SeScreen/>:''
         }

        {
          c19 == true ? <EiScreen/>:''
        }
       {
        c20 == true ? <NiScreen/>:''
       }
      {
        c21 == true ? <TwScreen/>:''
      }
     {
      c22 == true ? <TOScreen/>:''
     }















<>
{
  n1 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
  <OScreen/>
  
  </div>:''
}
{
  n2 == true ? <TScreen/>:''
}
{
  n3 == true ? <ThScreen/>:''
}
{
  n4 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
  <FScreen/>
  </div>:''
}

{
  n5 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
  <FifthScreen/>
  </div>:''
}
{
  n6 == true ? <SScreen/>:''
}
{
  n7 == true ? <SevScreen/>:
  ''
}
{
  n8 == true ? <div  className="scrollable overflow-y-scroll h-[95%]">
  <EScreen/>
</div>:
''
}
{
  n9 == true ? <NScreen/>:''
}
{
  n10 == true ? <T10Screen/>:''
}
{
  n11 == true ? <E11Screen/>:''
}
</>







                 </div>
     </div>





        </>
    )
}


export default MobileFrame ;