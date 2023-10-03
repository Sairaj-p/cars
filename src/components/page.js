import React from 'react'
import Card from './Card'
import { fetchcarsAsync } from '../Redux/carsSlice';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function Page() { 
    // const data = useSelector((state)=>{
    //     return state.cars.products
    // })
  
  return (
    <div className='flex flex-wrap justify-center'>
        <Card/>
        <Card/>
        <Card/>
        </div>
  )
}

export default Page