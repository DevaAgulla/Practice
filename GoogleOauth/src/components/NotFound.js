import { useNavigate } from "react-router-dom"

export const NotFound = ()=>{
    const navigate = useNavigate();
   
    return (
        <>
        {navigate("/hello")}
        </>
    )
}