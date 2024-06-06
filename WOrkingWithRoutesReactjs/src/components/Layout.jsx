import { Outlet,Link, NavLink } from "react-router-dom";

export const Layout = ()=>{
    return (
        <>
        <Outlet context={["ramesh","deva"]}/>
        <div>
        <NavLink to="/hello" >Home</NavLink>
        <br></br>
        <NavLink to="/hello/books/4" style={({isActive})=>{return isActive ? { color:"red"}:{}}}>books</NavLink> <br></br>
        <NavLink to="/hello/cart">cart</NavLink> <br></br>
        <NavLink to="/hello/apis">apis</NavLink>
        </div>
        
        </>
    );
}

