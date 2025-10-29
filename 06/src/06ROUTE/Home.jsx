import {Link} from "react-router-dom"

const Home = () =>{
    
    return (
        <>
    <h1>HOME PAGE</h1>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About?name=bodong&age=4">About1</Link></li>
    <li><Link to="/About?name=bogeum&age=28">About2</Link></li>
    <li><Link to="/About?name=geumdong&age=4">About3</Link></li>
    <li><Link to="/Contact/bogeum/28">Contact</Link></li>
    </ul>
    </>
)
    
}

export default Home;