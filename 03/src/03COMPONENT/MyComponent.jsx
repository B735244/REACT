import {userState, useEffect, useState} from "react"



const MyComponent=()=>{
    
//state
//let count = 0;
const [count,setCount] = useState(1)

//handler
const handleClick=()=>{
setCount (count+1);
// console.log(count);
 }


 //최초 1회 실행(1회만 렌더링 이후 처리 Hook)
 useEffect(()=>{
    console.log("init setting")
 },[])


 //useEffect(()=>{},[감시할 상태 변수]) -> 변경될 때마다 렌더링 이후 처리 Hook
 useEffect(()=>{
    console.log("count state changed...",count);
 },[count])

return(
    <div>
    <h2>MyComponent...</h2>
    <button onClick={handleClick}>Botton Count: {count}</button>
    </div>
    )
}

export default MyComponent