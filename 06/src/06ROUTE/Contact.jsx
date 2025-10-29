import {Link,useParams} from "react-router-dom"

const Contact =()=>{
    const {name,age} = useParams();
    console.log(name,age)
    return (
        <>
    <h1>CONTACT PAGE</h1>
    <Link to= "/">Home</Link>
    

    </>
)
}

export default Contact