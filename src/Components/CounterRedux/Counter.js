import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment,Decrement,Reset} from './counterSlice'

const Counter = () => {
    const dispatch=useDispatch();
    const Data = useSelector((state)=>state.counter.value);
    return (
        <div>Counter Value : {Data}<br></br>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
        <button onClick={()=>dispatch(Reset())}>Reset</button>
        </div>

    )
}
export default Counter