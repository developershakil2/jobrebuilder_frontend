import React, { useEffect } from "react";
import Typed from "typed.js";

const FourScreen = () => {
  useEffect(() => {
    const type = new Typed('.element', {
      strings: [`Juice Truck in Arizona State University in the Tempe campus. Arizona is a warm place most of the year, people can use fresh healthy juices in a weather like that. ASU is one of the largest schools in the nation, nearly 80K students attend the Tempe campus. Offering fresh juices, smoothies, fruit bowls would be ideal in such a climate.`],
      typeSpeed: 30,
   
    });


    const type1 = new Typed('.element1', {
        strings:[`The juice and Smoothie industry is about  $3 Billion currently in 2023, it’s expected to increase by 0.7% in 2024. ASU is known for its emphasis on health and wellness, that provides a receptive environment for such a venture. The popularity of health-conscious options among students, faculty, and staff creates a favorable niche for a juice/smoothie truck. According to a survey conducted among ASU students, a significant portion expressed a desire for more convenient and nutritious on-the-go food options. The geographical advantage of being mobile allows the truck to cater to various parts of town considering that ASU is the heart of Tempe.`]
        ,typeSpeed:30
    })
   
    const type2 = new Typed('.element2',{
        strings:[`While there’s Jamba Juice on campus, our mobile truck provides much better  convenience and accessibility. SWOT analysis: 
        Strengths: 
        healthier options (raw honey, no sugar).
        Affordability. 
        Ability to cater easily.
        Weaknesses:
        No large machinery equipment.
        Limited items that can be prepared.
        Opportunities:
        Limited options for healthy products.
        Cold healthy drinks match the with the heat.
        Threats: 
        Campus is usually not as busy in breaks.
        Competing with a big corp like Jamba Juice.
        
        
        While there’s Jamba Juice on campus, our mobile truck provides much better  convenience and accessibility. SWOT analysis: 
Strengths: 
healthier options (raw honey, no sugar).
Affordability. 
Ability to cater easily.
Weaknesses:
No large machinery equipment.
Limited items that can be prepared.
Opportunities:
Limited options for healthy products.
Cold healthy drinks match the with the heat.
Threats: 
Campus is usually not as busy in breaks.
Competing with a big corp like Jamba Juice.


`],

typeSpeed:30
    })


    const type3 = new Typed('.element3',{
        strings:[`Target Audience: ASU students, staff, Doordash, UberEats and other food delivery services.
        Prices: $3.75 to $5.75 for juices.
                     $4.50 to $6.50 for smoothies.
                     $3.50 to 5.50 for fruit bowls.
        Brief Business Plan: We’ll be sourcing our fruit and vegetables from companies that sell the produces that supermarkets don’t want due to their looks.
        Operation hours are M-F in ASU campus 8am-7pm. We’ll be participating in the farmers market and other street food venues.
        `],
        typeSpeed:30
    })

   const type4 = new Typed('.element4', {
    strings:[`
    Equipment: $1,500
    Monthly space monthly rent: $1,000
    Monthly food truck rental: $1,500
    Monthly Fruit stock: $500
    Monthly repair: $200
    
    `],
    typeSpeed:35
   })

  const type5 = new Typed('.element5',{
    strings:[`$4,700`],
    typeSpeed:35
  })
 const type6 = new Typed('.element6',{
    strings:[`Our projection is to hit $250k in the first year.
    We plan to start by generating $500-$1,000 a day on the weekdays M-F , and generate around $2,000 on the weekends.
    We plan to expand after the first year to opening another truck in downtown Phoenix AZ. `],
    typeSpeed:30
 })

    return () => {
      type.destroy();
      type1.destroy();
      type2.destroy();
      type3.destroy();
      type4.destroy();
      type5.destroy();
      type6.destroy();
    };
  }, []); 

  return (
    <>
      <div className="screen_wrapper  mx-auto flex-col flex justify-center mt-10 w-full">
        <img
          src="screens/s4.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Description</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element leading-[18px] text-sm"></p>
        </div>


        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Market Recharch</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element1 leading-[18px] text-sm"></p>
        </div>


        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Compitition</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element2 leading-[18px] text-sm"></p>
        </div>

        
        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Aditional Details</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element3 leading-[18px] text-sm"></p>
        </div>


        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Expenses</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element4 leading-[18px] text-sm"></p>
        </div>

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Total Budget</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element5 leading-[18px] text-sm"></p>
        </div>

        <div className="w-full px-2 mt-1   h-[40%] rounded-xl bg-[#EEEEEE] p-1">
            <div className="w-full flex justify-between items-center">
                <span className="text-xs ">Vision Projection</span>
                <span className="border-[1px] border-[#1111117e] text-black font-black w-[20px] h-[20px] flex justify-center items-center rounded-full"><span className="mb-2">...</span></span>
            </div>
          <p className="element6 leading-[18px] text-sm"></p>
        </div>

        <img
          src="screens/s5.png"
          alt="jobrebuilder"
          className="h-[30%] w-full object-contain"
        />
      </div>
    </>
  );
};

export default FourScreen;
