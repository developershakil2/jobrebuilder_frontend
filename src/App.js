
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import AgreementForm from './components/AgreementForm';
import Agreement from './components/agreement/Agreement';
import StepTow from './components/agreement/components/StepTow';
import StepThree from './components/agreement/components/StepThree';
import StepFour from './components/agreement/components/StepFour';
import StepFive from './components/agreement/components/StepFive';
import StepSix from './components/agreement/components/StepSix';
import StepSeven from './components/agreement/components/StepSeven';
import StepEight from './components/agreement/components/StepEight';
import StepNine from './components/agreement/components/StepNine';
import StepTen from './components/agreement/components/StepTen';
import StepEleven from './components/agreement/components/StepEleven';
import StepTowel from './components/agreement/components/StepTowel';
import StepThirteen from './components/agreement/components/StepThirtneen';
import StepFourteen from './components/agreement/components/StepFourteen';
import StepFifteen from './components/agreement/components/StepFifteen';
import StepSixteen from './components/agreement/components/StepSixteen';
import StepSeventeen from './components/agreement/components/StepSeventeen';
import StepEighteen from './components/agreement/components/StepEighteen';
import StepNineteen from './components/agreement/components/StepNinteen';
import StepTwenty from './components/agreement/components/StepTwenty';
import StepTwentyOne from './components/agreement/components/StepTwentyOne';
import StepTwentyTow from './components/agreement/components/StepTwentytow';



function App() {


  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/agreement',
      element:<AgreementForm/>
    },
    {
      path:'/agreement-0',
      element:<Agreement/>
    },
    {
      path:'/step-2',
      element:<StepTow/>
    },
    {
      path:'/step-3',
      element:<StepThree/>
    },{
      path:'/step-4',
      element:<StepFour/>
    },
    {
      path:'/step-5',
      element:<StepFive/>
    },
    {
      path:'/step-6',
      element:<StepSix/>
    },
    {
      path:'/step-7',
      element:<StepSeven/>
    },
    {
      path:'/step-8',
      element:<StepEight/>
    },
    {
      path:'/step-9',
      element:<StepNine/>
    },
    {
      path:'/step-10',
      element:<StepTen/>
    },
    {
      path:'/step-11',
      element:<StepEleven/>
    },
    {
      path:'/step-12',
      element:<StepTowel/>
    },
    {
      path:'/step-13',
      element:<StepThirteen/>
    },{
      path:'/step-14',
      element:<StepFourteen/>
    },{
      path:'/step-15',
      element:<StepFifteen/>
    },
    {
      path:'/step-16',
      element:<StepSixteen/>
    },{
      path:'/step-17',
      element:<StepSeventeen/>
    },{
      path:'/step-18',
      element:<StepEighteen/>
    },
    {
      path:'/step-19',
      element:<StepNineteen/>
    },
    {
      path:'/step-20',
      element:<StepTwenty/>
    },
    {
      path:'/step-21',
      element:<StepTwentyOne/>
    },
    {
      path:'/step-22',
      element:<StepTwentyTow/>
    }
   
  ])
  return (
    <>

    <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
