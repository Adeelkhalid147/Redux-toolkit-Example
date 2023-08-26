"use client"
import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "./store/slice/counterSlice"
import { RootState } from "./store/store"

const CounterView = () => {

  const dispatch = useDispatch();

    const counterValue = useSelector((state:RootState)=>state.counterSlice.value)
    const increment = () =>{
    dispatch(counterActions.increment())
    };
    const decrement = () =>{
    dispatch(counterActions.decrement())
    }
  return (
    
    <div className="py-6 flex gap-6 items-center justify-center">
        <button className="py-4 px-4 rounded-md bg-green-300" onClick={increment}>Increment</button>
      <div>Counter Value={counterValue}</div>
        <button className="py-4 px-4 rounded-md bg-red-200" onClick={decrement}>Decrement</button>
      </div>
      
  )
}

export default CounterView