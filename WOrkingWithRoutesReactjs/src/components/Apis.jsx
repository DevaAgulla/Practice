import { useOutletContext } from "react-router-dom";

export const Apis = ()=>{
    let obj = useOutletContext();
    return <h1>Apis {obj[0]}</h1>;
}