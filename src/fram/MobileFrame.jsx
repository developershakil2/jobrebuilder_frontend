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


 const st1 = ()=>{
  setC3(true);
  setC2(false);
  setC1(false);
 }
 const st2 = ()=>{
  setC4(true);
  setC3(false);
  setC2(false);
  setC1(false);
 }
 const st3 = ()=>{
  setC5(true);
  setC4(false);
  setC3(false);
  setC2(false);
  setC1(false);
 }
 const st4 = ()=>{
  setC6(true);
  setC5(false);
  setC4(false);
  setC3(false);
  setC2(false);
  setC1(false);
 }
 const st5 = ()=>{
  setC7(true);
  setC6(false);
  setC5(false);
  setC4(false);
  setC3(false);
  setC2(false);
  setC1(false);

 }
 const st6 = ()=>{
  setC8(true);
  setC7(false);
  setC6(false);
  setC5(false);
  setC4(false);
  setC3(false);
  setC2(false);
  setC1(false);
 }
 const st7 = ()=>{
  setC9(true);
  setC8(false);
  setC7(false);
  setC6(false);
  setC5(false);
  setC4(false);
  setC3(false);
  setC2(false);
  setC1(false);
 }
 const st8 = ()=>{
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
 }
 const st9 = ()=>{
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
 }
 const st10 = ()=>{
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
 }
 const st11 = ()=>{
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
 }
 const st12 = ()=>{
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
  setC1(false);
 }
 const st13 = ()=>{
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
 }
 const st14 = ()=>{
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
 }
 const st15 = ()=>{
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
 }
 const st16 = ()=>{
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
 }
 const st17 = ()=>{
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
 }
 const st18 = ()=>{
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
 }
 const st19 = ()=>{
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
 }
 const st20 = ()=>{
  setC22(false);
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
  setC1(true)
 }
 const StartDemo = ()=>{
  setC2(true);
  setC1(false);

 }
 const fn1 = ()=>{
  setN2(true)
  setN1(false);
  setC1(false);
 }
 const fn2 = ()=>{
  setN3(true)
      setN2(false)
      setN1(false);
      setC1(false);
 }
const fn3 = ()=>{
  setN4(true);
  setN3(false);
  setN2(false)
  setN1(false);
  setC1(false);
}
const fn4 = ()=>{
           setN5(true);
          setN4(false);
          setN3(false);
          setN2(false)
          setN1(false);
          setC1(false);
}
const fn5 = ()=>{
            setN6(true);
            setN5(false);
            setN4(false);
            setN3(false);
            setN2(false)
            setN1(false);
            setC1(false);
}
const fn6 = ()=>{
  setN7(true);
  setN6(false);
  setN5(false);
  setN4(false);
  setN3(false);
  setN2(false)
  setN1(false);
  setC1(false);
}
const fn7 = ()=>{
  setN8(true);
  setN7(false);
  setN6(false);
  setN5(false);
  setN4(false);
  setN3(false);
  setN2(false)
  setN1(false);
  setC1(false);
}
const fn8 = ()=>{
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
}
const fn9 = ()=>{
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
}
const fn10 = ()=>{
  setN11(false);
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
  setC1(true);
}
 const nextDemo = ()=>{
  setC1(false);
  setN1(true);
   
 }


    return(
        <>
        
     <div className="mobile_frame_wrapper bg-[#fff]  w-[80%] relative rounded-[80px]">
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
                c2 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><FirstScreen st1={st1}/></div>:''
               }
               {
                c3 == true ?  <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><SecondScreen st2={st2}/></div>:''
               }
               {
                c4 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><ThirdScreen st3={st3}/></div>:''
               }
               {
                c5 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
                <FourScreen st4={st4}/>
                </div>:''
               }

              {
                c6 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
                <FiveScreen st5={st5}/>
                </div>:''
              }
              {
                c7 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><SixScreen st6={st6}/></div>:''
              }

                {
                  c8 == true ?  <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
                  <SevenScreen st7={st7}/>
                  </div>:''
                }

              {
                c9 == true ?  <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
                <EightScreen st8={st8}/>
                </div>:''
              }
               {
                c10 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><NineScreen st9={st9}/></div>:''
               }

               {
                c11 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"> <TenScreen st10={st10}/></div>:''
               }
              {
                c12  == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
                <ElevenScreen st11={st11}/>
                              </div>:''
              }

            {
              c13 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
              <TwelScreen st12={st12}/>
               
                             </div>:''
            }

             {
              c14 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]">
            
              <ThirteenScreen st13={st13}/>
                
                  </div>:''
             }

           {
            c15 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]"> <FourteenScreen st14={st14}/></div>:''
           }
           {
            c16 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]"><FiScreen st15={st15}/></div>:''
           }
          {
            c17 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]"><SiScreen st16={st16}/></div>:''
          }
         {
          c18 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]"> <SeScreen st17={st17}/></div>:''
         }

        {
          c19 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]"> <EiScreen st18={st18}/></div>:''
        }
       {
        c20 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]"> <NiScreen st19={st19}/></div>:''
       }
      {
        c21 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%] h-[650px]"> <TwScreen st20={st20}/></div>:''
      }
     















<>
{
  n1 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
  <OScreen fn1={fn1} />
  
  </div>:''
}
{
  n2 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"> <TScreen fn2={fn2}/></div>:''
}
{
  n3 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><ThScreen fn3={fn3}/></div> :''
}
{
  n4 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
  <FScreen fn4={fn4}/>
  </div>:''
}

{
  n5 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
  <FifthScreen fn5={fn5}/>
  </div>:''
}
{
  n6 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><SScreen fn6={fn6}/></div>:''
}
{
  n7 == true ?<div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><SevScreen fn7={fn7}/></div> :
  ''
}
{
  n8 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]">
  <EScreen fn8={fn8}/>
</div>:
''
}
{
  n9 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><NScreen fn9={fn9}/></div>:''
}
{
  n10 == true ? <div className="w-full scWrapper overflow-y-scroll absolute top-[7%]  h-[650px]"><T10Screen fn10={fn10}/></div> :''
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