import { UserContext } from "./UserContext";
import { useState } from "react";

function UserContextProvider({children}) {
    const [user,setUser]=useState({name:"ravi",age:20,email:"ravi20@mail.xom"})

    const changeUser=()=>{
        setUser({name:"ganesh",age:39,email:"ganesh@mail.xom"})
    }
  return( <UserContext.Provider value={{user,changeUser}}>
    {children}
  </UserContext.Provider>)
}

export default UserContextProvider