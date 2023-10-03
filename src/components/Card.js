import React from 'react'
import car_image from "../Assests/car_image.png"
import {BsPeople,BsFuelPump,BsSpeedometer} from 'react-icons/bs'
import {GiSteeringWheel} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
function Card() {
  return (
    <div className='w-[30%] h-fit  bg-slate-200 mx-3 my-3 rounded-md'>
      <div className='h-3/5 w-auto rounded-md justify-center mx-5 my-5'><img src={car_image} className='rounded-md' ></img></div>
      <div className='w-auto h-auto flex mt-3 mx-5'>
        <div className='flex-0 tx-3 decoration-8 text-2xl w-4/5 text-left '>name</div>
        <div className='flex-1 rounded-md border-2 border-dashed w-1/5 h-auto border-slate-500 justify-right my-1'>2021</div>
      </div>
      <div className='flex mt-2'>
      <div className='flex-0 mx-5 my-1 h-auto w-2/5 flex '>
        <BsPeople className='border-slate-500 flex-0 align-middle h-full'/>
      <div className='flex-1 text-left ml-2 align-middle h-full text-sm'>4 People</div></div>
      <div className='flex-1 mx-5 my-1 h-auto w-2/5 flex'>
        <BsFuelPump className='border-slate-500 flex-0 align-middle h-auto'/>
      <div className='flex-1 text-left ml-2 align-middle h-auto text-sm'>4 People</div></div>
      </div>
      <div className='flex'>
      <div className='flex-0 mx-5 my-2 h-auto w-2/5 flex'>
        <BsSpeedometer className='border-slate-500 flex-0 align-middle h-full'/>
      <div className='flex-1 text-left ml-2 align-middle h-full text-sm'>4 People</div></div>
      <div className='flex-1 mx-5 my-2 h-auto w-2/5 flex'>
        <GiSteeringWheel className='border-slate-500 flex-0 align-middle h-full'/>
      <div className='flex-1 text-left ml-2 align-middle h-full text-sm'>4 People</div></div>
      </div>
      <div className='mx-5 bg-slate-400 w-auto h-0.5'/>  
      <div className='flex w-auto h-auto mx-5 my-2'>
        <div className='flex-0 text-3xl w-fit'>$600</div>
        <div className='flex-1 w-fit text-left mt-3'>/month</div>
        <button className='flex-2 w-8 h-8 my-2 bg-slate-300 rounded-md justify-center'><AiOutlineHeart className='w-full h-3/5'/></button>
        <button className='flex-3 w-fit px-2 h-8 my-2 mx-2 bg-slate-500 text-white rounded-md justify-center'>Rent Now</button>
      </div>  
      </div>
  )
}

export default Card