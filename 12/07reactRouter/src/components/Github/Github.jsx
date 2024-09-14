import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'   //2nd method

function Github() {

//2nd method
const data=useLoaderData()       /// 'useLoaderData' hook

    //1st Method:
//  const [data,setData]=useState([])   
//  useEffect((()=>{

//   fetch('https://api.github.com/users/hiteshchoudhary')
//   .then((response)=>response.json())
//   .then(data=>{
//      setData(data)
//   }
//   )

//  }

//  ),[])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >Github followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
   
  )
}

export default Github

//2nd Method

export const githubInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
   
}
