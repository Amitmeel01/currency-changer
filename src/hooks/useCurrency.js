import { useEffect,useState } from "react";


export default function useCurrency(curency){
     
    let [data,setData]=useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[curency])) // Set data directly to the response
            .catch((err) => console.log(err));
    }, [curency]);
    
    return data
}