

//-------------------------------------------------------
const EventComponent_04= () =>{
    const handleChange = ()=>{
        console.log("onChange...")
    }

 return(
    <div>
        <input type="text" onChange={handleChange}/> <br/>
        <input type="checkbox" onChange={handleChange}/>체크박스<br/>
        <input type="radio" name="radio" value="r1" onChange={handleChange}/>선택1<br/>
        <input type="radio" name="radio" value="r2" onChange={handleChange}/>선택2<br/>
    </div>
 )
}
export default EventComponent_04