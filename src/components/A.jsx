import { useContext,useRef,useEffect } from "react"
import {CounterContext} from "../contexts/CounterContext"
import { UserContext } from "../contexts/UserContext"
import { useTest } from "../store/TestStore"

function A() {

  const user1=useTest(state=>state.user)
  const modifyUser=useTest(state=>state.modifyUser)
  const inputRef=useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  let {counter1,changeCounter1}=useContext(CounterContext)
  let {user,changeUser}=useContext(UserContext)

  return (
    <div className="bg-gray-100 p-6 border rounded-lg">

      <input ref={inputRef} type="text" className="border p-1 mb-3 rounded" />

      <p className="font-semibold">Zustand User</p>
      <p>Name: {user1.name}</p>
      <p>Age: {user1.age}</p>

      <button 
        onClick={()=>modifyUser("john")}
        className="bg-blue-500 text-white p-2 rounded m-2"
      >
        Modify User
      </button>

      <p className="font-semibold mt-3">Component A</p>
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
export default A