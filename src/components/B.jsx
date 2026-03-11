import { useContext } from "react"
import {CounterContext} from "../contexts/CounterContext"
import { UserContext } from "../contexts/UserContext"
import { useTest } from "../store/TestStore"

function B() {

  let {counter1,changeCounter1}=useContext(CounterContext)
  let {user,changeUser}=useContext(UserContext)

  const y=useTest(state=>state.y)
  const incrementY=useTest(state=>state.incrementY)

  return (
    <div className="bg-gray-100 p-6 border rounded-lg">

      <p className="font-semibold">Component B</p>

      <p>Y: {y}</p>

      <button 
        onClick={()=>incrementY(10)}
        className="bg-blue-500 text-white p-2 rounded m-2"
      >
        Increment Y
      </button>

      <p>Counter: {counter1}</p>

      <button 
        onClick={changeCounter1}
        className="bg-blue-500 text-white p-2 rounded m-2"
      >
        Change Counter
      </button>

      <p className="font-semibold mt-3">Context User</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <button 
        onClick={changeUser}
        className="bg-green-500 text-white p-2 rounded m-2"
      >
        Change User
      </button>

    </div>
  )
}

export default B