import { create } from "zustand";


//store creation
export const useTest=create((set)=>({
    //state
    x:10,
    y:20,
    user:{
        name:"vikas",
        age:20
    },
    //functions to modify the state
    incrementX:()=>set((state)=>({x:state.x+1})),
    multiplyByTwoX:()=>set(state=>({x:state.x*2})),
    incrementY:(v)=>set((state)=>({y:state.y+v})),
    multiplyByTwoY:()=>set(state=>({y:state.y*2})),
    modifyUser:(newName)=>set(state=>({user:{...state.user,age:22,name:newName}}))
}))