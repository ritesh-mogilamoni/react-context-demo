import { CounterContext } from "./CounterContext"
import { useState } from "react"

function CounterContextProvider({children}) {

    const [counter1,setCounter1]=useState(100)

    const changeCounter1=()=>{
        setCounter1(counter1+1)
    }

  return (
    <CounterContext.Provider value={{counter1,changeCounter1}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider