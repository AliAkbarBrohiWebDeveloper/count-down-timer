"use client"

import React,  {useState,useEffect} from "react"



const CountDowntimer:React.FC=()=>{

    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);

const [remainingTime,setRemainingTime]=useState(0)
useEffect(()=>{

    let timer:NodeJS.Timeout;
    if (isRunning && remainingTime > 0){
        timer=setInterval(()=>{
setRemainingTime((prev)=> prev -1)

        },1000)
    }else if (remainingTime===0){

        setIsRunning(false)
    }
    return ()=> clearInterval(timer)

},[isRunning,remainingTime]  )


const handleStart=()=>{
if (time>0){
    setIsRunning(true)
    setRemainingTime(time)
}

}

const handlepause=()=>{

    setIsRunning(false)
}

const handleReset=()=>{

    setIsRunning(false)
    setRemainingTime(0)
setTime(0)

}

return(

    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient -to -br from-black to-grey-300  ">
<h1 className="text-4xl font-extrabold uppercase mb-6 ">Count Down Timer</h1>
<input type="number" className="border-2 border-grey-400 bg-transparent p-3 mb-6 text-xl rounded" placeholder="Enter Time in Seconds"


value={time > 0 ? time:""}
onChange={(e)=> setTime(Number(e.target.value))}    


/>


<div className="text-3xl font-semibold uppercase mb-6 text-black ">

{remainingTime} seconds remaining

</div>


<div>

<button 
onClick={handleStart}
className="text-white px-8 py-4  rounded-lg font-normal bg-blue-400  hover:bg-slate-500 mx-6">
    Start


</button>


<button 
onClick={handlepause}
className="text-white px-8 py-4  rounded-lg font-normal bg-orange-400 hover:bg-red-800  ">
    pause


</button>


<button 
onClick={handleReset}
className="text-white px-8 py-4  rounded-lg font-normal bg-pink-500  hover:bg-blue-500 mx-6 ">
    Reset


</button>



</div>
<footer className="bg-slate-600 text-white mt-10 w-75 h-8">

    <h1>Created by Ali Akbar Brohi</h1>
</footer>

  </div>  

  
)



}

export default CountDowntimer