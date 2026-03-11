import { useContext } from "react"
import {CounterContext} from "../contexts/CounterContext"
import { useTest } from "../store/TestStore"

function C() {

  const x=useTest(state=>state.x)
  const incrementX=useTest(state=>state.incrementX)

  let {counter1,changeCounter1}=useContext(CounterContext)

  return (
    <div className="bg-gray-100 p-6 border rounded-lg">

      <p className="font-semibold">Component C</p>

      <p>X: {x}</p>

      <button 
        onClick={incrementX}
        className="bg-blue-500 text-white p-2 rounded m-2"
      >
        Increment
      </button>

      <p>Counter: {counter1}</p>

      <button 
        onClick={changeCounter1}
        className="bg-blue-500 text-white p-2 rounded m-2"
      >
        Change Counter
      </button>

    </div>
  )
}

export default C