
import { useOutletContext } from "react-router-dom";
export const Cart = ()=>{
    let obj = useOutletContext();
    console.log(obj)
    return <h1>Cart {obj[1]}</h1>;
}