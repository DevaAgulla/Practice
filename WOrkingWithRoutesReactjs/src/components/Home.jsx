import { Link } from "react-router-dom"
export const Home = (props)=>{
    console.log(props);
    return (
        <>
        <h1>Home {props.name} {props.age}</h1>
        <Link to="/hello/books/1">Books1</Link>
        </>
    )
}