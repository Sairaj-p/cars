import React, { useEffect, useState } from 'react'
import car_image from "../Assests/car_image.png"
import {BsPeople,BsFuelPump,BsSpeedometer} from 'react-icons/bs'
import {GiSteeringWheel} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchcarslist } from '../Redux/carsSlice';
import { toBeRequired } from '@testing-library/jest-dom/matchers'

function Card() {

  const [PageCount, setPageCount] = useState(0);
  const [CarList, setCarList] = useState([]);
  const dispatch = useDispatch() 
  
  const data = useSelector((state)=>{
    return state
  })
  const carsdata = data.cars.cars.data
  

  window.addEventListener("load", (event) => {
    dispatch(fetchcarslist())
})

if(data.cars == null){
  dispatch(fetchcarslist())}

//    function page_change(e,query) {
//     e.preventDefault();
//     if(query==="+"){
//         console.log(query)
//      } else if (query === "-"){
//       console.log(query)

//     }
//     query = parseInt(query)
    
// };


useEffect(() => {
  // setCarList(carsdata.filter(filtercars))
  var l = new Array()
  carsdata.map((car) =>{
    if (parseInt(car.Id)<=6+(6*PageCount) && 1+(6*PageCount)<=parseInt(car.Id)){
      console.log(parseInt(car.Id))
      l.push(car)
    }
  })
  setCarList(l)
  console.log("CarsList",CarList)
}, [PageCount]);

const filtercars = (car)=>{
  return 1+(6*PageCount)<=car.Id<=6+(6*PageCount)
}

const page_change = (query)=>{
  if(query==="+"){
    if(PageCount<9){
      setPageCount(PageCount+1)
    }
 } else if (query === "-"){
  if(PageCount>0){
    setPageCount(PageCount-1)
  }
  }else{
    setPageCount(parseInt(query)-1)
  }
  console.log(PageCount)
}
const Cars = CarList

console.log("CarsList22",CarList)
  return (
    <div className='w-screen h-auto mt-14'>
        {Cars ? ( <div>
          <div className='flex flex-wrap justify-center'>
       {Cars.map((car, index) => (
    <div className='w-[30%] h-fit  bg-slate-200 mx-3 my-3 rounded-md'>
      <div className='h-3/5 w-auto rounded-md justify-center mx-5 my-5'><img src={car_image} className='rounded-md' ></img></div>
      <div className='w-auto h-auto flex mt-3 mx-5'>
        <div className='flex-0 tx-3 decoration-8 text-2xl w-4/5 text-left '>{car.Company} {car.Name}</div>
        <div className='flex-1 rounded-md border-2 border-dashed w-1/5 h-auto border-slate-500 justify-right my-1'>{car.Year}</div>
      </div>
      <div className='flex mt-2'>
      <div className='flex-0 mx-5 my-1 h-auto w-2/5 flex '>
        <BsPeople className='border-slate-500 flex-0 align-middle h-full'/>
      <div className='flex-1 text-left ml-2 align-middle h-full text-sm'>{car.Occupancy}</div></div>
      <div className='flex-1 mx-5 my-1 h-auto w-2/5 flex'>
        <BsFuelPump className='border-slate-500 flex-0 align-middle h-auto'/>
      <div className='flex-1 text-left ml-2 align-middle h-auto text-sm'>{car.FuelType}</div></div>
      </div>
      <div className='flex'>
      <div className='flex-0 mx-5 my-2 h-auto w-2/5 flex'>
        <BsSpeedometer className='border-slate-500 flex-0 align-middle h-full'/>
      <div className='flex-1 text-left ml-2 align-middle h-full text-sm'>{car.Mileage}</div></div>
      <div className='flex-1 mx-5 my-2 h-auto w-2/5 flex'>
        <GiSteeringWheel className='border-slate-500 flex-0 align-middle h-full'/>
      <div className='flex-1 text-left ml-2 align-middle h-full text-sm'>{car.Transmission}</div></div>
      </div>
      <div className='mx-5 bg-slate-400 w-auto h-0.5'/>  
      <div className='flex w-auto h-auto mx-5 my-2'>
        <div className='flex-0 text-3xl w-fit'>{car.RentPerMonth}</div>
        <div className='flex-1 w-fit text-left mt-3'>/month</div>
        <button className='flex-2 w-8 h-8 my-2 bg-slate-300 rounded-md justify-center'><AiOutlineHeart className='w-full h-3/5'/></button>
        <button className='flex-3 w-fit px-2 h-8 my-2 mx-2 bg-slate-500 text-white rounded-md justify-center'>Rent Now</button>
      </div>  
      </div>
      ))}
      </div>
        </div>):(<div>None</div>)}
        <div className='w-auto h-auto flex mx-12'>
          <div className='w-auto flex-0 text-left' >6/60</div>
          <div className='w-fit flex-1 text-left' > Page No. {PageCount+1}</div>
          <button className='flex-2 h-auto w-7 bg-white mx-2 my-1 rounded-md' onClick={() =>page_change("-")}> ← </button>
          <button className='flex-3 h-auto w-7 bg-white mx-2 my-1 rounded-md' onClick={() =>page_change(1)}>1</button>
          <button className='flex-4 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(2)}>2</button>
          <button className='flex-5 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(3)}>3</button>
          <button className='flex-6 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(4)}>4</button>
          <button className='flex-7 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(5)}>5</button>
          <button className='flex-8 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(6)}>6</button>
          <button className='flex-9 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(7)}>7</button>
          <button className='flex-10 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(8)}>8</button>
          <button className='flex-11 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(9)}>9</button>
          <button className='flex-12 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change(10)}>10</button>
          <button className='flex-13 h-auto w-7 bg-white my-1 mx-2 rounded-md' onClick={() =>page_change("+")}>→</button>
        </div>
      </div>

  )
}

export default Card