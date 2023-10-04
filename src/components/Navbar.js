import React from 'react'
import Logo from "../Assests/Search_logo.png"


function Navbar() {
  return (
    <div className='w-full fixed'>
    <div className='w-auto h-12 bg-slate-200 mx-2 mt-2 rounded-md flex '>
        <div className='flex flex-0 bg-white w-1/3 h-auto mx-3 my-2 rounded-md'>
        <input name="query" className='ml-2 w-full flex-0 bg-white text-left' defaultValue={"Search"}/>
        <img src={Logo} className='flex-1 w-8 h-auto mr-2'/>
        </div>
        <div className='flex-1 mx-2 mt-3 w-1/12 text-left'>
            Relevance
        </div>
        <div className='flex-2 mx-2 mt-3 w-2/12 h-1 text-left'>
            Car Brand
        </div>
        <div className='flex-3 w-full'></div>
       
    </div></div>
  )
}

export default Navbar