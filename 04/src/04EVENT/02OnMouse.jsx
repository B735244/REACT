
import { useState,useEffect } from "react"

//-------------------------------------------------------
const EventComponent_02= () =>{
  const [str,setStr] =useState("INIT")

  const handleMouseEnter= (e)=>{
    console.log("mouse enter",e)
    setStr("Mouse Enter")
  }
  const handleMouseLeave=(e)=>{
     console.log("mouse leave",e)
     setStr("Mouse leave")
  }
    return (
      
      <div 
      className="mouse_box1"
      style={{width:"150px", height:"150px", border:"1px solid navy"}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {str}
      </div>
    )
}
export default EventComponent_02