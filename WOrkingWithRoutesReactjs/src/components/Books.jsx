import { useParams, useSearchParams } from "react-router-dom";
export const Books = ()=>{
    const [searchParams,setSearchParams] = useSearchParams({n:3});
    const number = searchParams.get("n");
    let {id} = useParams();
    return(
        <>
         <h1>Books {id}</h1>
         <h1>Books {number}</h1>
         <input type="number" value={number} onChange={(e)=>{setSearchParams({n:e.target.value})}}></input>
        </>
    ) 
}