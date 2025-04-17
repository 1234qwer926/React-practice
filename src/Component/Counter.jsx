import React, { use } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setcountInc,setcountDec,setReset } from '../Redux/Slice/States/Counterslice'


const Counter = () => {
    const count= useSelector((state) => state.counter.count);
    const dispatch=useDispatch();
   
   const handleInc = () => {
     dispatch(setcountInc());
   }
   const handleDec=()=>{
    dispatch(setcountDec());
   }
   const handleReset=()=>{
    dispatch(setReset());
   }
   
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleDec} >-</button>
      <button onClick={handleInc} >+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
